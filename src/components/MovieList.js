import { Component } from "../core/heropy"
import movieStore from "../store/movie"

export default class MovieList extends Component {
  constructor() {
    super()
    movieStore.subscribe('movies', () => { // 감시를 해 서버에서 영화 정보를 가지고 와서 갱신될 때마다 콜백 함수가 실행될 수 있는 구조
      this.render()
    })
  }
  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /* html */`
      <div class="movies"></div>
    `

    const moviesEl = this.el.querySelector('.movies')
    moviesEl.append(
      movieStore.state.movies.map(movie => {
        return movie.Title
      })
    )
  }
}