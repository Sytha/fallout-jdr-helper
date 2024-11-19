export interface MobDetails {
  typeDef: BestiaryType;
  name: string;
  level: string;
  keywords: string;
  description?: string;
  xp: string;
  type: string;
  body?: string;
  spirit?: string;
  strength?: string;
  perception?: string;
  endurance?: string;
  charisma?: string;
  intelligence?: string;
  agility?: string;
  luck?: string;
  skills?: string[];
  health: string;
  initiative: string;
  defense: string;
  luckPoints?: string;
  meleeBonus?: string;
  carryWeight?: string;
  melee?: string;
  range?: string;
  other?: string;
  ballisticR: string;
  energyR: string;
  radiationR: string;
  poisonR: string;
  attacks: ElementKey[];
  effects: ElementKey[];
  inventory: ElementKey[];
  source: string;
  currentXp?: any;
  maxHealth?: any;
  maxCarryWeight?: any;
}

export enum BestiaryType {
  CHARACTER, // Using SPECIAL attributes
  CREATURE // Using Body & Spirit attributes
}

export enum SubType {
  CREATURES, THINKERS, ROBOTS,
}

export interface ElementKey {
  title: string;
  description: string;
}
