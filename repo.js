
import getData from "./fetch";
import { repoTemplate } from "./component";
import './repo.scss'

class Repo extends HTMLElement {
  static get observedAttributes() {
    // return ['c', 'l'];
  }

  fetchUserRepoDetails(user, config) {
    let url;    
    let params = new URLSearchParams("");
    console.log(config);
    let param = {}
    if (config.limit) {
      params.append('per_page', config.limit || 10)
    }

    if (config.sort) {
      params.append('sort', config.sort || 'pushed')
    }

    if (config.direction) {
      params.append('direction', config.direction)
    }
      
    // console.log(params.toString());
  
    return getData(`https://api.github.com/users/${user}/repos?${params.toString()}`, 'repo', user)
  }

  constructor() {
    // Always call super first in constructor
    super();
    let shadowRoot = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = STYLE;
    shadowRoot.appendChild(style)
  }

  renderUI(data, config) {
    this.shadowRoot.innerHTML += repoTemplate(data, config) 
  }

  connectedCallback() {
    console.log('Custom square element added to page.');
    const user = this.parentElement.getAttribute('user')||this.parentElement.parentElement.getAttribute('user');
    const repo_config = this.dataset;
    
    this.fetchUserRepoDetails(user, repo_config)
      .then(dataRes => {
        if (!dataRes) {
          //render error screen
          console.log("error screen");
          
        } else {
          //render ui
          this.renderUI(dataRes, repo_config)
        }
      })
  }

  disconnectedCallback() {
    console.log('Custom square element removed from page.');
  }

  adoptedCallback() {
    console.log('Custom square element moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
  }
}


customElements.define('repo-info', Repo);


const STYLE = `
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

`