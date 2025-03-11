// ******************* swiper 1 *********************
document.addEventListener("DOMContentLoaded", async function () {
    const holidayPackagesContainer = document.getElementById("holiday-packages");

    const holidayPackages = [
        { img: "Images/holidayPackes.jpg", title: "Beautiful Beach" },
        { img: "Images/holidayPackes2.jpg", title: "Mountain Retreat" },
        { img: "Images/holidayPackes3.jpg", title: "City Lights" },
        { img: "Images/holidayPackes4.jpg", title: "Nature Escape" }
    ];

    holidayPackages.forEach(package => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide", "relative");
        slide.innerHTML = `
            <img src="${package.img}" class="w-full h-[240px] object-cover rounded-2xl" alt="${package.title}">
            <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent rounded-b-2xl"></div>
            <p class="absolute bottom-2 left-4 text-white font-medium text-lg">${package.title}</p>
        `;
        holidayPackagesContainer.appendChild(slide);
    });

    var swiper = new Swiper(".swiper1", {
        slidesPerView: 3.5,
        spaceBetween: 20,
        loop: true,
        centeredSlides: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        rtl: true,
        navigation: {
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
        },
        breakpoints: {
            320: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 }
        }
    });

    document.querySelector(".prev-btn").addEventListener("click", function () {
        swiper.slidePrev();
    });

    document.querySelector(".next-btn").addEventListener("click", function () {
        swiper.slideNext();
    });
});


// ************************ offer ************************************


const offers = [
    {
        image: "Images/offerImg4.jpg",
        title: "Deal of The Day",
        description: "Plan your next trip",
        price: "AED 4335"
    },
    {
        image: "Images/offerImg5.jpg",
        title: "Luxury Packages",
        description: "Plan your next trip",
        price: "AED 4335"
    },
    {
        image: "Images/offerImg6.jpg",
        title: "Best Seller Packages",
        description: "Plan your next trip",
        price: "AED 4335"
    }
];

const offersContainer = document.getElementById("offersContainer");

offers.forEach(offer => {
    const card = document.createElement("div");
    card.classList.add("relative");

    card.innerHTML = `
        <img src="${offer.image}" alt="${offer.title}" class="w-full h-72 object-cover rounded-2xl shadow-md">
        <div class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl"></div>
        <div class="absolute bottom-0 w-[95%] md:w-[95%] bg-gray-200/30 backdrop-blur-lg text-white p-4 ml-3 mb-3 rounded-2xl flex justify-between items-end">
            <div>
                <h3 class="text-2xl font-semibold">${offer.title}</h3>
                <p class="text-sm font-normal">${offer.description}</p>
            </div>
            <div>
                <p><span class="text-sm font-normal">from</span> <span class="text-2xl font-[600]">${offer.price}</span></p>
            </div>
        </div>
    `;

    offersContainer.appendChild(card);
});

// ************************** why choose us ********************************************
const whyChooseData = [
    {
        img: "/Images/whychoose1.png",
        title: "Competitive Pricing",
        description: "Enjoy top-notch travel services at unbeatable rates. We prioritize offering the best value for your dream journeys without compromising quality."
    },
    {
        img: "/Images/whychoose2.png",
        title: "Expert Assistance",
        description: "Our experienced travel consultants provide expert guidance and support, ensuring your trips are smooth and stress-free from start to finish."
    },
    {
        img: "/Images/whychoose3.png",
        title: "Worldwide Coverage",
        description: "Explore destinations across the globe with our extensive network of travel partners, offering you unparalleled access to unique experiences."
    }
];

const container = document.getElementById("whyChooseContainer");

whyChooseData.forEach(item => {
    const card = document.createElement("div");
    card.className = "relative w-full h-72 border rounded-3xl border-black bg-[#dfdfdf] flex items-center justify-center text-center p-4";
    card.innerHTML = `
        <div class="flex flex-col items-center gap-2">
            <img src="${item.img}" alt="${item.title}" />
            <h3 class="text-lg font-semibold text-black">${item.title}</h3>
            <p class="text-sm text-gray-700 w-3/4">${item.description}</p>
        </div>
    `;
    container.appendChild(card);
});


// ************************** blogs *********************************************


const blogs = [
    {
        image: "/Images/offerImg5.jpg",
        title: "A Food Lover’s Guide to Culinary Hotspots",
        date: "March 10, 2025",
        description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum.",
        shares: "1K Shares"
    },
    {
        image: "/Images/blog2.jpg",
        title: "The Art of Fine Dining",
        date: "March 15, 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
        shares: "2K Shares"
    },
    {
        image: "/Images/blog3.jpg",
        title: "Discover Hidden Food Gems",
        date: "March 20, 2025",
        description: "Veniam labore exercitation veniam consequat duis nisi ipsum id. Non proident dolor fugiat sit.",
        shares: "900 Shares"
    }
];

const blogContainer = document.getElementById("blogContainer");

blogs.forEach(blog => {
    const blogCard = `
        <div class="p-4">
            <div class="relative w-full h-80">
                <img src="${blog.image}" alt="Blog Image" class="w-full h-80 object-cover">
                <div class="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <div class="flex flex-col items-start justify-start mt-4">
                <h2 class="text-xl font-bold">${blog.title}</h2>
                <p class="text-[#6c757d] text-[13px] mt-3">${blog.date}</p>
                <p class="text-[#6c757d] text-[13px] mt-3 text-left">${blog.description}</p>
                <div class="flex justify-between items-center mt-4 w-full">
                    <button class="text-gray-950 font-medium">View Post</button>
                    <div class="flex items-center gap-2">
                        <img src="/Images/shareIcon.png" class="w-3 h-3"/>
                        <span class="text-[#6c757d] text-[13px]">${blog.shares}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    blogContainer.innerHTML += blogCard;
});

// ********************************* faq ****************************************


document.addEventListener("DOMContentLoaded", function () {
    const faqs = [
        { 
            question: "What is the best time to visit Dubai?", 
            answer: "The best time to visit Dubai is from November to March when the weather is cooler."
        },
        { 
            question: "What is the local currency, and where can I exchange money?", 
            answer: "The local currency is AED (Dirham), and you can exchange money at banks, exchange centers, and airports."
        },
        { 
            question: "What is the main language spoken, and is English widely understood?", 
            answer: "Arabic is the main language, but English is widely spoken and understood."
        },
        { 
            question: "What are the local customs or cultural etiquettes to be aware of?", 
            answer: "Respect local customs, dress modestly, and avoid public displays of affection."
        }
    ];

    const faqContainer = document.getElementById('faq-container');

    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.classList.add("border-b", "border-gray-300", "py-2");

        faqItem.innerHTML = `
            <button class="bg-[#dbdbdb] p-4 flex justify-between items-center w-3/4 text-left text-lg font-medium text-gray-800 focus:outline-none faq-toggle">
                ${faq.question}
                <span class="faq-icon text-[#026DB8]">
                    <img src="/Images/down.png" class="w-10 h-10"/>
                </span>
            </button>
            <p class="hidden mt-2 text-gray-600">${faq.answer}</p>
        `;

        faqContainer.appendChild(faqItem);
    });

    document.querySelectorAll(".faq-toggle").forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector(".faq-icon");
            const isOpen = !answer.classList.contains("hidden");

            document.querySelectorAll(".faq-toggle + p").forEach(p => p.classList.add("hidden"));
            document.querySelectorAll(".faq-icon").forEach(icon => {
                icon.innerHTML = "<img src='/Images/down.png' class='w-10 h-10'/>"; 
            });

            if (!isOpen) {
                answer.classList.remove("hidden");
                icon.innerHTML = "<img src='/Images/drop-up.png' class='w-10 h-10'/>";
            }
        });
    });
});


// ****************************** swiper 2 ********************************************
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper2", {
        slidesPerView: 2.5,  
        spaceBetween: 20,    
        loop: true,          
        centeredSlides: false, 
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        rtl: true,  
        navigation: {
            nextEl: ".next-btn2", 
            prevEl: ".prev-btn2", 
        },
        breakpoints: {
            320: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 }
        }
    });

    document.querySelector(".prev-btn2").addEventListener("click", function () {
        swiper.slidePrev();
    });

    document.querySelector(".next-btn2").addEventListener("click", function () {
        swiper.slideNext();
    });
});


// *********************** swiper 3 ************************************
    
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

    
    


document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();

    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

