import { useState, useEffect } from "react";
import * as calendarService from "../../api/calendarService";

function Calendar() {
  const [editIndex, setEditIndex] = useState(null);
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    topic: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const response = await calendarService.getAllCalendar();
      setEntries(response.data);
    } catch (error) {
      console.error("Error al cargar asesorías", error);
    }
  };

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnEdit = (id) => {
    const item = entries.find((e) => e.id === id);
    if (item) {
      setForm(item);
      setEditIndex(id);
    }
  };

  const handleOnDelete = async (id) => {
    try {
      await calendarService.deleteCalendar(id);
      loadEntries();
    } catch (error) {
      console.error("Error al eliminar", error);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const formatTime = (timeStr) => timeStr.slice(0, 5);

      const isDuplicate = entries.some(
        (entry) =>
          entry.date === form.date &&
          formatTime(entry.time) === form.time &&
          entry.id !== editIndex
      );

      if (isDuplicate) {
        setErrorMsg("Ya existe una asesoría agendada en esa fecha y hora.");
        setTimeout(() => setErrorMsg(""), 5000);
        return;
      }

      if (editIndex !== null) {
        await calendarService.updateCalendar(editIndex, form);
        setEditIndex(null);
      } else {
        await calendarService.createCalendar(form);
      }

      setForm({ name: "", email: "", date: "", time: "", topic: "" });
      setErrorMsg("");
      loadEntries();
    } catch (error) {
      console.error("Error al guardar", error);
    }
  };

  const availableTopics = [
    "Normativas Tributarias aplicables vigentes",
    "Irretroactividad de la ley tributaria",
    "Jerarquía Tributaria",
    "Derechos, Deberes y Obligaciones",
    "Exenciones y exoneraciones",
    "Disposiciones generales y Obligaciones del Agente Retenedor y percepción",
    "Tipos de Retenciones aplicables",
    "Procedimiento y entero de las retenciones",
    "Retenciones a No residentes y no domiciliados de acuerdo a ley de Impuesto sobre la Renta",
    "Devengo del Tributo",
    "El hecho Generador",
    "Reglamento al Régimen de Facturación y Descripción de Documentos Fiscales",
    "Declaración Informativa mensual de compras",
    "Régimen sancionatorio faltas formales y materiales",
    "OVI (Oficina Virtual)",
    "Generalidades de la ATC",
    "Plazos legales establecidos",
    "Impuesto Sobre la Renta Persona Jurídica vrs Informe Situación Financiera (SIISAR)",
    "Gastos Deducibles y No Deducibles",
    "Tratamiento de los Activos Eventuales",
    "Normativa y cálculo de la Aportación Solidaria",
    "Normativa al Impuesto Cedular al Activo Neto",
    "Impuesto de Ganancias de Capital",
    "Declaración de informativa de dividendos",
    "Prescripción de la obligación Tributaria",
    "Delitos Tributarios",
    "Impuestos Sobre Venta",
  ];

  return (
   <div className="container py-5 text-light" style={{ background: "linear-gradient(to right, #5732b9, #2f70c4)", borderRadius: "15px" }}>
  <h2 className="fw-bold text-white text-center mb-2">Agenda tu Cita</h2>
<h6 className="text-info text-center fst-italic mb-4" style={{ fontSize: "0.95rem" }}>
  Al agendar una consulta fiscal, nuestro equipo se pondrá en contacto por correo electrónico para brindarle información sobre el proceso de pago y confirmación de la asesoría.
</h6>






  {errorMsg && (
    <div className="alert alert-danger text-center fw-semibold">
      {errorMsg}
    </div>
  )}

  <form onSubmit={handleOnSubmit} className="mb-4 p-4 rounded shadow-lg bg-dark-subtle">
    <div className="row g-3">
      <div className="col-md-6">
        <input name="name" value={form.name} onChange={handleOnChange} placeholder="👤 Nombre de empresa o encargado" className="form-control" required />
      </div>
      <div className="col-md-6">
        <input name="email" type="email" value={form.email} onChange={handleOnChange} placeholder="Correo electrónico" className="form-control" required />
      </div>
      <div className="col-md-4">
        <input name="date" type="date" value={form.date} onChange={handleOnChange} className="form-control" required />
      </div>
      <div className="col-md-4">
        <select name="time" value={form.time} onChange={handleOnChange} className="form-select" required>
          <option value="">🕒 Hora</option>
          <option value="10:00">10:00 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="14:00">2:00 PM</option>
          <option value="16:00">4:00 PM</option>
          <option value="18:00">6:00 PM</option>
        </select>
      </div>
      <div className="col-md-4">
        <input name="topic" value={form.topic} onChange={handleOnChange} list="topics" placeholder="Tema a tratar" className="form-control" required />
        <datalist id="topics">
          {availableTopics.map((t, idx) => (
            <option key={idx} value={t} />
          ))}
        </datalist>
      </div>
      <div className="col-12">
        <button className="btn btn-whatsapp w-100">
          {editIndex !== null ? " Actualizar Asesoría" : " Agendar Asesoría"}
        </button>
      </div>
    </div>
  </form>

  <div className="table-responsive">
    <table className="table table-dark table-hover table-bordered rounded shadow">
      <thead className="table-light text-dark text-center">
        <tr>
          <th>Fecha</th>
          <th> Hora</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {entries.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>
              <button className="btn btn-sm btn-outline-warning me-2" onClick={() => handleOnEdit(item.id)}>
                 Editar
              </button>
              <button className="btn btn-sm btn-outline-danger" onClick={() => handleOnDelete(item.id)}>
                 Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}

export default Calendar;
