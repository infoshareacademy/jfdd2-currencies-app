

function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  var $logAs = $("<p>").addClass('logAs').text('Logged in as: '+ googleUser.getBasicProfile().getName());
  $('#logAs').append($logAs);
  $('#my-signin2').css({'display': 'none'});
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