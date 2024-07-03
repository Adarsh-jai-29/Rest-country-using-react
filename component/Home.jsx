import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Filter from './Filter'
import CountriesContainer from './CountriesContainer'
function Home() {
  const [countrySearch , setCountrySearch] =  useState("")
  return (
    <main>
    <div className="search-filter-container">
    <SearchBar setQuery={ setCountrySearch} />
    <Filter />
    </div>
    <CountriesContainer query={ countrySearch} />
    </main>
  )
}

export default Home