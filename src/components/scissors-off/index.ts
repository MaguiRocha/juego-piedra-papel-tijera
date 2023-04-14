const scissorsOffSvg = require("url:../../images/tijera-off.svg");

export function initScissorsOff() {
  class SccisorsOff extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      this.innerHTML = `
      <img class="images" src=${scissorsOffSvg} alt="tijera">
      `;

      const style = document.createElement("style");

      style.innerHTML = `
      .images {
        max-width: 80px;
        max-height: 150px;
      }
      
      @media (min-width: 350px) {
        .images {
          max-width: 120px;
          max-height: 190px;

        }
      }
      @media (min-width: 450px) {
        .images {
          max-width: 150px;
          max-height: 290px;
        }
      }
      `;
      this.appendChild(style);
    }
  }
  customElements.define("sccisors-off", SccisorsOff);
}
