//console log process.argv to understand our file system structure
console.log(process.argv)

//our file system module pulled into our index.js
const fs = require('fs');
//our inquirer module pulled into our index.js followed by our prompts
const inquirer = require('inquirer');

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


//our prompts
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your employees name?',
      name: 'name',
    },
  ])
  //then our reponses to follow
  .then((response) => {

    //all documentation to be put into the readme const
    const html = `<h1> File Generated </h1>
    
    ${response.name}`


      //here we are writing the readme.md file with the readme const else throw an error if not, console.log to the user the proces has finished
      fs.writeFile('index.html', html, err => {
        err ? console.log(err) : console.log("Your HTML Roster has been displayed");
        
    })
    
  });