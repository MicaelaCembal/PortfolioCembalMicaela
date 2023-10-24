import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/styles.css";

const PageProyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    axios.get('../../micaela.json')
      .then(response => {
        setProyectos(response.data);
        console.data(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, [])

  return (
    <section className="py-5">
    <div className="container px-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0">
          <span className="text-gradient d-inline">Projects</span>
        </h1>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          {proyectos.map((proyecto, index) => (
            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5" key={index}>
              <div className="card-body p-0">
                <div className="d-flex align-items-center">
                  <div className="p-5">
                    <h2 className="fw-bolder">{proyecto.titulo}</h2>
                    <p>{proyecto.descripcion}</p>
                    <p>Fecha: {proyecto.fecha}</p>
                    <p>Enlace: <a href={proyecto.url} target="_blank" rel="noopener noreferrer">{proyecto.url}</a></p>
                  </div>
                  <img
                    className="img-fluid"
                    src={proyecto.imagenes[0]} 
                    alt="..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <section className="py-5 bg-gradient-primary-to-secondary text-white">
      <div className="container px-5 my-5">
        <div className="text-center">
          <h2 className="display-4 fw-bolder mb-4">
            Let's build something together
          </h2>
          <Link
            className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
            to="/contacto"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  </section>
  );
};

export default PageProyectos;
