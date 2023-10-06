const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/about.html"));
});

app.get("/feedback", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/feedback.html"));
});

app.listen(4000, () => console.log("started"));
