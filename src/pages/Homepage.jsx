import Carousel from "../sections/Carousel";
import Stats from "../sections/Stats";
import ChairmanStory from "../sections/ChairmanStory";
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
    <div className="flex flex-col min-h-screen bg-color-100 dark:bg-color-900 text-color-900 dark:text-color-100">
      <main className="flex-grow">
        <Carousel />
        <ScrollingText />
        <Stats />
        <div className="section-divider mx-auto"></div>
        <ChairmanStory />
        <Committee />
        <Services />
        <WhyChoose />
        <Utilities />
        <Testimonials />
        <FAQs />
        <CTA />
      </main>
    </div>
  );
}
