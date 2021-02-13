const markup = /* html */ `
	<div class="loader">Loading...</div>
`;

export default function (container) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  container.insertAdjacentHTML("afterbegin", markup);

  return function (nextMarkup = null) {
    container.querySelector(".loader").remove();
    if (nextMarkup) container.insertAdjacentHTML("afterbegin", nextMarkup);
  };
}
