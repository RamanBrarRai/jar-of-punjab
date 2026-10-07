import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

// Emoji icon per flavour (no downloads needed)
const emojiForSlug = {
  "punjabi-mango-achar": "🥭",
  "nimbu-ka-achar": "🍋",
  "mixed-punjabi-achar": "🫙",
  "hari-mirch-ka-achar": "🌶️",
  "amla-achar": "🟢",
  "gajar-gobhi-shalgam": "🥕",
};

const labelForSlug = {
  "punjabi-mango-achar": "Mango",
  "nimbu-ka-achar": "Lemon",
  "mixed-punjabi-achar": "Mixed",
  "hari-mirch-ka-achar": "Chilli",
  "amla-achar": "Amla",
  "gajar-gobhi-shalgam": "Carrot",
};

export default function FlavoursShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = products[activeIdx];

  return (
    <section className="relative bg-[#0A3A30] text-cream py-24 md:py-36 overflow-hidden">
      {/* Dot texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(#F5C518 1px, transparent 1px), radial-gradient(#E91E63 1px, transparent 1px)",
          backgroundSize: "36px 36px, 36px 36px",
          backgroundPosition: "0 0, 18px 18px",
        }}
      />

      {/* Soft glows */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(233,30,99,0.12), transparent 45%), radial-gradient(circle at 85% 80%, rgba(245,197,24,0.08), transparent 50%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* ---------- Heading ---------- */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center bg-brandPink text-cream text-[10px] uppercase tracking-[0.28em] font-bold px-5 py-2.5 rounded-full">
            Our Flavours
          </div>

          <h2 className="font-display text-[3.2rem] sm:text-[4.2rem] md:text-[6rem] text-cream mt-8 leading-[0.92] tracking-tight">
            Pick Your Jar
          </h2>

          <p className="text-cream/55 mt-6 max-w-md mx-auto text-[15px] md:text-[16px] leading-relaxed">
            Six flavours. One Punjabi soul. Pick the one that speaks to you.
          </p>
        </div>

        {/* ---------- TABS (emoji icons) ---------- */}
        <div className="mb-16 md:mb-24">
          <div className="flex justify-center">
            <div className="flex gap-6 md:gap-14 overflow-x-auto pb-3 -mx-5 px-5 md:overflow-visible md:mx-0 md:px-0">
              {products.map((p, i) => {
                const emoji = emojiForSlug[p.slug] || "🫙";
                const label = labelForSlug[p.slug] || p.category;
                const isActive = i === activeIdx;

                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveIdx(i)}
                    className={
                      "group flex-shrink-0 flex flex-col items-center gap-3 transition-all duration-300 " +
                      (isActive
                        ? "opacity-100 scale-110"
                        : "opacity-50 hover:opacity-100 hover:scale-105")
                    }
                    aria-label={"View " + p.name}
                    aria-pressed={isActive}
                  >
                    <div
                      className={
                        "w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-4xl md:text-5xl transition-all duration-300 " +
                        (isActive
                          ? "drop-shadow-[0_0_24px_rgba(245,197,24,0.5)]"
                          : "grayscale-[0.3] group-hover:grayscale-0")
                      }
                    >
                      <span role="img" aria-hidden="true">{emoji}</span>
                    </div>
                    <span
                      className={
                        "text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-bold transition-colors " +
                        (isActive
                          ? "text-brandYellow"
                          : "text-cream/60 group-hover:text-cream")
                      }
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ---------- Main grid: image + content ---------- */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="md:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-brandPink/20 blur-2xl"
              />
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-[#0F4A3F] ring-1 ring-cream/10 shadow-[0_60px_120px_-50px_rgba(0,0,0,0.7)]">
                <img
                  key={active.id}
                  src={active.image}
                  alt={active.name}
                  className="w-full h-full object-contain transition-opacity duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center text-[10rem]">🫙</div>';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-6 text-center md:text-left">
            <div className="font-punjabi text-brandYellow/90 text-lg">
              {active.punjabiName}
            </div>
            <h3 className="font-display text-[2.4rem] md:text-[3.2rem] text-cream mt-3 leading-[1.05]">
              {active.name}
            </h3>

            <div className="w-16 h-px bg-brandYellow/60 my-6 mx-auto md:mx-0" />

            <p className="text-cream/70 text-[15px] md:text-[16px] leading-relaxed">
              {active.shortDesc}
            </p>

            <div className="mt-7 flex items-center justify-center md:justify-start gap-3 text-[15px]">
              <span className="text-brandYellow font-display text-2xl">
                ₹{active.price}
              </span>
              <span className="text-cream/30">·</span>
              <span className="text-cream/60">{active.sizes[0].size}</span>
            </div>

            <div className="mt-8">
              <Link
                to={"/product/" + active.slug}
                className="group inline-flex items-center gap-2 bg-brandPink text-cream px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-brandPinkDark transition-all duration-300"
              >
                View {active.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}