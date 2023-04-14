export function initColorButton() {
  class ColorButton extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const name = this.getAttribute("name");
      this.innerHTML = `
      <button class ="color-button flicker">${name}</button>
      `;

      const style = document.createElement("style");

      style.innerHTML = `
      .color-button {
        font-family: "Tilt Neon";
        background-color: rgba(0, 0, 0, 0);
        color: #2B40FF;
        text-shadow: 0 0 15px #2B40FF;
        font-weight: 700;
        font-size: 1.6rem;
        border: 4px solid #2B40FF;
        min-width: 250px;
        box-shadow: inset 0 0 15px #2B40FF, 0 0 15px #2B40FF;
        border-radius: 5px;
        padding:15px;
      }
      .color-button:hover{
        cursor: pointer;
      }
      
      .flicker{
        animation: parpadear 1.5s infinite backwards;
      }
      
      @keyframes parpadear {
        to {
          border:solid grey;
          color:grey;
          text-shadow:none;
          box-shadow:none;
        }
      }
      @media(max-width:320px){
          .color-button {
            min-width: 200px;
            font-size: 1rem;
            border: 2px solid #2B40FF;
            padding:15px;
          }
      `;

      this.appendChild(style);
    }
  }
  customElements.define("color-button", ColorButton);
}
