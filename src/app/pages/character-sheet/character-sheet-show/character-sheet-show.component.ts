import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BestiaryType, MobDetails } from '../../../data/bestiary/fr/bestiary.model';
import {KeyValue, Location} from '@angular/common';
import { findMobByName } from '../../../data/bestiary/fr/bestiary-utils';
import { StorageService } from 'src/app/services/storage-service';
import { FormsModule } from '@angular/forms';
import { CharacterStats, Resistances, ResistanceLocation, SkillType, SkillValue } from '../character-stats.model';
import {CheckboxCustomEvent, SelectCustomEvent} from "@ionic/angular";
import {Observable, shareReplay, take} from "rxjs";
import {CharacterSheetItem} from "../character-sheet-list/character-list-item.model";

@Component({
  selector: 'app-character-sheet-show',
  templateUrl: './character-sheet-show.component.html',
  styleUrls: ['./character-sheet-show.component.scss'],
})
export class CharacterSheetShowComponent implements OnInit {
  stats: CharacterStats;
  id:string;
  CREATURE = BestiaryType.CREATURE;
  CHARACTER = BestiaryType.CHARACTER;
  editionMode = false;
  initiative: number;
  defense: number;
  maxHealth: number;
  maxCarryWeight: string;
  levelCap: number;
  bonusCac: string;
  skillsModalVisible: boolean;
  skillMap: Map<SkillType,SkillValue>;
  originalSkills: Map<SkillType,SkillValue>;
  notUsedSkills: SkillType[];
  resistanceModalOpen: boolean;
  resistanceData: Map<ResistanceLocation,Resistances>;
  resistanceTete: Resistances;
  resistanceTorse: Resistances;
  resistanceBG: Resistances;
  resistanceBD: Resistances;
  resistanceJG: Resistances;
  resistanceJD: Resistances;
  selectedSkillType: SkillType;
  private storedCS$: Observable<CharacterStats>;
  private skillPoints: number;

  constructor(private router: Router, private location: Location, private activatedRoute: ActivatedRoute, private storageService: StorageService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.storedCS$ = this.storageService.getCharacterSheet(this.id)
      this.readFromStorage();
    });
  }

  readFromStorage() {
    this.storedCS$.pipe(take(1)).subscribe((value) => this.processCharacterStats(value));
  }

  private processCharacterStats(value: CharacterStats) {
    this.stats = value;
    console.log(this.stats.resistances);
    this.resistanceTete = this.stats.resistances.get(ResistanceLocation.HEAD);
    this.resistanceTorse = this.stats.resistances.get(ResistanceLocation.TORSO);
    this.resistanceBG = this.stats.resistances.get(ResistanceLocation.LEFTARM);
    this.resistanceBD = this.stats.resistances.get(ResistanceLocation.RIGHTARM);
    this.resistanceJG = this.stats.resistances.get(ResistanceLocation.LEFTLEG);
    this.resistanceJD = this.stats.resistances.get(ResistanceLocation.RIGHTLEG);
    this.calculateDerivativeStats();
    this.initModalSkillList();
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
    this.stats.health=10;
    this.stats.skills.set(SkillType.UNARMED,{tag:false,rank:3});
    this.notUsedSkills = Object.values(SkillType).filter(skill => !Array.from(this.stats.skills.keys()).includes(skill));
    console.log(this.notUsedSkills);
  }

  initModalSkillList() {
    console.log("init");
    this.originalSkills = new Map<SkillType, SkillValue>(this.stats.skills);
    this.skillMap = new Map<SkillType,SkillValue>();
    for(let skill in SkillType){
      if(this.stats.skills.get(skill as SkillType) !== undefined){
        const foundSkill = this.stats.skills.get(skill as SkillType);
        this.skillMap.set(skill as SkillType,{tag:foundSkill.tag,rank:foundSkill.rank});
      }else{
        this.skillMap.set(skill as SkillType,{tag:false,rank:0});
      }
    }
  }

  revertStats(){
    this.readFromStorage();
  }

  saveStats(){
    this.storageService.setCharacterSheet(this.id,this.stats).pipe(take(1)).subscribe(() => this.readFromStorage());
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
    if(skill.rank > 0){
      this.stats.skills.get(key).rank--;
    }
  }

  increaseSkill(key: SkillType) {
    let skill = this.stats.skills.get(key);
    if(skill.rank < 6){
      this.stats.skills.get(key).rank++;
    }
  }

  deleteSkill(key: SkillType) {
    this.stats.skills.delete(key);
    this.notUsedSkills = Object.values(SkillType).filter(skill => !Array.from(this.stats.skills.keys()).includes(skill));
    this.selectedSkillType = null;
  }

  addSkill() {
    if(this.selectedSkillType !== undefined){
      this.stats.skills.set(this.selectedSkillType,{tag:false,rank:0});
      this.notUsedSkills = Object.values(SkillType).filter(skill => !Array.from(this.stats.skills.keys()).includes(skill));
    }
  }

  tagSkill($event: CheckboxCustomEvent, key: SkillType) {
    let skill = this.stats.skills.get(key);
    skill.tag = $event.detail.checked;
    $event.detail.checked ? skill.rank+=2 : skill.rank-=2;
    if(skill.rank > 6){
      skill.rank = 6;
    }
    if(skill.rank < 0){
      skill.rank = 0;
    }
  }
}
