// take input from license choice and build the license section of the readme
// If there is no license, return an empty string
// 
function renderLicenseSection(license) {
  switch(license) {
    case 'APACHE':
        license = APACHE;
      break;
    case 'BOOST':
        license = BOOST;
      break;
    case 'BSD2':
        license = BSD2;
      break;
    case 'BSD3':
        license = BSD3;
      break;
    case 'GNUGPLv3':
        license = GNUGPLv3;
      break;
    case 'GNUGPLv2':
        license = GNUGPLv2;
      break;
    case 'GNUAGPLv2':
        license = GNUAGPLv2;
      break;
    case 'GNULGPLv3':
        license = GNULGPLv3;
      break;
    case 'cczu':
        license = cczu;
      break;
    case 'epl2':
        license = epl2;
      break;
    case 'Mpl2':
        license = Mpl2;
      break;
    case 'unlicense':
        license = unlicense;
      break;
    default:
        return ``;
  };

  return `## License  
  ${license.badge}  
  This application was made with ${license.name}.`;
};

// template literal to be written into markdown
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

  To contact me with any questions, please send an email: <a href="mailto:${data.Email}?subject=Feedback&body=Message)">Send Feedback</a>

  ${renderLicenseSection(data.License)}
  
`;
}

module.exports = generateMarkdown;



// license objects with name and badge for markdown.
const APACHE =  {
  name: 'Apache',
  badge :`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
};

const BOOST = {
  name: 'Boost',
  badge: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
};

const BSD2 = {
  name: 'BSD 2-clause license',
  badge: `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
};

const BSD3 = {
  name: 'BSD 3-clause license',
  badge: `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause);`
};

const GNUGPLv3 = {
  name: 'GNU general public license v3',
  badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0);`
};

const GNUGPLv2 = {
  name: 'GNU general public license v3',
  badge: `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
};

const GNUAGPLv2 = {
  name: 'GNU affero general public license v2',
  badge: `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
};

const GNULGPLv3 = {
  name: 'GNU lesser general public license v3',
  badge: `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
};

const MIT = {
  name: 'MIT license',
  badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
};

const cczu = {
  name: 'Creative commons zero universal',
  badge: `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
};

const epl2 = {
  name: 'Eclipse public license',
  badge: `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
};

const Mpl2= {
  name:'Mozilla pulic license',
  badge: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
};

const unlicense = {
  name: 'The Unilicense',
  badge: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
};