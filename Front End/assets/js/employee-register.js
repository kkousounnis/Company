$(document).ready(function () {
    $("#form").click(function (event) {

        var employee = {
            "employee": {
                "firstName": document.getElementById("firstName").value,
                "lastName": document.getElementById("lastName").value,
                "emailId": document.getElementById("emailId").value
            }
        };
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8081/api/employee',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(employee),

            success: function (msg) {
                console.log(msg);
                alert('In Ajax');
            }

        })


    });


});

