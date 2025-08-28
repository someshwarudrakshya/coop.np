import Carousel from "../sections/Carousel";
import Stats from "../sections/Stats";
import ChairmanShortMessage from "../sections/ChairmanShortMessage";
import Committee from "../sections/Committee";
import Testimonials from "../sections/Testimonials";
import ScrollingText from "../layouts/ScrollingText";
import Utilities from "../sections/Utilities";
import Services from "../sections/OurSchemes";
import WhyChoose from "../sections/WhyChoose";
import CTA from "../sections/CTA";
import FAQs from "../sections/FAQs";

export default function App() {
  return (
    <main>
      <Carousel />
      <ScrollingText />
      <Stats />
      <div className="section-divider"></div>
      <ChairmanShortMessage />
      <Committee />
      <Services />
      <WhyChoose />
      <Utilities />
      <Testimonials />
      <FAQs />
      <CTA />
    </main>
  );
}
