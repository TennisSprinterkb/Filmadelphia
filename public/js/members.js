
$(document).ready(function () {
    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.name);
    })


$("#submit").on("click", function (event) {
    event.preventDefault();

    var surveyForm = document.getElementById('surveyForm');
    isValid = surveyForm.checkValidity();


    if (isValid) {
        var userData = {
            "scores": [
                ($("#q1").val()),
                ($("#q2").val()),
                ($("#q3").val()),
                ($("#q4").val()),
                ($("#q5").val()),
                ($("#q6").val()),
                ($("#q7").val()),
                ($("#q8").val()),
                ($("#q9").val()),
                ($("#q10").val())
            ]

        }
        var currentURL = window.location.origin;
        // Ajax call sending survey results to conduct logic and return movie match
        $.post(currentURL + "/api/movies", userData, function (result) {
            $.ajax({
                url: '/api/user_data',
                type: 'PUT',
                data: result,
                success: function (re) {
                    window.location.href = "map_interactive.html"
                }
            });
        });
    }
    else { alert("Please complete the survey"); }
})

});
