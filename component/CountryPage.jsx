import React, { useEffect, useState } from "react";
import "./CountryPage.css";
import { Link, useParams } from "react-router-dom";

function CountryPage() {
  const [data, setData] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();
  const countryName = params.country;

  useEffect(() => {
    // setLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([countryData]) => {
        setData(countryData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [countryName]);

  useEffect(() => {
    if (data && data.borders) {
      Promise.all(
        data.borders.map((border) =>
          fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res) =>
            res.json()
          )
        )
      ).then((borderCountriesData) => {
        setBorderCountries(borderCountriesData.map(([country]) => country));
      });
    }
  }, [data]);

console.log(borderCountries)

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading country data.</div>;

  return (
    <>
      {data && (
        <main>
          <div className="country-details-container">
            <span className="back-button" onClick={() => history.back()}>
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            <div className="country-details">
              <img src={data.flags.svg} alt={data.name.common} />
              <div className="details-text-container">
                <h1>{data.name.common}</h1>
                <div className="details-text">
                  <p>
                    <b>Native Name: </b>
                    <span className="native-name">
                      {Object.values(data.name.nativeName)[0].common}
                    </span>
                  </p>
                  <p>
                    <b>Population: </b>
                    <span className="population">{data.population}</span>
                  </p>
                  <p>
                    <b>Region: </b>
                    <span className="region">{data.region}</span>
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    <span className="sub-region">{data.subregion}</span>
                  </p>
                  <p>
                    <b>Capital: </b>
                    <span className="capital">{data.capital.join(", ")}</span>
                  </p>
                  <p>
                    <b>Top Level Domain: </b>
                    <span className="top-level-domain">{data.tld}</span>
                  </p>
                  <p>
                    <b>Currencies: </b>
                    <span className="currencies">
                      {Object.values(data.currencies)[0].name}
                    </span>
                  </p>
                  <p>
                    <b>Languages: </b>
                    <span className="languages">
                      {Object.values(data.languages).join(", ")}
                    </span>
                  </p>
                </div>
                <div className="border-countries">
                  <b>Border Countries: </b>&nbsp;
                  {data.borders == undefined ? (
                    <div>No Border Country</div>
                  ) : (
                    borderCountries.map((borderCountry) => (
                      <Link
                        key={borderCountry.cca3}
                        to={`/${borderCountry.name.common}`}
                      >
                        {borderCountry.name.common}
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default CountryPage;
