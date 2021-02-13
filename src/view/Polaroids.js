export function renderPolaroids(urls) {
	return urls.map(url => /* html */ `
		<figure class="polaroid-list__fig">
			<img src="${url}" alt="dogo sexy pic" />
		</figure>
	`)
}

export default function Polaroids(urls) {
  const markup = /* html */ `
		<ul class="polaroid-list">
			${renderPolaroids(urls)}
    </ul>
	`;

	return markup;
}
