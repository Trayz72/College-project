import React from "react";
import { Link } from "react-router-dom";

export default function LocTab() {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className={`nav-link `} to="/state">
            States
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link `} to="/city">
            Cities
          </Link>
        </li>
      </ul>
    </>
  );
}
