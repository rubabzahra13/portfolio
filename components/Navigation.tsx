"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      const sections = ["villi", "about", "skills", "projects", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 96;

      let currentSection = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop - 96 && scrollPosition < offsetBottom - 96) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    if (id === "villi") {
      window.location.href = "/chat";
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setActiveSection(id);
      }
    }, 80);
  };

  const navItems = [
    { name: "Villi AI", id: "villi" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const linkClass = (itemId: string) => {
    const active = activeSection === itemId;
    return [
      "rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors",
      active
        ? "bg-subtle text-text-primary"
        : "text-text-muted hover:bg-subtle hover:text-text-primary",
    ].join(" ");
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-200 ${
        isScrolled || isOpen
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-14 min-w-0 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 sm:h-14">
        <div className="min-w-0 shrink truncate text-sm font-semibold tracking-tight text-text-primary sm:text-base">
          VelocTech Inc<span className="text-accent">.</span>
        </div>

        <div className="hidden flex-wrap items-center justify-end gap-0.5 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={linkClass(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-text-primary transition-colors hover:bg-subtle md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-0.5 px-2 py-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-subtle text-text-primary"
                      : "text-text-secondary hover:bg-subtle"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;
