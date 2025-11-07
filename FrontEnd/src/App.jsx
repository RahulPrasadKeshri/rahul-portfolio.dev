import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Certifications from "./components/Certificates/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ElementInspector from "./components/Inspector/ElementInspector";
import BlurBlob from "./BlurBlob";
import gsap from "gsap";
import "./App.css";

function App() {
  useEffect(() => {
    const minicircle = document.getElementById("minicircle");

    // Smooth cursor animation using GSAP
    const xMove = gsap.quickTo(minicircle, "x", { duration: 0.6, ease: "power3" });
    const yMove = gsap.quickTo(minicircle, "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e) => {
      xMove(e.clientX - 6);
      yMove(e.clientY - 6);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="main" className="bg-[#050414] relative overflow-hidden">
      {/* Custom Lagging Cursor */}
      <div
        id="minicircle"
        style={{
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Background blob */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Sections */}
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
        <ElementInspector />
      </div>
    </div>
  );
}

export default App;
