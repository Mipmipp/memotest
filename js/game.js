function resetEasyDifficultCards() {
    for(let i = 1; i < (cards.length + 1); i++) {
        document.querySelector(`${correctEven[i - 1]}`).id = `easy-card-n${i}`;
    };
}

function resetHardDifficultCards() {
    for(let i = 1; i < (cards.length + 1); i++) {
        document.querySelector(`${correctEven[i - 1]}`).id = `card-n${i}`;
    };
}
