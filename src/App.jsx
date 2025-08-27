import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <Header />
      <Navbar />
      <PageScroll />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* about subpages */}
        <Route path="/About" element={<About />} />
        <Route path="/About/Mission" element={<Mission />} />
        <Route path="/About/Team" element={<Team />} />
        <Route path="/About/MessageFrom" element={<MessageFrom />} />{" "}
        {/* services subpages */}
        <Route path="/Services" element={<Services />} />
        <Route path="/Services/Saving" element={<Saving />} />
        <Route path="/Services/Loan" element={<Loan />} />
        <Route path="/Services/Required" element={<Required />} />
        {/* pages */}
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/News&events" element={<NewsEvents />} />
        <Route path="/Career" element={<Career />} />
        {/* tools */}
        <Route path="/NepalWidgets" element={<NepalWidget />} />
        <Route path="/EmiCalculator" element={<EmiCalculator />} />
      </Routes>
      <div className="section-divider mx-auto"></div>
      <Footer />
    </Router>
  );
}
