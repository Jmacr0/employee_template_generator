const fs = require('fs');
const jest = require('jest');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employeeArray = [];

function promptQuestions() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your ID?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            },
        ])
}

async function generateEmployeeSummary() {
    const answers = await promptQuestions();
    const { name, email, id } = answers;
    const employeeType = await inquirer.prompt({
        type: "list",
        message: "What is your role in the company?",
        name: "role",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    })
    //i used switch at first but scoping prevented id from being read
    if (employeeType.role === "Manager") {
        const officeRes = await inquirer.prompt(
            {
                type: "input",
                message: "What is your office number?",
                name: "office"
            })
        const { office } = officeRes;
        const manager = new Manager(name, email, id, office);
        employeeArray.push(manager);
    } else if (employeeType.role === "Engineer") {
        const githubRes = await inquirer.prompt(
            {
                type: "input",
                message: "What is your github username?",
                name: "github"
            })
        const { github } = githubRes;
        const engineer = new Engineer(name, email, id, github);
        employeeArray.push(engineer);
    } else if (employeeType.role === "Intern") {
        const schoolRes = await inquirer.prompt(
            {
                type: "input",
                message: "What is your school name?",
                name: "school"
            })
        const { school } = schoolRes
        const intern = new Intern(name, email, id, school);
        employeeArray.push(intern);
    }

    const addEmployee = await inquirer.prompt({
        type: "list",
        message: "ADD MORE EMPLOYEES?",
        name: "add",
        choices: [
            "yes",
            "no"
        ]
    })
    if (addEmployee.add === "yes") {
        generateEmployeeSummary();
    } else {
        console.log(employeeArray);
    }

}
generateEmployeeSummary();