/*
Kyler Hanson
FAQ simulated image swapper
https://github.com/kyhans07/Smartwatch-FAQ-
https://github.com/kyhans07/
Desc: Frequently asked questions page that switches imaged based on the question selected.
Allows user to expand and shrink question to display answers if desired.
 */


// SETUP GLOBAL VARIABLES

const faqImage = document.querySelector("#full-width-img");
const faqImageOrigSrc = faqImage.src;
const faqImageOrigAlt = faqImage.alt;
const h2s = document.querySelectorAll("#faqs h2");

// SETUP THE EVENT HANDLER (When an H2 is clicked)
const toggleVisibility = evt => {

    const ct = evt.currentTarget; // what the user clicked

    let allClosed = false; // allows for default image

    // loops through h2 headings
    for (let h2 of h2s) {

        if (h2 === ct) { //checks if it is open

            if (h2.classList.contains('minus')) {
                allClosed = true;
            }

            h2.classList.toggle('minus');

            h2.nextElementSibling.classList.toggle("open");

            faqImage.src = h2.getAttribute("data-img");
            faqImage.alt = h2.getAttribute("data-alt");
        }
        else{
            h2.classList.remove('minus');
            h2.nextElementSibling.classList.remove("open");
        }
    }

    if (allClosed) {
        faqImage.src = faqImageOrigSrc
        faqImage.alt = faqImageOrigAlt
    }

    evt.preventDefault();
}

// INITIALIZATION - WHEN THE PAGE LOADS
document.addEventListener("DOMContentLoaded", () => {
    for (let h2 of h2s) {
        h2.addEventListener("click", toggleVisibility);
    }
});