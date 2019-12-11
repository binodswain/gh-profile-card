!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e=["bio","avatar_url","blog","created_at","html_url","name","public_repos","repos_url","followers","following","company"],r=["description","forks_count","html_url","language","name","pushed_at","stargazers_count","updated_at","watchers_count"],n=(n,t,a)=>fetch(n).then((function(n){if(200===n.status)return n.json().then((function(n){if("profile"===t){let r={};return e.forEach(e=>{r[e]=n[e]}),r}if("repo"===t)return n.map(e=>{let n={};return r.forEach(r=>{n[r]=e[r]}),n})}))})).catch((function(e){})),t=(e,{theme:r="light",bio:n="true",company:t="true",showstats:p="true"})=>{const{avatar_url:o="",name:i,bio:s,company:l,html_url:d}=e;return`<div class="${r}-themed">\n    <div class="profile-wrapper">\n        <div class="img-wrapper">\n            <img src="${o}" class="profile-pic">\n        </div>\n        <div class="userdetails-wrapper">\n            <div class="name">${i}</div>\n            ${"true"===n.toLowerCase()?`<div class="bio">${s}</div>`:""}\n            ${"true"===t.toLowerCase()?`<div class="company">\n                <a href="https://github.com/${l.slice(1)}" class="link" target="_blank">${l.slice(1)}</a>\n            </div>`:""}\n        </div>\n    </div>\n    ${"true"===p.toLowerCase()?a(e):""}\n    <div class="profile-btn-wrapper">\n        <a href="${d}" class="button profile-button" target="_blank">View profile</a>\n    </div>\n    <slot></slot>\n</div>`},a=({html_url:e,public_repos:r,followers:n,following:t})=>`<div class="profile-stats-wrapper">\n        <div class="repostats-wrapper">\n            <div class="header">Repositories</div>\n            <div class="num">\n                <a href="${e}?tab=repositories" class="num" target="_blank">${r}</a>\n            </div>\n        </div>\n        <div class="follower-wrapper">\n            <div class="header">Followers</div>\n            <div class="num">\n                <a href="${e}?tab=followers" class="num" target="_blank">${n}</a>\n            </div>\n        </div>\n        <div class="following-wrapper">\n            <div class="header">Following</div>\n            <div class="num">\n                <a href="${e}?tab=following" class="num" target="_blank">${t}</a>\n            </div>\n        </div>\n    </div>`,p=(e,r={})=>{let n=e.map(e=>{const{description:r,forks_count:n,html_url:t,language:a,name:p,pushed_at:o,stargazers_count:i,updated_at:s,watchers_count:l}=e;return`<div class="repo">\n            <h3 class="name" aria-describedby="${r}">\n                <a href="${t}" class="link" target="_blank">${p}</a>\n                ${a?`<span class="language">${a}</span>`:""}\n            </h3>\n            <div class="stats">\n                <div class="count">Stars: ${i}</div>\n                <div class="count">Watch: ${l}</div>\n                <div class="count">Fork: ${n}</div>\n            </div>\n        </div>`}).join("");return`<div class="repo-wrapper">\n        ${e.length?'<h3 class="title">Repositories</h3>':""}\n        ${n}\n    </div>`},o="\n.profile-wrapper, .profile-stats-wrapper, .profile-btn-wrapper {\n  font-family: monospace;\n  width: 300px;\n  display: flex;\n  flex-direction: row;\n  background-color: #ccc;\n  padding: 15px;\n  box-sizing: border-box; }\n  .profile-wrapper .img-wrapper, .profile-stats-wrapper .img-wrapper, .profile-btn-wrapper .img-wrapper {\n    flex: 1;\n    height: 80px;\n    width: 80px; }\n    .profile-wrapper .img-wrapper img, .profile-stats-wrapper .img-wrapper img, .profile-btn-wrapper .img-wrapper img {\n      height: 100%;\n      border-radius: 50%; }\n  .profile-wrapper .userdetails-wrapper, .profile-stats-wrapper .userdetails-wrapper, .profile-btn-wrapper .userdetails-wrapper {\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n    .profile-wrapper .userdetails-wrapper .name, .profile-stats-wrapper .userdetails-wrapper .name, .profile-btn-wrapper .userdetails-wrapper .name {\n      color: black;\n      font-size: 20px;\n      font-weight: 600;\n      line-height: 20px; }\n    .profile-wrapper .userdetails-wrapper .bio, .profile-wrapper .userdetails-wrapper .company, .profile-stats-wrapper .userdetails-wrapper .bio, .profile-stats-wrapper .userdetails-wrapper .company, .profile-btn-wrapper .userdetails-wrapper .bio, .profile-btn-wrapper .userdetails-wrapper .company {\n      color: grey;\n      font-size: 15px;\n      margin-top: 5px; }\n\n.profile-stats-wrapper {\n  justify-content: space-between;\n  padding-top: 0; }\n  .profile-stats-wrapper .repostats-wrapper,\n  .profile-stats-wrapper .follower-wrapper,\n  .profile-stats-wrapper .following-wrapper {\n    flex: 1;\n    text-align: center; }\n    .profile-stats-wrapper .repostats-wrapper .header,\n    .profile-stats-wrapper .follower-wrapper .header,\n    .profile-stats-wrapper .following-wrapper .header {\n      font-weight: bold; }\n    .profile-stats-wrapper .repostats-wrapper .num,\n    .profile-stats-wrapper .follower-wrapper .num,\n    .profile-stats-wrapper .following-wrapper .num {\n      margin-top: 5px;\n      font-size: 20px; }\n\n.profile-btn-wrapper {\n  padding-top: 0; }\n  .profile-btn-wrapper .button {\n    padding: 5px 10px;\n    text-decoration: none;\n    background-color: white;\n    border: 1px solid;\n    border-radius: 4px;\n    font-weight: 600; }\n\n.link {\n  text-decoration: none;\n  color: #24292e; }\n\n.dark-themed {\n  border: 1px solid #24292e;\n  width: 300px;\n  display: inline-block; }\n  .dark-themed.contains-sibling {\n    border-bottom: none; }\n  .dark-themed .link {\n    color: white; }\n    .dark-themed .link:hover {\n      color: #0366d6; }\n  .dark-themed .profile-wrapper, .dark-themed .profile-stats-wrapper, .dark-themed .profile-btn-wrapper {\n    background-color: #24292e; }\n  .dark-themed .userdetails-wrapper .name {\n    color: white; }\n  .dark-themed .userdetails-wrapper .bio, .dark-themed .userdetails-wrapper .company {\n    color: white; }\n  .dark-themed .profile-stats-wrapper .header {\n    color: white; }\n  .dark-themed .profile-stats-wrapper .num {\n    color: white;\n    text-decoration: none; }\n  .dark-themed .profile-btn-wrapper .button {\n    background-color: #24292e;\n    border-color: white;\n    color: white; }\n\n.light-themed {\n  border: 1px solid #ccc;\n  width: 300px;\n  display: inline-block; }\n  .light-themed.contains-sibling {\n    border-bottom: none; }\n  .light-themed .link {\n    color: #24292e; }\n    .light-themed .link:hover {\n      color: #0366d6; }\n  .light-themed .profile-wrapper, .light-themed .profile-stats-wrapper, .light-themed .profile-btn-wrapper {\n    background-color: white; }\n  .light-themed .userdetails-wrapper .name {\n    color: #24292e; }\n  .light-themed .userdetails-wrapper .bio, .light-themed .userdetails-wrapper .company {\n    color: #24292e; }\n  .light-themed .profile-stats-wrapper .header {\n    color: #24292e; }\n  .light-themed .profile-stats-wrapper .num {\n    color: #0366d6;\n    text-decoration: none; }\n  .light-themed .profile-btn-wrapper .button {\n    background-color: white;\n    border-color: #24292e;\n    color: #24292e; }\n",i="\n* {\n  margin: 0;\n  padding: 0; }\n\n.link {\n  text-decoration: none;\n  color: #24292e; }\n\n.repo-wrapper {\n  width: 300px;\n  font-family: monospace;\n  padding: 0 15px;\n  box-sizing: border-box; }\n  .repo-wrapper .title {\n    font-size: 17px;\n    text-align: center; }\n  .repo-wrapper .repo {\n    padding: 15px 0; }\n    .repo-wrapper .repo .desc {\n      font-size: 14px; }\n    .repo-wrapper .repo .name {\n      font-size: 14px; }\n    .repo-wrapper .repo .language {\n      font-size: 12px;\n      background-color: brown;\n      color: white;\n      padding: 0 3px;\n      border-radius: 2px; }\n    .repo-wrapper .repo .stats {\n      display: flex; }\n      .repo-wrapper .repo .stats .count {\n        flex: 1; }\n\n";class s extends HTMLElement{fetchUserRepoDetails(e,r){let t=new URLSearchParams("");return r.limit&&t.append("per_page",r.limit||10),r.sort&&t.append("sort",r.sort||"pushed"),r.direction&&t.append("direction",r.direction),n(`https://api.github.com/users/${e}/repos?${t.toString()}`,"repo")}constructor(){super();let e=this.attachShadow({mode:"open"});const r=document.createElement("style");r.textContent=i,e.appendChild(r)}renderUI(e,r){this.shadowRoot.innerHTML+=p(e,r)}connectedCallback(){const e=this.parentElement.getAttribute("user")||this.parentElement.parentElement.getAttribute("user"),r=this.dataset;this.fetchUserRepoDetails(e,r).then(e=>{e&&this.renderUI(e,r)})}disconnectedCallback(){}adoptedCallback(){}attributeChangedCallback(e,r,n){}}customElements.define("repo-info",s);class l extends HTMLElement{get user(){return this.getAttribute("user")}constructor(){super()}connectedCallback(){}disconnectedCallback(){}adoptedCallback(){}attributeChangedCallback(e,r,n){}}customElements.define("github-w",l);class d extends HTMLElement{fetchUserDetails(e){return n("https://api.github.com/users/"+e,"profile")}constructor(){super();let e=this.attachShadow({mode:"open"});const r=document.createElement("style");r.textContent=o,e.appendChild(r)}renderUI(e,r){this.shadowRoot.innerHTML+=t(e,r)}connectedCallback(){const e=this.parentElement.getAttribute("user"),r=this.dataset;this.fetchUserDetails(e).then(e=>{e&&this.renderUI(e,r)})}disconnectedCallback(){}adoptedCallback(){}attributeChangedCallback(e,r,n){}}customElements.define("profile-info",d)}));
