import React, { useState } from 'react'


export default function Filter({setQuery}) {
  return (
    <form>
    <select className="filter-by-region" onChange={(e)=>setQuery(e.target.value.toLowerCase())}>
    <option hidden>Filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="Americas">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
  </form>
  )
}
