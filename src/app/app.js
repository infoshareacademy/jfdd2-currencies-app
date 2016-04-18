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

            console.log(cancelItem);
            var emailArray = localStorageItem.email.filter(function(item){
                return item !== cancelItem.email;
            });
            var nameArray = localStorageItem.name.filter(function(item){
                return item !== cancelItem.name;
            });
            var socialMediaArray = localStorageItem.socialMedia.filter(function(item){
                return item !== cancelItem.socialMedia;
            });
            localStorageItem.email = emailArray;
            localStorageItem.name = nameArray;
            localStorageItem.socialMedia = socialMediaArray;

            localStorage.setItem('friendsRecommendationObject', JSON.stringify(localStorageItem));

            location.reload();


        }
    });
    app.controller('likedIcon', function ($scope) {

        if (localStorage.length > 3) {

            $('#iconTitle').hide();
            $('div.iconDiv').hide();
            $('#iconTitleLiked').show();
            $('#cancelLikedCurr').show()

        }
        $scope.cancelLikedCurr = function () {
            $('#cancelLikedCurr').hide();
            //for (var i = 0; i <= localStorage.length; i++) {
            //
            //    if (localStorage.key(i) !== 'login' && localStorage.key(i) !== 'name' && localStorage.key(i) !== 'socialMedia') {
            //        localStorage.removeItem(localStorage.key(i));
            //    }
            //    // temporary patch
            //    if (localStorage.key(i) !== 'login' && localStorage.key(i) !== 'name' && localStorage.key(i) !== 'socialMedia') {
            //        localStorage.removeItem(localStorage.key(i));
            //    }
            //    if (localStorage.key(i) !== 'login' && localStorage.key(i) !== 'name' && localStorage.key(i) !== 'socialMedia') {
            //        localStorage.removeItem(localStorage.key(i));
            //    }
            //    if (localStorage.key(i) !== 'login' && localStorage.key(i) !== 'name' && localStorage.key(i) !== 'socialMedia') {
            //        localStorage.removeItem(localStorage.key(i));
            //    }
            //    //
            //}
            location.reload();
        }

    });

})();