document.addEventListener('DOMContentLoaded', ( ) => {
    const artistsData = [
        { name: 'Bruno Mars', image: './img/bruno-mars.jpg' }, 
        { name: 'Kendrick Lamar', image: './img/kendrick-artista.jpg' },
        { name: 'Eminem', image: './img/eminem-artista.jpg' },
        { name: 'Sean Kingston', image: './img/sean-artista.jpg' },
        { name: 'Ice Cube', image: './img/icecube-artista.jpg' },
        { name: 'Tyler The Creator', image: './img/tyler-artista.jpg' }
]; 

const albumsData = [
    { name: '21', artist: 'Adele', image: './img/Adele.jpg' },
    { name: 'Favourite Worst Nightmare ', artist: 'Arctic Monkeys', image: './img/arctic-monkeys.jpg' },
    { name: 'Shawn', artist: 'Shawn Mendes', image: './img/ALBUM-SHAWN.jpg' },
    { name: 'Scorpion', artist: 'Drake', image: './img/album-drake.jpg' },
    { name: 'I Love You!', artist: 'The Neighbourhood', image: './img/album-sweater-weather.jpg' },
    { name: 'The Way It is', artist: 'Keysha Cole', image: './img/love-album.jpg' }
];

    const artistsGrid = document.querySelector('.artistas-grid');
    const albumsGrid = document.querySelector('.albuns-grid');

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>Artista</p>
        `

        artistsGrid.appendChild(artistCard)
    })

    albumsData.forEach( album => {
           const albumCard = document.createElement('div');
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <div>
                 <h3>${album.name}</h3>
                 <p>${album.artist}</p>
            </div>
        `

        albumsGrid.appendChild(albumCard)
    })
        
})


