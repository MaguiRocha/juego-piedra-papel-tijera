import { state } from "../../state";

export function initResultPage(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.className = "general-container";
  //datos desde el estado
  const currentState = state.getState();

  let resultWord; //Ganaste o perdiste dependiendo de que haya ganado

  //movimientos actuales
  const myCurrentMove = currentState.currentGame.myPlay;
  const computerCurrentMove = currentState.currentGame.computerPlay;

  state.whoWins(myCurrentMove, computerCurrentMove);

  (function addResultWord() {
    const lastState = state.getState();
    const resultWhoWin = lastState.currentGame.result;
    resultWord = resultWhoWin;
  })();

  //trae los valores actualizados desde el estado
  const lastState = state.getState();
  const userPoints = lastState.history.myHistoryPlay;
  const computerPoints = lastState.history.computerHistoryPlay;

  state.subscribe(() => {});

  style.innerHTML = `
  .container{
      display: flex;
      color: white;
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      min-height: 80vh;
      padding:1.5rem;
    }

    .result-container{
      border:solid 4px #58F571;
      border-radius:0.8rem;
      padding:1.8rem;
      font-family:"tilt neon";
      min-width:18rem;
      box-shadow: inset 0 0 15px #58F571, 0 0 15px #58F571;
    }
    @media(max-width:320px){
      .result-container{
        border:solid 2px #58F571;
        padding:1rem;
        min-width:12rem;
      }
      .title-point{
        font-size:1.5rem;
      }
      .span{
        font-size:0.8rem;
      }
    }
    .title-point{
      font-size:2rem;
      margin:0px;
      text-shadow:0 0 15px #FBFF35;
    }
    .span{
      font-size:1rem;
      margin:1rem;
      text-shadow:0 0 15px #FBFF35;
    }
    .points-container{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .button-container{
      display:flex;
      flex-direction: column-reverse;
      gap:1rem;
    }
    @media(min-width:600px){
      .button-container{
        display:flex;
        flex-direction: row;
        gap:1rem;
      }
    }
    .footer{
      font-size:1rem;
      text-align:center;
      text-decoration:none;
      color:white;
      font-family:"Tilt Neon"
    }

  `;
  div.appendChild(style);
  div.innerHTML = `
  <decoration-lines name="#F800FD"></decoration-lines>
  <br>
  <decoration-lines name="#FBFF35"></decoration-lines>
  <div class="container">
  <result-icon class="result-icon" name="${resultWord}" ></result-icon>
  <div class="result-container">
    <h3 class="title-point">Score</h3>
    <div class="points-container">
      <h5 class="span">Tu puntaje: <span class="user-points">${userPoints}</span></h5>
      <h5 class="span">Maquina: <span class="mach-points">${computerPoints}</span> </h5>
    </div>
    </div>
    <div class="button-container">
      <color-button class="restart-button" name="Volver al Inicio"></color-button>
      <color-button class="button" name="Volver a Jugar"></color-button>
    </div>

    </div>
    <decoration-lines name="#FBFF35"></decoration-lines>
    <br>
    <decoration-lines name="#F800FD"></decoration-lines>
    <br>
    <decoration-lines name="#2B40FF"></decoration-lines>
    <p class="footer" name="#FFF" >- Hecho con 💜 por <a href="https://www.linkedin.com/in/magali-rocha/" target="_blank" rel="noreferrer noopener"> Magui
    Rocha</a> -</p>
  `;
  div.appendChild(style);

  const buttonRestartEl = div.querySelector(".restart-button");
  const buttonEl = div.querySelector(".button");

  buttonEl?.addEventListener("click", () => {
    params.goTo("/explanation");
  });

  buttonRestartEl?.addEventListener("click", () => {
    state.restartPoints();
    localStorage.removeItem("saved-state");
    params.goTo("/homepage");
  });

  return div;
}
