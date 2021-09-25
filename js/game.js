class Game {
    constructor(name, companyAmount, sectors) {
        this.name = name;
        this.companies = [];
        this.sectors = correctSectors(sectors);

        for (let i = 0; i < companyAmount; i++) {
            const sector = this.sectors[Math.floor(Math.random() * this.sectors.length)];
            const name = chooseName(sector, this.companies);

            const character = {
                risk: Math.random(),
                enviroment: Math.random(),
                publicRating: Math.random(),
                newsEffect: Math.random(),
                stability: Math.random(),
            };

            const company = new Company(name, sector, character);

            this.companies.push(company);
        }
    }
}