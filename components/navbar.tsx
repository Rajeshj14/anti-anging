"use client"

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Treatments", href: "#" },
  { label: "About Doctor", href: "#" },
  { label: "Why Us", href: "#" },
  { label: "FAQs", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(37,99,235,0.08)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{ height: 68 }}
      >
        {/* Left — Logo */}
        <a href="#" style={{ textDecoration: "none", flexShrink: 0 }}>
          <span className="text-2xl font-extrabold tracking-tight" style={{ color: "#1e3a5f" }}>
            Sculpt
          </span>
          <span className="text-2xl font-extrabold" style={{ color: "#2563eb" }}>.</span>
        </a>

        {/* Center — Nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium relative group"
              style={{ color: "#334155", textDecoration: "none" }}
            >
              {link.label}
              <span
                className="absolute left-0 -bottom-1 w-0 group-hover:w-full"
                style={{
                  height: 2,
                  background: "linear-gradient(90deg, #2563eb, #60a5fa)",
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
              background: "linear-gradient(90deg, #1e3a5f, #2563eb)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.875rem",
              padding: "10px 24px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
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
                background: "#1e3a5f",
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
          borderTop: menuOpen ? "1px solid rgba(37,99,235,0.08)" : "none",
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: "#334155", textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            style={{
              background: "linear-gradient(90deg, #1e3a5f, #2563eb)",
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
