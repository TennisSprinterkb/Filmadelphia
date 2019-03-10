
// document onload may render better
window.onload = function () {
    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.name);
    })
}

$("#submit").on("click", function (event) {
    event.preventDefault();

    var surveyForm = document.getElementById('surveyForm');
    isValid = surveyForm.checkValidity();


    if (isValid) {
        var userData = {
            // name: $("#name").val(),
            "scores": [
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

        }
        var currentURL = window.location.origin;
        // Ajax call sending survey results to conduct logic and return movie match
        $.post(currentURL + "/api/movies", userData, function (data) {
            $("#matchName").text(data.name);
            window.location.href = "map_interactive.html"   
            // this redirect works but data not ending up in the #matchName div
        });
    }
    else { alert("Please complete the survey"); }
});


  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
//   $.get("/api/user_data").then(function(data) {
//     $(".member-name").text(data.email);
//   });
// });
