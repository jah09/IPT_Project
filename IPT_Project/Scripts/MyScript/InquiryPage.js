$(document).ready(function () {

    $('#btn_Search').click(function () {
        var search = $('#txtbx_search').val();
        var drop_down = $('#dropdwn').val();

        alert(search + " , " + drop_down);


        $.post('../Home/Inquiry_page', {
            Searchbtn: search,
            Dropdown: drop_down
            

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