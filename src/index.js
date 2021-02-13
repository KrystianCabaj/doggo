import "./scss/main.scss";
import { HomePageSidebar, HomePageContent } from "./routes/home";
import BreedPageContent from "./routes/breeds";
import Swiper from "swiper";
import isAsync from "./utils/isAsync";

const store = {};

const Router = {
  "": [HomePageSidebar, HomePageContent],
  "breed": [HomePageSidebar, BreedPageContent],
};

const secondCallPrevent = [];

["load", "hashchange"].forEach((event) => {
  window.addEventListener(event, function () {
    let hash = window.location.hash.replace("#", "");
    if (hash.startsWith("/")) hash = hash.slice(1);
    if (hash.endsWith("/")) hash = hash.slice(hash.length - 1);

    let hashParams = {};

    if (hash.includes("?")) {
      hashParams = hash
        .split("?")[1]
        .split("&")
        .reduce(function (res, item) {
          var parts = item.split("=");
          res[parts[0]] = parts[1];
          return res;
        }, {});
    }

    hash = hash.split("?")[0];

    const routeHandlersArray = [];

    Object.keys(Router).forEach((route) => {
      if (hash === route) {
        if (!typeof Router[route] === "array") return;
        Router[route].forEach((newHandler) => {
          if (
            routeHandlersArray.findIndex(
              (handler) => handler.toString() === newHandler.toString()
            ) < 0
          ) {
            routeHandlersArray.push(newHandler);
          }
        });
      }
    });

    console.log(secondCallPrevent);

    routeHandlersArray.forEach(async (handler) => {
      if (typeof handler === "function") {
        if (
          secondCallPrevent.findIndex(
            (preventFunc) => preventFunc.toString() === handler.toString()
          ) >= 0
        )
          return;
        if (isAsync(handler)) {
          console.log("is async");
          const res = await handler(hashParams);
          if (res) secondCallPrevent.push(handler);
          return;
        } else {
          if (handler(hashParams)) secondCallPrevent.push(handler);
        }
      }
    });
  });
});

new Swiper(".swiper-container", {
  spaceBetween: 40,
  slidesPerView: "auto",
});

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  const el = document.getElementById("sidebar");
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      el.classList.remove("open-js");
    } else {
      el.classList.add("open-js");
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}
