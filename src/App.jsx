import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PageScroll from "./components/PageScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Homepage";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Download from "./pages/Download";
import NewsEvents from "./pages/NewsEvents";
import Career from "./pages/Career";

// Tools pages
import NepalWidget from "./components/NepalWidgets";
import EmiCalculator from "./components/EmiCalculator";

// About subpages
import MessageFrom from "./pages/about/MessageFrom";
import Mission from "./pages/about/Mission";
import Team from "./pages/about/Team";

// Services subpages
import Saving from "./pages/services/Saving";
import Loan from "./pages/services/Loan";
import Required from "./pages/services/Required";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <PageScroll />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/messagefrom" element={<MessageFrom />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/saving" element={<Saving />} />
        <Route path="/services/loan" element={<Loan />} />
        <Route path="/services/required" element={<Required />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/career" element={<Career />} />

        <Route path="/nepalwidgets" element={<NepalWidget />} />
        <Route path="/emicalculator" element={<EmiCalculator />} />
      </Routes>
      <div className="section-divider"></div>
      <Footer />
    </>
  );
}
