// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const searchForm = document.getElementById('searchForm');
const postInput = document.getElementById('postInput');
const resultsList = document.getElementById('restaurant-details')
// TODO:
// add event listener to search button
// when button is clicked, we take value from input field and create API URL
postInput.addEventListener('click', function(){
    const postcode = searchForm.value;
    const apiURL = `/api/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
          insertResults(data.restaurants)
      })
});
// fetch select data from the API, and filter relevant data (name, address, rating, cuisines)
// update index.html via DOM, limiting results to 10 restaurants
function insertResults(restaurants) {
  resultsList.innerHTML = ""

  restaurants.slice(0, 10).forEach(restaurant => {
    const cuisines = restaurant.cuisines.map(cuisine => cuisine.name).join(',');
    const rating = restaurant.rating ? restaurant.rating.starRating : 'No rating';
    const address = `${restaurant.address.firstLine}, ${restaurant.address.city}, ${restaurant.address.postalCode}`;
    resultsList.insertAdjacentHTML("beforeend", `<li class="list-group-item">${restaurant.name}, ${rating}, ${cuisines}, ${address}</li>`)
  })
};
