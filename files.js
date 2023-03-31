const {readFileSync,writeFileSync} =require('fs')

const first= readFileSync('./app.js','utf-8')

writeFileSync('./prueba.txt','Result:'+first)
