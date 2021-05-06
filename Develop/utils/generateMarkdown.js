function renderLicenseBadge(license) {
  // generate appropriate link depending on selection
  switch (license) {
    case "MIT":
      return `[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)]`
    
    case "GPLv3":
      return  `[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)]`
    
    case "AGPL":
      return `[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)]`

    default:
      return "";
  }
}

function renderLicenseLink(license) {
  // generate license links based on the received license
  switch (license) {
    case "MIT":
      return `(https://opensource.org/licenses/MIT)`
    
    case "GPLv3":
      return  `(https://opensource.org/licenses/GPL-3.0)`
    
    case "AGPL":
      return `(https://www.gnu.org/licenses/agpl-3.0.en.html)`

    default:
      return "";
  }

}

// TODO: create table of contents with links to file's sections
// use html in-file to achieve this
function renderContentTable(){
  const table = `1. [ Description ](#description)
  2. [ License ](#license)
  3. [ Installation ](#installation)
  4. [ Usage ](#usage)
  5. [ Contributing ](#contributing)
  6. [ Tests ](#tests)
  7. [ Questions ](#questions)`;
  return table;
}

function renderLicenseSection(license, licenseDesc) {

  const licenseBadge = (renderLicenseBadge(license) + renderLicenseLink(license));
  const licenseDescription = licenseDesc;
  const licenseSection = `## License ${licenseBadge}\n${licenseDescription}`
  return licenseSection;
}

// creating installation section from object property
function renderInstallationSection(instalDesc){
  const installationHeading = `## Installation\n`
  const installationBody = instalDesc;
  return installationHeading + installationBody;
}

// creating usage section from object property
function renderUsageSection(usageDesc){
  const usageHeading = `## Usage\n`
  const usageBody = usageDesc;
  return usageHeading + usageBody;
}

// creating contribution section from object property
function renderContributionSection(contributing){
  const contributionHeading = `## Contributors\n`
  const contributionBody = contributing;
  return contributionHeading + contributionBody;
}

// creating test section from object property
function renderTestSection(test){
  const testingHeading = `## Testing\n`
  const testingBody = test;
  return testingHeading + testingBody;
}

// creating question section from object properties
function renderQuestionsSection(ghName, email){
  const questionsHeading = `## Questions/Contact\n`
  const questionsBody = `GitHub: ${ghName}\n
  Email: ${email}`;
  return questionsHeading + questionsBody;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const table = renderContentTable();
  const licenseSection = renderLicenseSection(data.license, data.licenseDesc);
  const installationSection = renderInstallationSection(data.instalDesc);
  const usageSection = renderUsageSection(data.usageDesc);
  const contributionSection = renderContributionSection(data.contributing);
  const testSection = renderTestSection(data.test);
  const questionSection = renderQuestionsSection(data.ghName, data.email);
  const buffer = `# ${data.title}\n
  ## Table of Contents \n
  ${table}\n
  <a name="description"></a>\n
  ## Description
  ${data.description}\n
  <a name="license"></a>\n
  ${licenseSection}\n
  <a name="installation"></a>\n
  ${installationSection}\n
  <a name="usage"></a>\n
  ${usageSection}\n
  <a name="contribution"></a>\n
  ${contributionSection}\n
  <a name="tests"></a>\n
  ${testSection}\n
  <a name="questions"></a>\n
  ${questionSection}\n`;
  return buffer;
}

module.exports = generateMarkdown;
