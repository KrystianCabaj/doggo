import Swiper, { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination])

export function renderSlide(url) {
  return /* html */ `
		<div class="swiper-slide polaroid-list__element">
			<figure class="polaroid-list__fig">
				<img src="${url}" alt="Dog ceo picture" />
			</figure>
		</div>`;
}

export default function SwiperContainer(urls, containerToAppend = false) {
  const markup = /* html */ `
		<div class="swiper-container">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				<!-- Slides -->
				${urls.map(renderSlide).join("")}
			</div>

			<div class="swiper-pagination"></div>

			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		
	</div>
	`;
  if (containerToAppend) {
    containerToAppend.insertAdjacentHTML("afterbegin", markup);
    new Swiper(".swiper-container", {
      spaceBetween: 40,
      slidesPerView: "auto",
			direction: "horizontal",
			pagination: {
				el: '.swiper-pagination',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			centeredSlides: true
    });
    return;
  }

  return markup;
}
