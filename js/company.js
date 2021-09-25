class Company {
    constructor(name, sector, character) {
        this.name = name;
        this.sector = sector;
        this.character = correctCharacteristics(character);

        this.value = 100;
    }

    tick(news) {
        const normalFluc = Math.round(this.character.stability * Math.random());
        const riskFluc = Math.round(this.character.risk * Math.random());
        let newsFluc = getNewsEffect(news, this);
        newsFluc *= Math.round(this.character.publicRating * Math.random());

        let fluctuation = normalFluc * riskFluc * newsFluc;

        fluctuation *= this.character.stability;

        this.value *= fluctuation;
    }
}