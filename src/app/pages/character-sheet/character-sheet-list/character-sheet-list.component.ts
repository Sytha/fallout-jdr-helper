import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../../services/storage-service';
import { CHARACTERS } from 'src/app/data/bestiary/fr/CHARACTERS';
import { CharacterSheetItem } from './character-list-item.model';
import { BestiaryType } from 'src/app/data/bestiary/fr/bestiary.model';

@Component({
  selector: 'app-character-sheet-list',
  templateUrl: './character-sheet-list.component.html',
  styleUrls: ['./character-sheet-list.component.scss'],
})
export class CharacterSheetListComponent implements OnInit {

  public listItem: CharacterSheetItem[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private storageService: StorageService) {
  }

  ngOnInit() {
    this.storageService.getCharacterSheetsList().subscribe(
      value => this.listItem=value
    );
    this.storageService.setCharacterSheetsList([{id:'id',name:'Super Mutant',level:'5'}]).subscribe(()=>console.log('ok!'));
    this.storageService.setCharacterSheet('id',{
      name: 'Super Mutant',
      level: '5',
      keywords: 'Humain Mutant',
      type: 'Personnage Normal',
      xp: '38',
      description: 'Deux mètres dix, la peau verte et les muscles saillants, les super mutants ne peuvent pas passer inaperçus. Leur stupidité est proverbiale, mais ce sont des guerriers com- pétents et ils savent très bien se servir des armes et des armures. On les trouve souvent en groupes de quelques individus suivant les ordres d’un chef. Parfois, ils sont accompagnés de molosses mutants.',
      strength: '9',
      perception: '5',
      endurance: '7',
      charisma: '4',
      intelligence: '4',
      agility: '5',
      luck: '4',
      health: '12',
      initiative: '10',
      defense: '1',
      meleeBonus: '+2 $CD$',
      carryWeight: '120 kg',
      luckPoints: '—',
      ballisticR: '2 (toutes)',
      energyR: '2 (toutes)',
      poisonR: '0',
      radiationR: '0',
      source: '$OFF$',
      typeDef:BestiaryType.CHARACTER,
      attacks: [
          {
              title: 'ATTAQUE À MAINS NUES',
              description: 'FOR + Mains nues (SR 11), 4 $CD$ de dégâts balistiques'
          },
          {
              title: 'PLANCHE',
              description: 'FOR + Armes de corps à corps (SR 13), 6 $CD$ de dégâts balistiques, Deux mains'
          },
          {
              title: 'FUSIL À VERROU DE FORTUNE',
              description: 'AGI + Armes légères (SR 8), 5 $CD$ de dégâts balistiques Perforants 1, portée M, cadence de tir 0, Deux mains'
          }
      ],
      effects: [
          {
              title: 'Barbare',
              description: 'RD +2 contre les dégâts balistiques et énergétiques (inclus).'
          },
          {
              title: 'Immunisé contre les radiations',
              description: 'le super mutant réduit à 0 tous les dégâts de radiation qu’il subit et ne peut subir aucun dégât ou effet infligé par des radiations.'
          },
          {
              title: 'Immunisé contre le poison',
              description: 'le super mutant réduit à 0 tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison.'
          }
      ],
      inventory: [
          {
              title: 'Fouille',
              description: 'Fusil à verrou de fortune, planche, assortiment d’os humains, richesse 1.'
          }
      ],
      skills: [
          'Armes de corps à corps * 4',
          'Mains nues 2',
          'Armes légères 3',
          'Survie * 3',
          'Armes lourdes 1'
      ]
  }).subscribe(
    () => console.log('ok!')
  );
  }

  showDetails(id: string) {
    this.router.navigateByUrl('/character-sheet/show/' + id);
  }
}
