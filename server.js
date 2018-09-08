// NPM packages required for this application to work
var express = require('express');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 5000;
var connection;

// Middle ware programs
app.use('/static', express.static(path.join(__dirname, 'app/public')))

app.use(bodyParser.json());

// Routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listening on this port
app.listen(port, () => {
    console.log(`Connected on port: ${port}`)
});