# Carolina Closet Static

This is a static site for Carolina Closet built by CSSG

## Development Setup
1. Install [nodejs and npm](https://nodejs.org).
1. Clone this repo.
1. `cd` into the cloned directory and run `npm install`.
1. Run the `gatsby develop` command to start the server in development mode. 
1. Go to `localhost:8000` in your web browser to see the site.

## Project Strucutre
 
 ### `content`
 This folder contains the markdown files that are converted to content for the site. Having content stored in this way easily allows the client to make changes without learning how to code.
 
 ### `node_modules`
 This directory contains all of the modules of code that the project depends on (npm packages) are automatically installed with the command `npm intsall`. This directory is never added to the github as it is very large and `package.json` keeps track of any changes to our projects dependencies.
 
 ### `src`
 This directory contains all of the code related to what you will see on the front-end of the site (what you see in the browser). src is a convention for “source code”.

### `.gitignore`
This file tells git which files it should not track. Files listed in .gitignore will not appear in github.

### `.prettierignore`
This file tells the prettier js extension which files to not automatically format. Prettier is a JS formatter that helps keep you js code readable. I highly reccomend installing the prettier extenstion to vs-code so we all can have similarly formated code.

### `.prettierrc`
This is the configuration file for prettier.

### `gatsby-browser.js`
This file is where Gatsby expects to find any usage of the Gatsby browser APIs (if any). These allow customization/extension of default Gatsby settings affecting the browser.

### `gatsby-config.js`
This is the main configuration file for the Gatsby site. This is where we specify information about the site (metadata) including the site title and description, which Gatsby plugins you’d like to include, etc.

### `gatsby-node.js`
This file is where Gatsby expects to find any usage of the Gatsby Node APIs (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

### `Lisence`
Just a text file telling us we have access to the starter code we are using.

### `package.json`
A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

### `package-lock.json`
This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).

### `src/components`
This contains jsx files that contain the logic and design of a small html element.

### `src/pages`
This contains jsx files that contain the logic and design of entire pages.





