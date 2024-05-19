import { Component } from "../core/heropy";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988'
          },
          {
            name: 'About',
            href: '#about'
          }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a href="#/" class="logo">
        <span>OMDbAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0] 
            const isActive = href === hash  // 해당하는 메뉴의 링크 주소와 현재 페이지의 실제 주소를 비교 
            return /* html */ `
              <li>
                <a class = "${isActive ? 'active' : ''}"
                href="${menu.href}">
                ${menu.name}
                </a>
              </li>
            `
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://avatars.githubusercontent.com/u/74394824?s=96&v=4" alt="user">
      </a>
    `
  }
}