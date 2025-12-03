app.factory("FavoritesService", function () {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    function save() {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    return {
        all: () => favorites,
        isFavorite: (id) =>
            favorites.some(c => c.id === id),
        toggle: (character) => {
            let index = favorites.findIndex(c => c.id === character.id);
            if (index === -1) {
                favorites.push(character);
            } else {
                favorites.splice(index, 1);
            }
            save();
        }
    };
});
