export function initThreeColorHands() {
  class ColorHands extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      this.innerHTML = `
      <div class="container-images">
      <rock-on></rock-on>
      <paper-on></paper-on>
      <sccisors-on></sccisors-on>
      </div>
      `;
      const style = document.createElement("style");

      style.innerHTML = `
      .container-images {
        display: flex;
        flex-wrap: nowrap;
      }
    }
    `;

      this.appendChild(style);
    }
  }
  customElements.define("color-hands", ColorHands);
}
