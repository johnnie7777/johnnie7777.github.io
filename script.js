document.addEventListener("DOMContentLoaded", function () {
    // Get the current URL
    let currentPage = window.location.pathname.split("/").pop();
    
    // Get all nav links
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

//dynamic load

document.addEventListener("DOMContentLoaded", function () {
    const language = localStorage.getItem("selectedLanguage") || "en";

    loadEvents(language);
    loadNews(language);

    document.getElementById("language-select").addEventListener("change", function () {
        const selectedLang = this.value;
        localStorage.setItem("selectedLanguage", selectedLang);
        location.reload(); // Reload to apply language switch
    });
});

// Function to load events dynamically
async function loadEvents(lang) {
    try {
        const response = await fetch("events.json");
        const events = await response.json();

        const eventsContainer = document.getElementById("events-list");
        const eventsPageContainer = document.getElementById("events-grid");

        if (eventsContainer) {
            eventsContainer.innerHTML = ""; // Clear previous content
            events.slice(0, 3).forEach(event => { // Show only 3 events on Home page
                eventsContainer.appendChild(createEventCard(event, lang));
            });
        }

        if (eventsPageContainer) {
            eventsPageContainer.innerHTML = ""; // Clear previous content
            events.forEach(event => { // Show all events on Events page
                eventsPageContainer.appendChild(createEventCard(event, lang));
            });
        }
    } catch (error) {
        console.error("Error loading events:", error);
    }
}

// Function to load news dynamically
async function loadNews(lang) {
    try {
        const response = await fetch("news.json");
        const newsItems = await response.json();

        const newsContainer = document.getElementById("news-list");
        const newsPageContainer = document.getElementById("news-grid");

        if (newsContainer) {
            newsContainer.innerHTML = ""; // Clear previous content
            newsItems.slice(0, 2).forEach(news => { // Show only 2 news items on Home page
                newsContainer.appendChild(createNewsCard(news, lang));
            });
        }

        if (newsPageContainer) {
            newsPageContainer.innerHTML = ""; // Clear previous content
            newsItems.forEach(news => { // Show all news on News page
                newsPageContainer.appendChild(createNewsCard(news, lang));
            });
        }
    } catch (error) {
        console.error("Error loading news:", error);
    }
}

// Function to load shop items dynamically
async function loadShop(lang) {
    try {
        const response = await fetch("shop.json");
        const shopItems = await response.json();

        const shopContainer = document.getElementById("shop-grid");
        const homeShopContainer = document.getElementById("home-shop");

        if (homeShopContainer) {
            homeShopContainer.innerHTML = ""; // Clear previous content
            shopItems.slice(0, 4).forEach(item => { // Show only 5 items on Home
                homeShopContainer.appendChild(createShopCard(item, lang));
            });
        }

        if (shopContainer) {
            shopContainer.innerHTML = ""; // Clear previous content
            shopItems.forEach(item => { // Show all items on Shop page
                shopContainer.appendChild(createShopCard(item, lang));
            });
        }
    } catch (error) {
        console.error("Error loading shop items:", error);
    }
}

// Function to create an event card
function createEventCard(event, lang) {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");
    eventCard.innerHTML = `
        <div class="event-image">
            <img src="${event.image}" alt="${event[`title_${lang}`]}">
        </div>
        <h3>${event[`title_${lang}`]}</h3>
        <p><strong>${lang === "en" ? "Date:" : "Datum:"}</strong> ${event.date}</p>
        <p><strong>${lang === "en" ? "Location:" : "Místo:"}</strong> ${event[`location_${lang}`]}</p>
    `;

    //showing expanded on click
    eventCard.addEventListener("click", function () {
        showExpandedEvent(event, lang);
        //window.location.href = `event.html?eventId=${event.id}`;
    });

    return eventCard;
}

// Function to create a news card
function createNewsCard(news, lang) {
    const newsCard = document.createElement("div");
    newsCard.classList.add("news-card");
    newsCard.innerHTML = `
        <h3>${news[`title_${lang}`]}</h3>
        <p><strong>${news.date}</strong></p>
        <p>${news[`content_${lang}`]}</p>
    `;
    return newsCard;
}

// Function to show expanded event
function showExpandedEvent(event, lang) {
    closeExpandedEvent(); // Close any existing expanded event

    const overlay = document.createElement("div");
    overlay.classList.add("expanded-overlay");

    const expandedEvent = document.createElement("div");
    expandedEvent.classList.add("expanded-event");
    expandedEvent.innerHTML = `
        <div class="expanded-image">
            <img src="${event.image}" alt="${event[`title_${lang}`]}">
        </div>
        <h2>${event[`title_${lang}`]}</h2>
        <p><strong>${lang === "en" ? "Date:" : "Datum:"}</strong> ${event.date}</p>
        <p><strong>${lang === "en" ? "Location:" : "Místo:"}</strong> ${event[`location_${lang}`]}</p>
        <p>${event[`description_${lang}`] || ""}</p>
        ${event.facebook_link ? `<p><a href="${event.facebook_link}" target="_blank" ><strong>${lang === "en" ? "More Info" : "Více Info"}</strong></a></p>` : ""}
    `;

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-event");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", closeExpandedEvent);

    document.body.appendChild(overlay);
    document.body.appendChild(expandedEvent);
    document.body.appendChild(closeButton); // Close button is now outside the scrolling container

    // Prevent scrolling on background
    document.body.style.overflow = "hidden";

    // Click outside to close
    overlay.addEventListener("click", closeExpandedEvent);
}

function closeExpandedEvent() {
    document.querySelectorAll(".expanded-overlay, .expanded-event, .close-event").forEach(el => el.remove());
    document.body.style.overflow = ""; // Restore scrolling
}

// Function to create a shop item card
function createShopCard(item, lang) {
    const shopCard = document.createElement("div");
    shopCard.classList.add("shop-card");
    shopCard.innerHTML = `
        <div class="shop-image">
            <img src="${item.image}" alt="${item[`name_${lang}`]}">
        </div>
        <h3>${item[`name_${lang}`]}</h3>
        <p><strong>${lang === "en" ? "Price:" : "Cena:"}</strong> ${item.price}</p>
    `;
    return shopCard;
}

// Load shop items when page loads
document.addEventListener("DOMContentLoaded", function () {
    const language = localStorage.getItem("selectedLanguage") || "en";
    loadShop(language);
});