$(document).ready(function () {
    $.ajax({
        // url: "http://ra1.anystream.eu:1090/KKSpringBootCompany/api/employee"
        url: 'http://localhost:8081/api/employee',
    }).then(function (data) {
        var table = document.getElementById("table");
        for (var element of data) {
            var row = table.insertRow(0);
            row.insertCell(0).innerHTML = element.firstName;
            row.insertCell(1).innerHTML = element.lastName;
            row.insertCell(2).innerHTML = element.emailId;
            row.insertCell(3).innerHTML =
                '<div class="btn">' +
                '<button class="btn btn-info">Update</button>' +
                '</div>' +
                '<div class="btn">' +
                '<button class="btn btn-danger"> Delete</button>' +
                '</div>' +
                '<div class="btn">' +
                '<button class="btn btn-info"> View</button>' +
                '</div>';
        }
    });
});