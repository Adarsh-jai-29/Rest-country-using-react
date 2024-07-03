import React, { useEffect, useState } from "react";
import "./CountryPage.css";
import { Link, useParams } from "react-router-dom";
function CountryPage() {
  // const countryName = new URLSearchParams(location.search).get("name");
  const [data, setData] = useState(null);
  // const [error, setError] = useState(false);
  const params = useParams();
  const countryName = params.country;

  console.log(countryName);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([countryData]) => {
        setData(countryData);
      });
  }, []);
  console.log(data);
  return (
    <>
      {data && (
        <main>
          <div className="country-details-container">
            <span className="back-button" onClick={() => history.back()}>
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            <div className="country-details">
              <img src={data.flags.svg} alt={data.name} />
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
                    data.borders.map((border) => (
                      <Link key={border} to={`/${border}`}>
                        {border}
                      </Link>
                    ))
                  )
                  
                  }
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
