import {DataTableDefinition} from "../../generic-data-lang";

export const CHEMS_LOOT_DEF_FR: DataTableDefinition[] = [{
  column: 'Name',
  label: 'Nom'
}, {
  column: 'Effect',
  label: 'Effect'
}, {
  column: 'Duration',
  label: 'Durée'
}, {
  column: 'Addictive',
  label: 'Addictif?'
}, {
  column: 'Weight',
  label: 'Poids'
}, {
  column: 'Cost',
  label: 'Prix'
}, {
  column: 'Rarity',
  label: 'Rareté'
}]

export const CHEMS_LOOT_DATA_FR = [
  {
    Name: 'Addictol',
    Effect: 'Soigne toutes les dépendances',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 125,
    Rarity: 3,
    id: 'c-1'
  },
  {
    Name: 'Antibiotiques',
    Effect: 'Soigne toutes les maladies',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 75,
    Rarity: 3,
    id: 'c-2'
  },
  {
    Name: 'Baume de soin',
    Effect: 'Guérit 2 PV (action mineure) ou 4PV (porter secours)',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 20,
    Rarity: 1,
    id: 'c-3'
  },
  {
    Name: 'Bave de scrito',
    Effect: '+2 PV max',
    Duration: 'Durable',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 40,
    Rarity: 2,
    id: 'c-4'
  },
  {
    Name: 'Buffjet',
    Effect: "Réduit de 1 la difficulté de tous vos tests de FOR et d'END (0 minimum), +4 PV max, gagnez immédiatement 3 PA (perdus s'ils ne sont pas dépensés), les actions supplémentaires coûtent 1 PA de moins",
    Duration: 'Brève',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 75,
    Rarity: 4,
    id: 'c-5'
  },
  {
    Name: 'Buffout',
    Effect: "Vous pouvez relancer 1d20 sur tous vos tests de FOR et d'END, +3 PV max",
    Duration: 'Durable',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 45,
    Rarity: 2,
    id: 'c-6'
  },
  {
    Name: 'Bufftats',
    Effect: "Réduit de 1 la difficulté de tous vos tests de FOR, de PER et d'END (0 minimum), +4 PV max",
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 75,
    Rarity: 4,
    id: 'c-7'
  },
  {
    Name: 'Calmex',
    Effect: "Vous pouvez relancer 1d20 sur tous vos tests de PER et d'AGI, +2 $CD$ aux dégâts des attaques furtives",
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 100,
    Rarity: 4,
    id: 'c-8'
  },
  {
    Name: 'Daddy-O',
    Effect: "Réduit de 1 la difficulté de tous vos tests de PER et d'INT (0 minimum), augmente de +1 la difficulté de vos tests de CHR",
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 2,
    id: 'c-9'
  },
  {
    Name: 'Daytripper',
    Effect: 'Réduit de 1 la difficulté de vos tests de CHR et de CHA (0 minimum), augmente de +1 la difficulté de vos tests de FOR',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 40,
    Rarity: 3,
    id: 'c-10'
  },
  {
    Name: 'Fureur',
    Effect: '+3 résistance aux dégâts balistiques, +3 $CD$ aux dégâts de corps à corps, augmente de +2 la difficulté de tous vos tests de PER',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 30,
    Rarity: 4,
    id: 'c-11'
  },
  {
    Name: 'Jet',
    Effect: 'Les actions supplémentaires coûtent 1 PA de moins',
    Duration: 'Brève',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 2,
    id: 'c-12'
  },
  {
    Name: 'Jet Fuel',
    Effect: 'Vous gagnez 1 PA gratuit au début de chaque tour',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 60,
    Rarity: 3,
    id: 'c-13'
  },
  {
    Name: 'Med-X',
    Effect: '+3 résistance aux dégâts balistiques',
    Duration: 'Durable',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 2,
    id: 'c-14'
  },
  {
    Name: 'Mentats',
    Effect: "Vous pouvez relancer 1d20 sur vos tests de PER et d'INT",
    Duration: 'Durable',
    Addictive: 'Oui 3',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 2,
    id: 'c-15'
  },
  {
    Name: 'Mentats fruits rouges',
    Effect: "Réduit de 2 la difficulté de vos tests d'INT (0 minimum)",
    Duration: 'Durable',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 60,
    Rarity: 3,
    id: 'c-16'
  },
  {
    Name: 'Mentats orange',
    Effect: "Réduit de 2 la difficulté de vos tests de PER (0 minimum), l'action mineure viser vous permet de relancer 1d20 supplémentaire",
    Duration: 'Durable',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 60,
    Rarity: 3,
    id: 'c-17'
  },
  {
    Name: 'Mentats raisin',
    Effect: 'Réduit de 2 la difficulté de vos tests de CHR (0 minimum). Vous pouvez relancer 1d20 sur vos tests de Troc',
    Duration: 'Durable',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 60,
    Rarity: 3,
    id: 'c-18'
  },
  {
    Name: 'Overdrive',
    Effect: "+3 $CD$ de dégâts sur toutes vos attaques, vous pouvez relancer jusqu'à 3 $CD$  par jet de dégâts",
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 55,
    Rarity: 3,
    id: 'c-19'
  },
  {
    Name: 'Psycho',
    Effect: '+2 $CD$ de dégâts sur toutes vos attaques, +3 résistance aux dégâts balistiques',
    Duration: 'Durable',
    Addictive: 'Oui 2',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 2,
    id: 'c-20'
  },
  {
    Name: 'Psychobuff',
    Effect: "+2 $CD$ de dégâts sur toutes vos attaques, +4 PV max, réduit de 1 la difficulté de tous vos tests de FOR et d'END (0 minimum)",
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 70,
    Rarity: 4,
    id: 'c-21'
  },
  {
    Name: 'Psycho Jet',
    Effect: "+2 $CD$ de dégâts sur toutes vos attaques, +4 résistance aux dégâts balistiques, gagnez immédiatement 4 PA (perdus s'ils ne sont pas dépensés)",
    Duration: 'Brève',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 70,
    Rarity: 4,
    id: 'c-22'
  },
  {
    Name: 'Psychotats',
    Effect: '+2 $CD$ de dégâts sur toutes vos attaques, +2 résistance aux dégâts balistiques, réduit de 1 la difficulté de vos tests de PER (0 minimum)',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 70,
    Rarity: 4,
    id: 'c-23'
  },
  {
    Name: 'RadAway',
    Effect: 'Guérit 4 points de dégâts de radiation (action mineure ou porter secours)',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 80,
    Rarity: 2,
    id: 'c-24'
  },
  {
    Name: 'RadAway (Dilué)',
    Effect: 'Guérit 2 points de dégâts de radiation (voir description RadAway)',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 1,
    id: 'c-25'
  },
  {
    Name: 'Rad-X',
    Effect: '+6 résistance aux dégâts de radiation',
    Duration: 'Durable',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 40,
    Rarity: 2,
    id: 'c-26'
  },
  {
    Name: 'Rad-X (Dilué)',
    Effect: '+3 résistance aux dégâts de radiation',
    Duration: 'Durable',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 25,
    Rarity: 1,
    id: 'c-27'
  },
  {
    Name: 'Stimpak',
    Effect: 'Guérit 4 PV ou une blessure via action mineure ou porter secours',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 50,
    Rarity: 2,
    id: 'c-28'
  },
  {
    Name: 'Stimpak (Dilué)',
    Effect: 'Guérit 2 PV (voir Stimpak)',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 30,
    Rarity: 1,
    id: 'c-29'
  },
  {
    Name: 'Super Stimpak',
    Effect: 'Guérit 8 PV et max deux blessures, via ation mineure ou porter secours',
    Duration: 'Instantanée',
    Addictive: 'Non',
    Weight: '<0,5',
    Cost: 90,
    Rarity: 4,
    id: 'c-30'
  },
  {
    Name: 'Ultra Jet',
    Effect: "Gagnez immédiatement 6 PA (perdus s'ils ne sont pas dépensés), les actions supplémentaires coûtent 1 PA de moins",
    Duration: 'Brève',
    Addictive: 'Oui 3',
    Weight: '<0,5',
    Cost: 67,
    Rarity: 2,
    id: 'c-31'
  },
  {
    Name: 'X-Cell',
    Effect: 'Le premier d20 acheté sur tous vos tests est gratuit',
    Duration: 'Durable',
    Addictive: 'Oui 1',
    Weight: '<0,5',
    Cost: 60,
    Rarity: 4,
    id: 'c-32'
  }
]


