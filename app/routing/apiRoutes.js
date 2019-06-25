var friends = require("../data/friends");
//var officeCharacters = require("../data/officeCharacters");

module.exports = function (app) {
    // Displays all characters
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    /*app.get("/api/officeCharacters", function (req, res) {
        return res.json(officeCharacters);
    });*/

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {
       
        
    });
};