import CardItem from "../components/CardItem";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home({ items }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        className={`text-white d-flex align-items-center justify-content-center position-relative ${
          scrolled ? "blur-overlay" : ""
        }`}
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
            Consultoría Fiscal{" "}
            <span className="px-2 bg-primary text-white rounded">
              Profesional
            </span>
          </h1>
          <h4 className="fw-light mt-3">es nuestro valor más grande</h4>
          <p className="lead mt-3">
            Contáctenos hoy para agendar una consulta gratuita y conocer más
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

      {/* Galería tipo video de capacitaciones */}
      <div
        className="container-fluid py-5"
        style={{ background: "linear-gradient(to bottom, #5732b9, #2f70c4)" }}
      >
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center text-white p-5">
            <h2 className="fw-bold mb-3">Información</h2>
            <p className="fs-5">
              Contamos con experiencia comprobada en administración tributaria,
              brindando soluciones personalizadas y prácticas a nuestros
              clientes.
            </p>
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
                  <img
                    className="d-block w-100 rounded"
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

      {/* Logos decorativos en movimiento */}
      <div className="logo-slider-container py-3">
        <div className="logo-slider d-flex align-items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="logo-group d-flex">
              <img
                src="https://www.diunsa.hn/assets/imgs/logo.png"
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
                src="https://eldorado.hn/wp-content/uploads/2020/02/pacer.png"
                alt="Logo 3"
                className="mx-4"
                height={60}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/La_Prensa_%28Honduras%29.svg/2560px-La_Prensa_%28Honduras%29.svg.png"
                alt="Logo 4"
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
