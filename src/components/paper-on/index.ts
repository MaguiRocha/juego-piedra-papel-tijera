const paperSvg = require("url:../../images/papel.svg");

export function initPaperOn() {
  class PaperOn extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      this.innerHTML = `
      <img class="images" src=${paperSvg} alt="papel">
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
  customElements.define("paper-on", PaperOn);
}
