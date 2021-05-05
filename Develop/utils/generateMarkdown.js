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

function renderLicenseSection(data) {

  const sectionTitle = `## License\n`;
  const sectionBody = data.licenseDesc;

  return sectionTitle + sectionBody;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

module.exports = generateMarkdown;
