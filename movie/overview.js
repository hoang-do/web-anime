$(document).ready(function() {
    const API_URL = 'https://61c41fc6f1af4a0017d99356.mockapi.io/api/products';
    const main = document.getElementById('main');
    
    getMovies(API_URL);
    
    function getMovies(url) {
        $.ajax({
            type: 'GET',
            url: url,
            success: function(data) {
                showMovies(data);
            }
        })
    }
    
    function showMovies(data) {
        main.innerHTML ='';
        data.forEach(mockData => {
            const{name, image, overview, vote} = mockData;
            const movieE1 = document.createElement('div');
            movieE1.classList.add('movie');
            movieE1.innerHTML =
            `
             <img src="${image}" >
  
            <div class="movie-info">
                <h3>${name}</h3>
                <span class="${getColor(vote)}">${vote}</span>
            </div>
  
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>`;

      main.appendChild(movieE1);  
        })
    }
    function getColor(votes) {
        if(votes >= 8) {
            return 'green'
        }else if(votes >= 5){
            return 'orange'
        }else{
            return 'red'
        }
    }
})
