import React from 'react';
import { FaBullseye, FaEye, FaHistory } from 'react-icons/fa';

function AboutUs() {
  return (
    <div
      className="about-us-section py-5 text-white"
      style={{
        background: 'linear-gradient(to bottom, #5732b9, #2f70c4)',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
      }}
    >
      <div className="container text-center">
        <h1 className="fw-bold mb-5 display-3">¿Quiénes Somos?</h1>

        <div className="row g-5">
          {/* Misión */}
          <div className="col-lg-4">
            <div className="card h-100 shadow-lg border-0 bg-white bg-opacity-10 text-white rounded-5 p-4">
              <div className="card-body">
                <FaBullseye className="mb-3" size={50} />
                <h3 className="fw-bold mb-3 text-white">Misión</h3>
                <p className="fs-5">
                  Brindar asesoría fiscal, legal y financiera personalizada a nuestros clientes,
                  apoyando su crecimiento y cumplimiento con ética, responsabilidad y profesionalismo.
                </p>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="col-lg-4">
            <div className="card h-100 shadow-lg border-0 bg-white bg-opacity-10 text-white rounded-5 p-4">
              <div className="card-body">
                <FaEye className="mb-3" size={50} />
                <h3 className="fw-bold mb-3 text-white">Visión</h3>
                <p className="fs-5">
                  Ser una firma reconocida a nivel nacional por su excelencia en consultoría empresarial,
                  promoviendo el desarrollo sostenible y el éxito de nuestros clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Historia */}
          <div className="col-lg-4">
            <div className="card h-100 shadow-lg border-0 bg-white bg-opacity-10 text-white rounded-5 p-4">
              <div className="card-body">
                <FaHistory className="mb-3" size={50} />
                <h3 className="fw-bold mb-3 text-white">Historia</h3>
                <p className="fs-5">
                  CTL EMPRESARIALES es una empresa de consultoría fiscal y tributaria con profesionales
                  que combinan experiencia en la administración tributaria y el sector privado,
                  ofreciendo soluciones integrales y personalizadas a cada cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
