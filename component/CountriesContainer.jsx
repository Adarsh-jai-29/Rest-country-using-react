import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import CountriesContainerShimmer from './CountriesContainerShimmer';

export default function CountriesContainer({ query }) {
  const [countryData, SetCountryData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        SetCountryData(data);
      });
  }, []);
  console.log(countryData);
  return (
    <>
{
  countryData.length == 0 ?
      <CountriesContainerShimmer />
    :
      <div className="countries-container">
        {countryData
         .filter((data) => {
             return data.name.common.toLowerCase().includes(query);
          })
          .map((country) => {
           return <CountryCard
              countryName={country.name.common}
              region={country.region}
              population={country.population}
              svgFlag={country.flags.svg}
              capital={country.capital?.[0]}
              key = {country.name.common}
            />;
          })
          }
      </div>
    
      
      }
    </>
  );
}
