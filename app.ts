import chalk from "chalk"
import express from "express"

const app = express()

const port = 8090

app.get("/", (req,res) => {
    res.send("Hi there!\nI see you got TypeScript running with ES Modules! Congrats.")
})

app.listen(port, () => {
    console.log(chalk.green("server started on port " + chalk.blue.inverse(port)))
})

// swc reduces the compile and startup time from 10s of seconds to less than 1 in some cases.
// this can be deactivated by removing "swc":true" from the tsconfig.json
// otherwise swc core needs to be installed.
// use following commands for that:
// All Platforms:   npm install -g @swc/core

// if this does not start you might need to first install typescript, @types/node and ts-node globally.
// use following commands for that:
// Windows:         npm install -g typescript @types/node ts-node
// Linux/Darwin:    sudo npm install -g typescript @types/node ts-node


// This repo should not need to exist...
