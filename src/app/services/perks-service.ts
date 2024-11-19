import {ToastController} from '@ionic/angular';
import {Injectable} from '@angular/core';
import {PerkDetail} from "../data/perks/perks.model";
import {PERKS} from "../data/perks/perks";
import {CharacterStats} from "../pages/character-sheet/character-stats.model";

@Injectable({providedIn: 'root'})
export class PerksService {

  constructor() {
  }

  findByCharacterStats(stats: CharacterStats) : PerkDetail[]{
    const result: PerkDetail[] = [];
    for(let perk of PERKS){
      const perkOwnedCount = stats.perks?.get(perk)??0;
      console.log(perkOwnedCount);
      const perkLevelCap = perk.level + perk.rankThreshold*(perkOwnedCount);

      if(!perk.canRobot && stats.isRobot) continue;
      if(stats.strength >= perk.s
      && stats.perception >= perk.p
      && stats.endurance >= perk.e
      && stats.charisma >= perk.c
      && stats.intelligence >= perk.i
      && stats.agility >= perk.a
      && stats.luck >= perk.l
      && perkOwnedCount < perk.ranks
      && stats.level >= perkLevelCap){
        result.push(perk);
      }
    }

    return result;
  }
}
