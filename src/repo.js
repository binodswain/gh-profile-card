import getData from "./fetch";
import { repoTemplate } from "./component";
import { REPO_STYLE as STYLE } from "./styles";

class Repo extends HTMLElement {
    // static get observedAttributes() {
    //   return ['c', 'l'];
    // }

    fetchUserRepoDetails(user, config) {
        let params = new URLSearchParams("");
        if (config.limit) {
            params.append("per_page", config.limit || 10);
        }
        if (config.sort) {
            params.append("sort", config.sort || "pushed");
        }
        if (config.direction) {
            params.append("direction", config.direction);
        }
        return getData(
            `https://api.github.com/users/${user}/repos?${params.toString()}`,
            "repo",
            user
        );
    }

    constructor() {
        // Always call super first in constructor
        super();
        let shadowRoot = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.textContent = STYLE;
        shadowRoot.appendChild(style);
    }

    renderUI(data, config) {
        this.shadowRoot.innerHTML += repoTemplate(data, config);
    }

    connectedCallback() {
        const user =
            this.parentElement.getAttribute("user") ||
            this.parentElement.parentElement.getAttribute("user");
        const repo_config = this.dataset;

        this.fetchUserRepoDetails(user, repo_config).then((dataRes) => {
            if (!dataRes) {
                //render error screen
                // console.log("Fetch error");
            } else {
                //render ui
                this.renderUI(dataRes, repo_config);
            }
        });
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define("repo-info", Repo);
