import {PerkDetail} from "../../data/perks/perks.model";
import {DataId} from "../../data/generic-data-lang";

export interface CharacterStats {
  name?: string;
  level: number;
  xp?: number;
  strength: number;
  perception: number;
  endurance: number;
  charisma: number;
  intelligence: number;
  agility: number;
  luck: number;
  health?: number;
  rads?: number;
  luckPoints?: number;
  skills?: Map<SkillType, SkillValue>;
  resistances?: Map<ResistanceLocation, Resistances>;
  perks?: Map<PerkDetail, number>;
  attacks?: Attack[];
  isRobot?: boolean | null;
  inventory?: Map<DataId,number>
}

export interface SkillValue {
  tag: boolean;
  rank: number;
}

export interface Resistances {
  balResistance: number,
  eneResistance: number,
  radResistance: number,
  poiResistance: number,
}

export enum ResistanceLocation {
  RIGHTLEG = "Jambe Droite",
  LEFTLEG = "Jambe Gauche",
  TORSO = "Torse",
  HEAD = "Tête",
  RIGHTARM = "Bras Droit",
  LEFTARM = "Bras Gauche"
}

export enum SkillType {
  UNARMED = 'UNARMED',
  MELEEWEAPON = 'MELEEWEAPON',
  LIGHTWEAPON = 'LIGHTWEAPON',
  HEAVYWEAPON = 'HEAVYWEAPON',
  ENERGYWEAPON = 'ENERGYWEAPON',
  THROWING = 'THROWING',
  ATHLETIC = 'ATHLETIC',
  LOCKPICK = 'LOCKPICK',
  SNEAK = 'SNEAK',
  EXPLOSIVES = 'EXPLOSIVES',
  MEDICINE = 'MEDICINE',
  PILOT = 'PILOT',
  SCIENCE = 'SCIENCE',
  SURVIVAL = 'SURVIVAL',
  BARTER = 'BARTER',
  REPAIR = 'REPAIR',
  SPEECH = 'SPEECH'
}

export enum DamageType {
  BAL = 'BAL',
  ENERG = 'ENERG',
  POI = 'POI',
  RAD = 'RAD'
}

export enum Effect {
  ZONE = 'ZONE',
  BRUTAL = 'BRUTAL',
  DESTRUCTEUR = 'DESTRUCTEUR',
  RAFALE = 'RAFALE',
  ETOURDISSANT = 'ETOURDISSANT',
  PERFORANT = 'PERFORANT',
  PERSISTANT = 'PERSISTANT',
  RADIOACTIF = 'RADIO',
}

export enum Qualities {
  CAC = "CAC",
  DEUXMAINS = "DEUXMAINS",
  DISSIMULE = "DISSIMULE",
  FIABLE = "FIABLE",
  GATLING = "GATLING",
  IMPRECIS = "IMPRECIS",
  IMPREVISIBLE = "IMPREVISIBLE",
  INVALIDANT = "INVALIDANT",
  LANCER = "LANCER",
  MINE = "MINE",
  PARADE = "PARADE",
  PRECIS = "PRECIS",
  RECO = "RECO",
  SILENCIEUX = "SILENCIEUX",
  VISIONNOCTURNE = "VISIONNOCTURNE",
  ZONEIMPACT = "ZONEIMPACT",
}

export interface SpecialLabel {
  long: string;
  short: string;
  letter: string;
}

export interface Attack {
  name: string,
  damage: number,
  damageType: DamageType[],
  special: SpecialLabel,
  skill: SkillType,
  effects: Effect[],
  qualities : Qualities[],
  cadence: number,
  reach: number,
  ammo: number,
  piercingRating: number,
}

export const SPECIAL: SpecialLabel[] =
  [
    {"long": 'STRENGTH', "short": 'STR', "letter": 'S'},
    {"long": 'PERCEPTION', "short": 'PER', "letter": 'P'},
    {"long": 'ENDURANCE', "short": 'END', "letter": 'E'},
    {"long": 'CHARISMA', "short": 'CHR', "letter": 'C'},
    {"long": 'INTELLIGENCE', "short": 'INT', "letter": 'I'},
    {"long": 'AGILITY', "short": 'AGI', "letter": 'A'},
    {"long": 'LUCK', "short": 'LCK', "letter": 'L'},
  ]

export interface Attack {
  name: string;
  damage: number;
  damageType: DamageType[],

}

