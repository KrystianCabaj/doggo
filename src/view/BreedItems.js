export function renderBreedItemElements(
  breed,
  subBreeds = null,
  subBreed = false
) {
  const markup = /* html */ `
          <li><a href="/#/breed/${breed}${
    subBreed ? `/subbreed/${subBreed}` : ""
  }">${subBreed ? subBreed : breed}</a>
              ${
                subBreeds.length > 0
                  ? "<ul>" +
                    subBreeds
                      .map((sub) => renderBreedItemElements(breed, false, sub))
                      .join("") +
                    "</ul>"
                  : ""
              }
          </li>
      `;

  return markup;
}

export default function BreedItems(breedItems, containerToAppend) {
  const markup = /* html */ `<ul>
    ${Object.keys(breedItems)
      .map((key) => renderBreedItemElements(key, breedItems[key]))
      .join("")}
  </ul>`;

  if (containerToAppend) {
    containerToAppend.insertAdjacentHTML('afterbegin', markup);
    return;
  }

  return markup;
}
