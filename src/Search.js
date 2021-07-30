import React from "react";
import './search.css';

export default function Search() {
  return (
    <div className="Search">
      <form id="city-search-form">
        <div className="row">
          <div className="col-6">
            <input
              id="search-bar"
              type="text"
              placeholder="Type a city..."
              autoFocus
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              id="submit-button"
              type="submit"
              className="btn btn-outline-secondary"
              value="🔎"
            />
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-outline-secondary"
              id="current-location-button"
            >
              <span role="img" aria-label="current">
                📍
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
