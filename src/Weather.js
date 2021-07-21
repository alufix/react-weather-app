import React from "react";

import Today from "./Today";
import Search from "./Search";
import Forecast from "./Forecast";
import Credit from "./Credit";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app shadow p-3 mb-5 bg-body rounded" id="app-bg">
        <Search />
        <Today />
        <Forecast />
        <Credit />
      </div>
    </div>
  );
}
