// https://api.github.com/users/binodswain/repos

import getData from "./fetch";
import { profileTemplate } from "./component";
import { PROFILE_STYLE as STYLE } from "./styles";

import './repo';

// Create a class for the element
class Github extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  // static get observedAttributes() {
  // }

  get user() {
    return this.getAttribute('user')
  }

  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() { }
  disconnectedCallback() { }
  adoptedCallback() { }
  attributeChangedCallback(name, oldValue, newValue) { }
}

customElements.define('github-w', Github);

class Profile extends HTMLElement {
  // static get observedAttributes() {
  //   return ['c', 'l'];
  // }

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
          // console.log("Fetch error");
        } else {
          //render ui
          this.renderUI(dataRes, profile_cofig)
        }
      })
  }

  disconnectedCallback() { }

  adoptedCallback() { }

  attributeChangedCallback(name, oldValue, newValue) { }
}

customElements.define('profile-info', Profile);
