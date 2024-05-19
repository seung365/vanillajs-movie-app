import { createRouter } from '../core/heropy'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'
//route란 일반적으로 페이지를 말함


export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie },
  { path: '#/about', component: About },
  { path: '.*', component: NotFound }

  // 순서대로 적어줘야 한다. 왜냐하면 위에서 매치가 되면 밑에껀 보지 않기 때문이다.
])