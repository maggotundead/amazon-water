
const teamSwiper = new Swiper('.js-team-swiper', {
    slidesPerView: 3,
    loop: true,
    draggable: true,
    spaceBetween: 75,
    // noSwiping: true,
    autoplay: {
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
    },
    mousewheel: {
        forceToAxis: true,
    },
    // noSwiping: true,
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
});

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


//modal
// const contactModal = document.querySelector('.contact-modal');
// document.querySelectorAll('[modal-btn]').forEach(btn => {
//     btn.addEventListener('click', () => {
//         contactModal.classList.add('open');
//     });
// });

// document.querySelectorAll('.modal-close').forEach(btn => {
//     btn.addEventListener('click', () => {
//         document.querySelectorAll('.modal').forEach(modal => {
//             modal.classList.remove('open');
//         });
//     });
// });
// document.querySelectorAll('.modal-overlay').forEach(btn => {
//     btn.addEventListener('click', () => {
//         document.querySelectorAll('.modal').forEach(modal => {
//             modal.classList.remove('open');
//         });
//     });
// });

// const cart = document.querySelector('.cart');
// document.querySelector('.cart-btn').addEventListener('click', () => {
//     cart.classList.toggle('open');
// });

// document.addEventListener('click', function(event) {
//     if ( cart.classList.contains('open') && event.target !== cart && !cart.contains(event.target) ) {
//         cart.classList.remove('open');
//     }
// });

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