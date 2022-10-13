document.querySelector("#easy-ghibli").onclick = function () {
   document.getElementById("first-screen").style.display = "none";
   document.getElementById("easy-board").style.display = "";
   document.getElementById("easy-play-again").style.display = "none";
   document.getElementById("go-home").style.display = "none";
   document.getElementById("hard-go-home").style.display = "none";
   document.getElementById("easy-play").style.display = "";
   cards = [
      "totoro-1",
      "totoro-2",
      "princessmomonoke-1",
      "princessmomonoke-2",
      "howlsmovingcastle-1",
      "howlsmovingcastle-2",
      "kikisdeliveryservice-1",
      "kikisdeliveryservice-2",
      "spiritedaway-1",
      "spiritedaway-2",
      "nausicaa-1",
      "nausicaa-2",
   ];
   for (let i = 1; i < cards.length + 1; i++) {
      card = `#easy-card-n${i}`;
      document.querySelector(card).className = "content-ghibli";
   }
   content = "content-ghibli";
   difficult = "#easy-card-n";
   board = "#easy-board";
   totalEven = 6;
   correctEven = [];
   even = 0;
};

document.querySelector("#hard-ghibli").onclick = function () {
   document.getElementById("first-screen").style.display = "none";
   document.getElementById("hard-board").style.display = "";
   document.getElementById("hard-play-again").style.display = "none";
   document.getElementById("go-home").style.display = "none";
   document.getElementById("hard-go-home").style.display = "none";
   document.getElementById("hard-play").style.display = "";
   cards = [
      "totoro-1",
      "totoro-2",
      "princessmomonoke-1",
      "princessmomonoke-2",
      "howlsmovingcastle-1",
      "howlsmovingcastle-2",
      "kikisdeliveryservice-1",
      "kikisdeliveryservice-2",
      "spiritedaway-1",
      "spiritedaway-2",
      "nausicaa-1",
      "nausicaa-2",
      "totorohard-1",
      "totorohard-2",
      "princessmomonokehard-1",
      "princessmomonokehard-2",
      "howlsmovingcastlehard-1",
      "howlsmovingcastlehard-2",
      "kikisdeliveryservicehard-1",
      "kikisdeliveryservicehard-2",
      "spiritedawayhard-1",
      "spiritedawayhard-2",
      "nausicaahard-1",
      "nausicaahard-2",
   ];
   for (let i = 1; i < cards.length + 1; i++) {
      card = `#card-n${i}`;
      document.querySelector(card).className = "content-ghibli";
   }
   content = "content-ghibli";
   difficult = "#card-n";
   board = "#hard-board";
   totalEven = 12;
   correctEven = [];
   even = 0;
};

document.querySelector("#easy-bb").onclick = function () {
   document.getElementById("first-screen").style.display = "none";
   document.getElementById("easy-board").style.display = "";
   document.getElementById("easy-play-again").style.display = "none";
   document.getElementById("go-home").style.display = "none";
   document.getElementById("hard-go-home").style.display = "none";
   document.getElementById("easy-play").style.display = "";
   cards = [
      "tuco-1",
      "tuco-2",
      "skyler-1",
      "skyler-2",
      "hank-1",
      "hank-2",
      "jesse-1",
      "jesse-2",
      "walterwhite-1",
      "walterwhite-2",
      "fring-1",
      "fring-2",
   ];
   for (let i = 1; i < cards.length + 1; i++) {
      card = `#easy-card-n${i}`;
      document.querySelector(card).className = "content-bb";
   }
   content = "content-bb";
   difficult = "#easy-card-n";
   board = "#easy-board";
   totalEven = 6;
   correctEven = [];
   even = 0;
};

document.querySelector("#hard-bb").onclick = function () {
   document.getElementById("first-screen").style.display = "none";
   document.getElementById("hard-board").style.display = "";
   document.getElementById("hard-play-again").style.display = "none";
   document.getElementById("go-home").style.display = "none";
   document.getElementById("hard-go-home").style.display = "none";
   document.getElementById("hard-play").style.display = "";
   cards = [
      "tuco-1",
      "tuco-2",
      "skyler-1",
      "skyler-2",
      "hank-1",
      "hank-2",
      "jesse-1",
      "jesse-2",
      "walterwhite-1",
      "walterwhite-2",
      "fring-1",
      "fring-2",
      "heisenberg-1",
      "heisenberg-2",
      "saul-1",
      "saul-2",
      "jane-1",
      "jane-2",
      "hector-1",
      "hector-2",
      "gale-1",
      "gale-2",
      "mike-1",
      "mike-2",
   ];
   for (let i = 1; i < cards.length + 1; i++) {
      card = `#card-n${i}`;
      document.querySelector(card).className = "content-bb";
   }
   content = "content-bb";
   difficult = "#card-n";
   board = "#hard-board";
   totalEven = 12;
   correctEven = [];
   even = 0;
};

document.querySelector("#easy-simpsons").onclick = function () {
   document.getElementById("first-screen").style.display = "none";
   document.getElementById("easy-board").style.display = "";
   document.getElementById("easy-play-again").style.display = "none";
   document.getElementById("go-home").style.display = "none";
   document.getElementById("hard-go-home").style.display = "none";
   document.getElementById("easy-play").style.display = "";
   cards = [
      "apu-1",
      "apu-2",
      "bobbartlisa-1",
      "bobbartlisa-2",
      "burns-1",
      "burns-2",
      "otto-1",
      "otto-2",
      "ned-1",
      "ned-2",
      "homerkrusty-1",
      "homerkrusty-2",
   ];
   for (let i = 1; i < cards.length + 1; i++) {
      card = `#easy-card-n${i}`;
      document.querySelector(card).className = "content-simpsons";
   }
   content = "content-simpsons";
   difficult = "#easy-card-n";
   board = "#easy-board";
   totalEven = 6;
   correctEven = [];
   even = 0;
};

document.querySelector("#hard-simpsons").onclick = function () {
   document.getElementById("first-screen").style.display = "none";
   document.getElementById("hard-board").style.display = "";
   document.getElementById("hard-play-again").style.display = "none";
   document.getElementById("go-home").style.display = "none";
   document.getElementById("hard-go-home").style.display = "none";
   document.getElementById("hard-play").style.display = "";
   cards = [
      "apu-1",
      "apu-2",
      "bobbartlisa-1",
      "bobbartlisa-2",
      "burns-1",
      "burns-2",
      "otto-1",
      "otto-2",
      "ned-1",
      "ned-2",
      "homerkrusty-1",
      "homerkrusty-2",
      "wiggum-1",
      "wiggum-2",
      "moe-1",
      "moe-2",
      "mcclure-1",
      "mcclure-2",
      "marge-1",
      "marge-2",
      "maggie-1",
      "maggie-2",
      "hibbert-1",
      "hibbert-2",
   ];
   for (let i = 1; i < cards.length + 1; i++) {
      card = `#card-n${i}`;
      document.querySelector(card).className = "content-simpsons";
   }
   content = "content-simpsons";
   difficult = "#card-n";
   board = "#hard-board";
   totalEven = 12;
   correctEven = [];
   even = 0;
};

document.querySelector("#easy-cn").onclick = function () {
   document.getElementById("first-screen").style.display = "none";
   document.getElementById("easy-board").style.display = "";
   document.getElementById("easy-play-again").style.display = "none";
   document.getElementById("go-home").style.display = "none";
   document.getElementById("hard-go-home").style.display = "none";
   document.getElementById("easy-play").style.display = "";
   cards = [
      "adventuretime-1",
      "adventuretime-2",
      "regularshow-1",
      "regularshow-2",
      "teentitans-1",
      "teentitans-2",
      "knd-1",
      "knd-2",
      "powerpuffgirls-1",
      "powerpuffgirls-2",
      "scoobydoo-1",
      "scoobydoo-2",
   ];
   for (let i = 1; i < cards.length + 1; i++) {
      card = `#easy-card-n${i}`;
      document.querySelector(card).className = "content-cn";
   }
   content = "content-cn";
   difficult = "#easy-card-n";
   board = "#easy-board";
   totalEven = 6;
   correctEven = [];
   even = 0;
};

document.querySelector("#hard-cn").onclick = function () {
   document.getElementById("first-screen").style.display = "none";
   document.getElementById("hard-board").style.display = "";
   document.getElementById("hard-play-again").style.display = "none";
   document.getElementById("go-home").style.display = "none";
   document.getElementById("hard-go-home").style.display = "none";
   document.getElementById("hard-play").style.display = "";
   cards = [
      "adventuretime-1",
      "adventuretime-2",
      "regularshow-1",
      "regularshow-2",
      "teentitans-1",
      "teentitans-2",
      "knd-1",
      "knd-2",
      "powerpuffgirls-1",
      "powerpuffgirls-2",
      "scoobydoo-1",
      "scoobydoo-2",
      "flapjack-1",
      "flapjack-2",
      "billyandmandy-1",
      "billyandmandy-2",
      "fosters-1",
      "fosters-2",
      "dexter-1",
      "dexter-2",
      "courage-1",
      "courage-2",
      "chowder-1",
      "chowder-2",
   ];
   for (let i = 1; i < cards.length + 1; i++) {
      card = `#card-n${i}`;
      document.querySelector(card).className = "content-cn";
   }
   content = "content-cn";
   difficult = "#card-n";
   board = "#hard-board";
   totalEven = 12;
   correctEven = [];
   even = 0;
};

document.querySelector("#easy-play").onclick = function () {
   document.getElementById("easy-play").style.display = "none";
   assignCards();
   handleGame();
};

document.querySelector("#hard-play").onclick = function () {
   document.getElementById("hard-play").style.display = "none";
   assignCards();
   handleGame();
};

document.querySelector("#easy-play-again").onclick = function () {
   document.getElementById("easy-play").style.display = "";
   document.getElementById("easy-play-again").style.display = "none";
   document.getElementById("go-home").style.display = "none";
   resetEasyDifficultCards();
   correctEven = [];
   even = 0;
   for (let i = 1; i < cards.length + 1; i++) {
      card = `#easy-card-n${i}`;
      document.querySelector(card).className = `${content}`;
   }
};

document.querySelector("#hard-play-again").onclick = function () {
   document.getElementById("hard-play").style.display = "";
   document.getElementById("hard-play-again").style.display = "none";
   document.getElementById("hard-go-home").style.display = "none";
   resetHardDifficultCards();
   correctEven = [];
   even = 0;
   for (let i = 1; i < cards.length + 1; i++) {
      card = `#card-n${i}`;
      document.querySelector(card).className = `${content}`;
   }
};

document.querySelector("#go-home").onclick = function () {
   document.getElementById("first-screen").style.display = "";
   document.getElementById("easy-board").style.display = "none";
   document.getElementById("hard-board").style.display = "none";
   document.getElementById("go-home").style.display = "none";
   document.getElementById("easy-play-again").style.display = "none";
   resetEasyDifficultCards();
};

document.querySelector("#hard-go-home").onclick = function () {
   document.getElementById("first-screen").style.display = "";
   document.getElementById("easy-board").style.display = "none";
   document.getElementById("hard-board").style.display = "none";
   document.getElementById("hard-play-again").style.display = "none";
   document.getElementById("hard-go-home").style.display = "none";
   resetHardDifficultCards();
};
