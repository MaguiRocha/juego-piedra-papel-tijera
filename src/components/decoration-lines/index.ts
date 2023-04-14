export function initDecorationLines() {
  class DecorationLines extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const div = document.createElement("div");
      const color = this.getAttribute("name") as any;

      div.style.color = "white";
      div.style.width = "100%";
      div.style.height = "6px";
      // div.style.display = "flex";
      // div.style.alignItems = "center";
      // div.style.alignContent = "center";
      // div.style.justifyContent = "center";
      div.style.border = "2px solid ";
      div.style.borderRadius = "5px";
      div.style.boxShadow = "inset 0 0 15px " + color + ", 0 0 15px " + color;

      this.appendChild(div);
    }
  }
  customElements.define("decoration-lines", DecorationLines);
}
