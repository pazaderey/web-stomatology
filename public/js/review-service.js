class ReviewService {
    /**
     * 
     */
    #fetchString = "";

    /**
     * 
     * @param {string} host 
     * @param {number} port 
     */
    constructor(host = "127.0.0.1", port = 3000) {
        this.#fetchString = `http://${host}:${port}/reviews`;
    }

    /**
     * 
     */
    async getReviews() {
        const data = await this.#fetchReviews();
        const reviewsContainer = document.querySelector("section.reviews-container");
        if(data.length === 0) {
            const emptyElem = this.#createEmptyReviews();
            reviewsContainer.appendChild(emptyElem);
            return;
        }
        for (const review of data) {
            const elem = this.#createReviewElem(review);
            reviewsContainer.appendChild(elem);
        }
    }

    /**
     * @param {Event} event
     */
    async addReview(event) {
        event.preventDefault();
    
        const data = new FormData(event.target);
        const requestBody = Object.fromEntries(data.entries());
    
        fetch(this.#fetchString, {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(requestBody),
        }).then(async (resp) => {
            if (resp.status >= 200 && resp.status < 300) {
                form.innerHTML = "Спасибо!";
                form.classList.add("submitted");
            } else {
                console.error(await resp.json());
                alert("Что-то пошло не так :(");
                window.location.href = "/";
            }
        });

        this.#addLoader();
    }

    /**
     * 
     * @returns {Promise<{name : string;job : string;text : string;}[]>}
     */
    async #fetchReviews() {
        try {
            const resp = await fetch(this.#fetchString, {
                method: "GET"
            }).catch((e) => e);
            return resp.json();
        } catch(e) {
            console.error(e);
            return [];
        }
    }

    /**
     * 
     * @returns 
     */
    #createEmptyReviews() {
        const emptyText = document.createElement("h2");
        emptyText.innerText = "Пока что здесь пусто...";

        const emptyElem = document.createElement("div");
        emptyElem.appendChild(emptyText);

        return emptyElem;
    }

    /**
     * @param {{name : string;job : string;text : string;}} review 
     */
    #createReviewElem(review) {
        const reviewElem = document.createElement("review-component");
        reviewElem.setAttribute("author", review.name);
        reviewElem.setAttribute("job", review.job);
        reviewElem.setAttribute("text", review.text);
        return reviewElem;
    }

    /**
     * 
     */
    #addLoader() {
        const buttonHolder = document.querySelector("div#button-holder");

        const loader = document.createElement("img");
        loader.classList.add("loader");
        loader.src = "../img/loading.gif";
        loader.style.width = "4rem";
        buttonHolder.innerHTML = '';
        buttonHolder.appendChild(loader);
    }
}
