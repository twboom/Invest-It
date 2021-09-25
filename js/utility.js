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
}