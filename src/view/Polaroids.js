export function renderPolaroids(urls) {
  return urls
    .map(
      (url) => /* html */ `
		<figure class="polaroid-list__fig">
			<img loading="lazy" src="${url}" alt="dogo sexy pic" />
		</figure>
	`
    )
    .join("");
}

export default function Polaroids(urls, containerToAppend = false) {
  const markup = /* html */ `
		<ul class="polaroid-list">
			${renderPolaroids(urls)}
		</ul>
	`;

  if (containerToAppend) {
    containerToAppend.insertAdjacentHTML("afterbegin", markup);
    return;
  }

  return markup;
}
