app.controller("FavoritesController", function ($scope, FavoritesService) {
    $scope.favorites = FavoritesService.all();
});
