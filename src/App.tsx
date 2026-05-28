import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { AboutUs } from "./pages/AboutUs";
import { Services } from "./pages/Services";
import { ContactUs } from "./pages/ContactUs";
import { Footer } from "./components/elements/Footer";
import { Navbar } from "./components/elements/Navbar";
import { Refill } from "./pages/Refill";
import { Transfer } from "./pages/Transfer";
import { AutoRefill } from "./pages/AutoRefill";
import { Delivery } from "./pages/Delivery";
import { Consult } from "./pages/Consult";
import { SpecialPackage } from "./pages/SpecialPackage";
import { VitaminsAndSupplements } from "./pages/VitaminsSups";
import { ContactInfo } from "./components/sections/ContactInfo";
import { StatusModal } from "./components/shared/StatusModal";
import { Resources } from "./pages/Resources";
import { Vaccines } from "./pages/Vaccines";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/refill" element={<Refill />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/auto-refill" element={<AutoRefill />} />
          <Route path="/deliver" element={<Delivery />} />
          <Route path="/talk-to-our-pharmacist" element={<Consult />} />
          <Route path="/special-packaging" element={<SpecialPackage />} />
          <Route
            path="/vitamins-and-supplements"
            element={<VitaminsAndSupplements />}
          />
          <Route path="/resources" element={<Resources />} />"
          <Route path="/vaccines" element={<Vaccines />} />"
        </Routes>
      </BrowserRouter>
      <ContactInfo />
      <Footer />
      <StatusModal />
    </div>
  );
}

export default App;
