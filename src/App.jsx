import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

function App() {
  return (
    <main className=" bg-[#242424] min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </main>
  );
}

export default App;
