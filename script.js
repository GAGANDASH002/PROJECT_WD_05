const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};


const getWeather = (city)=>{
    cityName.innerHTML= city
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);


    //cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML =  response.humidity
    humidity2.innerHTML =  response.humidity
    min_temp.innerHTML =  response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
  
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("New Delhi")


class Weather {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
      this.cities = [
        { id: 's', name: 'Shanghai' },
        { id: 'ny', name: 'New York' },
        { id: 'm', name: 'Mumbai' },
        { id: 'p', name: 'Paris' },
      ];
    }
  
    fetchWeather() {
      this.cities.forEach(city => {
        const url = `${this.baseUrl}?city=${city.name}`;
  
        fetch(url, {
          headers: {
            'X-RapidApi-Key': this.apiKey
          }
        })
        .then(response => response.json())
        .then(data => this.updateTable(city.id, data))
        .catch(error => console.error('Error fetching weather data:', error));
      });
    }
  
    updateTable(cityId, data) {
      const temp = document.getElementById(`temp_${cityId}`);
      const feelsLike = document.getElementById(`feels_like_${cityId}`);
      const humidity = document.getElementById(`humidity_${cityId}`);
      const minTemp = document.getElementById(`min_temp_${cityId}`);
      const maxTemp = document.getElementById(`max_temp_${cityId}`);
      const windSpeed = document.getElementById(`wind_speed_${cityId}`);
  
      if (data) {
        temp.innerHTML = `${data.temp} °C`;
        feelsLike.innerHTML = `${data.feels_like} °C`;
        humidity.innerHTML = `${data.humidity} %`;
        minTemp.innerHTML = `${data.min_temp} °C`;
        maxTemp.innerHTML = `${data.max_temp} °C`;
        windSpeed.innerHTML = `${data.wind_speed} km/h`;
      } else {
        temp.innerHTML = 'N/A';
        feelsLike.innerHTML = 'N/A';
        humidity.innerHTML = 'N/A';
        minTemp.innerHTML = 'N/A';
        maxTemp.innerHTML = 'N/A';
        windSpeed.innerHTML = 'N/A';
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87'; // Replace with your API Ninja key
    const weather = new Weather(apiKey);
    weather.fetchWeather();
  });
  


