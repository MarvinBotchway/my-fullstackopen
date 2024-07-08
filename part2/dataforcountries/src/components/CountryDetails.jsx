import WeatherSection from "./WeatherSection";
import { useState } from "react";

const CountryDetails = ({ countries }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const flagStyle = {
    fontSize: 150,
  };

  return (
    <div>
      <h2>{countries[0].commonName}</h2>
      <p>
        capital {countries[0].capital}
        <br />
        area {countries[0].area}
      </p>
      <h3>languages:</h3>
      <ul>
        {Object.values(countries[0].languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <div style={flagStyle}>{countries[0].flag}</div>
      <WeatherSection
        countries={countries}
        weatherInfo={weatherInfo}
        setWeatherInfo={setWeatherInfo}
      />
    </div>
  );
};

export default CountryDetails;
