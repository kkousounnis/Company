$(document).ready(function () {
    $('table').on('click', 'button[id="edit"]', function (e) {
        // Takes the values from the cells tha i create from javascript
        var id = $(this).closest('tr').children('td:first').text();
        var firstName = $(this).closest('tr').children('td:nth-child(2)').text();
        var lastName = $(this).closest('tr').children('td:nth-child(3)').text();
        var emailId = $(this).closest('tr').children('td:nth-child(4)').text();
        
        document.getElementById("id").value = id;
        document.getElementById("firstName").value = firstName;
        document.getElementById("lastName").value = lastName;
        document.getElementById("emailId").value = emailId;
        
    });

    $('table').on('click', 'button[id="view"]', function (e) {
        // Takes the values from the cells tha i create from javascript
        var id = $(this).closest('tr').children('td:first').text();
        var firstName = $(this).closest('tr').children('td:nth-child(2)').text();
        var lastName = $(this).closest('tr').children('td:nth-child(3)').text();
        var emailId = $(this).closest('tr').children('td:nth-child(4)').text();
        
        document.getElementById("firstName1").value = firstName;
        document.getElementById("lastName1").value = lastName;
        document.getElementById("emailId1").value = emailId;
        
    });

    $.ajax({
        url: "http://ra1.anystream.eu:1090/KKSpringBootCompany/api/employee"
        // url: 'http://localhost:8081/api/employee',
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
                '<button id="delete" class="btn btn-danger"> Delete</button>' +
                '</div>' +
                '<div class="btn">' +
                '<button id="view" data-toggle="modal" data-target="#modalCenterViewEmployee" class="btn btn-info">View</button>' +
                '</div>';
        }
    });
});