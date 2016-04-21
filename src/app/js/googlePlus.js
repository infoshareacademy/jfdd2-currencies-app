function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  var $logAs = $("<p>").addClass('logAs').text('Logged in as: ' + googleUser.getBasicProfile().getName());
  $('#logAs').append($logAs);
  $('#my-signin2').css({'display': 'none'});
  $('#logOut').css({'display': 'block'});
  $('#backcover').css({'display': 'none'});
  $('#loginWindow').css({'display': 'none'});

  serverStorage.getUserObject().done(function (userFromServer) {
    var userExist = userFromServer.filter(function(item){
       return item.login == googleUser.getBasicProfile().getEmail();
    });

    if(userExist.length === 0){
      var newUser = {
        login: googleUser.getBasicProfile().getEmail(),
        likedCurrency:  {},
        friendsRecommend:  {}
      };
      serverStorage.addNewUserObject(JSON.stringify(newUser));
    }else {

      var userId = [];
      userExist.forEach(function (item) {
        return userId.push(item.id);
      });

      var userObject = {
        login: googleUser.getBasicProfile().getEmail(),
        likedCurrency: JSON.parse(localStorage.getItem('likedCurrencyObject')) || {},
        friendsRecommend: JSON.parse(localStorage.getItem('friendsRecommendationObject')) || {}
      };

      localStorage.setItem('UserObject', JSON.stringify(userObject));
      console.log(userId[0]);

      serverStorage.addUserObject(JSON.stringify(userObject), userId[0]);
    }

    //serverStorage.getUserObject();
  });



//TODO po zrobieniu wysylania na serwer
  //if (googleUser.getBasicProfile().getName() === localStorage.getItem('name') && localStorage.getItem('socialMedia')=== 'Google +') {
  //    var $recommendAsNamePara = $("<p>").text('Your friend ' + localStorage.getItem('name') + ' recommended you our application');
  //    $('#recommendAsName').append($recommendAsNamePara);
  //    $('#recommendAsNameDiv').show();
  //}
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