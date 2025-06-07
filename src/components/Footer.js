function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-4 pb-3">
      <div className="container text-center text-md-start">
        <div className="row">
          

          {/* Información de la empresa */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase fw-bold">CTL Empresariales</h5>
            <p>
              Asesoría tributaria, aduanera y financiera con enfoque estratégico. Acompañamos a tu empresa con soluciones integrales y actualizadas.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase fw-bold">Navegación</h6>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-white text-decoration-none">Inicio</a></li>
              <li><a href="/about" className="text-white text-decoration-none">¿Quiénes Somos?</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Servicios</a></li>
              <li><a href="/equipo" className="text-white text-decoration-none">Equipo</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase fw-bold">Contacto</h6>
            <p className="mb-1">Correo: contacto@ctlempresariales.com</p>
            <p className="mb-1">Teléfono: +504 1234-5678</p>
            <p className="mb-0">Tegucigalpa, Honduras</p>
          </div>
        </div>

        <hr className="bg-white" />

        {/* Derechos */}
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} CTL Empresariales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
