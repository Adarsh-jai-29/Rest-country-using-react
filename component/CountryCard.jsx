import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({countryName,region,population,svgFlag,capital}) {
  return (
  <>
      <Link className ="country-card"  to={`${countryName}`}>
          <img src={svgFlag} alt="Iceland flag"/>
          <div className ="card-text">
              <h3 className ="card-title">{countryName}</h3>
              <p><b>Population: </b>{population.toLocaleString()}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital}</p>
          </div>
  </Link>
  
  </>


  )
}
