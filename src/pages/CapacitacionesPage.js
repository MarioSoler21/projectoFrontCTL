import React, { useState, useEffect, useRef } from "react";
import { Container, Accordion, Button } from "react-bootstrap";

function CapacitacionesPage() {
  const [activeKey, setActiveKey] = useState("0");
  const headingRef = useRef(null);
  const [isOverlapping, setIsOverlapping] = useState(false);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverlapping(entry.intersectionRatio < 1);
      },
      { threshold: 1.0 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => headingRef.current && observer.unobserve(headingRef.current);
  }, []);

  const capacitaciones = [
    {
      mes: "Junio",
      titulo: "Estrategias Prácticas sobre el Impuesto Sobre Ventas",
      descripcion:
        "Crédito Fiscal, Documentos Soporte y Buenas Prácticas Contables.",
      duracion: "6 horas",
    },
    {
      mes: "Julio",
      titulo: "Tratamiento tributario de costos y gastos deducibles",
      descripcion: "",
      duracion: "6 horas",
    },
    {
      mes: "Agosto",
      titulo: "Actualización sobre la Facturación en Honduras",
      descripcion: "Errores Comunes, Buenas Prácticas y Fiscalizaciones.",
      duracion: "4 horas",
    },
    {
      mes: "Septiembre",
      titulo: "Gestión Efectiva de Retenciones de ISR e ISV",
      descripcion:
        "En el Sector Cementero: Cumplimiento, Riesgos y Optimización Tributaria.",
      duracion: "6 horas",
    },
    {
      mes: "Octubre",
      titulo: "Auditoría Tributaria Interna",
      descripcion: "Cómo prepararse ante fiscalizaciones.",
      duracion: "4 horas",
    },
    {
      mes: "Noviembre",
      titulo: "Reformas fiscales 2025",
      descripcion: "Impactos y estrategias empresariales.",
      duracion: "4 horas",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f4f6fc", paddingBottom: "6rem" }}>
      <div
        style={{
          background: "linear-gradient(to right, #5732b9, #2f70c4)",
          color: "white",
          padding: "6rem 1rem 7rem 1rem",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          textAlign: "center",
        }}
      >
        <h1 className="fw-bold display-3 mb-3">Capacitaciones Tributarias</h1>
        <p className="lead fs-4" style={{ maxWidth: "750px", margin: "auto" }}>
          Actualización fiscal adaptada al contexto hondureño. Conocé nuestros
          temas mensuales In Company 2025.
        </p>
      </div>

      <Container style={{ marginTop: "-4rem" }}>
        <div
          className="rounded p-5"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)",
            fontSize: "1.2rem",
            lineHeight: "1.8",
          }}
        >
          <h2
            className="fw-bold mb-5"
            ref={headingRef}
            style={{
              fontSize: "2rem",
              color: isOverlapping ? "#fff" : "#0d6efd",
              transition: "color 0.4s ease",
            }}
          >
            Calendario de Capacitaciones
          </h2>

          <Accordion activeKey={activeKey} flush>
            {capacitaciones.map((item, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                key={index}
                style={{ marginBottom: "1rem" }}
              >
                <Accordion.Header
                  onClick={() => handleToggle(index.toString())}
                  style={{ fontSize: "1.1rem" }}
                >
                  <strong>{item.mes}</strong> &mdash; {item.titulo}
                </Accordion.Header>
                <Accordion.Body>
                  {item.descripcion && (
                    <p className="mb-2">{item.descripcion}</p>
                  )}
                  <p className="mb-3">
                    <strong>Duración:</strong> {item.duracion}
                  </p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=50492656117&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    Solicitar Información
                  </a>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export default CapacitacionesPage;
