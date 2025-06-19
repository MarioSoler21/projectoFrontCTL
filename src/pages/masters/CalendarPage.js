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
    <div className="container py-4">
      <h2>Calendario de Asesorías</h2>

      {errorMsg && (
        <div className="alert alert-danger text-center fw-semibold">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleOnSubmit} className="mb-4 p-3 border rounded bg-light">
        <input
          name="name"
          value={form.name}
          onChange={handleOnChange}
          placeholder="Nombre de la empresa o encargado"
          className="form-control mb-2"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleOnChange}
          placeholder="Correo electrónico"
          className="form-control mb-2"
          required
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleOnChange}
          className="form-control mb-2"
          required
        />
        <select
          name="time"
          value={form.time}
          onChange={handleOnChange}
          className="form-control mb-2"
          required
        >
          <option value="">Seleccione una hora</option>
          <option value="10:00">10:00 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="14:00">2:00 PM</option>
          <option value="16:00">4:00 PM</option>
          <option value="18:00">6:00 PM</option>
        </select>
        <input
          name="topic"
          value={form.topic}
          onChange={handleOnChange}
          list="topics"
          placeholder="Tema a tratar"
          className="form-control mb-2"
          required
        />
        <datalist id="topics">
          {availableTopics.map((t, idx) => (
            <option key={idx} value={t} />
          ))}
        </datalist>
        <button className="btn btn-primary w-100">
          {editIndex !== null ? "Actualizar" : "Agendar"}
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
               <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.time}</td>

              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleOnEdit(item.id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleOnDelete(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
