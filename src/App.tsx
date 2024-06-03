import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import InicioV from "./pages/InicioV";
import Calificaciones from "./pages/Calificaciones";
import ActasCalificaciones from "./pages/ActasCalificaciones";
import ReporteAprobacin from "./pages/ReporteAprobacin";
import ActasSubmaterias from "./pages/ActasSubmaterias";
import CalificacionesNuevo from "./pages/CalificacionesNuevo";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/inicio-v1":
        title = "";
        metaDescription = "";
        break;
      case "/calificaciones":
        title = "";
        metaDescription = "";
        break;
      case "/actas-calificaciones":
        title = "";
        metaDescription = "";
        break;
      case "/reporte-aprobacin":
        title = "";
        metaDescription = "";
        break;
      case "/actas-submaterias":
        title = "";
        metaDescription = "";
        break;
      case "/calificaciones-nuevo":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicio-v1" element={<InicioV />} />
      <Route path="/calificaciones" element={<Calificaciones />} />
      <Route path="/actas-calificaciones" element={<ActasCalificaciones />} />
      <Route path="/reporte-aprobacin" element={<ReporteAprobacin />} />
      <Route path="/actas-submaterias" element={<ActasSubmaterias />} />
      <Route path="/calificaciones-nuevo" element={<CalificacionesNuevo />} />
    </Routes>
  );
}
export default App;
