

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

    constructor(public readonly id: number, public name: string,) {
    }

}

export const bulbasur = new Pokemon(
    3,
    'Bulbasur',

);

