function renderLicenseBadge(license) {
  var badge = '';
  if (license) {
    badge = badges[license];
  }
  return badge;
}

function renderLicenseLink(license) {
  var link = '';
  if (license) {
    link = links[license];
  }
  return link;
}

function renderLicenseSection(license) {
  var summary = '';
  if (license) {
    summary = summaries[license];
  }
  return summary;
}

function renderInstallation(installation) {
  var install = '';
  if (installation) {
    install = `\n## Installation\n\n${installation}\n`
  }
  return install
}

function renderContributing(contribute) {
  var contributing = '';
  if (contribute) {
    contributing = `\n## Contributing\n\n${contribute}\n`
  }
  return contributing
}

function renderTests(test) {
  var tests = '';
  if (test) {
    tests = `\n## Tests\n\n${test}\n`
  }
  return tests
}

function renderProjectInformation(projInf) {
  var projectInformation = '';
  if (projInf && projInf != 'skip') {
    projectInformation = `\n## Project Information\n\n${projInf}\n`
  }
  return projectInformation
}

function renderCredits(credit) {
  var credits = '';
  if (credit && credit != 'skip') {
    credits = `\n## Credits\n\n${credit}\n`
  }
  return credits
}

function renderUsage(use) {
  var usage = '';
  if (use && use != 'skip') {
    usage = `\n## Usage\n\n${use}\n\n![Screenshot]()\n`
  }
  return usage
}

function renderTableOfContents(data) {
  var projInf = ''
  if (data.projectInformation && data.projectInformation != 'skip') {
    projInf = '\n* [Project Information](#project-information)<br>'
  }
  var installation = ''
  if (data.installation) {
    installation = '\n* [Installation](#installation)<br>'
  }
  var usage = ''
  if (data.usage && data.usage != 'skip') {
    usage = '\n* [Usage](#usage)<br>'
  }
  var contributing = ''
  if (data.contributing) {
    contributing = '\n* [Contributing](#contributing)<br>'
  }
  var tests = ''
  if (data.tests) {
    tests = '\n* [Tests](#tests)<br>'
  }
  var credits = ''
  if (data.credits && data.credits != 'skip') {
    credits = '\n* [Credits](#credits)<br>'
  }
  return [projInf, installation, usage, contributing, tests, credits]
}

function generateMarkdown(data) {
  var badge = renderLicenseBadge(data.license)
  var link = renderLicenseLink(data.license)
  var summary = renderLicenseSection(data.license)
  var installation = renderInstallation(data.installation)
  var contributing = renderContributing(data.contributing)
  var tests = renderTests(data.tests)
  var credits = renderCredits(data.credits)
  var tableLinks = renderTableOfContents(data)
  var projectInformation = renderProjectInformation(data.projectInformation)
  var usage = renderUsage(data.usage)

  return `${badge}

# ${data.title} 
  
## Description
  
${data.description}

## Table of Contents
${tableLinks[0]}${tableLinks[1]}${tableLinks[2]}${tableLinks[3]}${tableLinks[4]}
* [Contact Information](#contact-information)<br>${tableLinks[5]}
* [License](#license)
${projectInformation}${installation}${usage}${contributing}${tests}
## Contact Information

For any further inquiries, please feel free to reach out to me through the following channels:
* GitHub: [My GitHub Profile](https://www.github.com/${data.github})
* Email: ${data.email}

I am here to assist you with any questions or feedback you may have. Thank you for your interest!
${credits}
## License 

[${data.license}](${link})

${summary}`;
}

const badges = {
  'MIT License':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'GNU General Public License v2':'[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
  'GNU General Public License v3':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'Apache License 2.0':'[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  '3-Clause BSD License':'[![License: 3-Clause BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  '2-Clause BSD License':'[![License: 2-Clause BSD](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
  'Mozilla Public License 2.0':'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  'ISC License':'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
  'GNU Affero General Public License':'[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
}

const links = {
  'MIT License':'https://opensource.org/licenses/MIT',
  'GNU General Public License v2':'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
  'GNU General Public License v3':'https://www.gnu.org/licenses/gpl-3.0.en.html',
  'Apache License 2.0':'https://www.apache.org/licenses/LICENSE-2.0',
  '3-Clause BSD License':'https://opensource.org/licenses/BSD-3-Clause',
  '2-Clause BSD License':'https://opensource.org/licenses/BSD-2-Clause',
  'Mozilla Public License 2.0':'https://www.mozilla.org/en-US/MPL/2.0/',
  'ISC License':'https://opensource.org/licenses/ISC',
  'GNU Affero General Public License':'https://www.gnu.org/licenses/agpl-3.0.en.html'
}

const summaries = {
  'MIT License':"This code's MIT License allows you to freely use, modify, and share it for any purpose. Please include the original license and copyright notices when sharing.",
  'GNU General Public License v2':'The GPL-2.0 is a copyleft license, demanding that derivative works adopt the GPL and necessitating the publication of modified source code. Its primary aim is to uphold open-source principles for all modifications and derived creations.',
  'GNU General Public License v3':'The GPL-3.0 builds upon the GPL-2.0 by tackling software patent and digital rights management (DRM) concerns, while still upholding open-source distribution and modification-sharing principles.',
  'Apache License 2.0':'The Apache 2.0 License, which governs this code, is an open-source license that gives you the freedom to use, modify, and share the code under certain conditions. Additionally, it provides contributors with patent rights protection, reducing the risk of patent disputes.',
  '3-Clause BSD License':"The 3-Clause BSD License permits code use, modification, and sharing with minimal constraints. It requires keeping the copyright notice, disclaims warranties, and prohibits endorsing contributors' names.",
  '2-Clause BSD License':'The 2-Clause BSD License permits code use, modification, and sharing with fewer constraints, without requiring the retention of the copyright notice in derived works.',
  'Mozilla Public License 2.0':"The MPL-2.0 is a balanced license with some copyleft aspects. It permits code modification and distribution under the same MPL-2.0 license, aligning open source principles with commercial software development needs.",
  'ISC License':"The ISC License is a straightforward permissive license, enabling code usage, modification, and distribution with minimal obligations. It closely resembles the MIT License, with some slight wording differences.",
  'GNU Affero General Public License':'The AGPL, an extension of the GPL, is tailored for network-based distribution, like web services. It mandates that modified versions of the software used in a network must be shared under the AGPL. This ensures that users of the service can access the source code.'
}

module.exports = {
  generateMarkdown
};