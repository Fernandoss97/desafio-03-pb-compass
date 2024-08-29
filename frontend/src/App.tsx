import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Tours from "./pages/tours/Tours";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour-package" element={<Tours />} />
      </Routes>
    </div>
  );
}

export default App;
