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
            
        details.innerHTML = `<h1>${coctails.strDrink}</h1>
                            <div><img class="img" src="${coctails.strImageSource}"></div>
                            <div><h4>${coctails.strInstructions}</h4></div>
                            <div>Made in: ${coctails.strGlass}</div>
                            <div>Short list of ingridients: ${coctails.strIngridient1}, ${coctails.strIngridient2}, ${coctails.strIngridient3}, ${coctails.strIngridient4}, ${coctails.strIngridient5}, ${coctails.strIngridient6}, ${coctails.strIngridient7}, ${coctails.strIngridient8}, ${coctails.strIngridient9}, ${coctails.strIngridient10}</div>`
       
}
    }

    catch (error) {
        console.log(error);
    }
}

detailedCoctail()