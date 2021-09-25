class NewsItem {
    constructor(title, content, effect) {
        this.title = title;
        this.content = content;
        this.effect = effect;
    }
}

function newsFlash() {
    const sector = news[Object.keys(news)[ Object.keys(news).length * Math.random() << 0]][0];
    
    const item = new NewsItem(
        sector.title,
        sector.description,
        sector.effect === 'POSITIVE' ? 1 : -1
    );
    
    return item
}