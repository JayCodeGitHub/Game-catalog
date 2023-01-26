import { GamesItems } from '../assets/Items/GamesItems'

function games() {
    const games = document.getElementById("games");

    GamesItems.forEach((item) => {
        const game = document.createElement('div');
        game.id = 'game';

        const title = document.createElement('h2');
        title.innerHTML = item.title

        const img = document.createElement('img');
        img.src = item.thumbnail

        const platform = document.createElement('h3');
        platform.innerHTML = 'platform: '
        const platformItem = document.createElement('span');
        platformItem.innerHTML = item.platform
        platform.appendChild(platformItem);

        const genre = document.createElement('h3');
        genre.innerHTML = 'genre: '
        const genreItem = document.createElement('span');
        genreItem.innerHTML = item.genre
        genre.appendChild(genreItem)

        game.append(img, title, platform, genre)
        games.appendChild(game);
    })
}

export default games