const path = require('path')

console.log(path.dirname(__filename)) // F:\Обучение Frontent\3 модуль. Backend\1 Основы\NodeJS\refs
console.log(path.basename(__filename)) // path.js
console.log(path.extname(__filename)) // .js
console.log(path.extname(__filename).slice(1)) // js
console.log(path.parse(__filename)) // инфа файла
console.log(path.resolve(__dirname, '..', 'modules', 'app.js')) // конструктор пути
console.log(path.join(__dirname, '..', 'modules', 'app.js')) // конструктор пути
// разница методов .resolve и .join в том, что
// .resolve пытается найти определенный файл ???
// .join конкатенирует (склеивает) данные
