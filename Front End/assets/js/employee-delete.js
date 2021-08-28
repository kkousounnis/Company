$(document).ready(function () {
    $('table').on('click', 'button[id="delete"]', function (e) {
        // Takes the values from the cells tha i create from javascript
        var id = $(this).closest('tr').children('td:first').text();

        $.ajax({
            type: 'DELETE',
            // url: "http://ra1.anystream.eu:1090/KKSpringBootCompany/api/employee"
            url: 'http://localhost:8081/api/employee/' + id,        
    
            success: function (msg) {
                window.setTimeout(function () { location.reload() }, 1000)
            }
    
        })
    });
});