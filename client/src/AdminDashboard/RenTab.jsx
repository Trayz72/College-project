import React from "react";
import { Link } from "react-router-dom";

export default function RenTab() {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className={`nav-link `} to="/rentableItems">
            All Items
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link `} to="/RentReq">
            Requests
          </Link>
        </li>
      </ul>
    </>
  );
}
