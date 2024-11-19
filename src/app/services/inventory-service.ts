import {ToastController} from '@ionic/angular';
import {Injectable} from '@angular/core';
import {PerkDetail} from "../data/perks/perks.model";
import {PERKS} from "../data/perks/perks";
import {CharacterStats} from "../pages/character-sheet/character-stats.model";
import {DataId} from "../data/generic-data-lang";
import {StorageService} from "./storage-service";
import {take} from "rxjs";

@Injectable({providedIn: 'root'})
export class InventoryService {

  public currentCharacterSheetId:string;

  constructor(private storageService: StorageService) {
  }

  addObjectToCurrentSheetInventory(item: DataId, characterSheetId:string):void {
    this.storageService.getCharacterSheet(characterSheetId).pipe(take(1)).subscribe((stats) => {
      if(stats.inventory === undefined){
        stats.inventory = new Map<DataId, number>();
      }
      let found = false;
      Array.from(stats.inventory.keys()).forEach(inventoryItem => {
        console.log(inventoryItem);
        if(inventoryItem["id"] === item["id"]){
          stats.inventory.set(inventoryItem,stats.inventory.get(inventoryItem)+1)
          found = true;
        }
      })
      if(!found){
        stats.inventory.set(item,1);
      }
      this.storageService.setCharacterSheet(characterSheetId,stats).subscribe(()=>console.log("OK"));
    });
  }
}
