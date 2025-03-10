
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
    


document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    let currentPage = window.location.pathname.split("/").pop();

    // Get all navigation links
    let navLinks = document.querySelectorAll(".nav-link");

    // Loop through links and add "active" class if the href matches the current page
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const blogData = [
        {
            title: "5 Hidden Gems in Dubai You Need to Visit",
            description: "Discover Dubai beyond the skyscrapers and luxury shopping—explore secret spots that will leave you in awe",
            date: "10 March 2025",
            shares: "1K Shares",
            image: "/Images/blog1.jpg"
        },
        {
            title: "5 Hidden Gems in Dubai You Need to Visit",
            description: "From fun-filled theme parks to serene beaches, here’s how to make the most of your family vacation in the UAE",
            date: "11 March 2025",
            shares: "500 Shares",
            image: "/Images/aboutblog2.jpg"
        },
        {
            title: "5 Hidden Gems in Dubai You Need to Visit",
            description: "All the essentials for a smooth European journey—visa requirements, application tips, and insider advice",
            date: "12 March 2025",
            shares: "750 Shares",
            image: "/Images/aboutblog3.jpg"
        },
        {
            title: "5 Hidden Gems in Dubai You Need to Visit",
            description: "Experience the ultimate in luxury with private tours, 5-star resorts, and exclusive experiences in the UAE",
            date: "10 March 2025",
            shares: "1K Shares",
            image: "/Images/aboutblog4.png"
        },
        {
            title: "5 Hidden Gems in Dubai You Need to Visit",
            description: "From fun-filled theme parks to serene beaches, here’s how to make the most of your family vacation in the UAE",
            date: "11 March 2025",
            shares: "500 Shares",
            image: "/Images/aboutblog2.jpg"
        },
        {
            title: "5 Hidden Gems in Dubai You Need to Visit",
            description: "From fun-filled theme parks to serene beaches, here’s how to make the most of your family vacation in the UAE",
            date: "12 March 2025",
            shares: "750 Shares",
            image: "/Images/aboutblog2.jpg"
        }
    ];

    const cardContainer = document.getElementById("cardContainer");

    blogData.forEach((blog) => {
        const card = document.createElement("div");
        card.classList.add("flex",  "p-4" );

        card.innerHTML = `
            <div class=" flex flex-col md:flex-row w-full">
                <img src="${blog.image}" class="w-56 aspect-[3/2] object-cover rounded-lg" />

                <div class="ml-4 ">
                    <h3 class="font-bold text-lg">${blog.title}</h3>
                    <p class="text-gray-600 text-sm mt-3">${blog.description}</p>
                    <p class="text-xs text-gray-500 mt-4 mb-4">Published on: ${blog.date}</p>
                    <div class="flex justify-between items-center mt-4">
                        <button class="text-gray-950 font-medium bg-[#026db8] text-white px-4 py-2 rounded-full">View Post</button>
                        <div class="flex items-center gap-2">
                            <img src="/Images/shareIcon.png" class="w-3 h-3"/>
                            <span class="text-[#6c757d] text-[13px]">${blog.shares}</span>
                        </div>
                    </div>
                </div>
            </div>

            
        `;

        cardContainer.appendChild(card);
    });
});

