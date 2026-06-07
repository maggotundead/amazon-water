import Swiper from 'swiper';
import { Navigation, Pagination, Controller, Mousewheel, Keyboard, FreeMode, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
const swiperModules = [Navigation, Pagination, Controller, Mousewheel, Keyboard, FreeMode, EffectFade];

import * as WOWModule from 'wow.js';
import 'animate.css';
const WOW = WOWModule.default || WOWModule.WOW;


import simpleParallax from 'simple-parallax-js';


// Team Slider
const teamSwiperElement = document.querySelector('.js-team-swiper');
if (teamSwiperElement) {
	new Swiper(teamSwiperElement, {
		modules: swiperModules,
		slidesPerView: 3,
		loop: true,
		draggable: true,
		spaceBetween: 75,
		mousewheel: {
			forceToAxis: true,
		},
		slideToClickedSlide: true,
		keyboard: {
			enabled: true,
			onlyInViewport: true
		},
		pagination: {
			el: '#team-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			prevEl: '#team-prev',
			nextEl: '#team-next',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 48,
			},
			860: {
				slidesPerView: 3,
				spaceBetween: 64,
			},
			1024: {
				spaceBetween: 75,
			}
		}
	});
}

// Product Slider
const productBottleElement = document.querySelector('.js-product-bottle-swiper');
const productInfoElement = document.querySelector('.js-product-info-swiper');

if (productBottleElement && productInfoElement) {
	const productBottleSwiper = new Swiper(productBottleElement, {
		modules: swiperModules,
		slidesPerView: 1,
		loop: true,
		draggable: true,
		slideToClickedSlide: true,
		noSwiping: true,
		keyboard: {
			enabled: true,
			onlyInViewport: true
		},
		pagination: {
			el: '#product-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			prevEl: '#product-prev',
			nextEl: '#product-next',
		},
	});

	const productInfoSwiper = new Swiper(productInfoElement, {
		modules: swiperModules,
		slidesPerView: 1,
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '#product-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			prevEl: '#product-prev',
			nextEl: '#product-next',
		},
	});

	productBottleSwiper.controller.control = productInfoSwiper;
	productInfoSwiper.controller.control = productBottleSwiper;
}



document.querySelector('.burger-btn').addEventListener('click', () => {
	document.querySelector('body').classList.toggle('mobile-menu-open');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.body.classList.contains('mobile-menu-open') && document.body.classList.remove('mobile-menu-open');

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// sticky header
window.onscroll = function() {toggleHeader()};
const header = document.querySelector('header');
window.pageYOffset && header.classList.add('sticky')
const toggleHeader = () => {
	window.pageYOffset > 0 ? header.classList.add('sticky') : header.classList.remove('sticky');
}

// faq tabs
const faqTabs = document.querySelector('.faq-tabs');
if ( faqTabs ) {
	const tabElem = faqTabs.querySelectorAll('.tab');
	const tabBtn = faqTabs.querySelectorAll('.tab-selector');

	tabBtn.forEach( (btn, index) => {
		btn.onclick = function() {
			tabBtn.forEach( btn => btn.classList.remove('active') );
			this.classList.add('active');

			tabElem.forEach( tab => tab.classList.remove('active') );
			tabElem[index].classList.add('active');
		}
	});

	tabElem.forEach(tab => {
		const faqItem = tab.querySelectorAll('.faq-item');
		faqItem.forEach( (item, index) => {
			item.onclick = function(event) {
				if ( event.target.tagName.toLowerCase() === 'a' )  {
					return;
				}
				this.classList.toggle('active');
			}
		});
	});
}
// faq tabs

let wow = new WOW({
	boxClass:     'wow',
	animateClass: 'animate__animated',
	offset:       0,
	mobile:       true,
	live:         true,
	callback:     function(box) {
	},
	scrollContainer: null
});
wow.init();

const images = document.querySelectorAll('.bg img');
new simpleParallax(images, {
	delay: 0,
	orientation: 'down',
	scale: 1.3,
	overflow: true,
	transition: 'cubic-bezier(0,0,0,1)'
	// customContainer: '.container',
	// customWrapper: '.wrapper'
});

window.addEventListener("scroll", function(event) {
	var topDistance = this.pageYOffset;
	var layers = document.querySelectorAll("[data-type='parallax']");

	for (var i = 0; i < layers.length; i++) {
		var layer = layers[i];
		var depth = layer.getAttribute("data-depth");
		var translate3d = 'translate3d(0, ' + -(topDistance * depth) + 'px, 0)';
		layer.style['-webkit-transform'] = translate3d;
		layer.style.transform = translate3d;
	}
});

// advisors slider
const blockAdvisors = document.querySelector('.block-management-advisors');
if (blockAdvisors) {
	const sliderElem = blockAdvisors.querySelector('.swiper-container');
	const advisorsSwiper = new Swiper(sliderElem, {
		modules: swiperModules,
		// slidesPerView: 2,
		slidesPerView: 'auto',
		spaceBetween: 30,
		// loop: true,
		draggable: true,
		freeMode: true,
		observer: true,
		observeParents: true,
		resizeObserver: true,
		draggable: true,

		mousewheel: {
			forceToAxis: true,
		},
		slideToClickedSlide: true,
		keyboard: {
			enabled: true,
			onlyInViewport: true
		},
		navigation: {
			prevEl: '#advisors-prev',
			nextEl: '#advisors-next',
		},
		pagination: {
			el: '#advisors-pagination',
			type: 'bullets',
			clickable: true,
		},
		on: {
			init: function () {
				checkCardsOverflow();
			},
			update: function () {
				checkCardsOverflow();
			}
		}
	});

	function checkCardsOverflow() {
		const descrs = document.querySelectorAll('.person-card-descr');

		descrs.forEach(descr => {
			const card = descr.closest('.person-card');
			if (!card) return;

			// Получаем высоту строки из CSS
			const computedStyle = window.getComputedStyle(descr);
			const lineHeight = parseFloat(computedStyle.lineHeight);

			// Получаем реальную высоту контента
			const scrollHeight = descr.scrollHeight;

			// Вычисляем количество строк
			const linesCount = Math.round(scrollHeight / lineHeight);

			if (linesCount > 9) {
				card.classList.add('is-descr-overflow');
			} else {
				card.classList.remove('is-descr-overflow');
			}
		});
	}

	document.addEventListener('click', function (e) {
		const expandBtn = e.target.closest('.person-card-expand');
		if (!expandBtn) return;

		const card = expandBtn.closest('.person-card');
		if (!card) return;
		card.classList.toggle('is-descr-overflow-expanded');


	});
}

const videoBtn = document.querySelector('.invest-video-btn');
const videoModal = document.querySelector('#modal-video');
if (videoBtn && videoModal) {
	const overlay = videoModal.querySelector('.modal-overlay');
	const videoElem = videoModal.querySelector('video');
	videoElem.muted = true;

	videoBtn.addEventListener('click', () => {
		videoModal.classList.add('active');

		setTimeout(() => {
			videoElem.play()
				.then(() => {
					videoElem.muted = false;
				})
				.catch(error => {
					console.log('autoplay was blocked', error);
					videoElem.muted = true;
					videoElem.play();
				});

		}, 300);
	});

	overlay.addEventListener('click', () => {
		videoElem.pause();
		videoElem.currentTime = 0;
		videoElem.muted = true;

		videoModal.classList.remove('active');
	});

}