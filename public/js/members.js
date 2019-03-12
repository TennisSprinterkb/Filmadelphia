
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
                parseInt($("#q1").val()),
                parseInt($("#q2").val()),
                parseInt($("#q3").val()),
                parseInt($("#q4").val()),
                parseInt($("#q5").val()),
                parseInt($("#q6").val()),
                parseInt($("#q7").val()),
                parseInt($("#q8").val()),
                parseInt($("#q9").val()),
                parseInt($("#q10").val())
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
