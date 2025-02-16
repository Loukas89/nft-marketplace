import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const AnimatedBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true }, // ✅ Ensures animation covers the full screen
        style: {
          position: "fixed", // ✅ Ensures animation stays fixed on the page
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1, // ✅ Keeps animation below navbar & content
        },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: ["#00FFFF", "#FFD700", "#FFFFFF"] }, // ✅ Neon blockchain colors
          shape: { type: "circle" },
          opacity: { value: 0.6, random: true },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
          },
          links: {
            enable: true, // ✅ Enables node connections across the screen
            distance: 120,
            color: "#00FFFF",
            opacity: 0.8,
            width: 1.5,
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" }, resize: true },
          modes: { grab: { distance: 130, links: { opacity: 1 } } },
        },
      }}
    />
  );
};

export default AnimatedBackground;
