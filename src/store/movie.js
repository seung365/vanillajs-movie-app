import Search from "../components/Search";
import { Store } from "../core/heropy";

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {}, // 영화의 상세 정보
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
    const res = await fetch('/api/movie', {
      method: 'POST', //body에 정보를 담으려면 POST 사용
      body: JSON.stringify({
        title:store.state.searchText,
        page // page: page
      })
    })
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

export const getMovieDetails = async id => {
  try {
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
        id
      })
    })
    store.state.movie = await res.json()
  } catch (error) {
    console.log('getMovieDetails error:', error)
  }
}