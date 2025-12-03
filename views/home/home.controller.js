app.controller("HomeController", function ($scope, $location, $timeout, ApiService, FavoritesService) {

    $scope.search = $location.search().name || "";
    $scope.currentPage = parseInt($location.search().page) || 1;

    let debouncePromise = null;

    $scope.debounce = function () {
        if (debouncePromise) {
            $timeout.cancel(debouncePromise);
        }

        debouncePromise = $timeout(function () {
            $scope.buscar(1);
        }, 400);
    };

    $scope.buscar = function (page = 1) {
        $scope.currentPage = page;

        $location.search('page', page);

        if ($scope.search) {
            $location.search('name', $scope.search);
        } else {
            $location.search('name', null);
        }

        $scope.loading = true;

        ApiService.getCharacters($scope.search, page)
            .then(res => {
                $scope.characters = res.data.results;
                $scope.totalPages = res.data.info.pages;
            })
            .catch(() => {
                $scope.characters = [];
                $scope.totalPages = 1;
            })
            .finally(() => {
                $scope.loading = false;
            });
    };

    $scope.toggleFav = FavoritesService.toggle;
    $scope.isFav = id => FavoritesService.isFavorite(id);

    $scope.buscar($scope.currentPage);
});
