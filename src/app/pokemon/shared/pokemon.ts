import { Attack } from "../../attack/shared/attack";
import { Type } from "../../type/shared/type";

export interface Pokemon {
    id: number;
    name: string;
    displayName: string;
    weight: number;
    height: number;
    description: string;
    miniDescription: string;
    hp: number;
    image: string;
    level: number;
    ability: string;
    basePokemon?: Pokemon;
    types: Type[];
    weaknesses: Type[];
    retreats: Type[];
    attacks: Attack[];
}