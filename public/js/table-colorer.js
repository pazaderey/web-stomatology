const rows = document.querySelectorAll("tbody tr");

for (let i = 0; i < rows.length; i += 2) {
    rows[i].style.backgroundColor = "#DCDCDC";
}
