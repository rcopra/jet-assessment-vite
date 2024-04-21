// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const searchForm = document.getElementById('searchForm');
const postInput = document.getElementById('postInput');
const resultsList = document.getElementById('restaurant-details')

// TODO: error handling, ideally strip spaces from postcode if time permits
postInput.addEventListener('click', function(){
    const postcode = searchForm.value.toLowerCase();

    if (!postcode) {
      alert('Please enter a valid postcode');
      return;
  }
    const apiURL = `/api/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            insertResults(data.restaurants);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to fetch data. Please try again.');
        });
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
