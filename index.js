
// 'use strict';
const fs = require('fs')
const inquirer = require('inquirer')
let tracker

tracker = fs.readFileSync('tracker.json', 'utf8')
console.log(tracker);
//
// inquirer.prompt([
//   {
//     type: 'list',
//     name: 'theme',
//     message: 'Which task you want to continue?',
//     choices: [
//       'Order a pizza',
//       'Make a reservation',
//       'Ask for opening hours',
//       'Talk to the receptionist'
//     ]
//   }
// ]).then(function (answers) {
//   console.log(JSON.stringify(answers, null, '  '));
// });

let questions = [
  {
    type: 'input',
    name: 'project',
    message: 'Project name'
  },
  {
    type: 'input',
    name: 'task',
    message: 'Task id'
  },
  {
    type: 'input',
    name: 'meta',
    message: 'Task meta'
  }
];

inquirer.prompt(questions).then(function (answers) {
  answers.startedAt = new Date().getTime()
  answers.workingOn = true
  answers = (JSON.stringify(answers, null))
  fs.writeFileSync('tracker.json', answers, 'utf8', (err) => {
    if (err) throw err
  })
});
