import {ToastController} from '@ionic/angular';
import {Injectable} from '@angular/core';
import {PerkDetail} from "../data/perks/perks.model";
import {PERKS} from "../data/perks/perks";

export interface Stats {
  level:number;
  s:number;
  p:number;
  e:number;
  c:number;
  i:number;
  a:number;
  l:number;
  isRobot:boolean;
  ownedPerks:Map<PerkDetail,number>;
}

@Injectable({providedIn: 'root'})
export class PerksService {

  constructor() {
  }

  findByCharacterStats(stats: Stats) : PerkDetail[]{
    const result: PerkDetail[] = [];
    for(let perk of PERKS){
      const perkOwnedCount = stats.ownedPerks.get(perk)??0;
      const perkLevelCap = perk.level + perk.rankThreshold*(perkOwnedCount);

      if(!perk.canRobot && stats.isRobot) continue;
      if(stats.s >= perk.s
      && stats.p >= perk.p
      && stats.e >= perk.e
      && stats.c >= perk.c
      && stats.i >= perk.i
      && stats.a >= perk.a
      && stats.l >= perk.l
      && perkOwnedCount < perk.ranks
      && stats.level >= perkLevelCap){
        result.push(perk);
      }
    }

    return result;
  }
}
