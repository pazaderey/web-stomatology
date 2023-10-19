const form = document.querySelector("form");
form.addEventListener("submit", sendFormData);

function sendFormData(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const requestBody = Object.fromEntries(data.entries());

    fetch("/form", {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(requestBody),
    }).then((resp) => {
        if (resp.status >= 200 && resp.status < 300) {
            form.innerHTML = "Спасибо!";
            form.style.transition = "height 0.5s ease-in-out";
            form.style.height = "2rem";
        } else {
            alert("Что-то пошло не так :(");
            window.location.href = "/";
        }
    });
}

//height: 25rem;