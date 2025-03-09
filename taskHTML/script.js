
    document.addEventListener("DOMContentLoaded", function () {
        new Swiper(".swiper", {
            slidesPerView: 3.5,  // Show 3 full images + 1/2 of 4th
            spaceBetween: 20,    // Gap between slides
            loop: true,          // Infinite scrolling
            centeredSlides: false, // No centering, moves naturally
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            // },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                320: { slidesPerView: 1.2 },
                480: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3.5 }
            }
        });
    });

    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    
    let upto = 0;
    let counts = setInterval(updated, 0);

    function updated() {
        let count = document.getElementById("counter");
        count.innerHTML = ++upto;
        if (upto === 5000) {
            clearInterval(counts);
        }
    }
