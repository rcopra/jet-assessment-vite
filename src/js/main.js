// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const searchForm = document.getElementById('searchForm');
const postInput = document.getElementById('postInput');
// TODO:
// add event listener to search button
// when button is clicked, we take value from input field and create API URL
postInput.addEventListener('click', function(){
    const postcode = searchForm.value;
    const apiURL = `/api/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
          console.log(data)
      })
});
// fetch select data from the API, and filter relevant data (name, address, rating, cuisines)
// update index.html via DOM, limiting results to 10 restaurants
