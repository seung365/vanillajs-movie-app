import { createRouter } from '../core/heropy'
import Home from './Home'

//route란 일반적으로 페이지를 말함


export default createRouter(
  [{  path: '#/' , component: Home} 

  ]
)