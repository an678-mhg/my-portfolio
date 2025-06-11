"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MousePosition {
  x: number;
  y: number;
}

export function MouseGradient() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                    rgba(59, 130, 246, 0.1), 
                    rgba(147, 51, 234, 0.05), 
                    transparent 40%)`,
      }}
      animate={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                    rgba(59, 130, 246, 0.15), 
                    rgba(147, 51, 234, 0.08), 
                    transparent 40%)`,
      }}
      transition={{ type: "tween", ease: "linear", duration: 0.2 }}
    />
  );
}

export function HeroMouseEffect() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement)?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.addEventListener("mousemove", updateMousePosition);
      heroSection.addEventListener("mouseenter", () => setIsHovering(true));
      heroSection.addEventListener("mouseleave", () => setIsHovering(false));

      return () => {
        heroSection.removeEventListener("mousemove", updateMousePosition);
        heroSection.removeEventListener("mouseenter", () =>
          setIsHovering(true)
        );
        heroSection.removeEventListener("mouseleave", () =>
          setIsHovering(false)
        );
      };
    }
  }, []);

  if (!isHovering) return null;

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                    rgba(59, 130, 246, 0.2), 
                    rgba(147, 51, 234, 0.1), 
                    rgba(236, 72, 153, 0.05),
                    transparent 50%)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
