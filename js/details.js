const details = document.querySelector(".details_card");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://www.thecocktaildb.com/api/json/v2/9973533/recent.php?idDrink=" + id;

console.log(url);


    async function detailedCoctail() {
            try {
                const response = await fetch(url);

                const results = await response.json();

                const coctails = results.drinks;

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
            

                
            
                details.innerHTML += `<h1>${coctails.strDrink}</h1>
                                    <div><img class="img" src="${coctails.strDrinkThumb}"></div>
                                    <div><h4>${coctails.strInstructions}</h4></div>
                                    <div>Served in: ${coctails.strGlass}</div>
                                    <div>Short list of ingridients: ${filteredIngredients}</div>`
        }
            

            catch (error) {
                console.log(error);
            }
        }

detailedCoctail()

// window.addEventListener("load", () => {
//     document.querySelector(".loader").classList.add("loader--hidden")
// });