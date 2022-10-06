function compareCards() {
    let firstIndex = firstCardChoosed.indexOf('-');
    let secondIndex = secondCardChoosed.indexOf('-');
    let firstCardToCompare = firstCardChoosed.substring(0, firstIndex);
    let secondCardToCompare = secondCardChoosed.substring(0, secondIndex);

    if(`${firstCardToCompare}` !== `${secondCardToCompare}`) {
        blockInputUser();
        setTimeout(function() {
            backCard();
        }, 1000)

        setTimeout(function() {
            handleGame();
        }, 1100)
    } else {
        correctEven.push(firstCardChoosed);
        correctEven.push(secondCardChoosed);
        even++;
        handleGame();
    }
}

function backCard() {
    document.querySelector(firstCardChoosed).className = content;
    document.querySelector(secondCardChoosed).className = content;
}

function blockInputUser() {
    for(let i = 1; i < (cards.length + 1); i++) {
        let $cards = document.querySelector(`#${cards[i - 1]}`);
        $cards.removeEventListener('click', handleClicks);        
    }
}

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
