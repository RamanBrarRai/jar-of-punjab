import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import {
  MangoIcon,
  LemonIcon,
  ChilliIcon,
  AmlaIcon,
  CarrotIcon,
  MixedJarIcon,
} from "./Icons";

// Map each product slug to an SVG icon
const iconForSlug = {
  "punjabi-mango-achar": MangoIcon,
  "nimbu-ka-achar": LemonIcon,
  "mixed-punjabi-achar": MixedJarIcon,
  "hari-mirch-ka-achar": ChilliIcon,
  "amla-achar": AmlaIcon,
  "gajar-gobhi-shalgam": CarrotIcon,
};

// Short display label under each tab
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
  const ActiveIcon = iconForSlug[active.slug] || MangoIcon;

  return (
    <section className="bg-ink text-paper py-20 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-10">

        {/* ---------- Heading ---------- */}
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-brick text-paper text-[11px] uppercase tracking-[0.24em] font-medium px-4 py-2 rounded-full">
            Our Flavours
          </div>

          {/* Big headline */}
          <h2 className="font-display text-[3rem] sm:text-[4rem] md:text-[5.5rem] text-paper mt-6 leading-[0.95]">
            Pick Your Jar
          </h2>

          {/* Subtitle */}
          <p className="text-paper/60 mt-5 max-w-md mx-auto text-[15px] leading-relaxed">
            Six flavours. One Punjabi soul. Pick the one that speaks to you.
          </p>
        </div>

        {/* ---------- Big product image frame ---------- */}
        <div className="relative max-w-xl mx-auto">
          <div className="aspect-square rounded-[2rem] overflow-hidden bg-paper shadow-[0_50px_100px_-40px_rgba(0,0,0,0.6)]">
            <img
              key={active.id} /* key forces re-mount so we can transition later */
              src={active.image}
              alt={active.name}
              className="w-full h-full object-cover transition-opacity duration-500"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.innerHTML =
                  '<div class="w-full h-full flex items-center justify-center text-[10rem]">🫙</div>';
              }}
            />
          </div>

          {/* Small floating icon badge in the corner */}
          <div className="absolute -top-4 -left-4 bg-mustard text-ink w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
            <ActiveIcon className="w-8 h-8" />
          </div>
        </div>

        {/* ---------- Content under the image ---------- */}
        <div className="text-center mt-10 md:mt-12">
          <div className="font-punjabi text-mustard/80 text-base">
            {active.punjabiName}
          </div>
          <h3 className="font-display text-[2rem] md:text-[2.6rem] text-paper mt-2 leading-tight">
            {active.name}
          </h3>
          <p className="text-paper/60 mt-4 max-w-lg mx-auto text-[15px] leading-relaxed">
            {active.shortDesc}
          </p>

          <div className="mt-5 flex items-center justify-center gap-3 text-[14px]">
            <span className="text-mustard font-medium">₹{active.price}</span>
            <span className="text-paper/30">·</span>
            <span className="text-paper/60">{active.sizes[0].size}</span>
          </div>

          <div className="mt-8">
            <Link
              to={"/product/" + active.slug}
              className="group inline-flex items-center gap-2 text-sm text-mustard font-medium"
            >
              <span className="underline underline-offset-4 decoration-mustard/30 group-hover:decoration-mustard">
                View {active.name}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ---------- Flavour tabs — floating icons like Tigris ---------- */}
        <div className="mt-20 md:mt-28 flex justify-center">
          <div className="flex gap-8 md:gap-16 overflow-x-auto pb-3 -mx-5 px-5 md:overflow-visible md:mx-0 md:px-0">
            {products.map((p, i) => {
              const Icon = iconForSlug[p.slug] || MangoIcon;
              const label = labelForSlug[p.slug] || p.category;
              const isActive = i === activeIdx;

              return (
                <button
                  key={p.id}
                  onClick={() => setActiveIdx(i)}
                  className={
                    "group flex-shrink-0 flex flex-col items-center gap-4 transition-all duration-300 " +
                    (isActive
                      ? "opacity-100 scale-110"
                      : "opacity-40 hover:opacity-100 hover:scale-105")
                  }
                  aria-label={"View " + p.name}
                  aria-pressed={isActive}
                >
                  <Icon
                    className={
                      "w-12 h-12 md:w-16 md:h-16 transition-all duration-300 drop-shadow-lg " +
                      (isActive
                        ? "text-mustard"
                        : "text-paper group-hover:text-mustard")
                    }
                  />
                  <span
                    className={
                      "text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-bold transition-colors " +
                      (isActive ? "text-mustard" : "text-paper/70 group-hover:text-paper")
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
    </section>
  );
}
