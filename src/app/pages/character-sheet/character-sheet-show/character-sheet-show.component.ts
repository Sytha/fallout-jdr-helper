import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {StorageService} from 'src/app/services/storage-service';
import {
  Attack,
  CharacterStats,
  Effect,
  Qualities,
  ResistanceLocation,
  Resistances,
  SkillType,
  SkillValue,
  SPECIAL
} from '../character-stats.model';
import {CheckboxCustomEvent} from "@ionic/angular";
import {Observable, take} from "rxjs";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {PerksService} from "../../../services/perks-service";
import {PerkDetail} from "../../../data/perks/perks.model";
import {InventoryService} from "../../../services/inventory-service";

@Component({
  selector: 'app-character-sheet-show',
  templateUrl: './character-sheet-show.component.html',
  styleUrls: ['./character-sheet-show.component.scss'],
})
export class CharacterSheetShowComponent implements OnInit {
  protected readonly SkillType = SkillType;
  protected readonly Object = Object;
  isModalAttacksOpen: boolean;
  stats: CharacterStats;
  id: string;
  editionMode = false;
  initiative: number;
  defense: number;
  maxHealth: number;
  maxCarryWeight: string;
  levelCap: number;
  bonusCac: string;
  skillsModalVisible: boolean;
  skillMap: Map<SkillType, SkillValue>;
  originalSkills: Map<SkillType, SkillValue>;
  notUsedSkills: SkillType[];
  resistanceModalOpen: boolean;
  resistanceTete: Resistances;
  resistanceTorse: Resistances;
  resistanceBG: Resistances;
  resistanceBD: Resistances;
  resistanceJG: Resistances;
  resistanceJD: Resistances;
  selectedSkillType: SkillType;
  private storedCS$: Observable<CharacterStats>;
  private skillPoints: number;
  protected readonly Array = Array;
  protected readonly SPECIAL = SPECIAL;
  protected readonly Effect = Effect;
  protected readonly Qualities = Qualities;
  formAttacksGroup: FormGroup = new FormGroup({
    name: new FormControl<string>(null, Validators.required),
    damage: new FormControl<number>(null, [Validators.min(1), Validators.required]),
    damageType: new FormControl<string[]>([], [Validators.min(1), Validators.required]),
    special: new FormControl<string>(null, [Validators.required]),
    skill: new FormControl<SkillType>(null, [Validators.required]),
    reach: new FormControl<number>(null, Validators.required),
    cadence: new FormControl<number>(null, [Validators.required]),
    ammo: new FormControl<number>(null, [Validators.min(0), Validators.required]),
    qualities: new FormControl<string[]>([]),
    effects: new FormControl<string[]>([]),
    piercingRating: new FormControl<number>(null)
  });
  private editedAttack: Attack;
  protected perksResult: PerkDetail[];
  selectedPerk: PerkDetail;
  perksModalOpen: boolean;

  constructor(private router: Router, private location: Location, private activatedRoute: ActivatedRoute, private storageService: StorageService, private perksService: PerksService, private inventoryService: InventoryService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.storedCS$ = this.storageService.getCharacterSheet(this.id);
      this.readFromStorage();
      this.formAttacksGroup.get('piercingRating').setValidators(this.piercingRatingValidator(this.formAttacksGroup));
    });
  }

  readFromStorage() {
    this.storedCS$.pipe(take(1)).subscribe((value) => this.processCharacterStats(value));
  }

  private processCharacterStats(value: CharacterStats) {
    this.stats = value;
    console.log(this.stats);
    this.resistanceTete = this.stats.resistances.get(ResistanceLocation.HEAD);
    this.resistanceTorse = this.stats.resistances.get(ResistanceLocation.TORSO);
    this.resistanceBG = this.stats.resistances.get(ResistanceLocation.LEFTARM);
    this.resistanceBD = this.stats.resistances.get(ResistanceLocation.RIGHTARM);
    this.resistanceJG = this.stats.resistances.get(ResistanceLocation.LEFTLEG);
    this.resistanceJD = this.stats.resistances.get(ResistanceLocation.RIGHTLEG);
    this.calculateDerivativeStats();
    this.initModalSkillList();
    this.retrieveAvailablePerks();
  }

  back() {
    this.location.back();
  }

  toggle() {
    this.editionMode = !this.editionMode;
  }

  showSkillsModal() {
    this.initModalSkillList();
    this.skillsModalVisible = true;
  }

  calculateDerivativeStats() {
    this.initiative = +this.stats.perception + +this.stats.agility;
    this.defense = +this.stats.agility >= 9 ? 2 : 1;
    this.maxHealth = +this.stats.endurance + +this.stats.luck;
    this.maxCarryWeight = 75 + +this.stats.strength * 5 + " Kg";
    this.levelCap = (+this.stats.level + 1) * +this.stats.level * 50;
    this.bonusCac = "+" + (+this.stats.strength <= 6 ? 0 : Math.ceil((+this.stats.strength - 6) / 2)) + " $CD$";
    this.stats.health = 10;
    this.stats.skills.set(SkillType.UNARMED, {tag: false, rank: 3});
    this.notUsedSkills = Object.values(SkillType).filter(skill => !Array.from(this.stats.skills.keys()).includes(skill));
    console.log(this.stats.inventory);
  }

  initModalSkillList() {
    console.log("init");
    this.originalSkills = new Map<SkillType, SkillValue>(this.stats.skills);
    this.skillMap = new Map<SkillType, SkillValue>();
    for (let skill in SkillType) {
      if (this.stats.skills.get(skill as SkillType) !== undefined) {
        const foundSkill = this.stats.skills.get(skill as SkillType);
        this.skillMap.set(skill as SkillType, {tag: foundSkill.tag, rank: foundSkill.rank});
      } else {
        this.skillMap.set(skill as SkillType, {tag: false, rank: 0});
      }
    }
  }

  revertStats() {
    this.readFromStorage();
  }

  saveStats() {
    this.storageService.setCharacterSheet(this.id, this.stats).pipe(take(1)).subscribe(() => this.readFromStorage());
    this.storageService.getCharacterSheetsList().pipe(take(1)).subscribe(
      value => {
        for (let item of value) {
          if (item.id === this.id) {
            item.name = this.stats.name;
          }
        }
        this.storageService.setCharacterSheetsList(value).pipe(take(1)).subscribe();
      }
    );
  }

  openResistanceModal() {
    this.resistanceModalOpen = true;
  }

  decreaseSkill(key: SkillType) {
    let skill = this.stats.skills.get(key);
    if (skill.rank > 0) {
      this.stats.skills.get(key).rank--;
    }
  }

  increaseSkill(key: SkillType) {
    let skill = this.stats.skills.get(key);
    if (skill.rank < 6) {
      this.stats.skills.get(key).rank++;
    }
  }

  deleteSkill(key: SkillType) {
    this.stats.skills.delete(key);
    this.notUsedSkills = Object.values(SkillType).filter(skill => !Array.from(this.stats.skills.keys()).includes(skill));
    this.selectedSkillType = null;
  }

  addSkill() {
    if (this.selectedSkillType !== undefined) {
      this.stats.skills.set(this.selectedSkillType, {tag: false, rank: 0});
      this.notUsedSkills = Object.values(SkillType).filter(skill => !Array.from(this.stats.skills.keys()).includes(skill));
    }
  }

  tagSkill($event: CheckboxCustomEvent, key: SkillType) {
    let skill = this.stats.skills.get(key);
    skill.tag = $event.detail.checked;
    $event.detail.checked ? skill.rank += 2 : skill.rank -= 2;
    if (skill.rank > 6) {
      skill.rank = 6;
    }
    if (skill.rank < 0) {
      skill.rank = 0;
    }
  }

  addAttackAndCloseAttacksModal() {
    if (this.formAttacksGroup.valid) {
      if(this.editedAttack !== undefined){
        this.deleteAttack(this.editedAttack);
        this.editedAttack = undefined;
      }
      if (this.stats.attacks === undefined) {
        this.stats.attacks = [];
      }
      let special = SPECIAL.filter(special => special.short === this.formAttacksGroup.get("special").value as string)[0];
      this.stats.attacks.push({
        "name": this.formAttacksGroup.get("name").value,
        "damage": this.formAttacksGroup.get("damage").value,
        "damageType": this.formAttacksGroup.get("damageType").value,
        "cadence": this.formAttacksGroup.get("cadence").value,
        "effects": this.formAttacksGroup.get("effects").value,
        "qualities": this.formAttacksGroup.get("qualities").value,
        "special": special,
        "skill": this.formAttacksGroup.get("skill").value as SkillType,
        "ammo": this.formAttacksGroup.get("ammo").value,
        "piercingRating": this.formAttacksGroup.get("piercingRating").value,
        "reach": this.formAttacksGroup.get("reach").value,
      })
      this.isModalAttacksOpen = false;
    }
  }

  resetAndCloseAttacksModal() {
    this.isModalAttacksOpen = false;
    this.editedAttack = undefined;
    this.formAttacksGroup.reset();
  }

  piercingRatingValidator(form: FormGroup) : ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      const piercingRatingRequired = form.get("effects").value?.includes(Effect.PERFORANT)??false;
      const noValue = piercingRatingRequired ? !(control.value) : false;
      return noValue ? {required: control.value} : null;
    }
  }

  deleteAttack(attackToDelete: Attack) {
    this.stats.attacks = this.stats.attacks.filter(attack => attack != attackToDelete);
  }

  editAttack(attack: Attack) {
    this.editedAttack = attack;
    this.formAttacksGroup.reset();
    this.formAttacksGroup.get("name").setValue(attack.name);
    this.formAttacksGroup.get("damage").setValue(attack.damage);
    this.formAttacksGroup.get("damageType").setValue(attack.damageType);
    this.formAttacksGroup.get("special").setValue(attack.special.short);
    this.formAttacksGroup.get("skill").setValue(attack.skill);
    this.formAttacksGroup.get("reach").setValue(attack.reach);
    this.formAttacksGroup.get("cadence").setValue(attack.cadence);
    this.formAttacksGroup.get("ammo").setValue(attack.ammo);
    this.formAttacksGroup.get("qualities").setValue(attack.qualities);
    this.formAttacksGroup.get("effects").setValue(attack.effects);
    this.formAttacksGroup.get("piercingRating").setValue(attack.piercingRating??1);
    this.isModalAttacksOpen = true;
  }

  retrieveAvailablePerks(){
    this.perksResult = this.perksService.findByCharacterStats(this.stats)
  }

  selectPerk($event: any) {
    this.selectedPerk = $event.detail.value;
  }

  addSelectedPerk() {
    if(this.stats.perks === undefined) {
      this.stats.perks = new Map();
    }
    this.stats.perks.get(this.selectedPerk) != undefined ?
      this.stats.perks.set(this.selectedPerk,this.stats.perks.get(this.selectedPerk)+1) :
      this.stats.perks.set(this.selectedPerk,1);
    this.selectedPerk = undefined;
    this.retrieveAvailablePerks();
  }

  selectNewItemForInventory() {
    this.inventoryService.currentCharacterSheetId = this.id;
    this.router.navigateByUrl("/quick-search").then();
  }
}
