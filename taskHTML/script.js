
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper1", {
        slidesPerView: 3.5,  // Show 3 full images + 1/2 of 4th
        spaceBetween: 20,    
        loop: true,          
        centeredSlides: false, 
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true, // Moves Right to Left
        },
        rtl: true,  // Enables right-to-left movement
        navigation: {
            nextEl: ".next-btn", // Custom button class
            prevEl: ".prev-btn", // Custom button class
        },
        breakpoints: {
            320: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 }
        }
    });

    // Attach event listeners to buttons
    document.querySelector(".prev-btn").addEventListener("click", function () {
        swiper.slidePrev();
    });

    document.querySelector(".next-btn").addEventListener("click", function () {
        swiper.slideNext();
    });
});



document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper2", {
        slidesPerView: 2.5,  // Show 3 full images + 1/2 of 4th
        spaceBetween: 20,    
        loop: true,          
        centeredSlides: false, 
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true, // Moves Right to Left
        },
        rtl: true,  // Enables right-to-left movement
        navigation: {
            nextEl: ".next-btn2", // Custom button class
            prevEl: ".prev-btn2", // Custom button class
        },
        breakpoints: {
            320: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 }
        }
    });

    // Attach event listeners to buttons
    document.querySelector(".prev-btn2").addEventListener("click", function () {
        swiper.slidePrev();
    });

    document.querySelector(".next-btn2").addEventListener("click", function () {
        swiper.slideNext();
    });
});


    // document.addEventListener("DOMContentLoaded", function () {
    //     new Swiper(".swiper2", {
    //         slidesPerView: 2.2,  // Show 3 full images + 1/2 of 4th
    //         spaceBetween: 20,    // Gap between slides
    //         loop: true,          // Infinite scrolling
    //         centeredSlides: false, // No centering, moves naturally
    //         autoplay: {
    //             delay: 3000,
    //             disableOnInteraction: false,
    //         },
    //         navigation: {
    //             nextEl: ".swiper-button-next",
    //             prevEl: ".swiper-button-prev",
    //         },
    //         breakpoints: {
    //             320: { slidesPerView: 1.2 },
    //             480: { slidesPerView: 1.5 },
    //             768: { slidesPerView: 2.5 },
    //             1024: { slidesPerView: 2.2 }
    //         }
    //     });
    // });
    
    document.addEventListener("DOMContentLoaded", function () {
        console.log("Initializing Swiper...");
        new Swiper(".swiper3", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true,
            centeredSlides: false,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                480: { slidesPerView: 1 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 }
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

    document.querySelectorAll(".faq-toggle").forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector(".faq-icon");
            const isOpen = !answer.classList.contains("hidden");
    
            // Hide all other answers and reset arrows
            document.querySelectorAll(".faq-toggle + p").forEach(p => p.classList.add("hidden"));
            document.querySelectorAll(".faq-icon").forEach(icon => {
                icon.innerHTML = "<img src='/Images/down.png' class='w-10 h-10'/>"; // Default Down Arrow
            });
    
            // Toggle the current answer
            if (!isOpen) {
                answer.classList.remove("hidden");
                icon.innerHTML = "<img src='/Images/drop-up.png' class='w-10 h-10'/>"; // Change to Up Arrow
            }
        });
    });
    

