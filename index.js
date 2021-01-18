const inquirer = require(`inquirer`);
const fs = require(`fs`);

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
      choices: [`this`, `that`, `everthing else`],
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
    console.log(answers);
    //create file and write in it
    fs.writeFile("README.md", buildReadMe(answers), (err) =>
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

const buildReadMe = (answers) => {
  console.log(`answers returns ${answers.title}`);
  return `# ${answers.title}
  
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
    
  ### Contributing
    
    ${answers.contributions}
    
  ### Tests
    
    ${answers.test}
    
  ### Questions
    
    For questions please reach out via [My GitHub](${answers.GitHub}) or [email](${answers.email})`;
};
