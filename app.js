var app = angular.module('RickMortyApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home/home.html",
            controller: "HomeController"
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
