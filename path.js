const path = require('path')

console.log(path.sep)

const filePath = path.join('/tutorial','archivo.txt')

const base = path.basename(filePath)
console.log(base) 
