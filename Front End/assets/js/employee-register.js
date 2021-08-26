var employee = {
    "employee": {
        "firstName": "Liza",
        "lastName": "Nadal",
        "emailId": "na@fard.com"
    }
};

$(document).ready(function () {
    $("#register").click(function () {
        console.log("hdhdh");
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