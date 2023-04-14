// MODIFICAR EL TITULO DEPENDIENDO DE LA PAGE DONDE SE ENCUENTRE
export function initTitle() {
  class Title extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const contenido = this.textContent;
      console.log(contenido);
      const color = this.getAttribute("name");
      const style = document.createElement("style");
      this.innerHTML = `
        <h1 class="title">${contenido}</h1>
      `;

      style.innerHTML = `
      .title{
        color: white;
        text-shadow: 0 0 15px ${color};
        font-size: 2rem;
        font-weight: 700;
        font-family: "Tilt Neon";
        margin-top:40px;
        margin-bottom: 10px;
      }
      @media(min-width:350px){
        .title{
          font-size: 4rem;
          font-weight: 700;
        }
      @media(min-width:550px){
        .title{
          font-size: 5.5rem;
          font-weight: 700;
        }
      }
      }
      `;

      this.appendChild(style);
    }
  }

  customElements.define("custom-title", Title);
}
