import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Rent">Rent</Link>
        </li>
        <li>
          <Link to="/RentStatus">Rent Status</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
