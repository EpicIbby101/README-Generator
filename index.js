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
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for using your project:",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your application:",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Explain how others can contribute to your project:",
    },
    {
      type: "input",
      name: "tests",
      message: "Provide instructions on running tests for your project:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
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
