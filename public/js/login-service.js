class LoginService {
    #fetchString;

    /**
     * 
     * @param {string} host 
     * @param {number} port 
     */
    constructor(host = "127.0.0.1", port = 3000) {
        this.#fetchString = `http://${host}:${port}/auth`;
    }

    /**
     * @param {HTMLFormElement} form
     * @param {Event} event
     */
    async login(form, event) {
        event.preventDefault();
        event.stopPropagation();

        const data = new FormData(event.target);
        const requestBody = Object.fromEntries(data.entries());
        
        fetch(this.#fetchString + "/login", {
            method: "POST",
            headers: new Headers({"content-type": "application/json"}),
            body: JSON.stringify(requestBody)
        }).then((resp) => {
            if (resp.status !== 403) {
                window.location.href = "/profile";
            } else {
                console.error(resp.status, resp.statusText);
                form.reset()
            }
        });
    }
}
