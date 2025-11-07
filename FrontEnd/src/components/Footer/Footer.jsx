import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [visits, setVisits] = useState(0);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const istTime = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      setCurrentTime(istTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Fetch visitor count (CountAPI)
  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/rahul-portfolio-2025/visits")
      .then((res) => res.json())
      .then((data) => setVisits(data.value))
      .catch((err) => console.error("Error fetching visitor count:", err));
  }, []);

  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Rahul Prasad Keshri</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Certificates", id: "certifications" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rahul-prasad-keshri-b6b444259/" },
            { icon: <FaGithub />, link: "https://github.com/RahulPrasadKeshri"},
            { icon: <SiLeetcode />, link: "https://leetcode.com/u/RahulPrasadKeshri/" },
            { icon: <FaHackerrank />, link: "https://www.hackerrank.com/profile/rahulprasadkesh1" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Rahul Prasad Keshri. All rights reserved.
        </p>

        {/* Indian Standard Time */}
        <p className="text-sm text-gray-400 mt-1">Current IST: {currentTime}</p>

        {/* Visitor Counter */}
        <p className="text-sm text-gray-400 mt-1">
          👀 {visits} people have visited this portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
