export function renderSlide(url) {
  return /* html */ `
		<li class="polaroid-list__element">
			<figure class="polaroid-list__fig">
			<img src="${url}" alt="Dog ceo picture" />
			</figure>
		</li>`;
}

export default function SwiperContainer(urls) {
  return /* html */ `
		<div class="swiper-container">
			<!-- Additional required wrapper -->
			<ul class="swiper-wrapper polaroid-list">
				<!-- Slides -->
				${urls.map(renderSlide).join("")}
			</ul>
			<!-- If we need pagination -->
			<div class="swiper-pagination"></div>
	</div>
	`;
}
