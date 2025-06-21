import CardItem from "../components/CardItem";
import { useEffect, useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home({ items }) {
  const [scrolled, setScrolled] = useState(false);
  const serviciosRef = useRef(null);
  const [serviciosVisible, setServiciosVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const heroText = document.getElementById("heroText");

      if (window.scrollY > 0) {
        setScrolled(true);
        hero.classList.add("hero-blur-effect");
        heroText.classList.add("hero-text-fade");
      } else {
        setScrolled(false);
        hero.classList.remove("hero-blur-effect");
        heroText.classList.remove("hero-text-fade");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setServiciosVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (serviciosRef.current) observer.observe(serviciosRef.current);
    return () => serviciosRef.current && observer.unobserve(serviciosRef.current);
  }, []);

  const images = [
    "https://i.ibb.co/GfdyM4r6/Picture4.jpg",
    "https://i.ibb.co/sJk6cVjn/Picture3.jpg",
    "https://i.ibb.co/2mmxnwz/Picture2.jpg",
    "https://i.ibb.co/fVrpsb8H/Picture1.jpg",
  ];

  return (
    <div>
      <div
        id="hero"
        className="text-white d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(87,50,185,0.7), rgba(47,112,196,0.9)), url('https://ecovis.hn/wp-content/uploads/2023/04/lawyers-and-businessmen-join-hands-in-business-aft-2023-01-18-05-08-05-utc-min-1536x820.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
        }}
      >
        <div className="text-center" id="heroText">
          <h1 className="display-3 fw-bold">
            Consultoría Fiscal {" "}
            <span className="px-2 bg-primary text-white rounded">
              Profesional
            </span>
          </h1>
          <h4 className="fw-light mt-3">es nuestro valor más grande</h4>
          <p className="lead mt-3">
            Contáctenos hoy para agendar una consulta y conocer más
            sobre nuestros servicios tributarios.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=50492656117&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <i className="bi bi-whatsapp fs-4 me-2"></i>
            Contáctenos
          </a>
        </div>
      </div>

      {/* Sección de video institucional CTL */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/45EPI3EaWp8"
                title="Video institucional CTL"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="fw-bold mb-4 text-primary">¿Quiénes Somos?</h2>
            <p className="fs-5 text-muted">
              En <strong>CTL Empresariales</strong> brindamos asesoría tributaria, financiera y contable a empresas hondureñas con un enfoque estratégico y personalizado.
              <br /><br />
              Nos respaldan años de experiencia y compromiso con la excelencia para ayudarte a cumplir tus obligaciones legales y crecer de forma segura y sostenible.
            </p>
            <a href="/about" className="btn btn-outline-primary btn-lg mt-3">
              Conocer más
            </a>
          </div>
        </div>
      </div>

{/* Galería tipo video de capacitaciones */}
<div
  className="container-fluid py-5"
  style={{ background: "linear-gradient(to bottom, #5732b9, #2f70c4)" }}
>
  <div className="row align-items-center">
    {/* Columna de texto */}
    <div className="col-lg-6 text-white px-5">
      <h2 className="fw-bold mb-4">¿Por qué elegirnos?</h2>
      <p className="fs-5">
        Tenemos experiencia comprobada en administración tributaria,
        brindando soluciones personalizadas y prácticas a nuestros clientes.
      </p>

      <ul className="list-unstyled fs-6 mb-4">
        <li className="mb-2">
          <i className="bi bi-check-circle-fill me-2 text-success"></i>
          Diagnóstico fiscal y contable
        </li>
        <li className="mb-2">
          <i className="bi bi-check-circle-fill me-2 text-success"></i>
          Asesoría legal tributaria
        </li>
        <li className="mb-2">
          <i className="bi bi-check-circle-fill me-2 text-success"></i>
          Capacitaciones especializadas
        </li>
        <li className="mb-2">
          <i className="bi bi-check-circle-fill me-2 text-success"></i>
          Apoyo en fiscalizaciones
        </li>
      </ul>

      <div className="bg-white text-dark rounded p-3 shadow-sm">
        <p className="mb-2">
          <i className="bi bi-telephone-fill me-2 text-primary"></i>
          <strong>Teléfono:</strong> (504) 9265-6117
        </p>
        <p className="mb-2">
          <i className="bi bi-envelope-fill me-2 text-primary"></i>
          <strong>Correo:</strong>{" "}
          <a href="mailto:consultorias@ctlhn.com" className="text-decoration-none">
            consultorias@ctlhn.com
          </a>
        </p>
        <p className="mb-0">
          <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
          <strong>Dirección:</strong> Barrio Guamilito, 11 calle y 7-8 avenida N.O., casa No. 56
        </p>
      </div>
    </div>

    {/* Carrusel */}
    <div className="col-lg-6 mt-4 mt-lg-0">
      <Carousel fade interval={3000} controls={false} indicators={false}>
        {images.map((src, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100 rounded shadow"
              src={src}
              alt={`Capacitación ${i + 1}`}
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </div>
</div>

{/* Botón destacado para Capacitaciones In-Company 2025 */}
<div className="text-center my-5">
  <a
    href="/capacitaciones"
    className="btn btn-lg px-5 py-3 fw-bold"
    style={{
      background: "linear-gradient(to right, #2f70c4, #5732b9)",
      color: "white",
      border: "none",
      borderRadius: "50px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      transition: "transform 0.3s ease",
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
     Conoce nuestra Capacitación In-Company 2025
  </a>
</div>



      {/* Sección moderna de servicios en tarjetas con animación */}
      <div className="container py-5">
        <h2
          ref={serviciosRef}
          className={`text-center fw-bold mb-5 text-primary transition-opacity ${
            serviciosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transition: "opacity 1s ease, transform 1s ease" }}
        >
          Nuestros Servicios Especializados
        </h2>

        {/* Slicers de impacto animados */}
        <div className="container mb-5">
          <div className="row g-3">
            {[
              "Enfoque personalizado y estratégico.",
              "Cumplimiento tributario garantizado.",
              "Equipo multidisciplinario con experiencia.",
              "Soluciones integrales fiscales y contables.",
              "Asesoría directa ante el SAR y Aduanas.",
              "Capacitaciones diseñadas para empresas hondureñas."
            ].map((texto, i) => (
              <div
                key={i}
                className="col-12"
                style={{
                  transform: serviciosVisible
                    ? "translateY(0)"
                    : i % 2 === 0
                    ? "translateY(-30px)"
                    : "translateY(30px)",
                  opacity: serviciosVisible ? 1 : 0,
                  transition: `all 0.6s ease ${i * 0.15}s`,
                }}
              >
                <div className="bg-primary text-white py-3 px-4 rounded shadow-sm text-center fw-semibold">
                  {texto}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
<h3 className="animated-title text-white text-center fw-bold mb-4">
  Empresas que confían en nosotros
</h3>


      {/* Logos decorativos en movimiento */}
      <div className="logo-slider-container py-3">
        <div className="logo-slider d-flex align-items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="logo-group d-flex">
              <img
                src="https://i0.wp.com/corrugadosyempaqueshn.com/wp-content/uploads/2021/12/CYE-150-e1640819280748.png?fit=150%2C94&ssl=1"
                alt="Logo 1"
                className="mx-4"
                height={60}
              />
              <img
                src="https://lamundial.com/website/image/website/1/logo"
                alt="Logo 2"
                className="mx-4"
                height={60}
              />

              <img
                src="https://www.infradehonduras.com.hn/wp-content/uploads/2020/02/infra-logo-1.png"
                alt="Logo 3"
                className="mx-4"
                height={60}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ40pVgvHhHW9kN32QRP5xOhc4QJWGkk2UCA&s"
                alt="Logo 3"
                className="mx-4"
                height={60}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
