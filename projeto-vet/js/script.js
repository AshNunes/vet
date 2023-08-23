function api() {
    
    fetch('https://rickandmortyapi.com/api/character/1')
        .then(response => response.json())
        .then(json => console.log(json))
        
    }
    
    