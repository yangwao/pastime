let fs = require('fs')

let model = fs.readFileSync('model.json', 'utf8')
model = JSON.parse(model)
console.log(model)

let projectname = (Object.keys(model)[0])
let tasks = Object.keys(model[projectname])
let taskIds = tasks.filter(task => typeof parseInt(task) === 'number' && !isNaN(parseInt(task)))

let taskParts = model[projectname][taskIds[0]].filter(part => typeof part === 'object')
// console.log(taskParts);

let sumTaskParts
let diff = []

for (let n of taskParts) {
  if (n.hasOwnProperty('startedAt') && n.hasOwnProperty('finishedAt')) {
    diff.push(n.finishedAt - n.startedAt)
  }
}

sumTaskParts = diff.reduce((a, b) => a + b, 0)

console.log(diff);
console.log(sumTaskParts);

// for (let n of model[projectname][taskIds[0]]) {
//   console.log(`${typeof n}`);
// }

// for (let n of tasks) {
//     n = parseInt(n)
//     if (typeof n === 'number' && !isNaN(n)) {
//       taskIds.push(n)
//     }
// }
//
// console.log(taskIds);
