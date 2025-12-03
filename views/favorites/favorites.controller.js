app.controller("FavoritesController", function ($scope, FavoritesService) {

    $scope.favorites = FavoritesService.all();

    $scope.toggleFav = FavoritesService.toggle;
    $scope.isFav = function (id) {
        return FavoritesService.isFavorite(id);
    };

});
