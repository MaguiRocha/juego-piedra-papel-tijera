export function initCountdown() {
  class Countdown extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      shadow.innerHTML = `
      <div class="countdown">
          <div class="countdown-number"></div>
          <svg class="svg">
              <circle class="svg-circle" r="90" cx="140" cy="140"></circle>
          </svg>
      </div>
    `;

      let counter = 5;
      var countdownNumberEl = shadow.querySelector(".countdown-number") as any;
      countdownNumberEl.textContent = counter;

      const intervalId = setInterval(() => {
        counter--;
        if (counter < 2) {
          clearInterval(intervalId);
        }
        countdownNumberEl.textContent = counter;
      }, 1000);

      const style = document.createElement("style");

      style.innerHTML = `
      .countdown-number {
        position: relative;
        top: 169px;
        font-weight: 400;
        font-size: 70px;
        text-align: center;
        font-family: "Tilt Neon";
        color: #2B40FF;
        text-shadow: 0 0 50px #2B40FF;
      }
      
      .svg {
        width: 260px;
        height: 280px;
        transform: rotateY(-180deg) rotateZ(-90deg);
      }
      
      .svg-circle {
        stroke-dasharray: 570px;
        stroke-dashoffset: 0px;
        stroke-linecap: round;
        stroke-width: 10px;
        stroke: #2B40FF ;
        fill: none;
        animation: countdown 5s linear infinite forwards;
      }
      
      @keyframes countdown {
        from {
          stroke-dashoffset: 0px;
        }
        to {
          stroke-dashoffset: 580px;
        }
      }
    `;

      shadow.appendChild(style);
    }
  }
  customElements.define("custom-countdown", Countdown);
}
