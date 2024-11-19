export interface CharacterStats {
  name: string;
  level: number;
  xp: number;
  strength: number;
  perception: number;
  endurance: number;
  charisma: number;
  intelligence: number;
  agility: number;
  luck: number;
  health: number;
  rads: number;
  luckPoints: number;
  skills: Map<SkillType, SkillValue>;
  resistances: Map<ResistanceLocation,Resistances>;
  attacks?:string[];
}

export interface SkillValue {
  tag: boolean;
  rank: number;
}

export interface Resistances {
    balResistance:number,
    eneResistance:number,
    radResistance:number,
    poiResistance:number,
}

export enum ResistanceLocation {
  RIGHTLEG = "Jambe Droite" ,LEFTLEG = "Jambe Gauche", TORSO = "Torse", HEAD = "Tête", RIGHTARM = "Bras Droit", LEFTARM = "Bras Gauche"
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

