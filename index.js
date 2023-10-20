const express = require("express");
const path = require("path");

const app = express();

const AVAILABLE_URLS = new Set([
    "/index",
    "/about",
    "/feedback",
    "/help",
    "/detect",
    "/login",
]);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))

app.get(/.+/, (req, res) => {
    const url = req.url === "/" ? "/index" : req.url;
    if (!AVAILABLE_URLS.has(url)) {
        res.sendFile(path.join(__dirname, "public/html/not-found.html"));
        return;
    }
    res.sendFile(path.join(__dirname, `public/html${url}.html`));
});

app.post("/form", (req, res) => {
    console.log("got form");
    globalThis.setTimeout(() => {
        console.log("responded");
        res.sendStatus(200);
    }, 5000);
    
});

app.listen(4000, () => console.log("started on 4000"));
