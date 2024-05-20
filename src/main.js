import App from './App'
import router from './routes/index.js'

const root = document.querySelector('#root')
root.append(new App().el)

router()

//여기서 부터 App으로 거꾸로 올라가면서 흐름을 이해해라.
