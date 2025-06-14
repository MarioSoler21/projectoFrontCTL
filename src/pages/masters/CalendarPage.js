import { useState, useEffect } from "react";
import * as calendarService from "../../api/calendarService";

function Calendar() {
  const [editIndex, setEditIndex] = useState(null);
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    topic: ''
  });

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
      if (editIndex !== null) {
        await calendarService.updateCalendar(editIndex, form);
        setEditIndex(null);
      } else {
        await calendarService.createCalendar(form);
      }
      setForm({ name: '', date: '', time: '', topic: '' });
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
    "Impuestos Sobre Venta"
  ];

  return (
    <div className="container py-4">
      <h2>Calendario de Asesorías</h2>
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
          name="date"
          type="date"
          value={form.date}
          onChange={handleOnChange}
          className="form-control mb-2"
          required
        />
        <input
          name="time"
          type="time"
          value={form.time}
          onChange={handleOnChange}
          className="form-control mb-2"
          required
        />
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
          {editIndex !== null ? 'Actualizar' : 'Agendar'}
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Tema</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.topic}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleOnEdit(item.id)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleOnDelete(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
