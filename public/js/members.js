var movieData = require('../../data/movieData.js');

module.exports = function (app) {
    
    app.get("/api/movieData", function(req, res) {
        res.json(movieData);
    });

    app.post("/api/movieData", function(req, res) {
        
        var closeMatch = {
            title: "",
            location: "",
            address:"",
            scoreDifference: 1000
        };
        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        var totalDifference = 0;

        for (var i = 0; i < movieData.length; i++) {
            console.log(movieData[i]);
            totalDifference = 0;

            for (var k = 0; k < movieData[i].scores[k]; k++) {
                totalDifference += Math.abs(parseInt(userScores[k]) - parseInt(friends[i].scores[k]));

                if (totalDifference <= closeMatch.friendDifference) {
                    
                    closeMatch.name = movieData[i].name;
                    closeMatch.location = movieData[i].location;
                    closeMatch.address = movieData[i].address
                    closeMatch.scoreDifference = totalDifference;
                }
            }
        }

        movieData.push(userData);

        res.json(closeMatch);
    });

}

$("#surveyResults").on("click", function() {
    function validateForm() {
        var isValid = true;
        $(".chosen-select").each(function() {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    }
    
    if (validateForm()) {
         userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
        var currentURL = window.location.origin;
        // Ajax call for receiving response after POST req
        $.post(currentURL + "/api/movieData", userData, function(data) {

            $("#matchName").text(data.name);
            $("#matchImg").attr("src", data.photo);
    
        $("#resultsModal").modal("toggle");
        
    
        });
    }
    else {
        alert("Survey incomplete");
    }

  return false;
});




// var movies = require("./result.js")

// $(document).ready(function() {
//   $("#surveyResults").on("click", function() {
//         function validateForm() {
//             var isValid = true;
//             $(".form-control").each(function() {
//                 if ($(this).val() === "") {
//                     isValid = false;
//                 }
//             });

//             $(".chosen-select").each(function() {
//                 if ($(this).val() === "") {
//                     isValid = false;
//                 }
//             });
//             return isValid;
//         }
      
// 		if (validateForm()) {
//             var movieMatch;
//             if (userData > 30) {movieMatch === movies[0]}
//              {
//                 $("#movieMatch").html(data.name[0]);
//             }

//             else (userData < 30 === movies[1] {
//                 $("#movieMatch").html(data.name[1]);
//             })
// 			var currentURL = window.location.origin;
// 			// Ajax call for receiving response after POST req
// 			$.post(currentURL + "/api/friends", userData, function(data) {

//                 $("#movieMatch").text(data.name);
//                 // $("#matchImg").attr("src", data.photo);
		
// 			$("#results").html("toggle");
			
		
//             });
//         }
//         else {
//             alert("Survey incomplete");
//         }

//         return false;
//     });
  
 
 
 
 
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
//   $.get("/api/user_data").then(function(data) {
//     $(".member-name").text(data.email);
//   });
// });
