import React from "react";

function Equipo() {
  const miembros = [
    {
      nombre: "MDE. LESLY TORRES",
      especialidad: "Dirección Empresarial y Tributación",
      descripcion:
        "Máster en Dirección Empresarial y Comercio Internacional, Licenciada en Contaduría Pública y Finanzas, con más de 20 años de experiencia en la administración tributaria en los cargos de auditor integral, jefe de asistencia al contribuyente, jefe de cobranzas y jefe de cuenta corriente. Ex Directora de la Administración Tributaria de la Dirección de Grandes Contribuyentes S.P.S.",
      foto: "https://i.ibb.co/YWCrxRf/lesly.jpg",
    },
    {
      nombre: "LIC. MARIANA CEDILLOS",
      especialidad: "Administración Tributaria",
      descripcion:
        "Licenciada en Administración de Empresas, pasante de maestría en Dirección Empresarial, con 11 años de experiencia en materia Tributaria, cuenta corriente y resolución de expedientes administrativos. Ex Coordinadora de Cuenta Corriente del departamento de Recaudación de la Administración Tributaria de la Dirección de Grandes Contribuyentes S.P.S.",
      foto: "https://i.ibb.co/N98jtbJ/mariana.jpg",
    },
    {
      nombre: "ABG. MICHELLE SOLER",
      especialidad: "Derecho Tributario y Aduanero",
      descripcion:
        "Licenciada en Derecho, con más de 21 años de experiencia en la administración aduanera y tributaria, en áreas de regímenes especiales, órdenes de compras y exoneraciones, asistencia al cumplimiento y facturación en la Administración Tributaria de la Dirección de Grandes Contribuyentes S.P.S.",
      foto: "https://i.ibb.co/d5jcWrp/michelle.jpg",
    },
    {
      nombre: "MRH. Claudia Mancia",
      especialidad: "Recursos Humanos y Derecho",
      descripcion:
        "Master en Recursos Humanos, Licenciada en Derecho. Con más de 32 años de experiencia en el campo privado y gubernamental. Secretaria Regional de la Administración Tributaria de la Dirección de Grandes Contribuyentes S.P.S., y Coordinadora de Recepción y Notificación del 2017 al 2023.",
      foto: "https://i.ibb.co/vXk6FV3/claudia.jpg", // subila y reemplazá el link si es necesario
    },
    {
      nombre: "MAP. Sintia Calderón",
      especialidad: "Cuenta Corriente y Gestión de Proyectos",
      descripcion:
        "Licenciada en Administración de Empresas, con Maestría en Gestión de Proyectos, experta en cuenta corriente. 6 años de experiencia en Cuenta Corriente y análisis de estados financieros. Ex analista Cuenta Corriente del departamento de Recaudación de la Administración Tributaria de la Dirección de Grandes Contribuyentes S.P.S.",
      foto: "https://i.ibb.co/pKnRZTh/sintia.jpg", // subila y reemplazá el link si es necesario
    },

    {
      nombre: "Meyling Cáceres",
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
        Un grupo de expertas en el ámbito tributario, aduanero y fiscal con
        amplia trayectoria tanto en el sector público como privado.
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
                <h6 className="card-subtitle mb-2 text-muted">
                  {miembro.especialidad}
                </h6>
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
