import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { from, Observable, shareReplay, switchMap } from 'rxjs';
import { MobDetails } from '../data/bestiary/fr/bestiary.model';
import { CharacterSheetItem } from '../pages/character-sheet/character-sheet-list/character-list-item.model';
import { CharacterStats } from '../pages/character-sheet/character-stats.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage$:Observable<Storage>;

  constructor(private storage: Storage) {
    this.init();
  }

  init() {
    this.storage$ = from(this.storage.create()).pipe(
      shareReplay(1)
    );
  }

  setCharacterSheetsList(value: CharacterSheetItem[]) : Observable<void> {
    return this.storage$.pipe(
      switchMap((storage) => storage.set("character-sheets",value))
    )
  }

  getCharacterSheetsList() : Observable<CharacterSheetItem[]> {
    return this.storage$.pipe(
      switchMap((storage) => storage.get("character-sheets"))
    )
  }

  setCharacterSheet(id:string, value: CharacterStats) : Observable<void> {
    console.log("save character-sheet-" +id );
    return this.storage$.pipe(
      switchMap((storage) => storage.set("character-sheet-"+id,value))
    )
  }

  getCharacterSheet(id:string) : Observable<CharacterStats> {
    console.log("load character-sheet-" +id );
    return this.storage$.pipe(
      switchMap((storage) => storage.get("character-sheet-"+id))
    )
  }
}
