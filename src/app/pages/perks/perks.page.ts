import {Component, OnInit} from '@angular/core';
import {Dice} from "dice-typescript";
import {findMatchingDefinition, findMatchingLoot} from "../random-loot/loot-utils";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../shared/language.service";
import {Loot, LootDef, LOOTPLACES} from "../../data/loot-table/loot-table-lang";
import {InputCustomEvent, ToastController} from "@ionic/angular";
import {findDataMatching} from "../../shared/data/data-type-matcher";
import {PerkDetail} from "../../data/perks/perks.model";
import {PerksService} from "../../services/perks-service";

@Component({
  selector: 'app-perks',
  templateUrl: './perks.page.html',
  styleUrls: ['./perks.page.scss'],
})
export class PerksPage implements OnInit {

  result: PerkDetail[];
  filteredResult: PerkDetail[];
  strength:number=4;
  perception:number=4;
  endurance:number=4;
  charisma:number=4;
  intelligence:number=4;
  agility:number=4;
  luck:number=4;
  level:number=1;
  isRobot:boolean=false;
  searchQuery:string = "";


  constructor(private perksService: PerksService) {
  }

  ngOnInit() {
    this.result = this.perksService.findByCharacterStats({"strength":10,"perception":10,"endurance":10,"charisma":10,"intelligence":10,"agility":10,"luck":10,"level":100,"isRobot":false,"perks":new Map()})
    this.filteredResult = [];
    this.result.forEach(perk => this.filteredResult.push(Object.assign({}, perk)));
  }

  searchPerks() {
    this.filteredResult = [];
    this.result.forEach(perk => {
      if(perk.name.toLowerCase().includes(this.searchQuery.toLowerCase())){
        this.filteredResult.push(Object.assign({}, perk))
      }
    });

  }

  search() {
    this.searchQuery = "";
    this.result = this.perksService.findByCharacterStats({"strength":this.strength,"perception":this.perception,"endurance":this.endurance,"charisma":this.charisma,"intelligence":this.intelligence,"agility":this.agility,"luck":this.luck,"level":this.level,"isRobot":this.isRobot,"perks":new Map()})
    this.filteredResult = [];
    this.result.forEach(perk => this.filteredResult.push(Object.assign({}, perk)));
  }
}
