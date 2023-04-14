import { state } from "../../state";

export function initResultIcon() {
  class ResultIcon extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const name = this.getAttribute("name");
      let colorResult = "";

      const style = document.createElement("style");

      const lastState = state.getState();
      const resultWhoWin = lastState.currentGame.result;

      if (resultWhoWin == "Ganaste") {
        colorResult = "#2B40FF";
      } else if (resultWhoWin == "Perdiste") {
        colorResult = "#F800FD";
      } else if (resultWhoWin == "Empate") {
        colorResult = "#FBFF35";
      }

      style.innerHTML = `
      .result-div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin:0 auto;
        min-width:5rem;
        max-height:3rem;
        font-family: "Tilt Neon";
        background-color: rgba(0, 0, 0);
        color: white;
        text-align: center;
        text-shadow: 0 0 15px ${colorResult};
        font-weight: 500;
        border: 8px solid ${colorResult};
        box-shadow: inset 0 0 15px ${colorResult}, 0 0 15px ${colorResult};
        border-radius: 1rem;
        padding: 6rem 1rem;
        gap:2rem
      }
      .title{
        font-size:3rem;
        padding:2rem;
        text-align:center;
      }
      @media(max-width:320px){
        .result-div {
          min-width:3rem;
          max-height:4rem;
        }
        .title{
          font-size:2rem;
        }
      }
      .animate{
        transition: transform 1s cubic-bezier(0.5, 0, 0.5, 1)
      }
  
      @media(min-width:420px){
      .result-div.animate:hover{
        transform: scale(1.5);
        border-radius: 1rem;
      }
      .cursor-pointer:hover{
        cursor: pointer;
      }
    }

    `;
      this.innerHTML = `
      <div class="circle-container">
      <div class ="result-div animate cursor-pointer"><span class="title">${name}</span></div>
      </div>
      `;

      this.appendChild(style);
    }
  }
  customElements.define("result-icon", ResultIcon);
}
