
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


// this function returns a string
const fs = require('fs');
const generatePage = require("./src/page-template"); 

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;


fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});
