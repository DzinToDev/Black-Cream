import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import FAQSection from "./components/Faq";
import Section7 from "./components/Section7";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Loader from "./components/Loader";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className=" bg-cover bg-center bg-[url('/img/black-hero.png')] w-full min-h-screen overflow-hidden">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <NavBar />
          <Hero />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <FAQSection />
          <Section7 />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
