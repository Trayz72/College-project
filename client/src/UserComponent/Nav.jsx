import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logContext } from "../Context";

const Nav = () => {
  const { logout, userId } = useContext(logContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      {/* ... (other elements) */}
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/home/${userId}`}>
          <h3>Maruti Fiber</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to=".">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="rent">
                Rent
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="rentStatus">
                Rent Status
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-success"
              onClick={logout}
              type="button"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
