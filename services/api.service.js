app.factory("ApiService", function ($http) {
    const api = "https://rickandmortyapi.com/api/character";
    return {
        getCharacters: (search, page = 1) =>
            $http.get(`${api}?name=${search || ""}&page=${page}`),
        getCharacterById: (id) =>
            $http.get(`${api}/${id}`)
    };
});
