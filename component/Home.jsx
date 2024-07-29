import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Filter from './Filter'
import CountriesContainer from './CountriesContainer'
import { useOutletContext } from 'react-router-dom';
function Home() {
  const [countrySearch , setCountrySearch] =  useState("");
  const [isDark] = useOutletContext()
  
  return (
    <main className={`${isDark?"dark":''}`}>
    <div className="search-filter-container">
    <SearchBar setQuery={ setCountrySearch} />
    <Filter />
    </div>
    <CountriesContainer query={ countrySearch} />
    </main>
  )
}

export default Home