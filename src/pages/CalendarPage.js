import { useState } from "react";
import CalendarForm from "../components/CalendarForm";
import CalendarView from "../components/CalendarView";

function CalendarPage() {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (event) => {
    setEvents(prev => [...prev, event]);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Calendario de Asesorías</h2>
      <CalendarForm onAdd={handleAddEvent} />
      <CalendarView events={events} />
    </div>
  );
}

export default CalendarPage;
