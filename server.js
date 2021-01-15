const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

// This is where you create the Express App
const app = express()

// Create middleware to handle the serving of the app
app.use('/', serveStatic(path.join(__dirname, '/public'))) // our server is going to run thru the public folder

// Create default port to serve the App
const port = process.env.PORT || 5000 // localhost 5000

app.listen(port)

console.log('Server started on port ' + port)
