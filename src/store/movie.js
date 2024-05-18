import Search from "../components/Search";
import { Store } from "../core/heropy";

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: []
})

export default store
export const searchMovies = async page => {
  store.state.page = page
  if (page === 1) {
    store.state.movies = []
  }
  const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`) //s랑 page는 파라미터이다,
  const { Search , totalResults } = await res.json() // 구조 분해 할당
  store.state.movies = [
    ...store.state.movies,
    ...Search
  ] // 이렇게 하면 movies에 데이터 정보가 갱신된다.
  store.state.pageMax = Math.ceil(Number(totalResults) / 10)
}