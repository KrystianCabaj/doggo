import axios from "axios";
import api from "../api";
import elements from "../elements";
import loader from "../utils/loader";
import Polaroids from "../view/Polaroids";
const { content } = elements;
const { API_HOST, BY_BREED, SUBBREED } = api;

export default async function BreedPageContent(params = {}) {
  const { breed, subbreed } = params;
  let breedUrl = API_HOST;

  console.log(params);

  if (breed && subbreed) breedUrl += SUBBREED(breed, subbreed);
  else if (breed) breedUrl += BY_BREED(breed);
  else return;
  const clearContentLoader = loader(content);

  try {
    const { data } = await axios(breedUrl);

    if (data.message) {
      clearContentLoader(Polaroids(data.message));
    }
  } catch (error) {
    console.log(error);
  }

  return false;
}
