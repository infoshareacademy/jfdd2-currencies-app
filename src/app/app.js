
(function(){
    var app = angular.module('Workshop', ['chart.js', 'ui.bootstrap']);

    app.controller('BaseController', function ($scope) {
        $scope.val1 = 'Chart';
        $scope.val2= 'Chart';
        $scope.val3= 'Chart';
        $scope.val4= 'Chart'
    });
    app.controller('logOut', logOut);

    function logOut ($scope){

        $scope.sighOut = function () {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');

            });

            location.reload();
        }
    }

    app.controller("LineCtrl", function ($scope) {

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Currency Swings'];
        $scope.data = [
            [100, 25, 80, 15, 90, 5, 50]


        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
    });
    app.controller('recommendToFriend', function ($scope) {
        $scope.show = (localStorage.getItem('login') === null);
        $scope.recommend = {
                login: localStorage.getItem('login'),
                name:  localStorage.getItem('name'),
                socialMedia: localStorage.getItem('socialMedia')
    }
        $scope.cancelRecommmend = function(){
            localStorage.clear();
            $('#recommendDiv').css({'display': 'none'});
            $scope.show = true;
        }
    });
    app.controller('likedIcon', function ($scope) {
      console.log(localStorage.length);
      if(localStorage.length > 3) {
        $('div.iconDiv').hide();
        for (var i = 0; i < localStorage.length; i++) {
          $('#' + localStorage.getItem(localStorage.key(i))).show().addClass('iconAlign');
        }
      }
    });
})();