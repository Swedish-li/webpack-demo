const env = require('./env')

if (__DEV__) {
  console.log('Hello Define Plugin')
}

console.log(env.serveUrl)
