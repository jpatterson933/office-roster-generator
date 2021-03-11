//console log process.argv to understand our file system structure
console.log(process.argv)

//our file system module pulled into our index.js
const fs = require('fs');
//our inquirer module pulled into our index.js followed by our prompts
const inquirer = require('inquirer');

//I think what I need to do is build the prompts in here for the user to ask questions. Anytime they answer
//a prompt about a new employee, then any information for the employee that is entered, gets formatted to the paramters
//of a class I will make for employess
//I think I will need an exmployee class that extends to the manager, engineer, and intern classes
//

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


//PROMPTS
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your employees name?',
      name: 'name',
    },
  ])
  //then our reponses to follow
  //I think I will need the responses to get exporeted to the relevant js files
  //then I will need to plug those responses in to the parameters of the relevant classes

  //so index.js will run the command line prompt to build employees
  //then it will push the reponses to the correct pages. However, will it first need to log the reponses? 
  //how does that work?
  .then((response) => {
    //could i possible even generate an javascript file??
    //all documentation to be put into the readme const
    const html = `<h1> File Generated </h1>
    
    ${response.name}`


      //here we are writing the readme.md file with the readme const else throw an error if not, console.log to the user the proces has finished
      fs.writeFile('index.html', html, err => {
        err ? console.log(err) : console.log("Your HTML Roster has been displayed");
        
    })
    
});


