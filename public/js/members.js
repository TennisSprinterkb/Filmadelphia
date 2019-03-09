var movies = require("./result.js")

$(document).ready(function() {
  $("#submit").on("click", function() {
		// event.preventDefault();
        // Form validation
        function validateForm() {
            var isValid = true;
            $(".form-control").each(function() {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });

            $(".chosen-select").each(function() {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        }
      
		if (validateForm()) {
			var userData = {
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
			$.post(currentURL + "/api/friends", userData, function(data) {

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
  
 
 
 
 
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
//   $.get("/api/user_data").then(function(data) {
//     $(".member-name").text(data.email);
//   });
// });
