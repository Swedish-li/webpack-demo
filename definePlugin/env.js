if (__DEV__) {
  module.exports = {
    serveUrl: 'localhost:8080',
  }
} else {
  module.exports = {
    server: '192.168.3.8:8080',
  }
}
