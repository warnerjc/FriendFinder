// Dependencies
const path = require('path');

// Require the friend list
var friends = require('../data/friends.js');

// Export modules as API routes
module.exports = function(app) {

	// Get all friends from the friends route and display via JSON
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Post a new friend entry & handle compatibility logic
	app.post('/api/friends', function(req, res) {

		// log the post request body
		console.log(req.body);

		// Capture user input
		let newFriend = req.body;
		let newScores = newFriend.scores;

		// Holder variables for friend match
		let matchName = '';
		let matchImage = '';

		// Set friend margin to 150, larger than any possible margin
		let friendMargin = 150;

		// Find best friend match in friends list
		for (let i = 0; i < friends.length; i++) {

			let diff = 0;

			// Find total diff for new user compared to friend [i]
			for (let j = 0; j < newScores.length; j++) {
				diff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(newScores[j]));
			}

			// If lowest margin, record the friend match
			if (diff < friendMargin) {

				friendMargin = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(newFriend);
		console.log(`New friend added: ${newFriend}`);

		// Send appropriate response
		console.log(`Best friend match: ${matchName} @ ${matchImage}`);
		res.json({status: '200', matchName: matchName, matchImage: matchImage});      

	});
};