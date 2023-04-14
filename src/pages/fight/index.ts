import { state } from "../../state";

export function initFightPage(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.className = "root";
  style.innerHTML = `
  .root{
    height: 90vh;

  }
  .computer-hands{
    transform: rotate(180deg);
    display: flex;
    flex-wrap: nowrap;
    justify-content:center;
  }

  .user-hands{
    display: flex;
    flex-wrap: nowrap;
    justify-content:center;
  }
  .game-area{
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
}
  }
  `;
  div.innerHTML = `
  <div class="game-area">
  <div class="computer-hands">    
    <rock-on class="rock-computer"></rock-on>
    <paper-on class="paper-computer"></paper-on>
    <sccisors-on class="sccisors-computer"></sccisors-on>
  </div>
  <div class="user-hands">    
    <rock-on class="rock-user"></rock-on>
    <paper-on class="paper-user"></paper-on>
    <sccisors-on class="sccisors-user"></sccisors-on>
  </div>
  </div>
  `;
  div.appendChild(style);

  const currentState = state.getState();
  const myMove = currentState.currentGame.myPlay;
  const computerMove = currentState.currentGame.computerPlay;

  const sccisorsUser = div.querySelector(".sccisors-user") as any;
  const sccisorsComp = div.querySelector(".sccisors-computer") as any;
  const paperUser = div.querySelector(".paper-user") as any;
  const paperComp = div.querySelector(".paper-computer") as any;
  const rockUser = div.querySelector(".rock-user") as any;
  const rockComp = div.querySelector(".rock-computer") as any;

  function deleteNoSelectMyHands(noSelectedMe1: any, noSelectedMe2: any) {
    noSelectedMe1.style.display = "none";
    noSelectedMe2.style.display = "none";
  }
  function deleteNoSelectCompHands(noSelectedComp1: any, noSelectedComp2: any) {
    noSelectedComp1.style.display = "none";
    noSelectedComp2.style.display = "none";
  }
  function increaseSizeSelectHand(handSelect) {
    //hacer que las manos crezcan
    handSelect.increaseSizeHand();
  }

  function renderComputerPlay() {
    if (computerMove == "papel") {
      deleteNoSelectCompHands(sccisorsComp, rockComp);
      increaseSizeSelectHand(paperComp);
    }
    if (computerMove == "piedra") {
      deleteNoSelectCompHands(paperComp, sccisorsComp);
      increaseSizeSelectHand(rockComp);
    }
    if (computerMove == "tijera") {
      deleteNoSelectCompHands(paperComp, rockComp);
      increaseSizeSelectHand(sccisorsComp);
    }
  }

  function renderMyPlay() {
    if (myMove == "papel") {
      deleteNoSelectMyHands(sccisorsUser, rockUser);
      increaseSizeSelectHand(paperUser);
    }
    if (myMove == "tijera") {
      deleteNoSelectMyHands(paperUser, rockUser);
      increaseSizeSelectHand(sccisorsUser);
    }
    if (myMove == "piedra") {
      deleteNoSelectMyHands(paperUser, sccisorsUser);
      increaseSizeSelectHand(rockUser);
    }
  }
  renderMyPlay();
  renderComputerPlay();

  setTimeout(() => {
    params.goTo("/result");
  }, 2000);

  return div;
}
