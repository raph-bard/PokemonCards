import { Pokemon } from "../../pokemon/shared/pokemon";
import { Type } from "../../type/shared/type";

export interface Attack {
    id: number;
    name: string;
    power: number;
    isTalent: boolean;
    type: Type;
    pokemon: Pokemon;
}