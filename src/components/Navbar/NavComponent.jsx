import React, { useState, useEffect } from 'react';
import './style.css';

export const NavComponent = () => {
  // Definimos un estado llamado 'isSticky' que comienza como 'false'
  const [isSticky, setIsSticky] = useState(false);
  // Estado para realizar un seguimiento de la sección activa
  const [activeSection, setActiveSection] = useState(null);

  // useEffect se utiliza para ejecutar código cuando el componente se monta o actualiza
  useEffect(() => {
    // Función para manejar el evento de desplazamiento (scroll)
    const handleScroll = () => {
      // Obtén la posición actual del usuario
      const currentPosition = window.scrollY;

      // Determina la sección activa en función de la posición de desplazamiento
      const section1 = document.getElementById("section_1");
      const section2 = document.getElementById("section_2");
      const section3 = document.getElementById("section_3");
      const section4 = document.getElementById("section_4");

      if (
        currentPosition >= section1.offsetTop &&
        currentPosition < section2.offsetTop
      ) {
        setActiveSection("section_1");
      } else if (
        currentPosition >= section2.offsetTop &&
        currentPosition < section3.offsetTop
      ) {
        setActiveSection("section_2");
      } else if (
        currentPosition >= section3.offsetTop &&
        currentPosition < section4.offsetTop
      ) {
        setActiveSection("section_3");
      } else if (currentPosition >= section4.offsetTop) {
        setActiveSection("section_4");
      } else {
        setActiveSection(null); // Si ninguna sección está activa, establece como nulo
      }

      // Comprobamos si la posición de desplazamiento vertical es mayor que 0
      if (currentPosition > 0) {
        // Si es mayor que 0, establecemos 'isSticky' como 'true'
        setIsSticky(true);
      } else {
        // Si no es mayor que 0, establecemos 'isSticky' como 'false'
        setIsSticky(false);
      }
    };

    // Agregamos un oyente de eventos de desplazamiento cuando el componente se monta
    window.addEventListener('scroll', handleScroll);

    // Limpiamos (removemos) el oyente de eventos cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El segundo argumento de useEffect, un array vacío, significa que se ejecutará solo una vez al montar el componente

  // Renderizamos el componente de navegación
  return (
    // Usamos interpolación de cadena para agregar la clase 'sticky' si 'isSticky' es 'true'
    <nav className={`navbar navbar-expand-lg${isSticky ? ' sticky' : ''}`}>
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a href="index.html" className="navbar-brand mx-auto mx-lg-0">
          Alex
        </a>

        <div className="d-flex align-items-center d-lg-none">
          <i className="bi bi-telephone"></i>
          <a className="custom-btn btn" href="#section_4">
            +503 7114 0394
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-5">
            <li className={`nav-item ${activeSection === "section_1" ? "active" : ""}`}>
              <a className="nav-link click-scroll" href="#section_1">
                Inicio
              </a>
            </li>

            <li className={`nav-item ${activeSection === "section_2" ? "active" : ""}`}>
              <a className="nav-link click-scroll" href="#section_2">
                Acerca de mi
              </a>
            </li>

            <li className={`nav-item ${activeSection === "section_3" ? "active" : ""}`}>
              <a className="nav-link click-scroll" href="#section_3">
                Proyectos
              </a>
            </li>

      
          </ul>

          <div className="d-lg-flex align-items-center d-none ms-auto">
            <i className="navbar-icon bi-telephone-plus me-3"></i>
            <a className="custom-btn btn" id="telephoneNumber" href="#section_4">
              +503 7114 0394
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
