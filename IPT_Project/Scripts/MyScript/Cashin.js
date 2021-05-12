$(document).ready(function () {

    $('#btnCash_in').click(function () {
        var ownername = $('#txtbx_ownername').val();
        var cardnum = $('#txtbx_cardnumber').val();
        var amount = $('#txtbx_amount').val();
        var phonenumber = $('#txtbx_contactnum').val();
        alert(ownername + " , " + cardnum + " , " + amount + " , " + phonenumber);


        $.post('../Home/Cash_In', {
            Ownername: ownername,
            Cardnumber: cardnum,
            Amount: amount,
            contact_number: phonenumber

        }, function (data) {

            if (data[0].mess == 1) {

                // alert('This is your Username' + data[0].username + and 'your password is' + lname);
               //  window.location.href = '../Home/About';

                alert("Data is saved!");
            }
            else
                alert("Data is not saved!");
        });


    });


});