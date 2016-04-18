(function () {
    var app = angular.module('Workshop', ['chart.js', 'ui.bootstrap']);

    app.controller('BaseController', function ($scope) {
        $scope.val1 = 'Chart';
        $scope.val2 = 'Chart';
        $scope.val3 = 'Chart';
        $scope.val4 = 'Chart'
    });
    app.controller('logOut', logOut);

    function logOut($scope) {

        $scope.sighOut = function () {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');

            });

            location.reload();
        }
    }

    app.controller("LineCtrl", function ($scope) {

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        $scope.series = ['Currency Swings'];
        $scope.data = [
            [4.2, 4.15, 4.2, 4.1, 4.3, 4.2, 4.3, 4.1, 4.3, 4.2, 4.2, 4.15]


        ];
        $scope.data1 = [
            [4.2, 4.15, 4.2, 4.1, 43.3, 4.2, 4.3, 44.1, 4.3, 4.2, 4.2, 4.15]

    ];


            $scope.data2 = [
                [4.2, 4.15, 4.2, 4.1, 43.3, 4.2, 44.3, 44.1, 4.3, 4.2, 4.2, 4.15]

              ];

                $scope.data3= [
                    [4.2, 4.15, 44.2, 4.1, 43.3, 4.2, 4.3, 44.1, 4.3, 4.2, 4.2, 4.15]

        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
    });

    app.controller('recommendToFriend', function ($scope) {
        $scope.show = (localStorage.getItem('login') === null);
        $scope.recommend = {
            login: localStorage.getItem('login'),
            name: localStorage.getItem('name'),
            socialMedia: localStorage.getItem('socialMedia')
        };
        $scope.cancelRecommmend = function () {
            localStorage.removeItem('login');
            localStorage.removeItem('name');
            localStorage.removeItem('socialMedia');
            $('#recommendDiv').css({'display': 'none'});
            $('#recommendAsNameDiv').css({'display': 'none'});

        }
    });
    app.controller('likedIcon', function ($scope) {

        if (localStorage.length > 3) {

            $('#iconTitle').hide();
            $('div.iconDiv').hide();
            $('#iconTitleLiked').show();
            $('#cancelLikedCurr').show();
            for (var i = 0; i < localStorage.length; i++) {
                $('#' + localStorage.getItem(localStorage.key(i))).show();
            }
        }
        $scope.cancelLikedCurr = function () {
            $('#cancelLikedCurr').hide();
            for (var i = 0; i <= localStorage.length; i++) {

                if (localStorage.key(i) !== 'login' && localStorage.key(i) !== 'name' && localStorage.key(i) !== 'socialMedia') {
                    localStorage.removeItem(localStorage.key(i));
                }
                // temporary patch
                if (localStorage.key(i) !== 'login' && localStorage.key(i) !== 'name' && localStorage.key(i) !== 'socialMedia') {
                    localStorage.removeItem(localStorage.key(i));
                }
                if (localStorage.key(i) !== 'login' && localStorage.key(i) !== 'name' && localStorage.key(i) !== 'socialMedia') {
                    localStorage.removeItem(localStorage.key(i));
                }
                if (localStorage.key(i) !== 'login' && localStorage.key(i) !== 'name' && localStorage.key(i) !== 'socialMedia') {
                    localStorage.removeItem(localStorage.key(i));
                }
                //
            }
            location.reload();
        }

    });

})();