var friends = require("../data/friends");


module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        // passes the friends array as a json object onto the page
        res.json(friends);

    });

    app.post("/api/friends", function (req, res) {

        // this is where the logic goes
        // compares your scores with the scores from the friends in the data
        // send all info from fron† end here
        // two for loops:
        // one loop that goes thru each of the users
        // while i'm in user one, i go thru the scores array and loop thru then
        // subtract each of the scores and get the distance. add the differences
        // the users with the least difference is a match.
        // push the newest friend after the math is done or else you'll match with yourself.  
    });
};