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
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
    });

    app.controller('recommendToFriend', function ($scope) {
        var localStorageObject = JSON.parse(localStorage.getItem('friendsRecommendationObject'));
        $scope.show = (localStorage.getItem('friendsRecommendationObject') === null);
         if(localStorageObject === null) {return;}
        $scope.recommend = {
            email: localStorageObject.email,
            name: localStorageObject.name,
            socialMedia: localStorageObject.socialMedia
        };

        $scope.recommendations = localStorageObject.email.map(function (item, index) {
           return {
               email: item,
               name: localStorageObject.name[index],
               socialMedia: localStorageObject.socialMedia[index]
           };
        });


        $scope.cancelRecommmend = function (cancelItem) {
            var localStorageItem = JSON.parse(localStorage.getItem('friendsRecommendationObject'));
            if(localStorageItem === null) {return;}
            var index =  cancelItem.length - 1;
            console.log(cancelItem);
            localStorageItem.email.splice(index, 1);
            localStorageItem.name.splice(index, 1);
            localStorageItem.socialMedia.splice(index, 1);

            console.log(localStorageItem);
            //$('#recommendDiv').css({'display': 'none'});
            //$('#recommendAsNameDiv').css({'display': 'none'});

        }
    });
    app.controller('likedIcon', function ($scope) {

        if (localStorage.length > 3) {

            $('#iconTitle').hide();
            $('div.iconDiv').hide();
            $('#iconTitleLiked').show();
            $('#cancelLikedCurr').show()
            //for (var i = 0; i < localStorage.length; i++) {
            //    $('#' + localStorage.getItem(localStorage.key(i))).show();
            //}
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