const translations = {
    en: {
        home: "Home",
        events: "Events",
        news: "News",
        shop: "Shop",
        contact: "Contact",
        aboutus: "About Us",
        phone: "Phone: ",
        phonewnum: "Phone: 775 988 070",
        followus: "Follow Us",
        conditions: "Conditions",
        terms: "Terms and Conditions",
        privacypolicy: "Privacy Policy",
        rights: "2025 DORNYCHSTAR. All rights reserved.",
        hero: "DORNYCHSTAR PRODUCTION",
        showmore: "Show More",
        upcoming_events: "Upcoming Events",
        news_updates: "News & Updates",
        photo_highlights: "Photo Highlights",
        shop_merchandise: "Shop Merchandise",
        latestnews: "Latest News",
        date: "Date: ",
        location: "Location: ",
        merchandise: "You can buy merchendise at concerts. The images are for reference only, we cannot accurately determine the condition of the merch at individual events. If you're interested in specific items, let us know! :)",
        aboutDS: "About DORNYCHSTAR",
        lore: 'Behind the brand DORNYCHSTAR and the company EXPLOADE s.r.o. stands Dan "Principal" Halamíček – a lifelong rock music enthusiast and an experienced entrepreneur in the field of music merchandise, textile and leather production, and retail. He started his business back in 1990 and has been active in the industry for nearly 35 years, going through several key phases. From the initial biker leather goods production in the 1990s, he gradually expanded into a retail network specializing in leather products – the first store was aptly named "Leather Things for Everyone." A major shift towards the rock scene came with the arrival of Jaromír "Jay Jay" Jirák, a prominent Moravian vinyl record collector, who steered the company towards a deeper connection with rock music. Today, DORNYCHSTAR is fully dedicated to organizing concerts and events, and, if the rock gods allow, we plan to continue in this spirit for future generations – until the proverbial end of the world.',
    },
    cz: {
        home: "Domů",
        events: "Akce",
        news: "Aktuality",
        shop: "Obchod",
        contact: "Kontakt",
        aboutus: "O nás",
        phone: "Telefon:",
        phonewnum: "Telefon: 775 988 070",
        followus: "Sledujte nás",
        conditions: "Podmínky",
        terms: "Obchodní podmínky",
        privacypolicy: "Pravidla ochrany soukromí",
        rights: "2025 DORNYCHSTAR. Všechna práva vyhrazena.",
        hero: "DORNYCHSTAR PRODUKCE",
        showmore: "Ukázat Více",
        upcomingevents: "Nadcházející Události",
        news_updates: "Novinky & Aktualizace",
        photo_highlights: "Galerie Fotek",
        shop_merchandise: "Obchod s Merchem",
        latestnews: "Nejnovější zprávy",
        date: "Datum: ",
        location: "Lokace: ",
        merchandise: "Na koncertech je možnost zakoupení zboží, oblečení a merche kapel. Obrázky jsou pouze orientační, stav zboží na jednotlivých akcích nemůžeme přesně určit. V případě zájmu o konkrétní kusy dejte vědět :)",
        aboutDS: "O společnosti DORNYCHSTAR",
        lore: 'Za značkou DORNYCHSTAR a společností EXPLOADE s.r.o. stojí Dan "Principál" Halamíček – celoživotní nadšenec do rockové hudby a zkušený podnikatel v oblasti hudebního merchandise, textilní i kožedělné výroby a maloobchodu. Své podnikání zahájil už v roce 1990 a od té doby se v oboru pohybuje bezmála 35 let, přičemž prošel několika klíčovými etapami. Od počáteční motorkářské galanterní výroby v devadesátých letech se postupně rozšířil k maloobchodní síti zaměřené na kožené zboží – první prodejna nesla příznačný název "Kožené věcičky pro všechny lidičky". Zásadní posun směrem k rockové scéně nastal s příchodem Jaromíra "Jay Jay" Jiráka, významného moravského sběratele vinylových desek, který firmu nasměroval k hlubšímu propojení s rockovou hudbou. Společnost DORNYCHSTAR se tak dnes plně věnuje pořádání koncertů a akcí, přičemž, pokud nám bigbítový pánbůh dopřeje, plánujeme v tomto duchu pokračovat i pro budoucí generace – až do příslovečného konce světa.',
    }
};

// Function to apply the selected language
function applyLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang); // Save to local storage
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Function to initialize language settings
function initializeLanguage() {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Default to English
    document.getElementById("language-select").value = savedLanguage; // Set dropdown
    applyLanguage(savedLanguage);
}

// Event listener for dropdown change
document.getElementById("language-select").addEventListener("change", function () {
    applyLanguage(this.value);
});

// Load the selected language on page load
document.addEventListener("DOMContentLoaded", initializeLanguage);