import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BestiaryType, MobDetails} from '../../../data/bestiary/fr/bestiary.model';
import {Location} from '@angular/common';
import {findMobByName} from '../../../data/bestiary/fr/bestiary-utils';
import { StorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-character-sheet-show',
  templateUrl: './character-sheet-show.component.html',
  styleUrls: ['./character-sheet-show.component.scss'],
})
export class CharacterSheetShowComponent implements OnInit {
Number(arg0: string) {
throw new Error('Method not implemented.');
}
  mob: MobDetails;
  CREATURE = BestiaryType.CREATURE;
  CHARACTER = BestiaryType.CHARACTER;
  editionMode = false;

  constructor(private router: Router, private location: Location, private activatedRoute: ActivatedRoute, private storageService:StorageService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      const id = params.id;
      console.log(id);
      this.storageService.getCharacterSheet(id).subscribe(
        value => {
          this.mob=value;
          console.log(this.mob);
        }
      );
    });
  }

  back() {
    this.location.back();
  }

  upgradeCreature() {
    this.router.navigateByUrl('/mob-leveling', {state: {mob: this.mob}});
  }

  toggle() {
    this.editionMode = !this.editionMode;
  }
}
