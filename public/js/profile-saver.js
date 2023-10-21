const buttons = document.querySelectorAll("#buttons-wrapper > button");
const form = document.querySelector("form");
form.addEventListener("submit", saveProfile);

//const sexInput = document.querySelector();
const emailInput = document.querySelector("input[type=email]");
const phoneInput = document.querySelector("input[type=tel]");

function addButtons() {
    buttons.forEach(b => {
        b.style.display = "block";
    });
}

function saveProfile(event) {
    event.preventDefault();
    event.stopPropagation();
    buttons.forEach(b => {
        b.style.display = "none";
    });
}
