import { useState } from "react";

function CalendarForm({ onAdd }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, date, time });
    setName(""); setDate(""); setTime("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      <h4>Agendar Asesoría</h4>
      <input
        className="form-control my-2"
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="form-control my-2"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        className="form-control my-2"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button className="btn btn-primary w-100" type="submit">Agendar</button>
    </form>
  );
}

export default CalendarForm;
