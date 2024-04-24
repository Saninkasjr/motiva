// importing express , path
const express = require("express");
const path = require('path')
const app = express()

// a custom confing for managing locations
const cfg = {
  port: process.env.PORT || 3000,
  root: __dirname,
  static: __dirname + '../view'
}
// number of site visitors
let userCounter = 0;
console.log(cfg)
//serving the view folder/directory
app.use('/view', express.static(path.join(__dirname, '/view')))

// a declared global post port 
app.get('*', (req, res) => {
  res.status(200).sendFile('view/index.html', { root: __dirname })
  userCounter += 1
  console.log(`${userCounter}  "port_${req.url}"`)
})

//starting up the server
app.listen(cfg.port, () => {
  console.log(`server @ 127.0.0.1:${cfg.port}`)
})
