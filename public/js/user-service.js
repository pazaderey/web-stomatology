class UserService {
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
        this.#fetchString = `http://${host}:${port}/user`;
    }

    /**
     * 
     */
    async getUser() {
        const userLogin = window.sessionStorage.getItem("userId");
        const userToken = window.sessionStorage.getItem("userToken");
        if(userLogin === null || userToken === null) {
            window.sessionStorage.removeItem("userId");
            window.sessionStorage.removeItem("userToken");
            window.location.href = "/login";
            return;
        }

        const data = await fetch(this.#fetchString + `?login=${userLogin}`, {
            method: "GET",
            headers: new Headers({"x-access-token" : userToken}),
        });
        if (data.status !== 200) {
            window.sessionStorage.removeItem("userId");
            window.sessionStorage.removeItem("userToken");
            window.location.href = "/login";
            return;
        }

        const user = await data.json();
        
        const profileForm = document.querySelector("form#profile-form");
        profileForm.addEventListener("submit", service.saveUser.bind(service));

        const nameInput = profileForm.querySelector("input[name='name']");
        nameInput.value = user.name;

        const emailInput = profileForm.querySelector("input[name='email']");
        emailInput.value = user.email;

        const phoneInput = profileForm.querySelector("input[name='phone']");
        phoneInput.value = user.phone;

        const sexInput = profileForm.querySelector(`option[value=${user.sex}]`);
        sexInput.selected = true;
    }

    /**
     * @param {Event} event
     */
    async saveUser(event) {
        document.querySelectorAll("#buttons-wrapper > button").forEach(b => {
            b.style.display = "none";
        });

        event.preventDefault();
        event.stopPropagation();

        const data = new FormData(event.target);
        const requestBody = Object.fromEntries(data.entries());
        console.log(requestBody);
        const token = window.sessionStorage.getItem("userToken");
        if(!token) {
            return;
        }

        const login = window.sessionStorage.getItem("userId");
        requestBody.login = login;

        await fetch(this.#fetchString, {
            method: "PATCH",
            headers: new Headers({
                "content-type": "application/json",
                "x-access-token": token
            }),
            body: JSON.stringify(requestBody),
        });
    }

    /**
     * @param {Event} event
     */
    async inviteUser(event) {
        event.preventDefault();
        event.stopPropagation();

        const data = new FormData(event.target);
        const requestBody = Object.fromEntries(data.entries());
        const token = window.sessionStorage.getItem("userToken");
        if(!token) {
            return;
        }
        fetch(`http://localhost:3000/auth/invite?email=${requestBody.email}`, {
            method: "POST",
            headers: new Headers({"x-access-token": token}),
        }).then((resp) => console.log(resp.status));
    }

    quit() {
        window.sessionStorage.removeItem("userId");
        window.sessionStorage.removeItem("userToken");
        window.location.href = "/login";
    }
}
