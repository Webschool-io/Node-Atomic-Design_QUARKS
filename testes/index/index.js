const wsQuarks = require('../../index.js');

console.log(wsQuarks.isArray([])) // true
console.log(wsQuarks.isArray(0)) // false
console.log(wsQuarks.toUpperCase("ola mundo")) // OLA MUNDO
console.log(wsQuarks.toLowerCase("OLA MUNDO")) // ola mundo
