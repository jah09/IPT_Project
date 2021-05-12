$(document).ready(function () {

    $('#btnCash_out').click(function () {
        var ownername = $('#txtbxci_ownername').val();
        var cardnum = $('#txtbxci_cardnumber').val();
        var amount = $('#txtbxci_amount').val();
        var phonenumber = $('#txtbxci_contactnum').val();
        alert(ownername + " , " + cardnum + " , " + amount + " , " + phonenumber);


        $.post('../Home/Cash_Out', {
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