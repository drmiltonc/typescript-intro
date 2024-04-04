
export class Pokemon {
    public id: number = 1;
    public name: string = 'no name';

    constructor(id:number , name: string) {
        this.id = id,
        this.name = name
    }

}

export const bulbasur = new Pokemon(
    3,
    'Bulbasur'
);