export function initExplanationPage(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.className = "root";
  style.innerHTML = `
  .container{
    height: 90vh;
    text-align: center;
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-top:3rem;
    justify-content: space-between;
  }
  .paragraph-container{
    max-width:40rem;
    margin:0 auto;
    }  
  `;

  div.innerHTML = `
  <div class="container">
  <div class="paragraph-container">
    <custom-paragraph name="#F800FD">Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 5 segundos.</custom-paragraph></div>
    <color-button class="start-button" name="Jugar"></color-button>
    <color-hands></color-hands>
    </div>
    <div class="lines-container">
    <decoration-lines name="#FBFF35"></decoration-lines>
    <br>
    <decoration-lines name="#F800FD"></decoration-lines>
    <br>
    <decoration-lines name="#2B40FF"></decoration-lines>
    </div>
  `;
  div.appendChild(style);

  const buttonEl = div.querySelector(".start-button");

  buttonEl?.addEventListener("click", () => {
    params.goTo("/game");
  });

  return div;
}
