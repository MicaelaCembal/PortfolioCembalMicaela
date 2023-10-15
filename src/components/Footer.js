import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import "../styles/styles.css";

function Footer() {
  return (
    <footer className="bg-white py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto">
            <div className="small m-0">Copyright &copy;  2023 Micaela Cembal. Todos los derechos reservados</div>
          </div>
          <div className="col-auto">
            <Link to="/" className="small mx-1">
              Privacy
            </Link>
            <span className="mx-1">&middot;</span>
            <Link to="/" className="small mx-1">
              Terms
            </Link>
            <span className="mx-1">&middot;</span>
            <Link to="/contacto" className="small mx-1">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
