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
    "/profile",
]);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))

app.get(/.+/, (req, res) => {
    const url = req.path === "/" ? "/index" : req.path;
    if (!AVAILABLE_URLS.has(url)) {
        res.sendFile(path.join(__dirname, "public/html/not-found.html"));
        return;
    }
    res.sendFile(path.join(__dirname, `public/html${url}.html`));
});

app.post("/form", (req, res) => {
    globalThis.setTimeout(() => {
        res.sendStatus(200);
    }, 5000);
    
});

app.listen(4000, () => console.log("started on 4000"));
