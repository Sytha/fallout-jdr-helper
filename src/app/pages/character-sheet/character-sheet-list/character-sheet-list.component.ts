import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../../services/storage-service';
import { CharacterSheetItem } from './character-list-item.model';
import { CharacterStats, ResistanceLocation, Resistances } from '../character-stats.model'

@Component({
  selector: 'app-character-sheet-list',
  templateUrl: './character-sheet-list.component.html',
  styleUrls: ['./character-sheet-list.component.scss'],
})
export class CharacterSheetListComponent implements OnInit {

  public listItem: CharacterSheetItem[]=[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private storageService: StorageService) {
  }

  ngOnInit() {
    this.storageService.getCharacterSheetsList().subscribe(
      value => value==null? this.listItem=[] :this.listItem=value
    );
  }

  showDetails(id: string) {
    this.router.navigateByUrl('/character-sheet/show/' + id);
  }

  addCharacterSheet() {
    const resistances = new Map<ResistanceLocation,Resistances>();
    resistances.set(ResistanceLocation.HEAD,{balResistance:1,eneResistance:2,radResistance:3,poiResistance:4});
    resistances.set(ResistanceLocation.LEFTARM,{balResistance:1,eneResistance:2,radResistance:3,poiResistance:4});
    resistances.set(ResistanceLocation.LEFTLEG,{balResistance:1,eneResistance:2,radResistance:3,poiResistance:4});
    resistances.set(ResistanceLocation.RIGHTARM,{balResistance:1,eneResistance:2,radResistance:3,poiResistance:4});
    resistances.set(ResistanceLocation.RIGHTLEG,{balResistance:1,eneResistance:2,radResistance:3,poiResistance:4});
    resistances.set(ResistanceLocation.TORSO,{balResistance:1,eneResistance:2,radResistance:3,poiResistance:4});
    
    let newStats:CharacterStats = {
      name: 'nouveau perso',
      xp: 0,
      level: 1,
      strength: 5,
      perception: 5,
      endurance: 5,
      charisma: 5,
      intelligence: 5,
      agility: 5,
      luck: 5,
      health: 10,
      rads: 0,
      luckPoints: 5,
      skills: new Map(),
      resistances: resistances
    }

    let newItem:CharacterSheetItem = {
      id:(this.listItem.length+1).toString(),
      name: 'Nouveau Perso ' + (this.listItem.length+1),
      level: '1'
    };
    this.storageService.setCharacterSheet((this.listItem.length+1).toString(),newStats).subscribe();
    this.listItem.push(newItem);
    this.storageService.setCharacterSheetsList(this.listItem).subscribe();
  }
}
