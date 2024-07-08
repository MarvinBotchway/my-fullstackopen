const CountriesDisplay = ({ countries, setSearchResults }) => {
  if (!countries || countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  return (
    <div>
      {countries.map((country) => (
        <div key={country.commonName}>
          {country.commonName}
          <button onClick={() => setSearchResults([country])}>show</button>
        </div>
      ))}
    </div>
  );
};

export default CountriesDisplay;
