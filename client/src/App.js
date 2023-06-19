import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import EventPage from "./Pages/Event";
import ExeCom from "./Pages/ExeCom";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import SignUpPage from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/events/:id/*" element={<EventPage />} />
        <Route path="/execom" element={<ExeCom />} />
        {/* <Route path="/SignUp" element={<SignUpPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
