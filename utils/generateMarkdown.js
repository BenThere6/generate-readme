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

function renderCredits(credit) {
  var credits = '';
  if (credit) {
    credits = `\n## Credits\n\n${credit}\n`
  }
  return credits
}

function renderTableOfContents(data) {
  installation = ''
  if (data.installation) {
    installation = '\n* [Installation](#installation)<br>'
  }
  contributing = ''
  if (data.contributing) {
    contributing = '\n* [Contributing](#contributing)<br>'
  }
  tests = ''
  if (data.tests) {
    tests = '\n* [Tests](#tests)<br>'
  }
  credits = ''
  if (data.credits) {
    credits = '\n* [Credits](#credits)<br>'
  }
  return [installation, contributing, tests, credits]
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

  return `${badge}

# ${data.title} 
  
## Table of Contents

* [Description](#description)<br>${tableLinks[0]}
* [Usage](#usage)<br>${tableLinks[1]}${tableLinks[2]}
* [Contact Information](#contact-information)<br>${tableLinks[3]}
* [License](#license)

## Description
  
${data.description}
${installation}
## Usage 

${data.usage}

![Screenshot]()
${contributing}${tests}
## Contact Information

For any further inquiries, please feel free to reach out to me through the following channels:
* GitHub: [My GitHub Profile](https://www.github.com/${data.github})
* Email: ${data.email}

I am here to assist you with any questions or feedback you may have. Thank you for your interest!
${credits}
## License 

[${data.license}](${link})

${summary}
`;
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
  'MIT License':'The MIT License is a permissive open-source license that allows others to use, modify, and distribute your code for both commercial and non-commercial purposes. It requires that the original license notice and copyright notice are included in any redistributions.',
  'GNU General Public License v2':'The GPL-2.0 is a copyleft license that requires derivative works to be licensed under the GPL and mandates that the source code of modifications is made available. It focuses on ensuring that any modifications or derived works also remain open source.',
  'GNU General Public License v3':'The GPL-3.0 extends the principles of the GPL-2.0 by addressing issues related to software patents and digital rights management (DRM). Like its predecessor, it enforces open-source distribution and sharing of modifications.',
  'Apache License 2.0':'The Apache 2.0 License is a permissive open-source license that grants users the right to use, modify, and distribute your code under certain conditions. It includes an explicit grant of patent rights from contributors, providing more protection against patent litigation.',
  '3-Clause BSD License':"The 3-Clause BSD License allows others to use, modify, and distribute your code under minimal restrictions. It requires retention of your copyright notice, disclaims warranties, and prevents the use of contributors' names for endorsement.",
  '2-Clause BSD License':'Similar to the 3-Clause BSD License, the 2-Clause BSD License permits use, modification, and distribution with fewer restrictions. It omits the requirement to retain the copyright notice in derived works.',
  'Mozilla Public License 2.0':"The MPL-2.0 is a permissive license with some copyleft provisions. It allows modifications and distribution of code under the same MPL-2.0 license. It's designed to balance open source practices with the needs of commercial software development.",
  'ISC License':"The ISC License is a simple permissive license that allows others to use, modify, and distribute your code with minimal requirements. It's similar to the MIT License but with slightly different wording.",
  'GNU Affero General Public License':'The AGPL is an extension of the GPL designed for network-based distribution, such as web services. It requires modified versions of the software used in a network to be made available under the AGPL, ensuring that users of the service also have access to the source code.'
}

module.exports = {
  generateMarkdown
};