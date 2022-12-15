// Define the city and country code for Linz, Austria
const city = "Linz";
const countryCode = "AT";

// Construct the URL for the API request
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${config.apiKey}`;
// Use the fetch() method to send a GET request to the API
fetch(url)
  .then((response) => {
    // When the request is successful, parse the JSON data from the response
    return response.json();
  })
  .then((data) => {
    // Extract the current weather data from the JSON object
    const temperatureK = data.main.temp;
    const weatherDescription = data.weather[0].description;

    // Convert the temperature from Kelvin to Celsius and round it to the nearest integer
    const temperatureC = Math.round(temperatureK - 273.15);

    // Use the extracted data to display the current weather for Linz
    const weatherContainer = document.getElementById("weather");
    weatherContainer.innerHTML = `
      <h2>${city}:</h2>
      <ul>
        <li>Temperatur: ${temperatureC}°C</li>
        <li>Witterung: ${weatherDescription}</li>
      </ul>
    `;
  })
  .catch((error) => {
    // Get the element where you want to display the error message
    const errorContainer = document.getElementById("error-container");
  
    // Set the innerHTML of the element to the error message
    errorContainer.innerHTML = `<p>Error: ${error}</p>`;
  });
  