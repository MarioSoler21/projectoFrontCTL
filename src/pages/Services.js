import React from "react";

function Services() {
  const servicios = [
    {
      titulo: "Asesoría en Fiscalización y Auditoría Tributaria y Aduanera",
      descripcion:
        "Acompañamos a su empresa desde la notificación inicial hasta la resolución definitiva. Revisión documental, defensa ante el SAR y estrategias conforme al Código Tributario.",
    },
    {
      titulo: "Diagnóstico Tributario Integral (Fiscal y Técnico)",
      descripcion:
        "Análisis completo de obligaciones fiscales y aduaneras. Identificamos riesgos y oportunidades, optimizando su gestión conforme a la normativa vigente.",
    },
    {
      titulo: "Consultoría Tributaria Mensual",
      descripcion:
        "Asesoría permanente para el cumplimiento de obligaciones fiscales y aduaneras. Lo mantenemos actualizado y prevenimos errores y sanciones.",
    },
    {
      titulo: "Capacitaciones y Asesorías In-Company",
      descripcion:
        "Programas hechos a la medida para su equipo contable y administrativo. Cubrimos reformas fiscales, procesos de declaración, deducciones y buenas prácticas.",
    },
    {
      titulo: "Informe País por País (CbC Report)",
      descripcion:
        "Elaboración conforme a la OCDE y el G20. Cumplimos normativa hondureña para grupos multinacionales, asegurando precisión y confidencialidad.",
    },
    {
      titulo: "Manuales y Procedimientos Internos",
      descripcion:
        "Creamos manuales de organización, perfiles de puestos y políticas contables que fortalecen el control interno y la eficiencia.",
    },
    {
      titulo: "Peticiones y Trámites ante el SAR y Aduanas",
      descripcion:
        "Gestionamos solicitudes como devoluciones, notas de crédito, compensaciones, prórrogas y más, con eficacia y respaldo legal.",
    },
    {
      titulo: "Asesoría en Operaciones Aduaneras y Regímenes Especiales",
      descripcion:
        "Orientación en comercio exterior, clasificación arancelaria y regímenes como zonas libres o RIT para mejorar competitividad internacional.",
    },
    {
      titulo: "Otros Servicios",
      descripcion:
        "• Estudio de Precios de Transferencia y declaración informativa\n• Asesoría a exonerados ante la Secretaría de Finanzas\n• Trámites ante municipalidades y otras entidades del Estado.",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h1 className="text-center mb-5 fw-bold text-primary">
          Nuestros Servicios
        </h1>
        <div className="row g-4 align-items-start">
          {/* VIDEO */}
          <div className="col-lg-6 mb-4">
            <div
              className="rounded shadow-sm overflow-hidden"
              style={{
                aspectRatio: "9 / 16",
                maxHeight: "720px",
                width: "100%",
                background: "#000",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/KC8mhxRQAw8"
                title="Video institucional"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: "none" }}
              ></iframe>
            </div>
          </div>

          {/* SERVICIOS */}
          <div className="col-lg-6">
            <div
              style={{
                maxHeight: "720px",
                overflowY: "auto",
                paddingRight: "10px",
              }}
            >
              <div className="row g-4">
                {servicios.map((servicio, index) => (
                  <div className="col-12" key={index}>
                    <div
                      className="card h-100 border-0 shadow-sm"
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(6px)",
                        borderRadius: "16px",
                      }}
                    >
                      <div className="card-body">
                        <div className="d-flex align-items-start mb-3">
                          <div
                            className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: "40px", height: "40px" }}
                          >
                            <i className="bi bi-briefcase-fill"></i>
                          </div>
                          <h5 className="ms-3 fw-semibold">
                            {servicio.titulo}
                          </h5>
                        </div>
                        <p
                          className="card-text"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {servicio.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=50492656117&text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <i className="bi bi-whatsapp"></i> Solicitar Información
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
