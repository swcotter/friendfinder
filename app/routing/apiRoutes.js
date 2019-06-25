var friends = require("../data/friends");
var officeCharacters = require("../data/cars");

module.exports = function (app) {
    // Displays all characters
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.get("/api/cars", function (req, res) {
        return res.json(cars);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {
       
        
    });
};