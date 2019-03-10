var db = require("../models");
var movieData = require("../data/movieData");
var passport = require("../config/passport");
var bodyParser = require('body-parser');
module.exports = function (app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Get all movies
  app.get("/api/movies", function (req, res) {
    res.json(moviesData);
  });

  // Create a new example
  app.post("/api/movies", function (req, res) {
    if (req.user) {
      var closeMatch = {
        title: "",
        location: "",
        address: "",
        scoreDifference: 1000
      };
      console.log(req.body);
      // var userScore = [];
      // var userData = req.body;
      // userScore = req.body.scores;

      // console.log(req.body.scores);

      var totalDifference = 0;
      function getSum(total, num) {
        return total + num;
      }

      for (var i = 0; i < movieData.length; i++) {
        console.log(movieData[i]);
        totalDifference = 0;
        userTotal = req.body.scores;
        totalDifference += Math.abs(
          parseInt(userTotal.reduce(getSum)) - parseInt(movieData[i].score));
        console.log(totalDifference)
        if (totalDifference >= closeMatch.scoreDifference) {
          closeMatch.title = movieData[i].title;
          closeMatch.location = movieData[i].location;
          closeMatch.address = movieData[i].address;
          closeMatch.scoreDifference = totalDifference;
        }
      }
      console.log(closeMatch);
      // movieData.push(userData);
      res.json(closeMatch);
    }
  });
  // db.Movie.create(req.body).then(function (dbMovie) {
  //   res.json(dbMovie);
  // });

  // Delete an example by id
  app.delete("/api/movies/:id", function (req, res) {
    db.Movie.destroy({ where: { id: req.params.id } }).then(function (dbMovie) {
      res.json(dbMovie);
    });
  });
};
