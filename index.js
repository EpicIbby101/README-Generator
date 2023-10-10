const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a short description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "How can users install your project?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Successfully generated ${fileName}`);
      }
    });
  }
// function to initialize program
async function init() {
    try {
      const userResponses = await inquirer.prompt(questions);
      const markdown = generateMarkdown(userResponses);
      writeToFile("README.md", markdown);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
// function call to initialize program
init();
