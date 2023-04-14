import { initHomepage } from "./pages/homepage";
import { initExplanationPage } from "./pages/explanation";
import { initGamePage } from "./pages/game";
import { initResultPage } from "./pages/result";
import { initFightPage } from "./pages/fight";

const BASE_PATH = "/juego-piedra-papel-tijera";

function isGithubPages() {
  return location.host.includes("maguirocha.github.io");
}

const routes = [
  {
    path: /\/homepage/,
    component: initHomepage,
  },
  {
    path: /\/explanation/,
    component: initExplanationPage,
  },
  {
    path: /\/game/,
    component: initGamePage,
  },
  {
    path: /\/fight/,
    component: initFightPage,
  },
  {
    path: /\/result/,
    component: initResultPage,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    //    console.log("el handle Route recibio una nueva ruta y es", route);
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (
    location.pathname == "/" ||
    location.pathname == "/juego-piedra-papel-tijera/"
  ) {
    goTo("/homepage");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
