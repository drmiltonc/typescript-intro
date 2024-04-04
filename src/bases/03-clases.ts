import { Move } from "../interfaces/poke-api.interface";
import { PokeAPIAdapter } from "../api/pokeapi.adapter";


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


        const data = await this.http.get('https://pokeapi.co/api/v2/pokemon/bulbasaur');
        //console.log(data);

        return data;
    }

    constructor(public readonly id: number, public name: string, private readonly http = new PokeAPIAdapter(),) {
    }

}

const poke = new PokeAPIAdapter();

export const bulbasur = new Pokemon(
    3,
    'Bulbasur',

);

console.log(bulbasur.getMoves());

