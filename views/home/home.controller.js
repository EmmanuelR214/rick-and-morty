app.controller("HomeController", function ($scope, ApiService, FavoritesService) {

    $scope.search = "";
    $scope.characters = [];
    $scope.loading = false;

    $scope.buscar = function () {
        $scope.loading = true;

        ApiService.getCharacters($scope.search)
            .then(res => {
                $scope.characters = res.data.results;
                console.log($scope.characters);
            })
            .catch(() => {
                $scope.characters = [];
            })
            .finally(() => {
                $scope.loading = false;
            });
    };
    
    $scope.buscar();

    $scope.toggleFav = FavoritesService.toggle;
    $scope.isFav = (id) => FavoritesService.isFavorite(id);
});
