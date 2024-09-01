import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Tours from "./pages/tours/Tours";
import TourDetails from "./pages/tourDetails/TourDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour-package" element={<Tours />} />
        {/* Adicionar rota dinâmica */}
        <Route path="/tour-details/:tourID" element={<TourDetails />} />
      </Routes>
    </div>
  );
}

export default App;
