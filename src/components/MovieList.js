import { Component } from "../core/heropy"
import movieStore from "../store/movie"
import MovieItem from "./MovieItem"

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
      ...movieStore.state.movies.map(movie => new MovieItem({
          movie // 속성의 이름과 데이터의 이름이 같으면 콜론과 데이터 생략가능
        }).el) //map의 경우 함수를 실행한 결과를 모아 새로운 배열을 반환하고 append에 넣기 위해선 전개 연산자를 사용해야 한다.
    )
  }
}