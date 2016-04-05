(function(){
    var app = angular.module('Workshop', ['chart.js', 'ui.bootstrap'])
        .directive('ohDivWalut', ohDivWalut);

    app.controller('BaseController', function ($scope) {
        $scope.val1 = 'hello'
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

    function ohDivWalut() {
        return {
            restrict: 'E',
            scope: {
                extraClasses: '@'
            },
            template: '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 exampleIcon {{extraClasses}}"></div>'
        }
    }
})();