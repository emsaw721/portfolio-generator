
// console.log(profileDataArgs) 
// //Notice the lack of parentheses around the "profileDataArr" parameter. 
// const printProfileData = profileDataArr => {
//     // this... 
//     for (let i=0; i < profileDataArr.length; i+= 1){
//         console.log(profileDataArr[i]);
//     }

//     console.log("==============")

//     //is the same thing as this ...
//     profileDataArr.forEach(profileItem => console.log(profileItem)); 
// }; 

// printProfileData(profileDataArgs); 


const inquirer = require("inquirer");
const fs = require('fs');
const generatePage = require("./src/page-template"); 

const promptUser = () => {
return inquirer.prompt([
  {
    // question object - array of objects in prompt method argument
    type: "input", 
    name: "name",
    message: "What is your name?"
  }, 
  {
    type: "input", 
    name: "github", 
    message: "Enter your Github username"
  }, 
  {
    type: "input",
    name: "about",
    message: "Provide some information about yourself:"
  }
])

}; 


// profile questions complete

const promptProject = portfolioData => {

  console.log(`
  =================
  Add a New Project
  =================`); 
    // if there is no projects array property, create one 
    if (!portfolioData.projects) {
      portfolioData.projects= []; 
    }
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]).then(projectData => {
    portfolioData.projects.push(projectData); 

    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    }
    else {
      return portfolioData;
    }
  });
};

promptUser().then(answers => console.log(answers))
.then(promptProject)
.then(portfolioData => console.log(portfolioData));

// const pageHTML = generatePage(name, github); 

// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
