console.log("BIENVENIDOS A MI JUEGO DE PIEDRA, PAPEL O TIJERA");

import { initDecorationLines } from "./components/decoration-lines";
import { initHeader } from "./components/header";
import { initTitle } from "./components/title";
import { initColorButton } from "./components/color-button";
import { initRouter } from "./router";
import { initThreeColorHands } from "./components/hands";
import { initCustomParagraph } from "./components/paragraph";
import { initResultIcon } from "./components/result-icon";
import { initPaperOn } from "./components/paper-on";
import { initPaperOff } from "./components/paper-off";
import { initRockOn } from "./components/rock-on";
import { initRockOff } from "./components/rock-off";
import { initScissorsOn } from "./components/scissors-on";
import { initScissorsOff } from "./components/scissors-off";
import { initCountdown } from "./components/count-down";

(function () {
  initHeader();
  initDecorationLines();
  initTitle();
  initColorButton();
  initThreeColorHands();
  initCustomParagraph();
  initResultIcon();
  initScissorsOn();
  initScissorsOff();
  initPaperOn();
  initPaperOff();
  initRockOn();
  initRockOff();
  initCountdown();
  const divEl = document.querySelector(".root") as any;
  initRouter(divEl);
})();
