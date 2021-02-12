import './scss/main.scss'

console.log('hello world!');

const store = {}

const Router = {
    '/': function () {

    },
    '/breeds': async function () {
        const response = await axios()
    }
}

window.addEventListener('hashchange', function (e) {
    Router[window.location.hash]();
})
