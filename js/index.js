const detailsContainer = document.querySelector(".container");

const messageContainer = document.querySelector(".message");



const url = "https://www.thecocktaildb.com/api/json/v2/9973533/recent.php";



async function getDrink() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        console.log(results.drinks);

        const coctails = results.drinks;

        detailsContainer.innerHTML = "";

        for (let i = 0; i < coctails.length; i++) {

            detailsContainer.innerHTML += `<a href="details.html?id=${coctails[i].idDrink}" class="cards">
                                          <div><h2>${coctails[i].strDrink}</h2></div>
                                        <div><img src="${coctails[i].strDrinkThumb}" class="img"></div>
                                            </a>`
                 
        }
    }

    catch (error) {
        console.log(error);
        messageContainer.innerHTML = error;
    }
}

getDrink();

window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden")
});


