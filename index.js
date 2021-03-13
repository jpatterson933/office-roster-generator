//console log process.argv to understand our file system structure
console.log(process.argv)

//our file system module pulled into our index.js
const fs = require('fs');
//our inquirer module pulled into our index.js followed by our prompts
const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//set a team to an empty array to be pushed into when any team member is created
const team = [];


//----------------------------------INSTRUCTIONS----------------------------------//
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
//-----------------------------------------END INSTURCTIONS----------------------------------//

function getEmployeeInfo (teamMembers) {
    //prompts all include validate statements to make sure the user if providing input
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your team members Name?',
                name: 'name',
                validate: checkInput => {
                    if (checkInput) {
                        return true;
                    } else {
                        console.log("Please enter their name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'What is their id?',
                name: 'id',
                validate: checkInput => {
                    if (checkInput) {
                        return true;
                    } else {
                        console.log("Please enter their id!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'What is their email?',
                name: 'email',
                validate: checkInput => {
                    if (checkInput) {
                        return true;
                    } else {
                        console.log("Please enter their email!")
                        return false;
                    }
                }
            },
            {
                type: 'list',
                message: 'What is their role?',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern'],
            }
        ])
        //following if and if else statements specificInfower the relevant questions based upon which role the user chooses for the new team member
        .then(basicInfo => {
            if (basicInfo.role === 'Manager') {
                //how do i check to see if there are more than 2 managers and display a message that says, you have such and such mangers
                // are you sure you want to add more?
                inquirer
                    .prompt ([
                        {
                            type: 'input',
                            message: `What is ${basicInfo.name}'s office number?`,
                            name: 'office',
                            validate: checkInput => {
                                if (checkInput) {
                                    return true;
                                } else {
                                    console.log(`Please enter ${basicInfo.name}'s office number!`)
                                    return false;
                                }
                            }
                        },
                    ])
                    //pushes new manager into team array
                    .then (specificInfo => {
                        const newManager = new Manager (basicInfo.name, basicInfo.id, basicInfo.email, basicInfo.role, specificInfo.office);
                        //pushes new team member into empty team array  
                        team.push(newManager)
                        
                        //function that prompts user and asks them if they would like to add more teammates
                        addMore(team)
                        //also this is where my add more function will go
                        //call function here to display html - function should include template literal 

                    })
            } else if (basicInfo.role === 'Engineer') {
                inquirer
                    .prompt ([
                        {
                            type: 'input',
                            message: `What is ${basicInfo.name}'s GitHub username?`,
                            name: 'git',
                            validate: checkInput => {
                                if (checkInput) {
                                    return true;
                                } else {
                                    console.log(`Please enter ${basicInfo.name}'s GitHub username!`)
                                    return false;
                                }
                            }
                        }
                    ])
                    .then (specificInfo => {
                        const newEngineer = new Engineer (basicInfo.name, basicInfo.id, basicInfo.email, basicInfo.role, specificInfo.git);
                        team.push(newEngineer)

                        addMore(team)
                    })
            } else if (basicInfo.role === 'Intern') {
                inquirer
                    .prompt ([
                        {
                            type: 'input',
                            message: `Which school is ${basicInfo.name} attending?`,
                            name: 'school',
                            validate: checkInput => {
                                if (checkInput) {
                                    return true;
                                } else {
                                    console.log(`Please enter which school ${basicInfo.name} is attending!`)
                                    return false;
                                }
                            }
                        }
                    ])
                    .then (specificInfo => {
                        const newIntern = new Intern (basicInfo.name, basicInfo.id, basicInfo.email, basicInfo.role, specificInfo.school);
                        team.push(newIntern)

                        //add more team mates function and entering team as the parameter
                        addMore(team)
                    })
            }
        })
    }
    
    //function to add more 
function addMore(currentTeam) {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another team member?',
            name: 'add',
        }
    ])
    .then(resp => {
        if (resp.add === true) {
            getEmployeeInfo()
        } else {
            console.log('team', currentTeam)
            displayTeam(team)
            //should append here are
            //call function to append html here 

        }
    })
}


function displayTeam(fullTeam) {
    //i need to loop through team, and then append fullTeam.name, fullTeam.id to the card places and create the cards.
    const htmlFile = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- here i have a reset css style sheet to reset anything that has been done by the browser
            and i have my main css style sheet that will style my webpage -->
            <!--jquery script-->
            <link rel="stylesheet" href="./assets/css/reset.css">
            <!--bootstrap style sheet-->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="./assets/css/style.css">
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    
        <title>Your Team's Portfolio</title>
    </head>
    <body>
        <div>

        </div>
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            ${fullTeam.name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${fullTeam.role}</li>
          <li class="list-group-item">${fullTeam.id}</li>
          <li class="list-group-item">${fullTeam.email}</li>
          <li class="list-group-item">${fullTeam.specificInfo}</li>
        </ul>
      </div>
        
    </body>
    </html>`

    for (let i = 0; i < fullTeam.length; i++) {
          

    }


    fs.writeFile('test.html', htmlFile, err => {
        err ? console.log(err) : console.log("Your Team Profile has been generated.");
        
    })

}



//make another function and call that function inside that then 
//write the function - outside and then call the function inside and use the responses as the parameter
//function for each employee

//create a function to append html
getEmployeeInfo()

module.exports = Manager;
module.exports = Engineer;
module.exports = Intern;
