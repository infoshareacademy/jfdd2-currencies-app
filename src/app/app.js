(function(){
    var app = angular.module('Workshop', ['chart.js', 'ui.bootstrap']);

    app.controller('BaseController', function ($scope) {
        $scope.val1 = 'Chart';
        $scope.val2= 'Chart';
        $scope.val3= 'Chart'
    });

    app.controller("LineCtrl", function ($scope) {

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
    });
    app.controller('recommendToFriend', function ($scope) {
        $scope.show = (localStorage.getItem('login') === null)? true :false;
        $scope.recommend = {
                login: localStorage.getItem('login'),
                name:  localStorage.getItem('name'),
                socialMedia: localStorage.getItem('socialMedia')
    }
    });

    //app.controller('AlertDemoCtrl', function ($scope) {
    //    $scope.alerts = [
    //        {type: 'success', msg: 'Thank you for your recommendation' }
    //    ];
    //
    //    $scope.closeAlert = function(index) {
    //        $scope.alerts.splice(index, 1);
    //    };
    //});
})();