import { Move, PokeAPIResponse } from "../interfaces/poke-api.interface";
import { FetchAdapterPokeApi, PokeAPIAdapter, HttpAdapter } from '../api/pokeapi.adapter';


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


        const data = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/bulbasaur');
        console.log(data.moves[0].move.name);

        return data.moves;
    }

    constructor(public readonly id: number, public name: string, private readonly http: HttpAdapter) {
    }

}

const poke = new PokeAPIAdapter();
const fetch = new FetchAdapterPokeApi();

export const bulbasur = new Pokemon(
    3,
    'Bulbasur',
    poke,
    

);

console.log(bulbasur.getMoves());

