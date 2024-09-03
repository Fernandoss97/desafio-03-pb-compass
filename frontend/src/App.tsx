import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Tours from "./pages/tours/Tours";
import TourDetails from "./pages/tourDetails/TourDetails";
import Login from "./pages/login/Login";
import PrivateRoutes from "./firebase/PrivateRoutes";
import { AuthProvider } from "./contexts/authContext/Index";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/tour-package" element={<Tours />} />
            <Route path="/tour-details/:tourID" element={<TourDetails />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
