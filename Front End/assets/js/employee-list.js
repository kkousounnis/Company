$(document).ready(function () {
    $.ajax({
        url: "http://ra1.anystream.eu:1090/KKSpringBootCompany/api/employee"
    }).then(function (data) {     
        $('#id').append(data.id);
        $('#firstName').append(data.firstName);
        $('#lastName').append(data.lastName);
        $('#email').append(data.id);
    });
});