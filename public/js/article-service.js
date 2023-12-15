class ArticleService {
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
        this.#fetchString = `http://${host}:${port}/articles`;
    }

    /**
     * 
     */
    async getArticles() {
        const data = await this.#fetchArticles();
        const articleContainer = document.querySelector("section#articles > div");
        for (const article of data) {
            const elem = this.#createArticleElem(article);
            articleContainer.appendChild(elem);
        }
    }

    /**
     * 
     * @returns {Promise<{name: string; job : string; text :string;}[]>}
     */
    async #fetchArticles() {
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
     * @param {{date: string; title: string; authors: string; text: string;}} article 
     */
    #createArticleElem(article) {
        const articleElem = document.createElement("article-component");
        articleElem.setAttribute("date", article.date);
        articleElem.setAttribute("title", article.title);
        articleElem.setAttribute("authors", article.authors);
        articleElem.setAttribute("link", article.link);
        return articleElem;
    }
}