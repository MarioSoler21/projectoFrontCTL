import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Equipo from "./pages/Equipo";
import CalendarPage from "./pages/CalendarPage";
import CapacitacionesPage from "./pages/CapacitacionesPage"; // ✅ Nombre correcto
import MainLayout from "./layouts/MainLayout";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Importar Bootstrap

const items = []; // Si estás pasando props a Home

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <MainLayout>
              <Home items={items} />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route
          path="/equipo"
          element={
            <MainLayout>
              <Equipo />
            </MainLayout>
          }
        />
        <Route
          path="/calendario"
          element={
            <MainLayout>
              <CalendarPage />
            </MainLayout>
          }
        />
        <Route
          path="/capacitaciones"
          element={
            <MainLayout>
              <CapacitacionesPage />
            </MainLayout>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
