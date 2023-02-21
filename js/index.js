const detailsContainer = document.querySelector(".container");

const messageContainer = document.querySelector(".message");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://hp-api.onrender.com/api/characters";



async function fetchCharacters() {
    try {const response = await fetch(url);

        const results = await response.json();

        console.log(results);

        const characters = results;

        detailsContainer.innerHTML = "";

           for (let i = 0; i < results.length; i++) {
        
                if (!results[i].image || !results[i].name || !results[i].house) {
                                continue;
                            }
                    
                detailsContainer.innerHTML += `<a href="details.html?id=${results[i].id}" class="cards">
                                                <div><h2>${results[i].name}</h2></div>
                                                <div><img class="img" src="${results[i].image}" alt="${results[i].name}"></div>
                                                <div><p>${results[i].house}</p></div>
                                                </a>`
           }
        
    } 
    
       catch (error) {
            console.log(error);
           messageContainer.innerHTML = error;
    }

}

fetchCharacters();


window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden")
});


