var friends = require("../data/friends");


module.exports = function(app) {
    // this will dispaly all the friends in the array
    app.get("/api/friends", function (req, res) {
        // passes the friends array as a json object onto the page
        res.json(friends);

    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body)

        // var user = req.scores.body;
        // OR
        var userScore = req.body.scores; 
        // idk which is correct
        var scoreDifferences = [];
        for (i = 0; i < friends.length; i++){
            // userSum = 0;
            // user.scores[i] = parseInt(user.scores[i]);
            // adds each number to 0 in order to get a total
            var currentFriendScore = friends[i].scores;
            var match = []
            for (j = 0; j < currentFriendScore.length; j++){
                
                var math = parseInt(userScore[i]) - parseInt(currentFriendScore[j]);
                match.push(Math.abs(math));
                
            }
            
            var sum = match.reduce((a, b) => a + b, 0);
                
            scoreDifferences.push(sum);

            console.log(scoreDifferences)
            // for (var i in user.scores) {userSum += user.scores[i]};
            // // loops thru each friend score
            // for (i = 0; i < res.scores.length; i++){
            //     friendSum = 0
            //     friends.scores[i] = parseInt(res.scores.length)
            //     // why don't i copy the for/in loop here?
            //     var matchSearch = friendSum += friends.scores[i];
            //     if (matchSearch === userSum) {
            //         friends.push(user)
            //         console.log("you've got a match")
            //     } 
                
            // }
        }

        var userMatch = Math.min(...scoreDifferences);
        console.log(userMatch);
        var userMatchIndex = scoreDifferences.indexOf(userMatch);
        var friend = friends[userMatchIndex];

        // this is where the logic goes
        // compares your scores with the scores from the friends in the data
        // send all info from fron† end here
        // two for loops:
        // one loop that goes thru each of the users
        // while i'm in user one, i go thru the scores array and loop thru then
        // subtract each of the scores and get the distance. add the differences
        // the users with the least difference is a match.
        // push the newest friend after the math is done or else you'll match with yourself.  
        


        // ====================
        // var newFriend = req.body;
        // console.log(newFriend);
        // friends.push(newFriend);
        res.json(friend);
    });
};