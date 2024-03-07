import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavbarComp";
import Footer from "./components/FooterComp";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import TermsPage from "./pages/TermsPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={TermsPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
