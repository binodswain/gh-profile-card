// console.log("123");
// https://api.github.com/users/binodswain/repos

import "./styles.scss";
import getData from "./fetch";
import { Div, Img, Link } from "./helper";
import { profileTemplate } from "./component";

import './repo'

// Create a class for the element
class Github extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() {
    // return ['c', 'l'];
  }

  get user() {
    return this.getAttribute('user')
  }

  constructor() {
    // Always call super first in constructor
    super();
    if (!window.widget_data) {
      window.widget_data = {};
    }
  }

  connectedCallback() {
    console.log('Custom square element added to page.');
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

customElements.define('github-w', Github);

class Profile extends HTMLElement {
  static get observedAttributes() {
    // return ['c', 'l'];
  }

  fetchUserDetails(user) {
    return getData('https://api.github.com/users/'+ user, 'profile', user)
  }

  constructor() {
    // Always call super first in constructor
    super();
    let shadowRoot = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = STYLE;
    shadowRoot.appendChild(style)
  }

  renderUI(data, profile_cofig) {
    this.shadowRoot.innerHTML += profileTemplate(data, profile_cofig) 
  }

  connectedCallback() {
    console.log('Custom square element added to page.');
    const user = this.parentElement.getAttribute('user');
    const profile_cofig = this.dataset;
    this.fetchUserDetails(user)
      .then(dataRes => {
        if (!dataRes) {
          //render error screen
          console.log("error screen");
          
        } else {
          //render ui
          this.renderUI(dataRes, profile_cofig)
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

customElements.define('profile-info', Profile);

const STYLE = `
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
`