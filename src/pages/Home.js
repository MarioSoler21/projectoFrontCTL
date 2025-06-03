import CardItem from "../components/CardItem";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Home({ items }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = [
    "https://i.ibb.co/GfdyM4r6/Picture4.jpg",
    "https://i.ibb.co/sJk6cVjn/Picture3.jpg",
    "https://i.ibb.co/2mmxnwz/Picture2.jpg",
    "https://i.ibb.co/fVrpsb8H/Picture1.jpg"
  ];

  return (
    <div>
      {/* Hero con imagen de fondo difuminado */}
      <div
        className={`text-white d-flex align-items-center justify-content-center position-relative ${scrolled ? "blur-overlay" : ""}`}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(87,50,185,0.7), rgba(47,112,196,0.9)), url('https://ecovis.hn/wp-content/uploads/2023/04/lawyers-and-businessmen-join-hands-in-business-aft-2023-01-18-05-08-05-utc-min-1536x820.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          transition: "filter 0.5s ease",
        }}
      >
        <div className="text-center">
          <h1 className="display-3 fw-bold">
            Consultoría Fiscal {" "}
            <span className="px-2 bg-primary text-white rounded">
              Profesional
            </span>
          </h1>
          <h4 className="fw-light mt-3">es nuestro valor más grande</h4>
          <p className="lead mt-3">
            Contáctenos hoy para agendar una consulta gratuita y conocer más
            sobre nuestros servicios tributarios.
          </p>
          <a href="#contacto" className="btn btn-primary btn-lg mt-2">
            Contáctenos
          </a>
        </div>
      </div>

      {/* Sección de Capacitaciones */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-semibold mb-4">
            Próximas Capacitaciones {" "}
          </h2>
          <p className="text-center mb-5">
            Actualizamos a tu equipo contable y financiero con contenido
            práctico, legal y técnico, adaptado a tus necesidades.
          </p>

          <div className="row text-center mb-4">
            <div className="col-md-3">
              <i className="bi bi-journal-text display-5 text-primary mb-3"></i>
              <p className="fw-semibold">Contenido práctico y personalizado</p>
            </div>
            <div className="col-md-3">
              <i className="bi bi-person-check-fill display-5 text-primary mb-3"></i>
              <p className="fw-semibold">Capacitadores con experiencia</p>
            </div>
            <div className="col-md-3">
              <i className="bi bi-building display-5 text-primary mb-3"></i>
              <p className="fw-semibold">
                En tu empresa (presencial o virtual)
              </p>
            </div>
            <div className="col-md-3">
              <i className="bi bi-lightbulb display-5 text-primary mb-3"></i>
              <p className="fw-semibold">Actualización frente a reformas</p>
            </div>
          </div>

          <h4 className="text-center mb-4">Próximas Capacitaciones - 2025</h4>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {["Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"].map((mes, i) => (
              <div className="col" key={i}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title text-primary fs-4">{mes}</h5>
                    <p className="card-text fw-semibold fs-5">Tema de capacitación {i + 1}</p>
                    <p className="card-text">
                      <span className="badge bg-secondary">
                        Modalidad: In Company
                      </span>
                    </p>
                    <p className="card-text">
                      <i className="bi bi-clock"></i> {i < 3 ? "6" : "4"} horas
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Galería tipo video de capacitaciones */}
      <div className="container-fluid py-5" style={{ background: "linear-gradient(to bottom, #5732b9, #2f70c4)" }}>
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center text-white p-5">
            <h2 className="fw-bold mb-3">Información</h2>
            <p className="fs-5">Contamos con experiencia comprobada en administración tributaria, brindando soluciones personalizadas y prácticas a nuestros clientes.</p>
            <ul>
              <li>Diagnóstico fiscal y contable</li>
              <li>Asesoría legal tributaria</li>
              <li>Capacitaciones especializadas</li>
              <li>Apoyo en fiscalizaciones</li>
            </ul>
          </div>
          <div className="col-md-6">
            <Carousel fade interval={3000} controls={false} indicators={false}>
              {images.map((src, i) => (
                <Carousel.Item key={i}>
                  <img className="d-block w-100 rounded" src={src} alt={`Capacitación ${i + 1}`} style={{ maxHeight: "400px", objectFit: "cover" }} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* CardItem */}
      <div className="container py-5">
        <div className="row">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <CardItem title={item.title} description={item.description} />
              </div>
            ))
          ) : (
            <div className="alert alert-info text-center">
              CTL EMPRESARIALES OFRECE A SUS CLIENTES UN ENFOQUE PERSONALIZADO,
              PROFUNDO CONOCIMIENTO DEL ENTORNO FISCAL Y UN EQUIPO CON
              EXPERIENCIA EN LA ADMINISTRACIÓN TRIBUTARIA.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
