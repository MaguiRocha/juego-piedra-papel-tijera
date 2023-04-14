export function initHeader() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const div = document.createElement("div");
      const color = this.getAttribute("name");

      div.textContent = "Jugá y probá tus habilidades";
      div.style.fontFamily = "Tilt Neon";
      div.style.textShadow = "0 0 15px " + color;
      div.style.fontSize = "2rem";
      div.style.color = "white";
      div.style.width = "100%";
      div.style.height = "80px";
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.alignContent = "center";
      div.style.justifyContent = "center";
      div.style.textAlign = "center";
      div.style.border = "3px solid ";
      div.style.borderRadius = "10px";
      div.style.boxShadow = "inset 0 0 15px " + color + ", 0 0 15px " + color;

      this.appendChild(div);
    }
  }
  customElements.define("my-header", Header);
}
