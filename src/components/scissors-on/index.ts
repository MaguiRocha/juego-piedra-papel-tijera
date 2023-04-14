const scissorsSvg = require("url:../../images/tijera.svg");

export function initScissorsOn() {
  class SccisorsOn extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      this.innerHTML = `
      <img class="images" src=${scissorsSvg} alt="tijera">
      `;

      const style = document.createElement("style");

      style.innerHTML = `
      .images {
        max-width: 80px;
        max-height: 150px;
      }
      
      @media (min-width: 360px) {
        .images {
          max-width: 120px;
          max-height: 190px;
        }
      }
      @media (min-width: 480px) {
        .images {
          max-width: 150px;
          max-height: 290px;
        }
      }
      `;

      this.appendChild(style);
    }

    increaseSizeHand() {
      const style = document.createElement("style");
      style.innerHTML = `
      .images {
        min-width: 230px;
        min-height: 380px;
      }
      `;
      this.appendChild(style);
    }
  }
  customElements.define("sccisors-on", SccisorsOn);
}
