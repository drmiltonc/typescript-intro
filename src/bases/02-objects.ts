
export const pokemonIds = [1, 2, 3, 4, 5];

export const pikachu: Pokemon= {
    id: 1,
    name: 'Pikachu',
    age: 7
}

export const charmander: Pokemon= {
    id: 2,
    name: 'Charmander',
    age: 9
}

export const pokemons: Pokemon[] = [];
pokemons.push(pikachu, charmander);

interface Pokemon {
    id: number,
    name: string,
    age: number
}