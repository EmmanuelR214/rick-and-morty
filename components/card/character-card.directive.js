app.directive("characterCard", function () {
    return {
        restrict: "E",
        scope: {
            data: "=",
            toggleFav: "&",
            isFav: "&"
        },
        templateUrl: "components/card/character-card.html"
    };
});
