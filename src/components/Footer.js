import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-5">
      <div className="container text-center text-md-start">
        <div className="row align-items-center">

          {/* Contacto */}
          <div className="col-md-6 mb-3">
            <h5 className="text-uppercase fw-bold">Contáctanos</h5>
            <p className="mb-2">
              <FaPhone className="me-2 text-success" />
              (504) 9265-6117
            </p>
            <p className="mb-2">
              <FaEnvelope className="me-2 text-primary" />
              consultorias@ctlhn.com
            </p>
            <p className="mb-0">San Pedro Sula, Honduras</p>
          </div>

          {/* Redes sociales */}
          <div className="col-md-6 mb-3 text-center text-md-end">
            <h6 className="text-uppercase fw-bold">Síguenos</h6>
            <a href="https://www.linkedin.com/in/ctl-empresariales-hn-423331339/" className="text-white me-3 fs-4">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/ctlempresarialeshn/" className="text-white me-3 fs-4">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1BhSwU4tkH/" className="text-white me-3 fs-4">
              <FaFacebook />
            </a>
            <a href="https://www.tiktok.com/@ctlempresariales?_t=ZM-8xISrlMOkES&_r=1" className="text-white fs-4">
              <FaTiktok />
            </a>
          </div>
        </div>

        <hr className="bg-white" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} CTL Empresariales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
