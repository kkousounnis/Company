$(document).ready(function () {
    $(document).delegate('#update', 'click', function (event) {
        var employee = {

            "id": document.getElementById("id").value,
            "firstName": document.getElementById("firstName").value,
            "lastName": document.getElementById("lastName").value,
            "emailId": document.getElementById("emailId").value
        }

        console.log(document.getElementById("id").value);
        $.ajax({
            type: 'PUT',
            // url: "http://ra1.anystream.eu:1090/KKSpringBootCompany/api/employee"
            url: 'http://localhost:8081/api/employee/' + document.getElementById("id").value,
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
