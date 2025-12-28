const API_KEY = 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

const mockWeatherData = {
    lahore: { name: 'Lahore', country: 'PK', temp: 32, feels_like: 38, humidity: 60, wind_speed: 2, description: 'Broken Clouds' },
    karachi: { name: 'Karachi', country: 'PK', temp: 29, feels_like: 33, humidity: 75, wind_speed: 3.5, description: 'Clear Sky' },
    islamabad:{ name: 'Islamabad', country: 'PK', temp: 25, feels_like: 27, humidity: 55, wind_speed: 1.5, description: 'Partly Cloudy' },
    default: { name: 'Unknown', country: '', temp: 25, feels_like: 26, humidity: 50, wind_speed: 2, description: 'Clear Sky' }
};

searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') handleSearch();
});

function handleSearch() {
    const city = cityInput.value.trim().toLowerCase();
    if (!city) return alert('Enter city name');

    if (API_KEY === 'YOUR_API_KEY_HERE') {
        updateWeatherUI(mockWeatherData[city] || mockWeatherData.default);
    }
}

function updateWeatherUI(data) {
    cityName.textContent = `${data.name}, ${data.country}`;
    temperature.textContent = `${data.temp}°C`;
    weatherCondition.textContent = data.description;
    feelsLike.textContent = `Feels like: ${data.feels_like}°C`;
    humidity.textContent = `Humidity: ${data.humidity}%`;
    windSpeed.textContent = `Wind: ${data.wind_speed} m/s`;
}

window.addEventListener('DOMContentLoaded', () => {
    updateWeatherUI(mockWeatherData.lahore);
});
