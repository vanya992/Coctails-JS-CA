const details = document.querySelector(".details_card");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://www.thecocktaildb.com/api/json/v2/9973533/recent.php?id=" + id;

async function detailedCoctail() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        const coctails = results.drinks;

        console.log(coctails);

        for (let i = 0; i < coctails.length; i++) {
            
            const listOfIngredients = [coctails[i].strIngredient1, coctails[i].strIngredient2, coctails[i].strIngredient3,
            coctails[i].strIngredient4, coctails[i].strIngredient5, coctails[i].strIngredient6, coctails[i].strIngredient7,
                coctails[i].strIngredient8, coctails[i].strIngredient9, coctails[i].strIngredient10];
            
            
            const filteredIngredients = listOfIngredients.filter(filterIngredients)

            function filterIngredients(listOfIngredients) {
                if (listOfIngredients !== null) {
                    return true;
                }
            }
            
            details.innerHTML = `<h1>${coctails[i].strDrink}</h1>
                            <div><img class="img" src="${coctails[i].strDrinkThumb}"></div>
                            <div><h4>${coctails[i].strInstructions}</h4></div>
                            <div>Served in: ${coctails[i].strGlass}</div>
                            <div>Short list of ingridients: ${filteredIngredients}</div>`
    }
    }

    catch (error) {
        console.log(error);
    }
}

detailedCoctail()

window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden")
});