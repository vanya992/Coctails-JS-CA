
const url = "https://hp-api.onrender.com/api/characters";

const detailsContainer = document.querySelector(".container")

async function fetchCharacters() {
        const response = await fetch(url);

        const results = await response.json();

       // console.log(results);

    const characters = results;

    detailsContainer.innerHTML = "";

    for (let i = 0; i < characters.length; i++) {
        console.log(characters[i].name);
   
    if (i === 20) {
        break;
    }

    detailsContainer.innerHTML += `<div class="container">${characters[i].name}</div>`
    } 

}

fetchCharacters();


// const loader = document.getElementById("loader")

// window.addEventListener("load", function () {
//     loader.style.display = "none";
// })