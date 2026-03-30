"use client"

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Treatments", href: "#treatments" },
  { label: "About Doctor", href: "#about-doctor" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(124,63,160,0.08)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{ height: 68 }}
      >
        {/* Left — Logo Image */}
        <a href="#" style={{ textDecoration: "none", flexShrink: 0 }}>
          <img
            src="/bglogo.png"
            alt="Sculpt Logo"
            style={{
              height: 40,
              width: "auto",
              objectFit: "contain",
            }}
          />
        </a>

        {/* Center — Nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium relative group"
              style={{ color: "#3D1A5C", textDecoration: "none" }}
            >
              {link.label}
              <span
                className="absolute left-0 -bottom-1 w-0 group-hover:w-full"
                style={{
                  height: 2,
                  background: "linear-gradient(90deg, #7C3FA0, #9B4FC8)",
                  borderRadius: 2,
                  transition: "width 0.25s ease",
                  display: "block",
                }}
              />
            </a>
          ))}
        </nav>

        {/* Right — CTA button (desktop) */}
        <div className="hidden md:flex items-center" style={{ flexShrink: 0 }}>
          <button
            style={{
              background: "linear-gradient(90deg, #1E0A2E, #7C3FA0)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.875rem",
              padding: "10px 24px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 16px rgba(124,63,160,0.3)",
            }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col justify-center items-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ width: 36, height: 36, background: "none", border: "none", cursor: "pointer" }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: i === 1 ? 20 : 26,
                height: 2,
                borderRadius: 2,
                background: "#1E0A2E",
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          maxHeight: menuOpen ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          background: "#ffffff",
          borderTop: menuOpen ? "1px solid rgba(124,63,160,0.08)" : "none",
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: "#3D1A5C", textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            style={{
              background: "linear-gradient(90deg, #1E0A2E, #7C3FA0)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.875rem",
              padding: "10px 24px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.02em",
              marginTop: 4,
            }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}