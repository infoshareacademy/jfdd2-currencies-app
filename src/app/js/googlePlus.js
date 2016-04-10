function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    var $logAs = $("<p>").addClass('logAs').text('Logged in as: ' + googleUser.getBasicProfile().getName());
    $('#logAs').append($logAs);
    $('#my-signin2').css({'display': 'none'});
    $('#logOut').css({'display': 'block'});
    $('#backcover').css({'display': 'none'});
    $('#loginWindow').css({'display': 'none'});



    if (googleUser.getBasicProfile().getName() === localStorage.getItem('name')) {
        var $recommendAsNamePara = $("<p>").text('Your friend ' + localStorage.getItem('name') + ' recommended you our application');
        $('#recommendAsName').append($recommendAsNamePara);
        $('#recommendAsNameDiv').show();
    }
}
function onFailure(error) {
    console.log(error);
}
function renderButton() {
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'margin': '0 30',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}