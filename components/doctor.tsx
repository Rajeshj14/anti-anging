"use client"

const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

export default function AboutUs() {
  const stats = [
    { label: "Hair Restoration Expertise", percent: 92 },
    { label: "Facial Aesthetics & Anti-Aging", percent: 95 },
    { label: "Patient Satisfaction", percent: 98 },
  ];

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-10 max-sm:pb-0 md:py-16"
      style={{ background: "#eaf2fb", fontFamily: "'Segoe UI', sans-serif" }}
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10 md:gap-12">

        {/* ── LEFT SIDE ── */}
        <div className="flex flex-col w-full md:w-1/2 gap-3 max-sm:4 md:gap-6">

          {/* About us label */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" className="w-5 h-5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#2563eb"/>
            </svg>
            <span className="text-blue-600 font-semibold text-sm tracking-wide">Meet Our Expert</span>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ color: "#0f2d5e" }}
          >
            Dr. Priyanka Raj <span style={{ fontSize: "0.6em", fontWeight: 700, color: "#2563eb" }}>(MDS)</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold leading-relaxed" style={{ color: "#2563eb", marginTop: -8 }}>
            Gold Medalist &nbsp;|&nbsp; Award-Winning Maxillofacial Surgeon &nbsp;|&nbsp; Internationally Published
          </p>

          {/* Description */}
          <p className="text-gray-500 text-base leading-relaxed max-w-lg">
            Dr. Priyanka Raj brings specialised expertise in hair restoration and facial aesthetics & anti-aging treatments. She is a University rank holder during her MDS and recipient of the prestigious Gold Medal for excellence in surgery, she combines precision, safety, and artistry to deliver natural-looking results. Every consultation and procedure at Sculpt is personally led or closely supervised by her, ensuring refined outcomes tailored to each face.
          </p>

          {/* Progress bars */}
          <div className="flex flex-col gap-5 mt-2">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-gray-800 text-sm">{s.label}</span>
                  <span className="text-gray-500 text-sm font-medium">{s.percent}%</span>
                </div>
                <div
                  className="w-full rounded-full"
                  style={{ height: 3, background: "#d1dff0" }}
                >
                  <div
                    className="rounded-full"
                    style={{
                      height: 3,
                      width: `${s.percent}%`,
                      background: "linear-gradient(90deg, #2563eb 0%, #1e40af 100%)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="mt-2 flex items-center justify-center gap-2 px-7 py-3 rounded font-semibold text-white hover:opacity-90 active:scale-95 w-full sm:w-auto"
            style={{
              background: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)",
              boxShadow: "0 4px 18px rgba(37,99,235,0.30)",
              fontSize: "0.97rem",
              transition: "all 0.2s ease",
              width: "fit-content",
            }}
            onClick={scrollToContact}
          >
            I'm Ready to Consult the Best
          </button>
        </div>

        {/* ── RIGHT SIDE ── */}
        <div className="relative w-full md:w-1/2 flex items-start justify-center" style={{ minHeight: 340 }}>

          {/* Decorative circle arc — top center */}
          <div
            className="absolute"
            style={{
              top: -18,
              left: "50%",
              transform: "translateX(-60%)",
              width: 180,
              height: 180,
              borderRadius: "50%",
              border: "2px solid #93c5fd",
              opacity: 0.55,
              zIndex: 0,
            }}
          />

          {/* Blue filled quarter circle — top right corner */}
          <div
            className="absolute overflow-hidden"
            style={{
              top: -10,
              right: 0,
              width: 64,
              height: 64,
              borderRadius: "0 16px 0 0",
              zIndex: 1,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 90,
                height: 90,
                borderRadius: "50%",
                background: "#2563eb",
                transform: "translate(30%, -30%)",
              }}
            />
          </div>

          {/* LEFT image — smaller, rounded, foreground */}
          <div
            className="relative"
            style={{
              width: "48%",
              maxWidth: 260,
              zIndex: 3,
              marginTop: 30,
              marginRight: -20,
              flexShrink: 0,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&q=80"
              alt="Optician fitting glasses"
              style={{
                width: "100%",
                height: "auto",
                minHeight: 200,
                maxHeight: 300,
                objectFit: "cover",
                borderRadius: 20,
                display: "block",
                boxShadow: "0 8px 32px rgba(37,99,235,0.13)",
              }}
            />

            <div
              className="flex items-center gap-2 sm:gap-3 bg-white"
              style={{
                marginTop: 12,
                borderRadius: 14,
                padding: "10px 14px",
                boxShadow: "0 4px 18px rgba(37,99,235,0.10)",
              }}
            >
              <span
                className="font-extrabold"
                style={{ fontSize: 28, color: "#0f2d5e", lineHeight: 1 }}
              >
                25
              </span>
              <span className="text-gray-500 text-xs sm:text-sm font-medium leading-tight">
                Years Of<br />experience
              </span>
            </div>
          </div>

          {/* RIGHT image — taller, no border radius on left side, behind */}
          <div
            style={{
              width: "44%",
              maxWidth: 230,
              zIndex: 2,
              flexShrink: 0,
              position: "relative",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&q=80"
              alt="Eye examination"
              style={{
                width: "100%",
                height: "auto",
                minHeight: 260,
                maxHeight: 420,
                objectFit: "cover",
                borderRadius: "0 20px 20px 0",
                display: "block",
                boxShadow: "0 8px 32px rgba(37,99,235,0.10)",
              }}
            />

            {/* 18% donut badge — bottom right corner */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                bottom: -18,
                right: -18,
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "conic-gradient(#2563eb 0% 18%, #1e3a8a 18% 100%)",
                boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
                zIndex: 5,
              }}
            >
              <div
                className="flex items-center justify-center bg-white rounded-full"
                style={{ width: 46, height: 46 }}
              >
                <span className="font-extrabold text-xs" style={{ color: "#1e3a8a" }}>18%</span>
              </div>
            </div>
          </div>

          {/* Decorative blue circle dot — between images */}
          <div
            className="absolute"
            style={{
              top: "45%",
              left: "42%",
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#2563eb",
              zIndex: 4,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

      </div>
    </section>
  );
}