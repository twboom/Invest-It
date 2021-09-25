class Company {
    constructor(name, sector, character) {
        this.name = name;
        this.sector = sector;
        this.character = correctCharacteristics(character);

        this.value = 100;
    }

    tick(currentNews) {
        const normalFluc = this.character.stability * Math.random();
        const riskFluc = this.character.risk * Math.random();
        let newsFluc = getNewsEffect(currentNews, this);
        newsFluc *= this.character.publicRating * Math.random();

        let fluctuation = normalFluc * riskFluc * newsFluc;

        

        fluctuation += this.character.stability;

        fluctuation += 0.5;

        this.value *= fluctuation;

        console.log(normalFluc, riskFluc, newsFluc, fluctuation, this.value);
    }
}