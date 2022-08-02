# ts-template-project
A template project for TypeScript with a working config for ESM (ECMAScript modules for some reason do not work per default)

## Usage
Clone this repo, cd into the folder and run `npm install`.
To try the demo app, run `npm run start`  

## Dependencies
### This project depends on the following packages:  
chalk - for the demo application (app.ts)  
express - for the demo application (app.ts)  
typescript - for compilation of ts to js  
ts-node - run typescript code  
swc/core - make typescript compilation faaaaaaaster  

## Troubleshooting
SWC reduces the compile and startup time from 10s of seconds to less than 1 in some cases.
This can be deactivated by removing "swc":true" from the tsconfig.json.
Otherwise @swc/core needs to be installed.
Use following commands for that:  
All Platforms:   `npm install @swc/core`

If the demo app does not start, you might need to install typescript, @types/node and ts-node globally.
Use following commands for that:  
Windows:         `npm install -g typescript @types/node ts-node`  
Linux/Darwin:    `sudo npm install -g typescript @types/node ts-node`  


## Why does this exist?
Because for some weird reason TypeScripts interoperability with ES Modules is not working per default. 
