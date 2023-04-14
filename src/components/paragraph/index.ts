//MODIFICAR PARA QUE SEA UN PARRAFO PERSONALIZADO
export function initCustomParagraph() {
  class CustomParagraph extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const contenido = this.textContent;
      const color = this.getAttribute("name");

      this.innerHTML = `
      <p class="parrafo"> ${contenido}</p>
      `;

      const style = document.createElement("style");

      style.innerHTML = `
      .parrafo{
        font-size: 2rem;
        font-weight: 400;
        color: white;
        text-shadow: 0 0 15px ${color};
        font-family: "Tilt Neon";
      }
      @media(min-width:650px){
        .parrafo{
          font-size: 3rem;
        }
      }
      `;

      this.appendChild(style);
    }
  }

  customElements.define("custom-paragraph", CustomParagraph);
}
