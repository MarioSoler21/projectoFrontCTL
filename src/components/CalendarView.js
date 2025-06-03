function CalendarView({ events }) {
  return (
    <div className="mt-4">
      <h4>Asesorías Agendadas</h4>
      <ul className="list-group">
        {events.map((ev, index) => (
          <li key={index} className="list-group-item">
            <strong>{ev.name}</strong> – {ev.date} a las {ev.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CalendarView;
