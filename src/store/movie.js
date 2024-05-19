import Search from "../components/Search";
import { Store } from "../core/heropy";

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  loading: false,
  message: 'Search for the movie title!'
})

export default store
export const searchMovies = async page => {
  store.state.loading = true
  store.state.page = page
  if (page === 1) {
    store.state.movies = []
    store.state.message = ''
  }
  try{
    const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`) //s랑 page는 파라미터이다,
    const { Search, totalResults, Response, Error } = await res.json() // 구조 분해 할당
    if(Response === 'True') {
      store.state.movies = [
        ...store.state.movies,
        ...Search
      ] // 이렇게 하면 movies에 데이터 정보가 갱신된다.
      store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    } else {
      store.state.message = Error
    }
  } catch(error) {
    console.log('searchMovies error:',error)
  } finally {
    store.state.loading = false
  }

}