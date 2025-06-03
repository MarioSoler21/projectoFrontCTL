import React from "react";

function Equipo() {
  const miembros = [
    {
      nombre: "ABG. MICHELLE SOLER",
      especialidad: "Licenciada en Derecho",
      descripcion:
        "Con más de 21años de experiencia en laadministración aduanera y tributaria, enáreas de regímenes especiales, ordenesde compras y exoneraciones, asistenciaal cumplimiento y facturación en laAdministración Tributaria de la Direcciónde Grandes Contribuyentes S.P.S.",
      foto: "https://i.ibb.co/N98jtbJ/mariana.jpg",
    },
    {
      nombre: "Norka Maldonado",
      especialidad: "Capacitación y formación tributaria",
      descripcion:
        "Facilitadora con enfoque práctico, especializada en talleres sobre ISR, ISV, facturación y cumplimiento tributario.",
      foto: "https://i.ibb.co/zRS7ZmD/norka.jpg",
    },
    {
      nombre: "Karla Andino",
      especialidad: "Régimen de Zonas Libres",
      descripcion:
        "Asesora en temas de incentivos fiscales y comercio exterior. Experiencia con maquilas y trámites en aduanas.",
      foto: "https://i.ibb.co/6gRpvkV/karla.jpg",
    },
    {
      nombre: "Mayra Perdomo",
      especialidad: "Auditoría y planificación tributaria",
      descripcion:
        "Contadora pública autorizada con trayectoria en empresas privadas e instituciones del Estado.",
      foto: "https://i.ibb.co/5B8q4nz/mayra.jpg",
    },
    {
      nombre: "Meyling C&aacute;ceres",
      especialidad: "Consultoría fiscal estratégica",
      descripcion:
        "Especialista en informes país por país, precios de transferencia y políticas contables.",
      foto: "https://i.ibb.co/0V5H0Ff/meyling.jpg",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-semibold mb-4">Nuestro Equipo</h2>
      <p className="text-center mb-5">
        Un grupo de expertas en el ámbito tributario, aduanero y fiscal con amplia trayectoria tanto en el sector público como privado.
      </p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {miembros.map((miembro, index) => (
          <div className="col" key={index}>
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={miembro.foto}
                className="card-img-top"
                alt={`Foto de ${miembro.nombre}`}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">{miembro.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{miembro.especialidad}</h6>
                <p className="card-text">{miembro.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipo;
