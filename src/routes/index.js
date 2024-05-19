import { createRouter } from '../core/heropy'
import Home from './Home'
import Movie from './Movie'
import About from './About'
//route란 일반적으로 페이지를 말함


export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie },
  { path: '#/about', component: About }
  
])