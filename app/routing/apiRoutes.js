var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", (request, response) => {
        response.json(friends);
    });

    app.post("/api/friends", (request, response) => {

        var topMatch = {
            name: "",
            photo: "", 
            friendDifference: 1000
        };

        //console.log(request.body);

        var userData = request.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;
        //console.log(userScores);
        console.log("THIS!", userData);

        var totalDifference = 0;

        for  (var i=0; i< friends.length; i++) {

            //console.log(friends[i].name);
            totalDifference = 0;

          for (var j=0; j< friends[i].scores[j]; j++){

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                   if (totalDifference <= topMatch.friendDifference){

                    topMatch.friendDifference = totalDifference;
                    topMatch.name = friends[i].name;
                    topMatch.photo = friends[i].photo;
                    
                    console.log("Bam!", topMatch);
                }
            }
        }

        friends.push(userData);
        response.json(topMatch);

    });

}