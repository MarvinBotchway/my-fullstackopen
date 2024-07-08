import { useEffect } from "react";
import axios from "axios";

const WeatherSection = ({ countries, setWeatherInfo, weatherInfo }) => {
  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const city = countries[0].capital[0];
    const cityToCoordintesUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    const cityCoordinates = axios
      .get(cityToCoordintesUrl)
      .then((response) => response.data[0])
      .then((coordinates) => ({ lat: coordinates.lat, lon: coordinates.lon }));

    cityCoordinates.then((coordinates) => {
      const weatherForCityUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`;
      axios.get(weatherForCityUrl).then((response) => {
        const icon = response.data.weather[0].icon;
        setWeatherInfo({
          temperature: response.data.main.temp,
          wind: response.data.wind.speed,
          temperatureIconUrl: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        });
      });
    });
  }, []);

  if (!countries || !weatherInfo) return;

  return (
    <div>
      <h2>Weather in {countries[0].capital}</h2>
      <p>temperature {weatherInfo.temperature} Celcius</p>
      <img src={weatherInfo.temperatureIconUrl} alt="" />
      <p>wind {weatherInfo.wind} m/s</p>
    </div>
  );
};

export default WeatherSection;
