const rockOffSvg = require("url:../../images/piedra-off.svg");

export function initRockOff() {
  class RockOff extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      this.innerHTML = `
      <img class="images" src=${rockOffSvg} alt="papel">
      `;

      const style = document.createElement("style");

      style.innerHTML = `
      .images {
        margin :0px;
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
  customElements.define("rock-off", RockOff);
}
