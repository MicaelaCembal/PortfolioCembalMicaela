import React, { useEffect, useState } from "react";
import { Link, useLocation, Route, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/styles.css";

function Header() {
    return (
        <>
            <header className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                                    <div className="text-uppercase">Design &middot; Development &middot; Marketing</div>
                                </div>
                                <div className="fs-3 fw-light text-muted">I can help your business to</div>
                                <h1 className="display-3 fw-bolder mb-5">
                                    <span className="text-gradient d-inline">Get online and grow fast</span>
                                </h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <Link to="/resumeN" className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">
                                        Resumen
                                    </Link>
                                    <Link to="/proyectos" className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder">
                                        Proyectos
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-gradient-primary-to-secondary">
                                    <img className="profile-img" src="" alt="..." />
                                    <div className="dots-1">
                                        <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 191.6 1215.4"
                                            style={{ enableBackground: "new 0 0 191.6 1215.4" }}
                                            xmlSpace="preserve"
                                        >
                                            <g transform="translate(0.000000, 1280.000000) scale(0.100000, -0.100000)">
                                                <path d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,12801.6,289.7,12808.6,227.7,12788.6z"></path>
                                                {/* Resto de las rutas */}
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="dots-2">
                                        <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 191.6 1215.4"
                                            style={{ enableBackground: "new 0 0 191.6 1215.4" }}
                                            xmlSpace="preserve"
                                        >
                                            <g transform="translate(0.000000, 1280.000000) scale(0.100000, -0.100000)">
                                                <path d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,12801.6,289.7,12808.6,227.7,12788.6z"></path>
                                                {/* Resto de las rutas */}
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="dots-3">
                                        <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 191.6 1215.4"
                                            style={{ enableBackground: "new 0 0 191.6 1215.4" }}
                                            xmlSpace="preserve"
                                        >
                                            <g transform="translate(0.000000, 1280.000000) scale(0.100000, -0.100000)">
                                                <path d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,12801.6,289.7,12808.6,227.7,12788.6z"></path>
                                                {/* Resto de las rutas */}
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header; 