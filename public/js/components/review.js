class Review extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "closed" });
        const reviewTemplate = this.createArticle();
        shadowRoot.appendChild(reviewTemplate.content.cloneNode(true));
    }

    createArticle() {
        const reviewTemplate = document.createElement("template");
        reviewTemplate.innerHTML = `
        <style>
            div.review-wrapper {
                padding: 1rem;
                min-width: 17rem;
            }
            
            div.review {
                display: flex;
                flex-direction: column;
                width: 100%;
            }
            
            div.review > section {
                width: 100%;
            }
            
            div.review > h3 {
                margin: 0;
            }
            
            div.review > section > p {
                text-align: justify;
                font-size: 1.5rem;
                overflow-wrap: break-word;
            }

            @media (max-width: 350px) {
                div.review-wrapper {
                min-width: 10rem;
                }
            }
        </style>
        <div class="review-wrapper">
            <div class="review">
                <section>
                    <h3>${this.getAttribute("author")}</h3>
                    <p>${this.getAttribute("job")}</p>
                </section>
                <section class="review-text">
                    <p>${this.getAttribute("text")}</p>
                </section>
            </div>
        </div>
        `;
        return reviewTemplate;
    }
}

customElements.define("review-component", Review);
