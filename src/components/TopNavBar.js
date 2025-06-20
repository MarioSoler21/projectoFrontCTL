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
  className="navbar navbar-expand-lg fixed-top transition-navbar"
 style={{
  paddingTop: "0.02rem",
  paddingBottom: "0.2rem",
  background: "linear-gradient(to right, #ffffff, #2f70c4, #5732b9, #ffffff, #ffffff, #ffffff)",
  borderBottom: "1px solid #ccc",
  zIndex: 999,
}}

>

  <div className="container-fluid">
    <a className="navbar-brand d-flex align-items-center" href="/home">
      <img
        src="https://i.ibb.co/XfF98PkD/asas.png"
        alt="Logo CTL Empresariales"
        width="auto"
        height="80"
        className="me-2"
        style={{ objectFit: "contain" }}
      />
      <span className="fw-bold fs-5" style={{ color: "#2f70c4" }}>
  
      </span>
    </a>
<span className="text-white small fst-italic ms-2">
  “Comprometidos con tu cumplimiento fiscal”
</span>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link fw-semibold" href="/home">Inicio</a></li>
        <li className="nav-item"><a className="nav-link fw-semibold" href="/about">¿Quiénes Somos?</a></li>
        <li className="nav-item"><a className="nav-link fw-semibold" href="/services">Servicios</a></li>
        <li className="nav-item"><a className="nav-link fw-semibold" href="/equipo">Equipo</a></li>
        <li className="nav-item"><a className="nav-link fw-semibold" href="/calendario">Calendario</a></li>
        <li className="nav-item"><a className="nav-link fw-semibold" href="/capacitaciones">Capacitaciones</a></li>
      </ul>

      <div className="d-flex gap-3 align-items-center ms-3">
        <a href="https://www.instagram.com/ctlempresarialeshn/" target="_blank" rel="noreferrer" className="icon-link"><FaInstagram /></a>
        <a href="https://www.tiktok.com/@ctlempresariales?_t=ZM-8xISrlMOkES&_r=1" target="_blank" rel="noreferrer" className="icon-link"><FaTiktok /></a>
        <a href="https://www.linkedin.com/in/ctl-empresariales-hn-423331339/" target="_blank" rel="noreferrer" className="icon-link"><FaLinkedin /></a>
        <a href="https://www.facebook.com/share/1BhSwU4tkH/" target="_blank" rel="noreferrer" className="icon-link"><FaFacebook /></a>
      </div>
    </div>
  </div>
</nav>

  );
}

export default TopNavBar;
