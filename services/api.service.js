app.factory("ApiService", function ($http) {
    const api = "https://rickandmortyapi.com/api/character";

    return {
        getCharacters: (search) =>
            $http.get(`${api}?name=${search || ""}`),

        getCharacterById: (id) =>
            $http.get(`${api}/${id}`)
    };
});
