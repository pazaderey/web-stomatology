const area = document.getElementById("drop-area");
const gallery = document.getElementById("gallery");

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

    uploadFile(files[0]);
    previewFile(files[0]);
}

/**
 * @param {File} file 
 */
function uploadFile(file) {
    const data = new FormData();
    data.append('file', file);

    fetch("/form", {
        method: "POST",
        body: data,
    })
    .then(console.log);
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
        img.style.height = "100%";
        gallery.innerHTML = "";
        gallery.appendChild(img);
    }
}
