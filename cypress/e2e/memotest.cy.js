/// <reference types="Cypress" />

const URL = "index.html";
context("memotest", () => {
   before(() => {
      cy.visit(URL);
   });

   describe("play studio ghibli in easy", () => {
      it("enter to the game", () => {
         cy.get("#easy-ghibli").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#easy-card-n1").click();
         cy.get("#easy-card-n2").click();
         cy.get("#easy-card-n1").should("have.class", "content-ghibli");
         cy.get("#easy-card-n2").should("have.class", "content-ghibli");
      });

      it("start the game", () => {
         cy.get("#easy-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#easy-play-again").should("be.hidden");
         cy.get("#go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#howlsmovingcastle-1").click();
         cy.get("#princessmomonoke-1").click();
         cy.get("#howlsmovingcastle-1").should("have.class", "content-ghibli");
         cy.get("#princessmomonoke-1").should("have.class", "content-ghibli");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#howlsmovingcastle-1").click();
         cy.get("#howlsmovingcastle-1").click();
         cy.get("#princessmomonoke-1").click();
         cy.get("#howlsmovingcastle-1").should("have.class", "content-ghibli");
         cy.get("#princessmomonoke-1").should("have.class", "content-ghibli");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#easy-play-again").should("be.visible");
         cy.get("#go-home").should("be.visible");
      });
   });

   describe('play studio ghibli in easy again with "play again" button', () => {
      it("touch play again", () => {
         cy.get("#easy-play-again").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#easy-card-n1").click();
         cy.get("#easy-card-n2").click();
         cy.get("#easy-card-n1").should("have.class", "content-ghibli");
         cy.get("#easy-card-n2").should("have.class", "content-ghibli");
      });

      it("start the game", () => {
         cy.get("#easy-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#easy-play-again").should("be.hidden");
         cy.get("#go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#howlsmovingcastle-1").click();
         cy.get("#princessmomonoke-1").click();
         cy.get("#howlsmovingcastle-1").should("have.class", "content-ghibli");
         cy.get("#princessmomonoke-1").should("have.class", "content-ghibli");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#howlsmovingcastle-1").click();
         cy.get("#howlsmovingcastle-1").click();
         cy.get("#princessmomonoke-1").click();
         cy.get("#howlsmovingcastle-1").should("have.class", "content-ghibli");
         cy.get("#princessmomonoke-1").should("have.class", "content-ghibli");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#easy-play-again").should("be.visible");
         cy.get("#go-home").should("be.visible");
      });
   });

   describe("go home and play studio ghibli in hard", () => {
      it("go home", () => {
         cy.get("#go-home").click();
      });

      it("enter to the game", () => {
         cy.get("#hard-ghibli").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#card-n3").click();
         cy.get("#card-n4").click();
         cy.get("#card-n3").should("have.class", "content-ghibli");
         cy.get("#card-n4").should("have.class", "content-ghibli");
      });

      it("start the game", () => {
         cy.get("#hard-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#hard-play-again").should("be.hidden");
         cy.get("#hard-go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#howlsmovingcastlehard-1").click();
         cy.get("#princessmomonokehard-1").click();
         cy.get("#howlsmovingcastlehard-1").should(
            "have.class",
            "content-ghibli"
         );
         cy.get("#princessmomonokehard-1").should(
            "have.class",
            "content-ghibli"
         );
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#howlsmovingcastlehard-1").click();
         cy.get("#howlsmovingcastlehard-1").click();
         cy.get("#princessmomonokehard-1").click();
         cy.get("#howlsmovingcastlehard-1").should(
            "have.class",
            "content-ghibli"
         );
         cy.get("#princessmomonokehard-1").should(
            "have.class",
            "content-ghibli"
         );
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#hard-play-again").should("be.visible");
         cy.get("#hard-go-home").should("be.visible");
      });
   });

   describe('play studio ghibli in hard again with "play again" button', () => {
      it("touch play again", () => {
         cy.get("#hard-play-again").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#card-n3").click();
         cy.get("#card-n4").click();
         cy.get("#card-n3").should("have.class", "content-ghibli");
         cy.get("#card-n4").should("have.class", "content-ghibli");
      });

      it("start the game", () => {
         cy.get("#hard-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#hard-play-again").should("be.hidden");
         cy.get("#hard-go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#howlsmovingcastlehard-1").click();
         cy.get("#princessmomonokehard-1").click();
         cy.get("#howlsmovingcastlehard-1").should(
            "have.class",
            "content-ghibli"
         );
         cy.get("#princessmomonokehard-1").should(
            "have.class",
            "content-ghibli"
         );
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#howlsmovingcastlehard-1").click();
         cy.get("#howlsmovingcastlehard-1").click();
         cy.get("#princessmomonokehard-1").click();
         cy.get("#howlsmovingcastlehard-1").should(
            "have.class",
            "content-ghibli"
         );
         cy.get("#princessmomonokehard-1").should(
            "have.class",
            "content-ghibli"
         );
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#hard-play-again").should("be.visible");
         cy.get("#hard-go-home").should("be.visible");
      });
   });

   describe("go home and play breaking bad in easy", () => {
      it("go home", () => {
         cy.get("#hard-go-home").click();
      });

      it("enter to the game", () => {
         cy.get("#next").click();
         cy.get("#easy-bb").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#easy-card-n1").click();
         cy.get("#easy-card-n2").click();
         cy.get("#easy-card-n1").should("have.class", "content-bb");
         cy.get("#easy-card-n2").should("have.class", "content-bb");
      });

      it("start the game", () => {
         cy.get("#easy-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#easy-play-again").should("be.hidden");
         cy.get("#go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#tuco-1").click();
         cy.get("#skyler-1").click();
         cy.get("#tuco-1").should("have.class", "content-bb");
         cy.get("#skyler-1").should("have.class", "content-bb");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#skyler-1").click();
         cy.get("#skyler-1").click();
         cy.get("#tuco-1").click();
         cy.get("#skyler-1").should("have.class", "content-bb");
         cy.get("#tuco-1").should("have.class", "content-bb");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#easy-play-again").should("be.visible");
         cy.get("#go-home").should("be.visible");
      });
   });

   describe('play breaking in easy again with "play again" button', () => {
      it("touch play again", () => {
         cy.get("#easy-play-again").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#easy-card-n1").click();
         cy.get("#easy-card-n2").click();
         cy.get("#easy-card-n1").should("have.class", "content-bb");
         cy.get("#easy-card-n2").should("have.class", "content-bb");
      });

      it("start the game", () => {
         cy.get("#easy-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#easy-play-again").should("be.hidden");
         cy.get("#go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#tuco-1").click();
         cy.get("#skyler-1").click();
         cy.get("#tuco-1").should("have.class", "content-bb");
         cy.get("#skyler-1").should("have.class", "content-bb");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#skyler-1").click();
         cy.get("#skyler-1").click();
         cy.get("#tuco-1").click();
         cy.get("#skyler-1").should("have.class", "content-bb");
         cy.get("#tuco-1").should("have.class", "content-bb");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#easy-play-again").should("be.visible");
         cy.get("#go-home").should("be.visible");
      });
   });

   describe("go home and play breaking bad in hard", () => {
      it("go home", () => {
         cy.get("#go-home").click();
      });

      it("enter to the game", () => {
         cy.get("#hard-bb").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#card-n3").click();
         cy.get("#card-n4").click();
         cy.get("#card-n3").should("have.class", "content-bb");
         cy.get("#card-n4").should("have.class", "content-bb");
      });

      it("start the game", () => {
         cy.get("#hard-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#hard-play-again").should("be.hidden");
         cy.get("#hard-go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#jane-1").click();
         cy.get("#hector-1").click();
         cy.get("#jane-1").should("have.class", "content-bb");
         cy.get("#hector-1").should("have.class", "content-bb");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#jane-1").click();
         cy.get("#jane-1").click();
         cy.get("#hector-1").click();
         cy.get("#jane-1").should("have.class", "content-bb");
         cy.get("#hector-1").should("have.class", "content-bb");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#hard-play-again").should("be.visible");
         cy.get("#hard-go-home").should("be.visible");
      });
   });

   describe('play breaking bad in hard again with "play again" button', () => {
      it("touch play again", () => {
         cy.get("#hard-play-again").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#card-n3").click();
         cy.get("#card-n4").click();
         cy.get("#card-n3").should("have.class", "content-bb");
         cy.get("#card-n4").should("have.class", "content-bb");
      });

      it("start the game", () => {
         cy.get("#hard-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#hard-play-again").should("be.hidden");
         cy.get("#hard-go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#jane-1").click();
         cy.get("#hector-1").click();
         cy.get("#jane-1").should("have.class", "content-bb");
         cy.get("#hector-1").should("have.class", "content-bb");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#jane-1").click();
         cy.get("#jane-1").click();
         cy.get("#hector-1").click();
         cy.get("#jane-1").should("have.class", "content-bb");
         cy.get("#hector-1").should("have.class", "content-bb");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#hard-play-again").should("be.visible");
         cy.get("#hard-go-home").should("be.visible");
      });
   });

   describe("go home and play the simpsons in easy", () => {
      it("go home ", () => {
         cy.get("#hard-go-home").click();
      });

      it("enter to the game", () => {
         cy.get("#next").click();
         cy.get("#next").click();
         cy.get("#easy-simpsons").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#easy-card-n1").click();
         cy.get("#easy-card-n2").click();
         cy.get("#easy-card-n1").should("have.class", "content-simpsons");
         cy.get("#easy-card-n2").should("have.class", "content-simpsons");
      });

      it("start the game", () => {
         cy.get("#easy-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#easy-play-again").should("be.hidden");
         cy.get("#go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#apu-1").click();
         cy.get("#burns-1").click();
         cy.get("#apu-1").should("have.class", "content-simpsons");
         cy.get("#burns-1").should("have.class", "content-simpsons");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#apu-1").click();
         cy.get("#apu-1").click();
         cy.get("#burns-1").click();
         cy.get("#apu-1").should("have.class", "content-simpsons");
         cy.get("#burns-1").should("have.class", "content-simpsons");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#easy-play-again").should("be.visible");
         cy.get("#go-home").should("be.visible");
      });
   });

   describe('play the simpsons in easy again with "play again" button', () => {
      it("touch play again", () => {
         cy.get("#easy-play-again").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#easy-card-n1").click();
         cy.get("#easy-card-n2").click();
         cy.get("#easy-card-n1").should("have.class", "content-simpsons");
         cy.get("#easy-card-n2").should("have.class", "content-simpsons");
      });

      it("start the game", () => {
         cy.get("#easy-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#easy-play-again").should("be.hidden");
         cy.get("#go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#apu-1").click();
         cy.get("#burns-1").click();
         cy.get("#apu-1").should("have.class", "content-simpsons");
         cy.get("#burns-1").should("have.class", "content-simpsons");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#apu-1").click();
         cy.get("#apu-1").click();
         cy.get("#burns-1").click();
         cy.get("#apu-1").should("have.class", "content-simpsons");
         cy.get("#burns-1").should("have.class", "content-simpsons");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#easy-play-again").should("be.visible");
         cy.get("#go-home").should("be.visible");
      });
   });

   describe("go home and play the simpsons in hard", () => {
      it("go home", () => {
         cy.get("#go-home").click();
      });

      it("enter to the game", () => {
         cy.get("#hard-simpsons").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#card-n4").click();
         cy.get("#card-n5").click();
         cy.get("#card-n4").should("have.class", "content-simpsons");
         cy.get("#card-n5").should("have.class", "content-simpsons");
      });

      it("start the game", () => {
         cy.get("#hard-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#hard-play-again").should("be.hidden");
         cy.get("#hard-go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#marge-1").click();
         cy.get("#maggie-1").click();
         cy.get("#marge-1").should("have.class", "content-simpsons");
         cy.get("#maggie-1").should("have.class", "content-simpsons");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#marge-1").click();
         cy.get("#marge-1").click();
         cy.get("#maggie-1").click();
         cy.get("#marge-1").should("have.class", "content-simpsons");
         cy.get("#maggie-1").should("have.class", "content-simpsons");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#hard-play-again").should("be.visible");
         cy.get("#hard-go-home").should("be.visible");
      });
   });

   describe('play the simpsons in hard again with "play again" button', () => {
      it("touch play again", () => {
         cy.get("#hard-play-again").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#card-n4").click();
         cy.get("#card-n5").click();
         cy.get("#card-n4").should("have.class", "content-simpsons");
         cy.get("#card-n5").should("have.class", "content-simpsons");
      });

      it("start the game", () => {
         cy.get("#hard-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#hard-play-again").should("be.hidden");
         cy.get("#hard-go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#marge-1").click();
         cy.get("#maggie-1").click();
         cy.get("#marge-1").should("have.class", "content-simpsons");
         cy.get("#maggie-1").should("have.class", "content-simpsons");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#marge-1").click();
         cy.get("#marge-1").click();
         cy.get("#maggie-1").click();
         cy.get("#marge-1").should("have.class", "content-simpsons");
         cy.get("#maggie-1").should("have.class", "content-simpsons");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#hard-play-again").should("be.visible");
         cy.get("#hard-go-home").should("be.visible");
      });
   });

   describe("go home and play cartoon network in easy", () => {
      it("go home ", () => {
         cy.get("#hard-go-home").click();
      });

      it("enter to the game", () => {
         cy.get("#next").click();
         cy.get("#easy-cn").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#easy-card-n1").click();
         cy.get("#easy-card-n2").click();
         cy.get("#easy-card-n1").should("have.class", "content-cn");
         cy.get("#easy-card-n2").should("have.class", "content-cn");
      });

      it("start the game", () => {
         cy.get("#easy-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#easy-play-again").should("be.hidden");
         cy.get("#go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#adventuretime-1").click();
         cy.get("#regularshow-1").click();
         cy.get("#adventuretime-1").should("have.class", "content-cn");
         cy.get("#regularshow-1").should("have.class", "content-cn");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#adventuretime-1").click();
         cy.get("#adventuretime-1").click();
         cy.get("#regularshow-1").click();
         cy.get("#adventuretime-1").should("have.class", "content-cn");
         cy.get("#regularshow-1").should("have.class", "content-cn");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#easy-play-again").should("be.visible");
         cy.get("#go-home").should("be.visible");
      });
   });

   describe('play cartoon network in easy again with "play again" button', () => {
      it("touch play again", () => {
         cy.get("#easy-play-again").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#easy-card-n1").click();
         cy.get("#easy-card-n2").click();
         cy.get("#easy-card-n1").should("have.class", "content-cn");
         cy.get("#easy-card-n2").should("have.class", "content-cn");
      });

      it("start the game", () => {
         cy.get("#easy-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#easy-play-again").should("be.hidden");
         cy.get("#go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#adventuretime-1").click();
         cy.get("#regularshow-1").click();
         cy.get("#adventuretime-1").should("have.class", "content-cn");
         cy.get("#regularshow-1").should("have.class", "content-cn");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#adventuretime-1").click();
         cy.get("#adventuretime-1").click();
         cy.get("#regularshow-1").click();
         cy.get("#adventuretime-1").should("have.class", "content-cn");
         cy.get("#regularshow-1").should("have.class", "content-cn");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#easy-play-again").should("be.visible");
         cy.get("#go-home").should("be.visible");
      });
   });

   describe("go home and play cartoon network in hard", () => {
      it("go home", () => {
         cy.get("#go-home").click();
      });

      it("enter to the game", () => {
         cy.get("#hard-cn").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#card-n7").click();
         cy.get("#card-n8").click();
         cy.get("#card-n7").should("have.class", "content-cn");
         cy.get("#card-n8").should("have.class", "content-cn");
      });

      it("start the game", () => {
         cy.get("#hard-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#hard-play-again").should("be.hidden");
         cy.get("#hard-go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#billyandmandy-1").click();
         cy.get("#fosters-1").click();
         cy.get("#billyandmandy-1").should("have.class", "content-cn");
         cy.get("#fosters-1").should("have.class", "content-cn");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#billyandmandy-1").click();
         cy.get("#billyandmandy-1").click();
         cy.get("#fosters-1").click();
         cy.get("#billyandmandy-1").should("have.class", "content-cn");
         cy.get("#fosters-1").should("have.class", "content-cn");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#hard-play-again").should("be.visible");
         cy.get("#hard-go-home").should("be.visible");
      });
   });

   describe('play cartoon network in hard again with "play again" button', () => {
      it("touch play again", () => {
         cy.get("#hard-play-again").click();
      });

      it("check that cards cant be touched", () => {
         cy.get("#card-n7").click();
         cy.get("#card-n8").click();
         cy.get("#card-n7").should("have.class", "content-cn");
         cy.get("#card-n8").should("have.class", "content-cn");
      });

      it("start the game", () => {
         cy.get("#hard-play").click();
      });

      it("check that buttons play again and go home are not visibles", () => {
         cy.get("#hard-play-again").should("be.hidden");
         cy.get("#hard-go-home").should("be.hidden");
      });

      it("do a incorrect try", () => {
         cy.get("#billyandmandy-1").click();
         cy.get("#fosters-1").click();
         cy.get("#billyandmandy-1").should("have.class", "content-cn");
         cy.get("#fosters-1").should("have.class", "content-cn");
      });

      it("check that a card cant be touched two times", () => {
         cy.get("#billyandmandy-1").click();
         cy.get("#billyandmandy-1").click();
         cy.get("#fosters-1").click();
         cy.get("#billyandmandy-1").should("have.class", "content-cn");
         cy.get("#fosters-1").should("have.class", "content-cn");
      });

      it("complete game", () => {
         cy.wait(200);
         let cardsOrdered = [
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
         for (let i = 0; i < cardsOrdered.length; i++) {
            cy.get(`#${cardsOrdered[i]}`).click();
         }
      });

      it("check that buttons play again and go home are visibles", () => {
         cy.get("#hard-play-again").should("be.visible");
         cy.get("#hard-go-home").should("be.visible");
      });
   });
});
