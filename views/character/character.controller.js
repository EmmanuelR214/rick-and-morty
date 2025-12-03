app.controller("CharacterController", function ($scope, $routeParams, ApiService, FavoritesService) {

    $scope.character = null;

    ApiService.getCharacterById($routeParams.id).then(res => {
        $scope.character = res.data;
    });

    $scope.toggleFav = FavoritesService.toggle;
    $scope.isFav = (id) => FavoritesService.isFavorite(id);
});
