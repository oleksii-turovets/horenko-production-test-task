// mobile menu bar

const burgerMenuBtn = document.querySelector(".menu-burger-btn");
const header = document.querySelector("header");
const mobileMenu = document.querySelector(".nav ul.mobile");

burgerMenuBtn.addEventListener("click", function () {
    console.log("click");
    burgerMenuBtn.classList.toggle("menu-opened");
    header.classList.toggle("mobile-nav-opened");
    mobileMenu.classList.toggle("mobile-menu-shown");
});

// selection of language

let chosenLanguageClass = "language-ua";

const langBtnsUa = document.querySelectorAll(".language-ua");
const langBtnsRu = document.querySelectorAll(".language-ru");
const langBtns = document.querySelectorAll(".select-language button");

addSelectedLanguageClass();

langBtns.forEach((item) =>
    item.addEventListener("click", function () {
        if (item.classList.contains("selected-language")) {
            void 0;
        } else {
            chosenLanguageClass = item.classList[0];
            addSelectedLanguageClass();
        }
    })
);

function addSelectedLanguageClass() {
    langBtns.forEach((item) =>
        item.classList.contains(chosenLanguageClass)
            ? item.classList.add("selected-language")
            : item.classList.remove("selected-language")
    );
}

//slider

const swiper = new Swiper(".advert-slider", {
    // speed: 400,
    // spaceBetween: 50,

    // autoplay: {
    //     delay: 5000,
    // },

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
});

// pop-up

const popUpWindow = document.querySelector(".pop-up");
const confirmBtn = document.querySelector(".pop-up .cookie-agree");

function openPopUpWindow() {
    setTimeout(() => popUpWindow.classList.add("opened-pop-up"), 5000);
}

confirmBtn.addEventListener("click", function () {
    popUpWindow.classList.remove("opened-pop-up");
});

openPopUpWindow();

// contact form

const contactFormBtn = document.querySelector(".contact-me-btn");
const contactForm = document.querySelector(".contacts-form");
const contactFormWindow = document.querySelector(".contacts-form .form");
const contactSuccessWindow = document.querySelector(
    ".contacts-form .success-window"
);
const closeContactFormWindowBtn = document.querySelector(
    ".contacts-form .close-btn"
);
const submitContactFormBtn = document.querySelector(
    ".contacts-form .form .submit-form-btn"
);
const inputFields = document.querySelectorAll(".input-field");
const nameInputField = document.getElementById("name");
const phoneInputField = document.getElementById("phone");

contactFormBtn.addEventListener("click", function () {
    contactForm.classList.add("contacts-form-opened");
    contactFormWindow.classList.add("form-opened");
});

closeContactFormWindowBtn.addEventListener("click", function () {
    contactForm.classList.remove("contacts-form-opened");
    contactFormWindow.classList.remove("form-opened");
});

submitContactFormBtn.addEventListener("click", function (event) {
    if (nameInputField.validity.valueMissing) {
        event.preventDefault();
        nameInputField.classList.add("invalid");
    } else if (phoneInputField.validity.valueMissing) {
        event.preventDefault();
        phoneInputField.classList.add("invalid");
    } else if (
        !nameInputField.classList.include("invalid") ||
        !phoneInputField.classList.include("invalid")
    ) {
        event.preventDefault();
    } else {
        void 0;
    }
});

contactSuccessWindow.addEventListener("click", function () {
    contactSuccessWindow.classList.remove("success-window-opened");
    contactForm.classList.remove("contacts-form-opened");
});

contactFormWindow.addEventListener("submit", (event) => {
    event.preventDefault();
    contactFormWindow.classList.remove("form-opened");
    setTimeout(
        () => contactSuccessWindow.classList.add("success-window-opened"),
        500
    );
    setTimeout(
        () => contactSuccessWindow.classList.remove("success-window-opened"),
        3000
    );
    setTimeout(
        () => contactForm.classList.remove("contacts-form-opened"),
        3000
    );
});

nameInputField.addEventListener("focusout", (event) => {
    if (nameInputField.validity.valueMissing) {
        nameInputField.classList.add("invalid");
    } else {
        nameInputField.classList.remove("invalid");
    }
});
phoneInputField.addEventListener("focusout", (event) => {
    if (
        phoneInputField.validity.patternMismatch ||
        phoneInputField.validity.valueMissing
    ) {
        phoneInputField.classList.add("invalid");
    } else {
        phoneInputField.classList.remove("invalid");
    }
});

nameInputField.addEventListener("focus", (event) => {
    nameInputField.classList.remove("invalid");
});
phoneInputField.addEventListener("focus", (event) => {
    phoneInputField.classList.remove("invalid");
});
