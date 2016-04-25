$(document).ready(function() {

    $('#checkit').click(function(e){
        if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($('input[id=email]').val())) {
            alert('Wrong e-mail format!');
            e.preventDefault();
        }
        if (!/^([a-zA-Z0-9_])+$/.test($('input[id=name]').val())) {
            alert('Wrong name format');
            e.preventDefault();
        }

    });
});
