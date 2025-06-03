import { GrUser } from "react-icons/gr";

function TopNavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid">
        {/* Logo + Nombre */}
        <a className="navbar-brand d-flex align-items-center" href="/home">
          <img
            src="https://i.ibb.co/Mx0qcxtt/Logox2.png"
            alt="Logo CTL Empresariales"
            width="50"
            height="50"
            className="me-2"
            style={{ objectFit: 'contain' }}
          />
          <span className="fw-bold text-primary fs-5">CTL EMPRESARIALES</span>
        </a>

        {/* Botón para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">¿Quiénes Somos?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/equipo">Equipo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/calendario">Calendario</a> 
            </li>

             <li className="nav-item">
              <a className="nav-link" href="/capacitaciones">Capacitaciones</a> 
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;
