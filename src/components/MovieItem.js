import { Component } from "../core/heropy";

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: 'a'
    })
  }
  render() {
    const { movie } =this.props

    this.el.setAttribute('href',`#/movie?id=${movie.imdbID}`)
    this.el.classList.add('movie')
    this.el.style.backgroundImage = `url(${movie.Poster})`  // 이렇게 image가 아니라 backgroundImage로 하는 이유 : 출력되는 포스터 크기가 조금씩 다르기에, 크기를 전부 동일하게 출력하고 싶어서
    this.el.innerHTML = /* html */`
      <div class="info">
        <div class="year">
          ${movie.Year}
        </div>
        <div class="title">
          ${movie.Title}
        </div>
      </div>
    `
  }
}