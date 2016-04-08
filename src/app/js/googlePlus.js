

function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  var $logAs = $("<p>").addClass('logAs').text('Logged in as: '+ googleUser.getBasicProfile().getName());
  $('#logAs').append($logAs);
  $('#loginWindow, #backcover').css({'display': 'none'});
  $('#logOut').css({'display': 'block'});
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
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}