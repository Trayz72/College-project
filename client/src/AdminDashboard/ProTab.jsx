import React from "react";
import { Link } from "react-router-dom";

export default function ProTab() {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className={`nav-link `} to="/productType">
            Type
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link `} to="/productCategory">
            Category
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link `} to="/productWeight">
            Weight
          </Link>
        </li>
      </ul>
    </>
  );
}
