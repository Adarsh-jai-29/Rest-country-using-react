import React, { useContext, useState } from 'react'
import SearchBar from './SearchBar'
import Filter from './Filter'
import CountriesContainer from './CountriesContainer'
import { useOutletContext } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
function Home() {
  const [countrySearch , setCountrySearch] =  useState("");
  const [isDark] = useContext(ThemeContext)
  
  return (
    <main className={`${isDark?"dark":''}`}>
    <div className="search-filter-container">
    <SearchBar setQuery={ setCountrySearch} />
    <Filter setQuery={ setCountrySearch} />
    </div>
    <CountriesContainer query={ countrySearch} />
    </main>
  )
}

export default Home