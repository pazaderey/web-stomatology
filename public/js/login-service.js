class LoginService {
    /**
     * 
     */
    #fetchString;

    /**
     * 
     */
    #wp = document.querySelector("#wrong-password");

    /**
     * 
     */
    #form = document.querySelector("form");

    /**
     * 
     * @param {string} host 
     * @param {number} port 
     */
    constructor(host = "127.0.0.1", port = 3000) {
        this.#fetchString = `http://${host}:${port}/auth`;
    }

    /**
     * @param {Event} event
     */
    async login(event) {
        event.preventDefault();
        event.stopPropagation();

        const data = new FormData(event.target);
        const requestBody = Object.fromEntries(data.entries());
        
        fetch(this.#fetchString + "/login", {
            method: "POST",
            headers: new Headers({"content-type": "application/json"}),
            body: JSON.stringify(requestBody),
        }).then(async (resp) => {
            const token = (await resp.json()).token;
            if (resp.status === 200 && token) {
                window.sessionStorage.setItem("userId", requestBody.login);
                window.sessionStorage.setItem("userToken", token);
                window.location.href = "/profile";
            } else {
                this.wrongPassword(new Error(resp.statusText));
            }
        }).catch(this.wrongPassword.bind(this));
    }

    /**
     * 
     * @param {Error} err 
     */
    async wrongPassword(err) {
        this.#form.reset();
        
        this.#wp.removeAttribute("hidden");
    }

    hideWrongPassword() {
        this.#wp.setAttribute("hidden", true);
    }
}
