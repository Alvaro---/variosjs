var URL = require('url').URL
const myURL = new URL ('https://example.com.org:8888')
console.log(myURL.port)
myURL.port='443' //No se ve... por el numero de puerto 
console.log(myURL.port)
myURL.port='1234'
console.log(myURL.port)
console.log(myURL.href)
myURL.port='abcd'
console.log(myURL.port)
myURL.port='5678abcd'
console.log(myURL.port)
myURL.port='1234.5678'
console.log(myURL.port)
console.log(myURL.href)

// 8888

// 1234
// https://example.com.org:1234/
// 1234
// 5678
// 1234
// https://example.com.org:1234/
