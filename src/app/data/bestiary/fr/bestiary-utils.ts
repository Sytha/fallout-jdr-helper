import {MobDetails, SubType} from "./bestiary.model";
import {CREATURES} from "./CREATURES";
import {CHARACTERS} from "./CHARACTERS";
import {ROBOTS} from "./ROBOTS";

export const getBestiaryList = (subType: SubType): MobDetails[] => {
  let bestiary = [];
  switch (subType) {
    case SubType.CREATURES:
      bestiary = CREATURES;
      break;
    case SubType.ROBOTS:
      bestiary = ROBOTS;
      break;
    case SubType.THINKERS:
      bestiary = CHARACTERS;
      break;
    default:
      bestiary = [];
      break;
  }
  return bestiary.sort((a, b) => a.name.localeCompare(b.name));
}

export const findMobByName = (name: string) => {
  const allMobs = getBestiaryList(SubType.ROBOTS).concat(getBestiaryList(SubType.THINKERS)).concat(getBestiaryList(SubType.CREATURES));
  return allMobs.find(value => value.name === name);
}
