import { useState, useEffect } from "react";
import { FaInstagram, FaTiktok, FaLinkedin, FaFacebook } from "react-icons/fa";

function TopNavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-white shadow-sm fixed-top transition-navbar ${
        showNavbar ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/home">
          <img
            src="https://i.ibb.co/Mx0qcxtt/Logox2.png"
            alt="Logo CTL Empresariales"
            width="90"
            height="50"
            className="me-2"
            style={{ objectFit: "contain" }}
          />
          <span className="fw-bold text-primary fs-5">CTL EMPRESARIALES</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="/home">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">¿Quiénes Somos?</a></li>
            <li className="nav-item"><a className="nav-link" href="/services">Servicios</a></li>
            <li className="nav-item"><a className="nav-link" href="/equipo">Equipo</a></li>
            <li className="nav-item"><a className="nav-link" href="/calendario">Calendario</a></li>
            <li className="nav-item"><a className="nav-link" href="/capacitaciones">Capacitaciones</a></li>
          </ul>

          <div className="d-flex gap-3 align-items-center">
            <a href="https://www.instagram.com/ctlempresarialeshn/" target="_blank" rel="noreferrer" className="text-decoration-none text-dark fs-5"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@ctlempresariales?_t=ZM-8xISrlMOkES&_r=1" target="_blank" rel="noreferrer" className="text-decoration-none text-dark fs-5"><FaTiktok /></a>
            <a href="https://www.linkedin.com/in/ctl-empresariales-hn-423331339/" target="_blank" rel="noreferrer" className="text-decoration-none text-dark fs-5"><FaLinkedin /></a>
            <a href="https://www.facebook.com/share/1BhSwU4tkH/" target="_blank" rel="noreferrer" className="text-decoration-none text-dark fs-5"><FaFacebook /></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;
