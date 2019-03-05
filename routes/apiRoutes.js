var db = require("../models");
var moviesData = require("../data/movieData");


module.exports = function(app) {
  // Get all movies
  app.get("/api/movies", function(req, res) {
    res.json(moviesData);
  });

  // Create a new example
  app.post("/api/movies", function(req, res) {
    db.Movie.create(req.body).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // Delete an example by id
  app.delete("/api/movies/:id", function(req, res) {
    db.Movie.destroy({ where: { id: req.params.id } }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });
};
