// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const searchForm = document.getElementById('searchForm');
const postInput = document.getElementById('postInput');
const resultsList = document.getElementById('restaurant-details');


postInput.addEventListener('click', function(){
  // TODO: Strip spaces from postcode if time permits (regex)
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
  resultsList.innerHTML = ''
  if (restaurants && restaurants.length > 0) {
  restaurants.slice(0, 10).forEach(restaurant => {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');

    const cuisines = restaurant.cuisines.map(cuisine => cuisine.name).join(', ');
    const rating = restaurant.rating ? restaurant.rating.starRating : 'No rating';
    const address = `${restaurant.address.firstLine}, ${restaurant.address.city}, ${restaurant.address.postalCode}`;

    card.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">${restaurant.name}</h5>
        <p class="card-text"><small class="text-muted">${address}</small></p>
        <p class="card-text"><strong>Cuisines:</strong> ${cuisines}</p>
        <p class="card-text"><strong>Rating:</strong> ${rating}</p>
    </div>
`;
resultsList.appendChild(card);
});
} else {
  resultsList.innerHTML = '<div class="alert alert-warning" role="alert">No restaurants found! Please input another postcode</div>';
  }
};
