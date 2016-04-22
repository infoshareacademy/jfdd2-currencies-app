function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  var $logAs = $("<p>").addClass('logAs').text('Logged in as: ' + googleUser.getBasicProfile().getName());
  $('#logAs').append($logAs);
  $('#my-signin2').css({'display': 'none'});
  $('#logOut').css({'display': 'block'});
  $('#backcover').css({'display': 'none'});
  $('#loginWindow').css({'display': 'none'});

  serverStorage.getUserObject().done(function (userFromServer) {
    var userExist = userFromServer.filter(function (item) {
      return item.login == googleUser.getBasicProfile().getEmail();
    });

    if (userExist.length === 0) {
      var newUser = {
        login: googleUser.getBasicProfile().getEmail(),
        likedCurrency: {},
        friendsRecommend: {}
      };
      serverStorage.addNewUserObject(JSON.stringify(newUser));
    } else {

      var userId = [];
      userExist.forEach(function (item) {
        return userId.push(item.id);
      });


      var userObject = {
        login: googleUser.getBasicProfile().getEmail(),
        likedCurrency: JSON.parse(localStorage.getItem('likedCurrencyObject')) || userExist.likedCurrency || {},
        friendsRecommend: JSON.parse(localStorage.getItem('friendsRecommendationObject')) || userExist.friendsRecommend || {}
      };

      localStorage.setItem('UserObject', JSON.stringify(userObject));
      serverStorage.addUserObject(JSON.stringify(userObject), userId[0]);
    }


    userFromServer.forEach(function (item) {
      //Add div when someone recommend our app to login user
      if(item.friendsRecommend.email === undefined){return ;}
      item.friendsRecommend.email.forEach(function (item2) {
        if (item2 === googleUser.getBasicProfile().getEmail() && item.login !== googleUser.getBasicProfile().getEmail()) {
          var $recommendAsNamePara = $("<p>").text('Your friend  recommended You our application from email: ' + item.login);
          $('#recommendAsName').append($recommendAsNamePara);
          $('#recommendAsNameDiv').show();
        }
      });
    });

  });

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