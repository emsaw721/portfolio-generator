
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

inquirer 
.prompt([
  {
    // question object - array of objects in prompt method argument
    type: "input", 
    name: "name",
    message: "What is your name?"
  }
])
// answer object returned as a Promise 
 .then(answers => console.log(answers)); 

// const pageHTML = generatePage(name, github); 

// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
