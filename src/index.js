// https://api.github.com/users/binodswain/repos

import getData from "./fetch";
import { profileTemplate } from "./component";
import { PROFILE_STYLE as STYLE } from "./styles";

import "./repo";

// Create a class for the element
class Github extends HTMLElement {
    get user() {
        return this.getAttribute("user");
    }

    constructor() {
        super();
    }
}

customElements.define("github-w", Github);

class Profile extends HTMLElement {
    fetchUserDetails(user) {
        return getData("https://api.github.com/users/" + user, "profile", user);
    }

    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.textContent = STYLE;
        shadowRoot.appendChild(style);
    }

    renderUI(data, profile_cofig) {
        this.shadowRoot.innerHTML += profileTemplate(data, profile_cofig);
    }

    connectedCallback() {
        const user = this.parentElement.getAttribute("user");
        const profile_cofig = this.dataset;
        this.fetchUserDetails(user).then((dataRes) => {
            if (!dataRes) {
                //render error screen
                // console.log("Fetch error");
            } else {
                //render ui
                this.renderUI(dataRes, profile_cofig);
            }
        });
    }
}

customElements.define("profile-info", Profile);
