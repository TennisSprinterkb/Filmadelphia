// var movieData = require('../../data/movieData.js');

$("#surveyResults").on("click", function(event) {
    event.preventDefault();

var surveyForm = document.getElementById('surveyForm');
isValid = surveyForm.checkValidity();
    // function validateForm() {
    //     var isValid = true;
    //     $(".chosen-select").each(function() {
    //         if ($(this).val() === "") {
    //             isValid = false;
    //         }
    //     });
    //     return isValid;
    // }
    
    if (isValid) {
        var userData = {
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
        console.log(userData);
        // var currentURL = window.location.origin;
        // Ajax call for receiving response after POST req
        $.post("/api/movies", userData, function(data) {
            console.log(data)
            $("#matchName").text(data.name);
            $("#matchImg").attr("src", data.photo);    
        });
    }
    else { alert("Please complete the survey");}
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
