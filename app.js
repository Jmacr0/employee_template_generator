const fs = require('fs');
const jest = require('jest');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function promptQuestions() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your ID?",
                name: "ID"
            },
            {
                type: "list",
                message: "What is your favourite colour?",
                name: "favouriteColour",
                choices: [
                    "red",
                    "blue",
                    "yellow"
                ]
            },
        ])
}

async function generateEmployeeSummaries() {
    const answers = await promptQuestions();
}
generateEmployeeSummaries();