import {Component, OnInit} from '@angular/core';
import {Dice} from "dice-typescript";
import {findMatchingDefinition, findMatchingLoot} from "../random-loot/loot-utils";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../shared/language.service";
import {Loot, LootDef, LOOTPLACES} from "../../data/loot-table/loot-table-lang";
import {ToastController} from "@ionic/angular";
import {findDataMatching} from "../../shared/data/data-type-matcher";
import { time } from 'console';

@Component({
  selector: 'app-auto-junk',
  templateUrl: './auto-junk.page.html',
  styleUrls: ['./auto-junk.page.scss'],
})
export class AutoJunkPage implements OnInit {

  priorities:String[] = [];
  difficultyConsequencies:String[] = [];
  selectedPriority:String = null;
  selectedDifficultyConsequence:String = null;
  intelligence = 5;
  repairSkill = 0;
  repairSkillIsTag = false;
  recyclerSkill = 0;
  junkQuantity = 0;

  generatedCommonMaterial = 0;
  generatedUncommonMaterial = 0;
  generatedRareMaterial = 0;
  totalTimeElapsed = 0;
  totalDifficulties = 0;
  totalSuccess = 0;
  totalCriticalSuccess = 0;
  totalLostItems = 0;
  bonusTimeBalance = 0;


  selectedPlace = null;
  selectedSize = null;
  maxRarity = 3;
  lootTables: any[] = [];
  lootTypes: string[];
  lootQuantities: { [key: string]: number } = {};
  generatedLoots: { [key: string]: Loot[] } = {};

  displayLoot = false;

  constructor(private translateService: TranslateService, private languageService: LanguageService,
              private toastController: ToastController) {
  }

  ngOnInit() {
    this.initScreen(this.languageService.getCurrentLanguage());
    this.languageService.getLanguage().subscribe(lang => {
      this.initScreen(lang);
    });
  }

  initScreen(lang: string): void {
    this.translateService.get("AUTOJUNK.PRIORITIES.TIME").subscribe(() => {
      this.priorities = [
        this.translateService.instant("AUTOJUNK.PRIORITIES.TIME"),
        this.translateService.instant("AUTOJUNK.PRIORITIES.QUALITY"),
        this.translateService.instant("AUTOJUNK.PRIORITIES.BOTHBUTTIME"),
        this.translateService.instant("AUTOJUNK.PRIORITIES.BOTHBUTQUALITY"),
      ];
      this.selectedPriority = this.priorities[0];

      this.difficultyConsequencies = [
        this.translateService.instant("AUTOJUNK.DIFFICULTYCONSEQUENCES.TIME"),
        this.translateService.instant("AUTOJUNK.DIFFICULTYCONSEQUENCES.QUALITY"),
        this.translateService.instant("AUTOJUNK.DIFFICULTYCONSEQUENCES.BOTHBUTTIME"),
        this.translateService.instant("AUTOJUNK.DIFFICULTYCONSEQUENCES.BOTHBUTQUALITY"),
      ];
      this.selectedDifficultyConsequence = this.difficultyConsequencies[0];
    });
  }

  generateLoot() {
    this.reset();
    this.generatedCommonMaterial = 0;
    this.generatedUncommonMaterial = 0;
    this.generatedRareMaterial = 0;
    this.totalTimeElapsed = 0;
    this.totalDifficulties = 0;
    this.totalSuccess = 0;
    this.totalCriticalSuccess = 0;
    this.totalLostItems = 0;
    this.bonusTimeBalance = 0;

    for (let i: number = 0; i < this.junkQuantity; i++) {
      let success = 0;
      let difficulties = 0;
      let timeElapsed = 10;
      let d6 = 1;
      //2d20
      for (let i = 0; i < 2; i++) {
        let d20Result = Math.floor(Math.random() * 20) + 1;
        if(d20Result == 20){
          console.log(i+ " " +d20Result + " " + ((d20Result <= this.intelligence + this.repairSkill)?"succès":"fail"));  
        }
        
        
        if (d20Result == 20) {
          difficulties++;
          this.totalDifficulties++;
        } else if (d20Result <= this.intelligence + this.repairSkill) {
          success++;
          this.totalSuccess++;
          if (d20Result == 1 || (this.repairSkillIsTag && d20Result <= this.repairSkill)) {
            this.totalCriticalSuccess++;
            success++;
          }
        }
      }
      //Handle success
      if (this.selectedPriority === this.priorities[0]) {
        //Success impacts time
        timeElapsed /= Math.pow(2, success);
        
      } else if (this.selectedPriority === this.priorities[1]) {
        //Success impacts quality
        d6 += success;
      } else if (this.selectedPriority === this.priorities[2]) {
        //Success impacts both time and quality but time first
        timeElapsed /= Math.pow(2, Math.ceil(success / 2));
        d6 += Math.floor(success / 2);
      } else {
        //Success impacts both time and quality but quality first
        timeElapsed /= Math.pow(2, Math.floor(success / 2));
        d6 += Math.ceil(success / 2);
      }

      //Handle difficulties
      if (this.selectedDifficultyConsequence === this.difficultyConsequencies[0]) {
        //Difficulty impacts time
        timeElapsed *= Math.pow(2, difficulties);
        if(difficulties > 0){
          console.log(timeElapsed);
        }
      } else if (this.selectedDifficultyConsequence === this.difficultyConsequencies[1]) {
        //Difficulty impacts quality
        d6 -= difficulties;
        this.totalLostItems += difficulties;
      } else if (this.selectedDifficultyConsequence === this.difficultyConsequencies[2]) {
        //Difficulty impacts both time and quality but time first
        timeElapsed *= Math.pow(2, Math.ceil(difficulties / 2));
        d6 -= Math.floor(difficulties / 2);
        this.totalLostItems += Math.floor(difficulties / 2);
      } else {
        //Difficulty impacts both time and quality but quality first
        timeElapsed *= Math.pow(2, Math.floor(difficulties / 2));
        d6 -= Math.ceil(difficulties / 2);
        this.totalLostItems += Math.ceil(difficulties / 2);
      }
      this.bonusTimeBalance += (timeElapsed - 10);
      this.totalTimeElapsed += timeElapsed;
      //Handle d6 if any
      let hits = 0;
      let effects = 0;
      if (d6 > 0) {
        for (let i = 0; i < d6; i++) {
          let d6Result = Math.floor(Math.random() * 6) + 1;
          if (d6Result <= 2) {
            hits += d6Result;
          } else if (d6Result >= 5) {
            hits++;
            effects++;
          }
        }

        this.generatedCommonMaterial += hits;
        if (this.recyclerSkill >= 1) {
          this.generatedUncommonMaterial += effects
        }
        if (this.recyclerSkill >= 2) {
          this.generatedRareMaterial += effects
        }
      }

      this.displayLoot = true;
    }
  }


  reset() {
    this.displayLoot = false;
    this.generatedCommonMaterial = 0;
    this.generatedUncommonMaterial = 0;
    this.generatedRareMaterial = 0;
    this.totalTimeElapsed = 0;
    this.totalDifficulties = 0;
    this.totalSuccess = 0;
    this.totalCriticalSuccess = 0;
    this.totalLostItems = 0;
    this.bonusTimeBalance = 0;
  }


  private reportMissingItem(lootType: string) {
    this.toastController.create({
      message: this.translateService.instant('GENERIC.MISSINGITEMDEF') + ' : ' + lootType,
      duration: 5000,
      position: 'bottom'
    }).then(toast => toast.present());
  }
}
