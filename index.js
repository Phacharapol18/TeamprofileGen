const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = require('./util/generateHtml');
const fs = require('fs');
const inquirer = require('inquirer');
const newInfo = []

// const employee = () => {

//     inquirer.prompt([{
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?'
//         }, {
//             type: 'number',
//             name: 'id',
//             message: 'What is your id?'
//         }, {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email?'
//         }])
//         .then(ans => {
//             const newEmployee = new Employee(ans.name, ans.id, ans.email);
//             console.log(newEmployee);
//             ask()
//         })

// }


const ask = () => {
    inquirer.prompt([{
            type: 'list',
            choices: ['add manager', 'add engineer', 'add intern', 'genMyHTML', 'quit'],
            name: 'selection',
            message: 'What do you want to do'
        }])
        .then(ans => {
            switch (ans.selection) {
                // case 'Enter Your Name':
                //     employee()
                //     break;
                case 'add manager':
                    manager()
                    break;
                case 'add engineer':
                    engineer()
                    break;
                case 'add intern':
                    intern()
                    break;

                case 'genMyHTML':

                    console.log(newInfo)
                    console.log('thank you for using this program')
                    addHtml()

                    break;
                default:
                    console.log('thank you for using this program')
                    break;
            }
        })
}



const intern = () => {
    inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your intern name?'
        }, {
            type: 'number',
            name: 'id',
            message: 'What is his/her id?'
        }, {
            type: 'input',
            name: 'email',
            message: 'What is his/her email?'
        }, {
            type: 'input',
            name: 'school',
            message: 'What is his/her school name?'
        }])
        .then(ans => {
            const newIntern = new Intern(ans.name, ans.id, ans.email, ans.school)
            newInfo.push(newIntern);
            ask()
        })
}



const engineer = () => {
    inquirer.prompt([{

            type: 'input',
            name: 'name',
            message: 'What is your engineer name?'
        }, {
            type: 'number',
            name: 'id',
            message: 'What is his/her id?'
        }, {
            type: 'input',
            name: 'email',
            message: 'What is his/her email?'
        }, {
            type: 'input',
            name: 'gitHubUserName',
            message: 'What is his/her github userName?'
        }])
        .then(ans => {
            const newEngineer = new Engineer(ans.name, ans.id, ans.email, ans.gitHubUserName)
            newInfo.push(newEngineer);
            
            ask()
        })
}


const manager = () => {
    inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your manager name?'
        }, {
            type: 'number',
            name: 'id',
            message: 'What is his/her id?'
        }, {
            type: 'input',
            name: 'email',
            message: 'What is his/her email?'
        }, {
            type: 'number',
            name: 'officeNumber',
            message: 'What is his/her officeNumber?'
        }])
        .then(ans => {
            const newManager = new Manager(ans.name, ans.id, ans.email, ans.officeNumber)
            newInfo.push(newManager);
            ask()
        })
}

const addHtml = () => {
const gen = team(newInfo)
    fs.writeFile('index.html',gen,(err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('success!!')
        }
    })

}
// const em = new Employee('Phacharapol Phukana',2,'phacharapol18@gmail.com')
// newInfo.push(em)
ask()