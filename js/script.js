// ==========================================
// GOKUL SWEETS - PRODUCT PRICES
// ==========================================

const sweetPrices = {
    "kaju-katli": 800,
    "laddu": 400,
    "milk-cake": 500,
    "rasmalai": 400,
    "peda": 450,
    "rasgulla": 300,
    "kalakand": 500,
    "gulab-jamun": 350
};


// ==========================================
// DISPLAY PRICES ON WEBSITE
// ==========================================

document.querySelectorAll(".price").forEach(function (priceElement) {

    const sweetName = priceElement.dataset.sweet;

    if (sweetPrices[sweetName] !== undefined) {

        priceElement.textContent =
            "₹" + sweetPrices[sweetName] + " / kg";

    }

});



