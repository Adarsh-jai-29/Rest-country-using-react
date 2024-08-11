import React from "react";
import "./CountriesContainerShimmer.css";
export default function CountriesContainerShimmer() {
  const shimmerCard = new Array(20).fill(undefined).map((el) => {
    return (
      <div className="shimmer-container">
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
