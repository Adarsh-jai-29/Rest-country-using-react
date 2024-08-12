import React, { useState } from 'react'


export default function Filter() {
  const [region,setRegion] = useState('')
  const selectedValue = (e)=>{console.log(e.target.value)}
  return (
    <form>
    <select className="filter-by-region" onChange={selectedValue}>
    <option hidden>Filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="America">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
  </form>
  )
}
