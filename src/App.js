import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import ContactUs from "./pages/Contact Us/ContactUs";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Reviews from "./pages/Reviews/Reviews";
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
