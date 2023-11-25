function addButtons() {
    document.querySelectorAll("#buttons-wrapper > button").forEach(b => {
        b.style.display = "block";
    });
}
const rows = document.querySelectorAll("tbody tr");

for (let i = 0; i < rows.length; i += 2) {
    rows[i].style.backgroundColor = "#DCDCDC";
}
