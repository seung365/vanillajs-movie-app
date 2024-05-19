import { Component } from "../core/heropy"
import aboutStore from "../store/about"
export default class About extends Component {
  render() {
    const {photo, name, email, github, velog } = aboutStore.state
    this.el.classList.add('container','about')
    this.el.innerHTML = /* html */`
      <div
        style="background-image: url(${photo})" 
        class="photo"></div>
      <p class="name">${name}</p>
      <p><a href="mailto:${email}" target="_blank">${email}</a></p>
      <p><a href="${github}" target="_blank">GitHub</a></p>
      <p><a href="${velog}" target="_blank">velog</a></p>
    `
  } // google mail : "https://mail.google.com/mail/?view=cm&fs=1&to=${email}"
  
}