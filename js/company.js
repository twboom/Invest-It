class Company {
    constructor(name, sector, character) {
        this.name = name;
        this.sector = sector;
        this.character = character;

        this.value = 100;
    }

    tick(news) {
        const normalFluc = Math.round(this.character.stability * Math.random());
        const newsFluc = getNewsEffect(news, this);

        const fluctuation = normalFluc * newsFluc;

        this.value *= fluctuation;
    }
}