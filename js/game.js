class Game {

    speed = 10;

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

    tick() {
        const currentNews = newsFlash();
        
        this.companies.forEach(company => company.tick(currentNews));

        console.log(this.companies);
    }

    start() {
        this.interval = setInterval(_ => this.tick(), this.speed);
    }

    stop() {
        clearInterval(this.interval);
    }

    restart() {
        this.stop();
        this.start();
    }


}