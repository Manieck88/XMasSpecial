export type NorthPoleMagicalCreature = "Elf" | "Santa" | "Grinch";

interface MagicalCreature {
  weight: number;
  height: number;
  name: string;
  type: NorthPoleMagicalCreature;
}

type ElfRoles = "Designer" | "Constructor" | "Physical Worker";

interface Elf extends MagicalCreature {
  type: "Elf";
  role: ElfRoles;
}

interface SmartElf extends Elf {
  role: "Designer";
  designNewToy(): void;
}

interface SkilledElf extends Elf {
  role: "Constructor";
  createNewToy(): void;
}

interface StrongElf extends Elf {
  role: "Physical Worker";
  packToysIntoSantaSleigh(): void;
}

type NorthPoleElf = SmartElf | SkilledElf | StrongElf;

interface Santa extends MagicalCreature {
  type: "Santa";
  deliverToysToKids(): void;
}

interface Grinch extends MagicalCreature {
  type: "Grinch";
  destroyChristmas(): void;
}

type NorthPoleInhabitant = NorthPoleElf | Santa | Grinch;

function startShiftAndDoYourJob(inhabitant: NorthPoleInhabitant) {
  // inhabitant.deliverToysToKids()

  if (inhabitant.type === "Santa") {
    inhabitant.deliverToysToKids();
  }

  if (inhabitant.type === "Elf") {
    if (inhabitant.role === "Designer") {
      inhabitant.designNewToy();
    }
  }

  if (isNaughty(inhabitant)) {
    throwIntoDungeon(inhabitant);
  }
}

declare function throwIntoDungeon(grinch: Grinch): void;

function isNaughty(inhabitant: any): inhabitant is Grinch {
  if (typeof inhabitant.destroyChristmas === "function") {
    return true;
  }
  return false;
}
