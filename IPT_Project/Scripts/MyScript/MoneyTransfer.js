$(document).ready(function () {

    $('#btnMoneyTransfer_Submit').click(function () {
        var sender_name = $('#txtbxsender_ownername').val();
        var sender_contactnum = $('#txtbxsender_contactnum').val();
        var sender_amount = $('#txtbxsender_amount').val();

        var receiver_name = $('#txtbxreceiver_name').val();
        var receiver_contactnumber = $('#txtbxreceiver_contactname').val();
        alert(sender_name + " , " + sender_contactnum + " , " + sender_amount + " , " + receiver_name + " , " + receiver_contactnumber);


        $.post('../Home/Money_Transfer', {
            Sendername: sender_name,
            Sendercontactnumber: sender_contactnum,
            Senderamount: sender_amount,
            Receivername: receiver_name,
            Receivercontactnumber: receiver_contactnumber

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