// Dependencies
const path = require("path");

// Export modules as HTML routes
module.exports = function(app) {

	// Route to the default home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Route to the Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};