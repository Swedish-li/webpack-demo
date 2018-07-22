// import 'bootstrap/dist/css/bootstrap.min.css'
import style from './src/App.css'

console.log('Hello PostCSS!')

let elements = document.getElementsByClassName('title')

console.log(style)

for (let i = 0; i < elements.length; i++) {
    let el = elements[i]
    console.log(el.nodeName)
    if (el.nodeName === 'H1') {
        el.className = el.className + ' ' + style.title
    }
}