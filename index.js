const inquiere = require(`inquirer`);

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
        message: `Enter contribution guidelines`;
        name: `contributions`,
    },
    //Get test instructions
    {
        type: `text`,
        massage: `Enter test instructions`,
        name: `test`
    },
    //Get license by way of list
    //Add badge
    {
        type: `list`,
        message: `Select license used`,
        choices: [],
        name: `license`
    },
    //Get GitHub username
    {
        type: `text`,
        message: `Enter you GitHub username`,
        name: `GitHub`
    },
    //Get email address
    {
        type: `text`,
        message: `Enter email address`,
        name: `email`
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
