import { useState, useEffect } from "react";
import Search from "./components/Search";
import CountriesDisplay from "./components/CountriesDisplay";
import axios from "axios";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        const allCountries = [...response.data];

        setCountries(
          allCountries.map((country) => ({
            commonName: country.name.common,
            flag: country.flag,
            capital: country.capital,
            languages: country.languages,
            area: country.area,
          }))
        );
      });
  }, []);

  const handleChange = (e) => {
    if (countries) {
      const filteredCountries = countries.filter((country) =>
        country.commonName
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase())
      );

      setSearchResults(filteredCountries);
    }
  };

  if (searchResults && searchResults.length === 1) {
    return (
      <div>
        <Search onChange={handleChange} />
        <CountryDetails countries={searchResults} />
      </div>
    );
  }

  return (
    <div>
      <Search onChange={handleChange} />
      <CountriesDisplay
        countries={searchResults}
        setSearchResults={setSearchResults}
      />
    </div>
  );
}

export default App;
