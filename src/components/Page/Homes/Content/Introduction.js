"use client"
import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';




const Introduction = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    };

    initializeParticles();
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  return (
    <>
  

      <div className="main-container pb-40 relative">
      { init && <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
          background: {
              
          },
          fpsLimit: 120,
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: "push",
                  },
                  onHover: {
                      enable: true,
                      mode: "repulse",
                  },
                  resize: true,
              },
              modes: {
                  push: {
                      quantity: 4,
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4,
                  },
              },
          },
          particles: {
              color: {
                  value: "#ffffff",
              },
              links: {
                  color: "#ffffff",
                  distance: 100,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
              },
              move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                  },
                  value: 280,
              },
              opacity: {
                  value: 0.5,
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: { min: 1, max: 4 },
              },
          },
          detectRetina: true,
      }}
  />}
        <div className="intro-image w-full h-[742px] absolute bg-no-repeat bg-center"  style={{backgroundImage:"url('/Image/background.svg')",zIndex:'-1'}}>
        </div>
        <div className="pt-44 mt- z-20">
          <div className="flex justify-center items-center text-center">
            <p className="w-9/12 lg:w-8/12 text-4xl lg:text-[40px] font-bold text-white" style={{lineHeight:'3.5rem'}}>
              Data, AI and Software Cloud Services Consultant
            </p>
          </div>

          <div className="flex justify-center items-center text-cloud2 text-center pt-3">
            <p className="w-9/12 md:w-[480px] text-base">
            We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
            Business and Infrastructure Readiness for the Ultimate Technological
            Leap.
            </p>
          </div>
          <div className="flex justify-center items-center gap-3  mt-6">
            <button className="bg-cloudBtn px-3 py-2 text-cloudText rounded font-medium">
              Contact Us
            </button>
            <span className="flex items-center gap-1 text-white">
              Book a Free Call <MdOutlineArrowOutward />
            </span>
          </div>
        </div>
      </div>
  </>
  );
};

export default Introduction;
