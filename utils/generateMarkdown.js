// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  // https://img.shields.io/badge/license-mit-red
  if (license === "MIT") {
    return `https://img.shields.io/badge/license-${license}-red`;
  } 
  else if (license === "ISC") {
    return `https://img.shields.io/badge/license-${license}-blue`
  }
  else if (license === "Apache") {
    return `https://img.shields.io/badge/license-${license}-green`
  }
  else if (license === "Eclipse") {
    return `https://img.shields.io/badge/license-${license}-purple`
  }
  else if (license === "Mozilla") {
    return `https://img.shields.io/badge/license-${license}-orange`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/license/${license}`
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
   # ${data.title} 


   ${renderLicenseSection(data.license)}
   
   
   ## Table of Contents
   
   - [**Description**](#-description)
   - [**Demo Video**](#-demo-video)
   - [**Installation**](#-installation)
   - [**Usage**](#-usage)
   - [**License**](#-license)
   - [**Author**](#-author)
   
   ## 📑 Description 
   ${data.description}
   
   ## 💾 Installation
   ${data.installation}
   
   
   ## 💻 Usage
   ${data.usage}
   
  ## 🤝 Contribution
  ${data.contribution}

  ## 🧪 Test
  ${data.test}

  ## ❓Questions
  ${data.questions}


   ## 😎 Author
   
   🖐 If you have any question about us or our project, feel free to contact us!
   
   - **Cassie Tepper**
   
     - [**Cassie's Portfolio**](https://zzangu0215.github.io/portfolio/) (to be updated)
     - **Github**: [**zzangu0215**](https://github.com/ctep09)
     - Email: **cassandray9@gmail.com**
   


`;
}

module.exports = generateMarkdown;
