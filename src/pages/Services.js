import React from 'react';

function Services() {
  const servicios = [
    {
      titulo: 'Asesoría en Fiscalización y Auditoría Tributaria y Aduanera',
      descripcion:
        'Acompañamos a su empresa desde la notificación inicial hasta la resolución definitiva. Revisión documental, defensa ante el SAR y estrategias conforme al Código Tributario.'
    },
    {
      titulo: 'Diagnóstico Tributario Integral (Fiscal y Técnico)',
      descripcion:
        'Análisis completo de obligaciones fiscales y aduaneras. Identificamos riesgos y oportunidades, optimizando su gestión conforme a la normativa vigente.'
    },
    {
      titulo: 'Consultoría Tributaria Mensual',
      descripcion:
        'Asesoría permanente para el cumplimiento de obligaciones fiscales y aduaneras. Lo mantenemos actualizado y prevenimos errores y sanciones.'
    },
    {
      titulo: 'Capacitaciones y Asesorías In-Company',
      descripcion:
        'Programas hechos a la medida para su equipo contable y administrativo. Cubrimos reformas fiscales, procesos de declaración, deducciones y buenas prácticas.'
    },
    {
      titulo: 'Informe País por País (CbC Report)',
      descripcion:
        'Elaboración conforme a la OCDE y el G20. Cumplimos normativa hondureña para grupos multinacionales, asegurando precisión y confidencialidad.'
    },
    {
      titulo: 'Manuales y Procedimientos Internos',
      descripcion:
        'Creamos manuales de organización, perfiles de puestos y políticas contables que fortalecen el control interno y la eficiencia.'
    },
    {
      titulo: 'Peticiones y Trámites ante el SAR y Aduanas',
      descripcion:
        'Gestionamos solicitudes como devoluciones, notas de crédito, compensaciones, prórrogas y más, con eficacia y respaldo legal.'
    },
    {
      titulo: 'Asesoría en Operaciones Aduaneras y Regímenes Especiales',
      descripcion:
        'Orientación en comercio exterior, clasificación arancelaria y regímenes como zonas libres o RIT para mejorar competitividad internacional.'
    },
    {
      titulo: 'Otros Servicios',
      descripcion:
        '• Estudio de Precios de Transferencia y declaración informativa\n• Asesoría a exonerados ante la Secretaría de Finanzas\n• Trámites ante municipalidades y otras entidades del Estado.'
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-5">Nuestros Servicios</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {servicios.map((servicio, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex align-items-start mb-3">
                  <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}
                  >
                    <i className="bi bi-briefcase-fill"></i>
                  </div>
                  <h5 className="ms-3 mt-1">{servicio.titulo}</h5>
                </div>
                <p className="card-text" style={{ whiteSpace: 'pre-line' }}>{servicio.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
