$(document).ready(function () {
    $(document).delegate('#addNew', 'click', function (event) {

        var employee = {
            "employee": {
                "firstName": document.getElementById("firstName").value,
                "lastName": document.getElementById("lastName").value,
                "emailId": document.getElementById("emailId").value
            }
        };

        $.ajax({
            type: 'POST',
            // url: "http://ra1.anystream.eu:1090/KKSpringBootCompany/api/employee"
            url: 'http://localhost:8081/api/employee',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(employee),

            success: function (msg) {
                console.log(msg);
                window.setTimeout(function () { location.reload() }, 1000)
            }

        })

    });

});

