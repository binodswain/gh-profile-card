'use strict';

const profile_data = [
    "bio",
    "avatar_url",
    "blog",
    "created_at",
    "html_url",
    "name",
    "public_repos",
    "repos_url",
    "followers",
    "following",
    "company"
];

const repo_data = [
    "description",
    "forks_count",
    "html_url",
    "language",
    "name",
    "pushed_at",
    "stargazers_count",
    "updated_at",
    "watchers_count"
];

const getData = (url, type, user) => {
    return fetch(url)
        .then(function(response) {
            if (response.status !== 200) {
                // console.log(
                //     "Looks like there was a problem. Status Code: " +
                //         response.status
                // );
                return;
            }

            // Examine the text in the response
            return response.json().then(function(data) {
                if (type === "profile") {
                    let userdata = {};
                    profile_data.forEach((key) => {
                        userdata[key] = data[key];
                    });
                    return userdata;
                } else if (type === "repo") {
                    // console.log(data);
                    return data.map((repo) => {
                        let repodata = {};
                        repo_data.forEach((key) => {
                            repodata[key] = repo[key];
                        });

                        return repodata;
                    });
                }
            });
        })
        .catch(function(err) {
            // console.log("Fetch Error", err);
        });
};

const profileTemplate = (
    data,
    {
        theme = "light",
        bio: showBio = "true",
        // location = "false",
        company: showCompany = "true",
        showstats: showStats = "true"
    }
) => {
    const {
        avatar_url = "", name, bio, company, html_url } = data;
    const bioData =
        showBio.toLowerCase() === "true" ? `<div class="bio">${bio}</div>` : "";
    const companyData =
        showCompany.toLowerCase() === "true"
            ? `<div class="company">
                <a href="https://github.com/${company.slice(
                    1
                )}" class="link" target="_blank">${company.slice(1)}</a>
            </div>`
            : "";
    const statsData =
        showStats.toLowerCase() === "true" ? profileStats(data) : "";

    return `<div class="${theme}-themed">
    <div class="profile-wrapper">
        <div class="img-wrapper">
            <img src="${avatar_url}" class="profile-pic">
        </div>
        <div class="userdetails-wrapper">
            <div class="name">${name}</div>
            ${bioData}
            ${companyData}
        </div>
    </div>
    ${statsData}
    <div class="profile-btn-wrapper">
        <a href="${html_url}" class="button profile-button" target="_blank">View profile</a>
    </div>
    <slot></slot>
</div>`;
};

const profileStats = ({
    html_url,
    public_repos,
    followers,
    following
}) => `<div class="profile-stats-wrapper">
        <div class="repostats-wrapper">
            <div class="header">Repositories</div>
            <div class="num">
                <a href="${html_url}?tab=repositories" class="num" target="_blank">${public_repos}</a>
            </div>
        </div>
        <div class="follower-wrapper">
            <div class="header">Followers</div>
            <div class="num">
                <a href="${html_url}?tab=followers" class="num" target="_blank">${followers}</a>
            </div>
        </div>
        <div class="following-wrapper">
            <div class="header">Following</div>
            <div class="num">
                <a href="${html_url}?tab=following" class="num" target="_blank">${following}</a>
            </div>
        </div>
    </div>`;

const repoTemplate = (data, config = {}) => {
    let repoMarkup = data
        .map((r) => {
            const {
                description,
                forks_count,
                html_url,
                language,
                name,
                pushed_at,
                stargazers_count,
                updated_at,
                watchers_count
            } = r;

            return `<div class="repo">
            <h3 class="name" aria-describedby="${description}">
                <a href="${html_url}" class="link" target="_blank">${name}</a>
                ${language ? `<span class="language">${language}</span>` : ""}
            </h3>
            <div class="stats">
                <div class="count">Stars: ${stargazers_count}</div>
                <div class="count">Watch: ${watchers_count}</div>
                <div class="count">Fork: ${forks_count}</div>
            </div>
        </div>`;
        })
        .join("");
    return `<div class="repo-wrapper">
        ${data.length ? `<h3 class="title">Repositories</h3>` : ""}
        ${repoMarkup}
    </div>`;
};

const PROFILE_STYLE = `
.profile-wrapper, .profile-stats-wrapper, .profile-btn-wrapper {
  font-family: monospace;
  width: 300px;
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  padding: 15px;
  box-sizing: border-box; }
  .profile-wrapper .img-wrapper, .profile-stats-wrapper .img-wrapper, .profile-btn-wrapper .img-wrapper {
    flex: 1;
    height: 80px;
    width: 80px; }
    .profile-wrapper .img-wrapper img, .profile-stats-wrapper .img-wrapper img, .profile-btn-wrapper .img-wrapper img {
      height: 100%;
      border-radius: 50%; }
  .profile-wrapper .userdetails-wrapper, .profile-stats-wrapper .userdetails-wrapper, .profile-btn-wrapper .userdetails-wrapper {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center; }
    .profile-wrapper .userdetails-wrapper .name, .profile-stats-wrapper .userdetails-wrapper .name, .profile-btn-wrapper .userdetails-wrapper .name {
      color: black;
      font-size: 20px;
      font-weight: 600;
      line-height: 20px; }
    .profile-wrapper .userdetails-wrapper .bio, .profile-wrapper .userdetails-wrapper .company, .profile-stats-wrapper .userdetails-wrapper .bio, .profile-stats-wrapper .userdetails-wrapper .company, .profile-btn-wrapper .userdetails-wrapper .bio, .profile-btn-wrapper .userdetails-wrapper .company {
      color: grey;
      font-size: 15px;
      margin-top: 5px; }

.profile-stats-wrapper {
  justify-content: space-between;
  padding-top: 0; }
  .profile-stats-wrapper .repostats-wrapper,
  .profile-stats-wrapper .follower-wrapper,
  .profile-stats-wrapper .following-wrapper {
    flex: 1;
    text-align: center; }
    .profile-stats-wrapper .repostats-wrapper .header,
    .profile-stats-wrapper .follower-wrapper .header,
    .profile-stats-wrapper .following-wrapper .header {
      font-weight: bold; }
    .profile-stats-wrapper .repostats-wrapper .num,
    .profile-stats-wrapper .follower-wrapper .num,
    .profile-stats-wrapper .following-wrapper .num {
      margin-top: 5px;
      font-size: 20px; }

.profile-btn-wrapper {
  padding-top: 0; }
  .profile-btn-wrapper .button {
    padding: 5px 10px;
    text-decoration: none;
    background-color: white;
    border: 1px solid;
    border-radius: 4px;
    font-weight: 600; }

.link {
  text-decoration: none;
  color: #24292e; }

.dark-themed {
  border: 1px solid #24292e;
  width: 300px;
  display: inline-block; }
  .dark-themed.contains-sibling {
    border-bottom: none; }
  .dark-themed .link {
    color: white; }
    .dark-themed .link:hover {
      color: #0366d6; }
  .dark-themed .profile-wrapper, .dark-themed .profile-stats-wrapper, .dark-themed .profile-btn-wrapper {
    background-color: #24292e; }
  .dark-themed .userdetails-wrapper .name {
    color: white; }
  .dark-themed .userdetails-wrapper .bio, .dark-themed .userdetails-wrapper .company {
    color: white; }
  .dark-themed .profile-stats-wrapper .header {
    color: white; }
  .dark-themed .profile-stats-wrapper .num {
    color: white;
    text-decoration: none; }
  .dark-themed .profile-btn-wrapper .button {
    background-color: #24292e;
    border-color: white;
    color: white; }

.light-themed {
  border: 1px solid #ccc;
  width: 300px;
  display: inline-block; }
  .light-themed.contains-sibling {
    border-bottom: none; }
  .light-themed .link {
    color: #24292e; }
    .light-themed .link:hover {
      color: #0366d6; }
  .light-themed .profile-wrapper, .light-themed .profile-stats-wrapper, .light-themed .profile-btn-wrapper {
    background-color: white; }
  .light-themed .userdetails-wrapper .name {
    color: #24292e; }
  .light-themed .userdetails-wrapper .bio, .light-themed .userdetails-wrapper .company {
    color: #24292e; }
  .light-themed .profile-stats-wrapper .header {
    color: #24292e; }
  .light-themed .profile-stats-wrapper .num {
    color: #0366d6;
    text-decoration: none; }
  .light-themed .profile-btn-wrapper .button {
    background-color: white;
    border-color: #24292e;
    color: #24292e; }
`;

const REPO_STYLE = `
* {
  margin: 0;
  padding: 0; }

.link {
  text-decoration: none;
  color: #24292e; }

.repo-wrapper {
  width: 300px;
  font-family: monospace;
  padding: 0 15px;
  box-sizing: border-box; }
  .repo-wrapper .title {
    font-size: 17px;
    text-align: center; }
  .repo-wrapper .repo {
    padding: 15px 0; }
    .repo-wrapper .repo .desc {
      font-size: 14px; }
    .repo-wrapper .repo .name {
      font-size: 14px; }
    .repo-wrapper .repo .language {
      font-size: 12px;
      background-color: brown;
      color: white;
      padding: 0 3px;
      border-radius: 2px; }
    .repo-wrapper .repo .stats {
      display: flex; }
      .repo-wrapper .repo .stats .count {
        flex: 1; }

`;

class Repo extends HTMLElement {
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
            "repo");
    }

    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.textContent = REPO_STYLE;
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
            if (!dataRes) ; else {
                //render ui
                this.renderUI(dataRes, repo_config);
            }
        });
    }
}

customElements.define("repo-info", Repo);

// https://api.github.com/users/binodswain/repos

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
        return getData("https://api.github.com/users/" + user, "profile");
    }

    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.textContent = PROFILE_STYLE;
        shadowRoot.appendChild(style);
    }

    renderUI(data, profile_cofig) {
        this.shadowRoot.innerHTML += profileTemplate(data, profile_cofig);
    }

    connectedCallback() {
        const user = this.parentElement.getAttribute("user");
        const profile_cofig = this.dataset;
        this.fetchUserDetails(user).then((dataRes) => {
            if (!dataRes) ; else {
                //render ui
                this.renderUI(dataRes, profile_cofig);
            }
        });
    }
}

customElements.define("profile-info", Profile);
