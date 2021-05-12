$(document).ready(function(){

    $('#btncreate').click(function () {
        var lname = $('#txtbx_lastname').val();
        var fname = $('#txtbx_firstname').val();
        var email = $('#txtbx_email').val();
        var phonenumber = $('#txtbx_number').val();
        alert(fname + " , " + lname + " , " + email + " , " + phonenumber); 

        $.post('../Home/CreateAccount', {
            lastname: lname,
            firstname: fname,
            email: email,
            contact_number: phonenumber

        }, function (data) {

            if (data[0].mess == 1) {

               /* alert('This is your Username' + data[0].username + and 'your password is' + lname);
                window.location.href = '../Home/About';*/

                alert("Data is saved!");
            }
            else
                alert("Data is not saved!");
            });


    });


});