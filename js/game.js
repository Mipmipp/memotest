let firstCardChoosed = null;
let secondCardChoosed = null;

function assignCards() {
    let suffledCards = suffleCards(cards);
    for(let i = 1; i < (cards.length + 1); i++) {
        document.querySelectorAll(board).forEach(function() {
            document.querySelector(`${difficult}${i}`).id = `${suffledCards[i - 1]}`;
        });
    }
}

function suffleCards(cards) {
    const shuffledCards = cards.sort((a, b) => 0.5 - Math.random());
    return shuffledCards;
}

function handleGame() {
    for(let i = 1; i < (cards.length + 1); i++) {
        let $cards = document.querySelector(`#${cards[i - 1]}`);
        $cards.addEventListener('click', handleClicks);
    }

    for(let i = 1; i < (correctEven.length + 1); i++) {
        let $cards = document.querySelector(`${correctEven[i - 1]}`);
        $cards.removeEventListener('click', handleClicks);        
    }

    userWin = (even === totalEven);

    if(userWin) {
        document.getElementById('easy-play-again').style.display = '';
        document.getElementById('hard-play-again').style.display = '';
        document.getElementById('go-home').style.display = '';
        document.getElementById('hard-go-home').style.display = '';
    }

    firstCardChoosed = null;
    secondCardChoosed = null;
}

function handleClicks(e) {
    cardChoosed = e.target.id;

    if(firstCardChoosed == null) {
        firstCardChoosed = `#${cardChoosed}`;
        document.querySelector(firstCardChoosed).className = `${cardChoosed}`;
    } else {
        secondCardChoosed = `#${cardChoosed}`;
        document.querySelector(secondCardChoosed).className = `${cardChoosed}`;
    }

    if(firstCardChoosed !== null && secondCardChoosed !== null) {
        compareCards();
    }
}

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
