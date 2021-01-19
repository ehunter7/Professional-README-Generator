const inquirer = require(`inquirer`);
const fs = require(`fs`);
const license = require(`./license.js`);

inquirer
  .prompt([
    //Get Project title
    {
      type: `text`,
      message: `Enter project title`,
      name: `title`,
    },
    //Get Description
    {
      type: `text`,
      message: `Enter project description`,
      name: `description`,
    },
    //Get installation instructions
    {
      type: `text`,
      message: `Enter installation instructions`,
      name: `installation`,
    },
    //Get usage information
    {
      type: `text`,
      message: `Enter usage information`,
      name: `usage`,
    },
    //Get contribution guidelines
    {
      type: `text`,
      message: `Enter contribution guidelines`,
      name: `contributions`,
    },
    //Get test instructions
    {
      type: `text`,
      massage: `Enter test instructions`,
      name: `test`,
    },
    //Get license by way of list
    //Add badge
    {
      type: `list`,
      message: `Select license used`,
      choices: [
        `No license used`,
        `Apache 2.0 License`,
        `Boost Software License 1.0`,
        `BSD 3-Clause License`,
        `Eclipse Public License 1.0`,
        `GNU GPL v3`,
        `IBM Public License Version 1.0`,
        `ISC License (ISC)`,
        `The MIT License`,
        `Mozilla Public License 2.0`,
        `The Artistic License 2.0`,
        `Other`,
      ],
      name: `license`,
    },
    //Get GitHub username
    {
      type: `text`,
      message: `Enter you GitHub username`,
      name: `GitHub`,
    },
    //Get email address
    {
      type: `text`,
      message: `Enter email address`,
      name: `email`,
    },
  ])
  .then((answers) => {
    const myLicense = license.getLicense(answers.license);

    //create file and write in it

    fs.writeFile("README.md", buildReadMe(answers, myLicense), (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

const buildReadMe = (answers, showLicense) => {
  return `# ${answers.title}
  ${showLicense.badge}

  ## Description
    
    ${answers.description}
    
  ## Table of Contents

  * [Installation](#installation)
  * [usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ### Installation

    ${answers.installation}
    
  ### Usage
    
    ${answers.usage}
    
  ### License
    
    ${answers.license}

    ${showLicense.description}
    
  ### Contributing
    
    ${answers.contributions}
    
  ### Tests
    
    ${answers.test}
    
  ### Questions
    
    For questions please reach out via [My GitHub](${answers.GitHub}) or [email](${answers.email})`;
};
