
const details = document.querySelector(".details_card");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=" + id;


    async function detailedCoctail() {
            try {
                const response = await fetch(url);

                const results = await response.json();

                const coctails = results.drinks[0];

                console.log(coctails);
                    
                const listOfIngredients = [coctails.strIngredient1, coctails.strIngredient2, coctails.strIngredient3,
                coctails.strIngredient4, coctails.strIngredient5, coctails.strIngredient6, coctails.strIngredient7,
                coctails.strIngredient8, coctails.strIngredient9, coctails.strIngredient10];
            
            
                const filteredIngredients = listOfIngredients.filter(filterIngredients).join(" + ")

                    function filterIngredients(listOfIngredients) {
                        if (listOfIngredients !== null) {
                            return true;
                        }
                };
                const newPageTitle = `${coctails.strDrink}`

                document.title = newPageTitle;
            
                details.innerHTML += `<h1>${coctails.strDrink}</h1>
                                    <div><img class="img" src="${coctails.strDrinkThumb}"> </div>
                                    <div><h3>${coctails.strInstructions}</h3></div>
                                    <div><p>Served in: ${coctails.strGlass}</p></div>
                                    <div><p>Short list of ingridients: ${filteredIngredients}</p></div>`
        }
            

            catch (error) {
                console.log(error);
                details.innerHTML = errorMessage("An error has occured. Coctail is not to be found at the moment.");
            }
        }

detailedCoctail();


window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden")
});