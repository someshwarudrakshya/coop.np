import Carousel from "../layouts/Carousel";
import Stats from "../layouts/Stats";
import ChairmanStory from "../layouts/ChairmanStory";
import FAQs from "../layouts/FAQs";
import Testimonials from "../layouts/Testimonials";
import OurSchemes from "../layouts/OurSchemes";
import ScrollingText from "../layouts/ScrollingText";
import Link from "../layouts/Link";
import Services from "../layouts/Service";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-color-100 dark:bg-color-900 text-color-900 dark:text-color-100">
      <main className="flex-grow">
        <Carousel />
        <ScrollingText />
        <Stats />
        <div className="section-divider container mx-auto"></div>
        <ChairmanStory />
        <OurSchemes />
        <Services />
        <Link />
        <Testimonials />
        <FAQs />
      </main>
    </div>
  );
}
