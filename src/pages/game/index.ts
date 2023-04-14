import { state, Move } from "../../state";

export function initGamePage(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  let computerMove: Move;
  let myMove: Move;
  let counter = 5;
  let activeEvent: any = false;

  style.innerHTML = `
  .general-container{
    padding-top:3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 90vh;
    align-items: center;
  }
  .container-images {
    display: flex;
    flex-wrap: nowrap;
  }
  .count-down{
    display:flex;
    
  }
  .sccisors-off{
    display:none;
  }
  .rock-off{
    display:none;
  }
  .paper-off{
    display:none;
  }
  .cursor-hand:hover{
    cursor: pointer;
    `;
  div.innerHTML = `
    <div class="general-container">
    <custom-countdown class=count-down></custom-countdown>
    <div class="container-images">
    <rock-on class="rock-on cursor-hand"></rock-on>
    <rock-off class="rock-off"></rock-off>
    <paper-on class="paper-on cursor-hand"></paper-on>
    <paper-off class="paper-off"></paper-off>
    <sccisors-on class="sccisors-on cursor-hand"></sccisors-on>
    <sccisors-off class="sccisors-off"></sccisors-off>
    </div>
    </div>
    <div class="lines-container">
    <decoration-lines name="#FBFF35"></decoration-lines>
    <br>
    <decoration-lines name="#F800FD"></decoration-lines>
    <br>
    <decoration-lines name="#2B40FF"></decoration-lines>
    </div>
    `;
  div.appendChild(style);

  const paperOn = div.querySelector(".paper-on") as any;
  const paperOff = div.querySelector(".paper-off") as any;
  const rockOn = div.querySelector(".rock-on") as any;
  const rockOff = div.querySelector(".rock-off") as any;
  const sccisorsOn = div.querySelector(".sccisors-on") as any;
  const sccisorsOff = div.querySelector(".sccisors-off") as any;

  function offOtherImages(
    noSelectedOn1: any,
    noSelectedOff1: any,
    noSelectedOn2: any,
    noSelectedOff2: any
  ) {
    noSelectedOn1.style.display = "none";
    noSelectedOff1.style.display = "inherit";
    noSelectedOff1.style.opacity = "0.4";
    noSelectedOn2.style.display = "none";
    noSelectedOff2.style.display = "inherit";
    noSelectedOff2.style.opacity = "0.4";
  }

  function randomComputerPlay() {
    let resultAleat = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    if (resultAleat == 0) {
      computerMove = "piedra";
    } else if (resultAleat == 1) {
      computerMove = "papel";
    } else if (resultAleat == 2) {
      computerMove = "tijera";
    }
    return computerMove;
  }

  function stateSuscriber(myMove: Move, computerMove: Move) {
    state.subscribe(() => {});
  }

  function activeEventRegister() {
    activeEvent = true;
  }

  function timesUp() {
    const intervalId = setInterval(() => {
      counter--;
      if (counter < 1 && activeEvent == false) {
        console.log("El evento no ha sido activado");
        clearInterval(intervalId);
        params.goTo("/explanation");
      }
    }, 1000);
  }

  (function myPlay() {
    paperOn.addEventListener("click", () => {
      activeEventRegister();
      randomComputerPlay();
      myMove = "papel";
      offOtherImages(sccisorsOn, sccisorsOff, rockOn, rockOff);
      state.setMoves(myMove, computerMove);
      stateSuscriber(myMove, computerMove);

      setTimeout(() => {
        params.goTo("/fight");
      }, 1000);
    });
    sccisorsOn.addEventListener("click", () => {
      activeEventRegister();
      randomComputerPlay();
      myMove = "tijera";
      state.setMoves(myMove, computerMove);
      stateSuscriber(myMove, computerMove);

      offOtherImages(paperOn, paperOff, rockOn, rockOff);
      setTimeout(() => {
        params.goTo("/fight");
      }, 1000);
    });
    rockOn.addEventListener("click", () => {
      activeEventRegister();
      randomComputerPlay();
      myMove = "piedra";
      state.setMoves(myMove, computerMove);
      stateSuscriber(myMove, computerMove);

      offOtherImages(sccisorsOn, sccisorsOff, paperOn, paperOff);

      setTimeout(() => {
        params.goTo("/fight");
      }, 1000);
    });
  })();

  timesUp();

  return div;
}
