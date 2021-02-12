export default {
  API_HOST: "https://dog.ceo/api/",
  ALL_BREEDS: "breeds/list/all/",
  RANDOM_IMAGE: "breeds/image/random/",
  BY_BREED: (breed) => `breed/${breed}/images`,
  SUBBREED_LIST: (breed) => `breed/${breed}/list`,
  SUBBREED: (breed, subbreed) => `breed/${breed}/${subbreed}/images`,
};
