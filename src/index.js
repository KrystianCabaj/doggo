import "./scss/main.scss";
import HomeRoute from "./routes/home";

const store = {};

const Router = {
  "": HomeRoute,
  "breed/:id": async function () {},
};

["load", "hashchange"].forEach((event) => {
  window.addEventListener(event, function () {
		let hash = window.location.hash.replace('#', '');
		if (hash.startsWith('/')) hash = hash.slice(1, -1);
		if (hash.endsWith('/')) hash = hash.slice(hash.length -1);

		const handlerRouteFunction = Router[hash];
		if (typeof handlerRouteFunction === 'function') handlerRouteFunction();
  });
});

// document.addEventListener()
