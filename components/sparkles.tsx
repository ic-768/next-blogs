"use client";
import React from "react";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { motion, useAnimation } from "framer-motion";

import type { Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const Sparkles = () => {
  const { resolvedTheme } = useTheme();

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const controls = useAnimation();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };
  const particleColor = resolvedTheme === "dark" ? "FFFFFF" : "000000";

  return (
    <motion.div animate={controls} className="opacity-0">
      {init && (
        <Particles
          className="overflow-hidden rounded"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fullScreen: {
              enable: false,
            },

            fpsLimit: 60,
            particles: {
              color: {
                value: particleColor,
              },
              move: {
                enable: true,
                speed: {
                  min: 0.1,
                  max: 1,
                },
              },
              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
                value: 1200,
              },
              size: {
                value: {
                  min: 0.4,
                  max: 1,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
