const express = require("express");
const path = require("path");

const app = express();

const AVAILABLE_URLS = new Set(["/index", "/about", "/feedback", "/help", "/detect", "/login"]);

app.use(express.static(path.join(__dirname, "public")))

app.get(/.+/, (req, res) => {
    const url = req.url === "/" ? "/index" : req.url;
    if (!AVAILABLE_URLS.has(url)) {
        res.sendFile(path.join(__dirname, "public/html/not-found.html"));
        return;
    }
    res.sendFile(path.join(__dirname, `public/html${url}.html`));
});

app.listen(4000, () => console.log("started"));
