// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  
  ## Table of Contents:

  <a href="#Description">Description</a>
  <a href="#Installation">Installation</a>
  <a href="#Usage">Usage</a>
  <a href="#Contributing">Contributing</a>
  <a href="#Tests">Tests</a>
  <a href="#Questions/feedback">Questions/feedback</a>
  <a href="#License">License</a>


  ## Description
  
  ${data.Description}
  
  ## Installation
  
  ${data.Installation}

  ## Usage

  ${data.Usage}
  
  ## Contributing
  
  ${data.Contributing}

  ## Tests

  ${data.Tests}

  ## Questions/feedback

  Please log any issues and check out my projects on Github!  <a href='https://github.com/${data.Github}'>Visit Github</a>

  To contact me with any questions, please send me an email at <a href = "mailto:${data.Email}?subject = Feedback&body = Message">Send Feedback</a>

  ## License

  ${data.License}
  
`;
}

module.exports = generateMarkdown;
