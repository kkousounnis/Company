$(document).ready(function () {
    $('table').on('click', 'button[id="edit"]', function (e) {
        var id = $(this).closest('tr').children('td:first').text();
        var firstName = $(this).closest('tr').children('td:nth-child(2)').text();
        var lastName = $(this).closest('tr').children('td:nth-child(3)').text();
        var emailId = $(this).closest('tr').children('td:nth-child(4)').text();
        console.log(id);
        console.log(firstName);

        console.log(lastName);

        console.log(emailId);
        document.getElementById("firstName").value = firstName;

        document.getElementById("lastName").value = lastName;

        document.getElementById("emailId").value = emailId;
        
    });

    $.ajax({
        // url: "http://ra1.anystream.eu:1090/KKSpringBootCompany/api/employee"
        url: 'http://localhost:8081/api/employee',
    }).then(function (data) {
        var table = document.getElementById("table");
        for (var element of data) {
            var row = table.insertRow(0);
            row.insertCell(0).innerHTML = element.id;
            row.insertCell(1).innerHTML = element.firstName;
            row.insertCell(2).innerHTML = element.lastName;
            row.insertCell(3).innerHTML = element.emailId;
            row.insertCell(4).innerHTML =
                '<div class="btn">' +
                '<button id="edit" data-toggle="modal" data-target="#modalCenterUpdateEmployee" class="btn btn-info">Update</button>' +
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