import { Component } from "../core/heropy";
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import MovieListMore from "../components/MovieListMore";

export default class Home extends Component {
  render() {
    const headline = new Headline().el   // 이렇게 메인페이지에 append를 통해 밀어넣을것..
    const search = new Search().el
    const movieList = new MovieList().el
    const movieListMore = new MovieListMore().el
    // 이렇게 하면 home 컴포넌트는 제일 먼저 container라는 클래스 가지는 div요소로 만들어진다.
    this.el.classList.add('container')
    this.el.append(
      headline,
      search,
      movieList,
      movieListMore
    )

  }
}