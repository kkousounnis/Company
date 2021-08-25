$(document).ready(function () {
    $.ajax({
        url: "http://ra1.anystream.eu:1090/KKSpringBootCompany/api/employee/16"
    }).then(function (data) {
        var myInformation = new XMLSerializer().serializeToString(data);
        console.log(new XMLSerializer().serializeToString(data));

        parser = new DOMParser();
        xmlDoc = parser.parseFromString(myInformation, "text/xml");

        console.log();


        $('#id').append(xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue);
        $('#firstName').append(xmlDoc.getElementsByTagName("firstName")[0].childNodes[0].nodeValue);
        $('#lastName').append(xmlDoc.getElementsByTagName("lastName")[0].childNodes[0].nodeValue);
        $('#email').append(xmlDoc.getElementsByTagName("emailId")[0].childNodes[0].nodeValue);
    });
});