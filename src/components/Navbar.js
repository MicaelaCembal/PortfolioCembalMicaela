import React, { useEffect, useState } from "react";
import { Link, useLocation, Route, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/styles.css";
import Header from './Header'
function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container px-5">
          <Link className="navbar-brand" to="/">
            <span className="fw-bolder text-primary">Micaela Cembal</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setExpandNavbar(!expandNavbar)}
          >
            <ReorderIcon />
          </button>
          <div className={`collapse navbar-collapse ${expandNavbar ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/resumen">
                  Resumen
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/proyectos">
                  Proyectos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
