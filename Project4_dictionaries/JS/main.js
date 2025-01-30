

function my_Dictionary() {
    var movie = { 
        title:"Twisters" 
        Genre:"Action"
        Director:"Lee Isaac Chung"
        Rating:"PG-13"
              
        
    };
    delete movie.Genre;
    document.getElementById("Dictionary").innerHTML = movie.Genre;}