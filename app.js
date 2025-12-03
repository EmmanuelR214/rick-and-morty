var app = angular.module('RickMortyApp', ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when("/", {
            templateUrl: "views/home/home.html",
            controller: "HomeController",
            reloadOnSearch: false
        })
        .when("/character/:id", {
            templateUrl: "views/character/character.html",
            controller: "CharacterController"
        })
        .when("/favorites", {
            templateUrl: "views/favorites/favorites.html",
            controller: "FavoritesController"
        })
        .otherwise({ redirectTo: "/" });
});
