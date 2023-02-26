const detailsContainer = document.querySelector(".container");

const messageContainer = document.querySelector(".message");


const url = "https://www.thecocktaildb.com/api/json/v2/9973533/recent.php";



async function getDrink() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        console.log(results.drinks);

        const coctails = results.drinks;

        // making HTML clean for innerHTML text

        detailsContainer.innerHTML = "";

        // looping through objects to display them 
        for (let i = 0; i < coctails.length; i++) {

            detailsContainer.innerHTML += `<a href="details.html?id=${coctails[i].idDrink}" class="cards">
                                          <div><h2>${coctails[i].strDrink}</h2></div>
                                        <div><img src="${coctails[i].strDrinkThumb}" class="img"></div>
                                        <div><h4>${coctails[i].strAlcoholic}</h4></div>
                                            </a>`
            
            const newTitle = `${coctails[i].strCategory} ${coctails[i].strAlcoholic}`;

            document.title = newTitle;
                 
        }
    }

    catch (error) {
        console.log(error);
        messageContainer.innerHTML = errorMessage("An error has occured.");
    }
}

 getDrink();



 // hiding loader after page loads

window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("loader--hidden")
});