app.directive("navbar", function () {
    return {
        restrict: "E",
        templateUrl: "components/navbar/navbar.html",
        controller: function ($scope, $location) {
            $scope.$watch(() => $location.path(), function (newVal) {
                $scope.currentRoute = newVal;
            });
        }
    };
});
