import React from 'react'
import  "./CountriesContainerShimmer.css"
export default function CountriesContainerShimmer() {

 const shimmerCard = new Array(20).fill(undefined)
 .map((el)=>{ 
  return <div className="country-card shimmer-card" ></div>
  })

  // yahi kaam ham Array.from se v kar sakte hai  

  return (
    <div className='countries-container'>
   { shimmerCard }
    </div>
  )
}
