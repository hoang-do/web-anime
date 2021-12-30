$.ajax({
    type: "GET",
    url: "https://61cc40f0198df60017aebf74.mockapi.io/products",
    success: function (dataMoviesLarge) {
        renderMoviesLarge(dataMoviesLarge)
    },
});

function renderMoviesLarge(movies){
    var html = movies.map(movie => {
        return `<img src="${movie.image}" class="row_poster row_posterLarge">`
    })
    document.querySelector('.row_postersLarge').innerHTML = html.join('\n');
}

$.ajax({
    type: "GET",
    url: "https://61cc40f0198df60017aebf74.mockapi.io/product",
    success: function (dataMoviesSmall) {
        renderMoviesSmall(dataMoviesSmall)
    },
});

function renderMoviesSmall(movies){
    var html = movies.map(movie => {
        return `<img src="${movie.image}" class="row_poster">`
    })
    const row_posters = document.querySelectorAll('.row_postersSmall')
    for (const row_poster of row_posters) {
        row_poster.innerHTML = html.join('\n');
    }
    
}

