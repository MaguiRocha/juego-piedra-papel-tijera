export function initHomepage(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  style.innerHTML = `
  .container {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: white;
    text-align: center;
    padding: 10px 0px 0px;
  }

  .footer{
    font-size:1rem;
    text-align:center;
    text-decoration:none;
    color:white;
    font-family:"Tilt Neon"
  }
  `;

  div.innerHTML = `
  <my-header name="#F800FD"></my-header>
    <div class="container">
      <custom-title name="#FBFF35">Piedra Papel o Tijera</custom-title>
      <color-button class="start-button" name="Empezar"></color-button>
      <color-hands></color-hands>
    </div>
    <decoration-lines name="#FBFF35"></decoration-lines>
    <br>
    <decoration-lines name="#F800FD"></decoration-lines>
    <br>
    <decoration-lines name="#2B40FF"></decoration-lines>
    <p class="footer" name="#FFF" >- Hecho con 💜 por <a href="https://www.linkedin.com/in/magali-rocha/" target="_blank" rel="noreferrer noopener"> Magui
    Rocha</a> -</p>
  `;
  div.appendChild(style);

  const buttonEl = div.querySelector(".start-button");

  buttonEl?.addEventListener("click", () => {
    params.goTo("/explanation");
  });

  return div;
}
