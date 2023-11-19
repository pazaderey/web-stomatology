class Article extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "closed" });
        const articleTemplate = this.createArticle();
        shadowRoot.appendChild(articleTemplate.content.cloneNode(true));
    }

    createArticle() {
        const articleTemplate = document.createElement("template");
        articleTemplate.innerHTML = `
        <style>
            button:hover, .button:hover {
                background-color: #bd81c9;
            }

            a.black-link {
                text-decoration-color: #000000;
                color: #000000;
            }

            button, .button {
                background-color: inherit;
                border: 3px solid var(--additional-color);
                border-radius: 20px;
                cursor: pointer;
                transition: background-color 0.2s linear;
            }

            .article-container {
                padding: 5%;
            }
            
            .article-container > h5 {
                margin: 0;
                padding-top: 1%;
                font-size: 1.3rem;
            }
            
            .article-container > label {
                display: block;
                height: 2rem;
                width: 10rem;
                text-align: center;
                font-size: 1.3rem;
            }
            
            .article-container > label > a {
                text-decoration-line: none;
            }
            
            p.article-date {
                margin: 0;
                font-size: 1rem;
            }
            
            p.article-authors {
                padding-top: 2%;
                margin: 0;
                font-size: 1rem;
                color: gray;
                padding-bottom: 5%;
            }
        </style>
        <div class="article-container">
            <p class="article-date">${this.getAttribute("date")}</p>
            <h5>${this.getAttribute("title")}</h5>
            <p class="article-authors">${this.getAttribute("authors")}</p>
            <label class="button"><a class="black-link"
                    href="${this.getAttribute("link")}"
                    target="_blank">Ознакомиться</a></label>
        </div>
        `;
        return articleTemplate;
    }
}

customElements.define("article-component", Article);

