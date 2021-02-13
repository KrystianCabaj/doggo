import elements from "../elements";
import loader from "../utils/loader";
import api from "../api";
import axios from "axios";
import BreedItems from "../view/BreedItems";
import SwiperContainer from "../view/SwiperContainer";
const { content, sidebar } = elements;
const { API_HOST, ALL_BREEDS, RANDOM_IMAGE } = api;

export default async function () {
  // Trzeba pobrać 10 randomowych zdjęć
  // Trzeba podmienić html w mainie
  // Trzeba napisać swiper, i dodać do niego zdjęcia
  // Trzeba pobrać listę wszystkich ras i wyświetlić w sidebarze
  // * zaimplementować cacheowanie

  const clearSidebarLoader = loader(sidebar);
  const clearContentLoader = loader(content);

  try {
    const { data } = await axios(API_HOST + ALL_BREEDS);

    if (data.message) {
			clearSidebarLoader();
			BreedItems(data.message, sidebar)
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const { data } = await axios(API_HOST + RANDOM_IMAGE + "/10");

    if (data.message) {
      clearContentLoader(SwiperContainer(data.message));
    }
  } catch (error) {
    console.log(error);
  }
}
