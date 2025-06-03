import CardItem from "../components/CardItem";
import { useEffect, useState } from "react";

function Home({ items }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Hero con imagen de fondo difuminado */}
      <div
        className={`text-white d-flex align-items-center justify-content-center position-relative ${scrolled ? "blur-overlay" : ""}`}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(87,50,185,0.7), rgba(47,112,196,0.9)), url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
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
            {[
              {
                mes: "Junio",
                tema: "Estrategias Prácticas sobre el ISV",
                duracion: "6 horas",
              },
              {
                mes: "Julio",
                tema: "Costos y Gastos Deducibles",
                duracion: "6 horas",
              },
              {
                mes: "Agosto",
                tema: "Facturación, Errores y Fiscalizaciones",
                duracion: "4 horas",
              },
              {
                mes: "Septiembre",
                tema: "Retenciones ISR/ISV en Sector Cementero",
                duracion: "6 horas",
              },
              {
                mes: "Octubre",
                tema: "Auditoría Tributaria Interna",
                duracion: "4 horas",
              },
              {
                mes: "Noviembre",
                tema: "Reformas Fiscales 2025",
                duracion: "4 horas",
              },
            ].map((cap, i) => (
              <div className="col" key={i}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title text-primary fs-4">{cap.mes}</h5>
                    <p className="card-text fw-semibold fs-5">{cap.tema}</p>
                    <p className="card-text">
                      <span className="badge bg-secondary">
                        Modalidad: In Company
                      </span>
                    </p>
                    <p className="card-text">
                      <i className="bi bi-clock"></i> {cap.duracion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de servicios */}
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-semibold">Nuestros Servicios</h2>
          <p>
            Descubre cómo nuestro equipo de expertos puede ayudarte a optimizar
            tu gestión financiera y cumplir con tus obligaciones fiscales.
          </p>
        </div>

        <div className="container py-5">
          <h2 className="text-center fw-semibold mb-4">¿Por qué elegirnos?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-shield-check display-5 text-primary mb-3"></i>
              <p>Experiencia comprobada en administración tributaria.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-people-fill display-5 text-primary mb-3"></i>
              <p>Enfoque personalizado y profesional.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-lightning-charge display-5 text-primary mb-3"></i>
              <p>Soluciones prácticas y actualizadas.</p>
            </div>
          </div>
        </div>

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