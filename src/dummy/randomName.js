import { Chance } from "chance";

const chance = Chance();

export const randomNameGen = () => {
  return chance.name();
};
