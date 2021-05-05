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

function renderLicenseSection(license, licenseDesc) {

  const licenseBadge = (renderLicenseBadge(license) + renderLicenseLink(license));
  const licenseDescription = licenseDesc;
  const licenseSection = `## License ${licenseBadge}\n${licenseDescription}`
  return licenseSection;
}

// true installation section, rest are boilerplate
function renderInstallationSection(instalDesc){
  const installationHeading = `## Installation\n`
  const installationBody = instalDesc;
  return installationHeading + installationBody;
}

// creating usage section from object
function renderUsageSection(usageDesc){
  const usageHeading = `## Usage\n`
  const usageBody = usageDesc;
  return usageHeading + usageBody;
}

// creating contribution section from object
function renderContributionSection(contributing){
  const contributionHeading = `## Contributors\n`
  const contributionBody = contributing;
  return contributionHeading + contributionBody;
}

// creating test section from object
function renderTestSection(test){
  const testingHeading = `## Testing\n`
  const testingBody = test;
  return testingHeading + testingBody;
}

function renderQuestionsSection(ghName, email){
  const questionsHeading = `## Questions/Contact\n`
  const questionsBody = `GitHub: ${ghName}\nEmail: ${email}`;
  return questionsHeading + questionsBody;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license, data.licenseDesc);
  const installationSection = renderInstallationSection(data.instalDesc);
  const usageSection = renderUsageSection(data.usageDesc);
  const contributionSection = renderContributionSection(data.contributing);
  const testSection = renderTestSection(data.test);
  const questionSection = renderQuestionsSection(data.ghName, data.email);
  const buffer = `# ${data.title}\n
  ${data.description}\n
  ${licenseSection}\n
  ${installationSection}\n
  ${usageSection}\n
  ${contributionSection}\n
  ${testSection}\n
  ${questionSection}\n`;
  return buffer;
}

module.exports = generateMarkdown;

// Usage heading + usage section
// Contribution heading + contribution section
// Test heading + tests section
// Questions heading + questions section (GH + email)

// construction of badges: 
// [![LICENSE-NAME](BADGE-IMG-LINK)](LICENSE-LINK)

// Title + desciption section DONE
// License heading + license section DONE
// Installation heading + install section DONE