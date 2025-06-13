import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Equipo from "./pages/Equipo";
import CalendarPage from "./pages/masters/CalendarPage";
import CapacitacionesPage from "./pages/CapacitacionesPage";
import CapacitacionesAdmin from "./pages/masters/CapacitacionesAdmin";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import Footer from "./components/Footer";
import AdminRoute from "./components/AdminRoute";
import './app.css'; // o la ruta correcta
 // ✅ asegurate de tener este archivo

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

const items = []; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

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

        {/* ✅ RUTA ADMIN PROTEGIDA */}
        <Route
          path="/admin/capacitaciones"
          element={
            <AdminRoute>
              <MainLayout>
                <CapacitacionesAdmin />
              </MainLayout>
            </AdminRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
