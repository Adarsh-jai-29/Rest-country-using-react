import React from 'react';
import classes from './CountryPageShimmer.module.css';
function CountryPageShimmer() {
  return (
    <>
      <main >
        <div className = {classes["country-details-container"]}>
         
          <div className = {classes["country-details"]}>
           <img />
            <div className = {classes["details-text-container"]}>
              <h1></h1>
              <div className = {classes["details-text"]}>
                <p>
                  <b></b>
                  <span className = {classes["native-name"]}></span>
                </p>
                <p>
                  <b></b>
                  <span className = {classes.population}></span>
                </p>
                <p>
                  <b></b>
                  <span className = {classes.region}></span>
                </p>
                <p>
                  <b> </b>
                  <span className = {classes["sub-region"]}></span>
                </p>
                <p>
                  <b></b>
                  <span className = {classes.capital}></span>
                </p>
                <p>
                  <b> </b>
                  <span className = {classes["top-level-domain"]}></span>
                </p>
                <p>
                  <b></b>
                  <span className = {classes.currencies}></span>
                </p>
                <p>
                  <b></b>
                  <span className = {classes.languages}></span>
                </p>
              </div>
              <div className = {classes["border-countries"]}>
                <b> </b>&nbsp;<div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CountryPageShimmer;
