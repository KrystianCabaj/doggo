import './scss/main.scss'
import HomeRoute from './routes/home'

console.log('hello world!');

const store = {}

const Router = {
    '/': HomeRoute,
    '/breed/:id': async function () {

    }
}

window.addEventListener('hashchange', function (e) {
    Router[window.location.hash]();
})