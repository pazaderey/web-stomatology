const area = document.getElementById("drop-area");
const gallery = document.getElementById("gallery");
const form = document.getElementById("detect-form");

["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    area.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
}

["dragenter", "dragover"].forEach((eventName) => {
    area.addEventListener(eventName, highlight, false);
});

function highlight(event) {
    area.classList.add("highlight");
}

["dragleave", "drop"].forEach((eventName) => {
    area.addEventListener(eventName, unHighlight, false);
});

function unHighlight(event) {
    area.classList.remove("highlight");
}

area.addEventListener("drop", handleDrop, false);

function handleDrop(event) {
    const dt = event.dataTransfer;
    const files = dt.files;

    uploadFile(files[0]).then(() => {
        form.innerHTML = '';
        previewFile(files[0]);
    });
    startLoading();
}

function startLoading() {
    form.innerHTML = "";
    area.style.backgroundImage = "none";
    const loader = document.createElement("img");
    loader.classList.add("loader");
    loader.src = "../img/loading.gif";
    form.appendChild(loader);
}

/**
 * @param {File} file 
 */
async function uploadFile(file) {
    const data = new FormData();
    data.append("detect-image", file);

    return fetch("http://localhost:3000/detection", {
        method: "POST",
        body: data,
    });
}

/**
 * @param {File} file 
 */
function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        const img = document.createElement("img");
        img.src = reader.result;
        img.style.width = "100%";
        form.style.minHeight = "0rem";
        gallery.innerHTML = "";
        gallery.appendChild(img);
    }
}
