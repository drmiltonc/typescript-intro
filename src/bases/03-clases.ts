import axios from "axios";
import { Move, PokeAPIResponse } from "../interfaces/poke-api.interface";


export class Pokemon {

    get imageUrl(): string {
        return `www.pokemon/image/${this.id}.jpg`;
    }

    public scream() {
        console.log(`${bulbasur.name.toUpperCase()}!!!`);
        this.scream();
    }

    private speak() {
        console.log(`${bulbasur.name}, ${bulbasur.name}`);
        this.speak();
    }
    
    async getMoves(): Promise<Move[]> {
        //const moves = 10;

        const {data} = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/bulbasaur');
        console.log(data.moves);
        
        return data.moves;
    }

    constructor(public readonly id: number, public name: string,) {
    }

}

export const bulbasur = new Pokemon(
    3,
    'Bulbasur',

);

console.log(bulbasur.getMoves());

