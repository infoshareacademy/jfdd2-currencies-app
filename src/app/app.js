(function(){
    var app = angular.module('Workshop', ['chart.js', 'ui.bootstrap']);

    app.controller('BaseController', function ($scope) {
        $scope.val1 = 'Chart';
        $scope.val2= 'Chart';
        $scope.val3= 'Chart';
        $scope.val4= 'Chart'
    });

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
    });

})();