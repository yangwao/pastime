let fs = require('fs')

let model = fs.readFileSync('model.json', 'utf8')

model = JSON.parse(model)

console.log(model)

let project = (Object.keys(model)[0])

let tasks = Object.keys(model[project])

for (let n of tasks) {
    n = parseInt(n)
    if (typeof n === 'number' && !isNaN(n)) {
      tasks.push(n)
    }
}

console.log(tasks);
// console.log(model.projectX);
