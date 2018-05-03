// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require the application routes with a reference to app (i.e. the express() package)
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


// Start listening on PORT
app.listen(PORT, function () {
    console.log('Friend Finder is listening on PORT: ' + PORT);
});