import React from "react";
import { Link } from "react-router-dom";

export default function SevTab() {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className={`nav-link `} to="/services">
            Category
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className={`nav-link `} to="/city">
            
          </Link>
        </li> */}
      </ul>
    </>
  );
}
