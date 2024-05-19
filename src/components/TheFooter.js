import { Component } from "../core/heropy";

export default class TheFooter extends Component {
  constructor(){
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */`
      <div>
        <a href="https://github.com/seung365/vanillajs-movie-app">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/seung365">
          ${new Date().getFullYear()}
          seung365
        </a>
      </div>
    `
  }
}