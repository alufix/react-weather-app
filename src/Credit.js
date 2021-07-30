import React from "react";
import './credit.css';

export default function Credit() {
  return (
    <div className="Credit">
      <span id="credit">
        Coded by:{" "}
        <a
          id="github"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/alufix/react-weather-app"
        >
          Anna-Louise Blewden
        </a>
      </span>
    </div>
  );
}
