import React from "react";
import "./CountriesContainerShimmer.css";
export default function CountriesContainerShimmer() {
  const shimmerCard = new Array(20).fill(undefined).map((el,i) => {
    return (
      <div className="shimmer-container" key={i}> {/*ham key ke andar crypto.randomUUID() ko pass kar skte h jisse ki har baar random id generate hoti hai */}
        <div className="country-card shimmer-card"></div>
        <div className="country-card shimmer-card-down-1"></div>
        <div className="country-card shimmer-card-down-2"></div>
        <div className="country-card shimmer-card-down-3"></div>
        <div className="country-card shimmer-card-down-4"></div>
      </div>
    );
  });

  // yahi kaam ham Array.from se v kar sakte hai

  return <div className="countries-container">{shimmerCard}</div>;
}
