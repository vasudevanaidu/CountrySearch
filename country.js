let countriesContainerE1 = document.getElementById("resultCountries");
let inputE1 = document.getElementById("searchInput");

function displayEachCountry(country) {
    let countryContainer = document.createElement("div")
    countryContainer.classList.add("country-card", "d-flex", "flex-row");
    countriesContainerE1.appendChild(countryContainer)

    let imageE1 = document.createElement("img") 
    imageE1.src = country.flag
    imageE1.classList.add("country-flag")
    countryContainer.appendChild(imageE1)

    let titleAndPopContainer = document.createElement("div")
    titleAndPopContainer.classList.add("ml-3")
    countryContainer.appendChild(titleAndPopContainer)

    let titleE1 = document.createElement("h1")
    titleE1.textContent = country.name
    titleE1.classList.add("country-name")
    titleAndPopContainer.appendChild(titleE1)

    let popE1 = document.createElement("p")
    popE1.textContent = country.population
    popE1.classList.add("country-population")
    titleAndPopContainer.appendChild(popE1)

}

function displayCountry(countries) {
    countriesContainerE1.textContent = ""
    for (let country of countries) {
        let letter = country.name
        if (letter.includes(inputE1.value)) {
            displayEachCountry(country)
        }
    }
}

function countriesSearchPage(event) {
    let requestUrl = "https://apis.ccbp.in/countries-data"
    let options = {
        method: "GET"
    }
    
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let countries = jsonData
            let input1 = event.target.value
            displayCountry(countries)
        })
}

inputE1.addEventListener("keydown", countriesSearchPage)