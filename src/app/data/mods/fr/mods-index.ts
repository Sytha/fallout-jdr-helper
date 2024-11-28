import {MOD_LIGHT_WEAPON_DATA_FR} from "./mod-light-weapon";
import {MOD_HEAVY_WEAPON_DATA_FR} from "./mod-heavy-weapon";
import {MOD_ENERGY_WEAPON_DATA_FR} from "./mod-energy-weapon";
import {MOD_MELEE_WEAPON_DATA_FR} from "./mod-melee-weapon";
import {MOD_ROBOT_ARMOR_DATA_FR} from "./mod-robot-armor";
import {MOD_OUTFITS_FR} from "./mod-outfit";
import {MOD_RAIDER_ARMOR_FR} from "./mod-raider-armor";
import {MOD_LEATHER_ARMOR_FR} from "./mod-leather-armor";
import {MOD_METAL_ARMOR_FR} from "./mod-metal-armor";
import {MOD_COMBAT_ARMOR_FR} from "./mod-combat-armor";
import {MOD_SYNTH_ARMOR_FR} from "./mod-synth-armor";
import {DataTableDefinition} from "../../generic-data-lang";
import {MOD_POWER_ARMOR_FR} from "./mod-power-armor";

export const MOD_DEF_FR: DataTableDefinition[] = [
  {
    column: 'Name',
    label: 'Nom'
  },
  {
    column: 'Type',
    label: 'Type'
  },
  {
    column: 'Localisation',
    label: 'Localisation'
  },
  {
    column: 'PhysicalRes',
    label: 'Résistance ballistique'
  },
  {
    column: 'EnergyRes',
    label: 'Résistance energétique'
  },
  {
    column: 'BodyParts',
    label: 'Parties couvertes'
  },
  {
    column: 'PV',
    label: 'Points de vie'
  },
  {
    column: 'Effect1',
    label: 'Effet 1'
  },
  {
    column: 'Effect2',
    label: 'Effet 2'
  },
  {
    column: 'Effect3',
    label: 'Effet 3'
  },
  {
    column: 'Effect4',
    label: 'Effet 4'
  },
  {
    column: 'Effect5',
    label: 'Effet 5'
  },
  {
    column: 'MaxCarry',
    label: 'Charge maximale'
  },
  {
    column: 'Weight',
    label: 'Poids'
  },
  {
    column: 'Cost',
    label: 'Coût'
  },
  {
    column: 'Skills',
    label: 'Aptitudes'
  },
  {
    column: 'Special',
    label: 'Spécial'
  },
]

export const MODS_TABLE_DATA_FR = {
  'light-weapons': {
    label: "Mods Armes légères",
    mods: MOD_LIGHT_WEAPON_DATA_FR
  },
  'heavy-weapons': {
    label: "Mods Armes lourdes",
    mods: MOD_HEAVY_WEAPON_DATA_FR
  },
  'energy-weapons': {
    label: "Mods Armes à énergie",
    mods: MOD_ENERGY_WEAPON_DATA_FR
  },
  'melee-weapons': {
    label: "Mods Armes de mêlée",
    mods: MOD_MELEE_WEAPON_DATA_FR
  },
  'robot-armor': {
    label: "Mods Armures de robots",
    mods: MOD_ROBOT_ARMOR_DATA_FR
  },
  'outfits': {
    label: "Mods Tenues et vêtements",
    mods: MOD_OUTFITS_FR
  },
  'raider-armor': {
    label: "Mods Armures de pillard",
    mods: MOD_RAIDER_ARMOR_FR
  },
  'leather-armor': {
    label: "Mods Armures en cuir",
    mods: MOD_LEATHER_ARMOR_FR
  },
  'metal-armor': {
    label: "Mods Armures en métal",
    mods: MOD_METAL_ARMOR_FR
  },
  'combat-armor': {
    label: "Mods Armures de combat",
    mods: MOD_COMBAT_ARMOR_FR
  },
  'synth-armor': {
    label: "Mods Armures de synthétique",
    mods: MOD_SYNTH_ARMOR_FR
  },
  'power-armor': {
    label: "Mods Armures assistées",
    mods: MOD_POWER_ARMOR_FR
  }
}
