// ********************* blog data in About us ************************************************

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
    if (!cardContainer) {
        console.error("Error: #cardContainer not found in the DOM.");
        return;
    }
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



document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();

    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});