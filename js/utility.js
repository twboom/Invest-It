// Get the effect of a news item
function getNewsEffect(newsItem, company) {
    let effectMultiplier = 0;
    const random = Math.random();

    // If the news item is about a company
    if (newsItem.company === company) {
        effectMultiplier += 1;
    }

    // If the news item is about the company's sector
    if (newsItem.sector === company.sector) {
        effectMultiplier += 1;
    }

    let effect = Math.round(effectMultiplier * newsItem.effect * random);
    effect *= company.character.newsEffect;

    return effect
};

// Set missing charactaristics to default values
function correctCharacteristics(character) {
    if (character === undefined) {character = {} };
    if (character.risk === undefined) { character.risk = 0 };
    if (character.environment === undefined) { character.environment = 0 };
    if (character.publicRating === undefined) { character.publicRating = 0 };
    if (character.newsEffect === undefined) { character.newsEffect = 1 };
    if (character.stability === undefined) { character.stability = 0 };

    return character;
};

// Correct sector to existing sectors
function correctSectors(uncorrectedSectors) {
    let correctedSectors = [];
    
    for (let sector of uncorrectedSectors) {
        sector = sector.toUpperCase();
        if (!sectors.includes(sector)) { continue };
        correctedSectors.push(sector);
    }

    return correctedSectors
};

// Choose company name
function chooseName(sector, companies) {
    const sectorCompanies = companies.filter(company => company.sector === sector);
    const usedNames = sectorCompanies.map(company => company.name);

    return companyNames[sector][Math.floor(Math.random() * companyNames[sector].length)];
};
