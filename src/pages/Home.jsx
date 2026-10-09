import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products, reviews } from "../data/products";
import ProductCard from "../components/ProductCard";
import Review from "../components/Review";
import Button from "../components/Button";
import SectionReveal from "../components/SectionReveal";
import Marquee from "../components/Marquee";
import FlavoursShowcase from "../components/FlavoursShowcase";
import { LeafIcon, JarIcon, SparkleIcon, HeartIcon } from "../components/Icons";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const featured = products.filter((p) => p.featured);
  const allProducts = products;

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.7 })
        .from(".hero-title", { y: 50, opacity: 0, duration: 1.1 }, "-=0.4")
        .from(".hero-sub", { y: 25, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-ctas", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-mascot", { scale: 0.85, opacity: 0, duration: 1.4 }, "-=1.1")
        .from(".hero-scroll-hint", { opacity: 0, duration: 0.6 }, "-=0.3");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* ============================================================
          HERO — full-viewport, deep green, mascot hero
          ============================================================ */}
      <SectionReveal
        ref={heroRef}
        className="relative overflow-hidden bg-brandGreen text-cream"
      >
        {/* Subtle radial glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(233,30,99,0.12), transparent 45%), radial-gradient(circle at 80% 70%, rgba(245,197,24,0.08), transparent 50%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 md:px-10 pt-20 md:pt-28 pb-24 md:pb-32 grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* ---------- Text column ---------- */}
          <div className="md:col-span-6 text-center md:text-left">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 bg-brandPink text-cream text-[11px] uppercase tracking-[0.24em] font-medium px-4 py-2 rounded-full">
              Handmade in Punjab
            </div>

            {/* Headline */}
            <h1 className="hero-title font-display text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.6rem] text-cream mt-6 leading-[0.98] tracking-tight">
              Punjab, Packed
              <br />
              <em className="not-italic text-brandYellow">in Every Jar.</em>
            </h1>

            {/* Supporting text */}
            <p className="hero-sub mt-6 md:mt-7 text-[15px] md:text-[18px] text-cream/75 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Bold spices. Traditional recipes. The unmistakable taste of Punjab — made by hand, in small batches.
            </p>

            {/* CTAs */}
            <div className="hero-ctas mt-9 md:mt-11 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 bg-brandPink text-cream px-7 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-brandPinkDark transition-all duration-300 shadow-lg"
              >
                Explore the Flavours
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
              <Link
                to="/about"
                className="text-sm text-cream/75 hover:text-brandYellow underline underline-offset-4 decoration-cream/30 hover:decoration-brandYellow transition"
              >
                Our Story
              </Link>
            </div>

            {/* Small trust row */}
            <div className="hero-ctas mt-10 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-cream/45">
              <span>No preservatives</span>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-cream/30" />
              <span>Small batch</span>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-cream/30" />
              <span>Ships all-India</span>
            </div>
          </div>

          {/* ---------- Mascot column ---------- */}
          <div className="md:col-span-6 flex items-center justify-center md:justify-end">
            <div className="hero-mascot relative max-w-[320px] md:max-w-[520px] w-full">
              <img
                src="/logo.png"
                alt="Jar Of Punjab mascot — smiling pickle jar with pink turban"
                className="w-full h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.4)]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.innerHTML =
                    '<div class="aspect-square rounded-[2rem] bg-brandGreenLight flex items-center justify-center text-[10rem]">🫙</div>';
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hero-scroll-hint relative pb-8 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-cream/40">
          <span>Scroll</span>
          <span className="w-px h-8 bg-cream/30 animate-pulse" />
        </div>
      </SectionReveal>

      {/* ============================================================
          MARQUEE
          ============================================================ */}
      <Marquee />

      {/* ============================================================
          FLAVOURS SHOWCASE
          ============================================================ */}
      <FlavoursShowcase />

      {/* ============================================================
          INTRO / MISSION
          ============================================================ */}
      <SectionReveal className="bg-ink text-paper/90 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <div className="font-punjabi text-brandYellow/80 text-base">ਸਾਡੀ ਕਹਾਣੀ</div>
          <h2 className="font-display text-[1.9rem] md:text-[3rem] text-paper mt-4 leading-[1.1]">
            We make achar the way it was always meant to be made.
          </h2>
          <p className="mt-6 md:mt-7 text-[15px] md:text-[17px] text-paper/65 leading-relaxed max-w-xl mx-auto">
            In small batches. With cold-pressed mustard oil. Under the Punjabi sun. From recipes that have stayed in the family for three generations.
          </p>
        </div>
      </SectionReveal>

      {/* ============================================================
          PRODUCT SHOWCASE
          ============================================================ */}
      <SectionReveal className="bg-paper py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionReveal className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center bg-brandPink text-cream text-[10px] uppercase tracking-[0.28em] font-bold px-5 py-2.5 rounded-full">
              The Collection
            </div>
            <h2 className="font-display text-[2.5rem] md:text-[3.8rem] text-ink mt-6 leading-[1.05]">
              Explore Our Pickles
            </h2>
            <p className="text-earthy/60 mt-5 max-w-md mx-auto text-[15px] md:text-[16px]">
              Bring authentic Punjabi flavours to every meal.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24 md:gap-y-28">
            {allProducts.map((p, i) => (
              <SectionReveal key={p.id} delay={i * 0.05}>
                <ProductCard product={p} />
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center mt-20 md:mt-24">
            <Link to="/shop">
              <Button variant="outline">See all pickles →</Button>
            </Link>
          </SectionReveal>
        </div>
      </SectionReveal>

      {/* ============================================================
          WHY
          ============================================================ */}
      <SectionReveal className="relative bg-[#0A3A30] text-cream py-20 md:py-32 overflow-hidden">
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

        <div className="relative max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center bg-brandPink text-cream text-[10px] uppercase tracking-[0.28em] font-bold px-5 py-2.5 rounded-full">
              Why choose us
            </div>
            <h2 className="font-display text-[2.5rem] md:text-[3.8rem] text-cream mt-6 leading-[1.05]">
              Why Jar Of Punjab?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 max-w-5xl mx-auto">
            {[
              { Icon: LeafIcon, title: "Authentic Recipes", desc: "Traditional Punjabi achar, made the way it has been for generations." },
              { Icon: JarIcon, title: "Small Batch", desc: "Each jar is made by hand in our family kitchen." },
              { Icon: SparkleIcon, title: "Careful Ingredients", desc: "Raw mangoes, amla and chillies from local Punjab farms." },
              { Icon: HeartIcon, title: "Delivered With Care", desc: "Packed with love and shipped across India." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-cream/10 ring-1 ring-cream/20 text-brandYellow flex items-center justify-center mx-auto">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-cream mt-6">
                  {title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-cream/60 mt-3 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ============================================================
          STORY
          ============================================================ */}
      <SectionReveal className="relative bg-paper py-20 md:py-32 overflow-hidden">
        {/* Subtle dot texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#0F4A3F 1.2px, transparent 1.2px), radial-gradient(#E91E63 1.2px, transparent 1.2px)",
            backgroundSize: "32px 32px, 32px 32px",
            backgroundPosition: "0 0, 16px 16px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-5 md:px-10">
          {/* Badge */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center bg-brandPink text-cream text-[10px] uppercase tracking-[0.28em] font-bold px-5 py-2.5 rounded-full">
              Our Story
            </div>
            <h2 className="font-display text-[2.5rem] md:text-[3.8rem] text-ink mt-6 leading-[1.05]">
              A Taste of Punjab in Every Jar
            </h2>
          </div>

          {/* Two-column: image + text */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            {/* Image */}
            <div className="md:col-span-5">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-sand shadow-[0_40px_90px_-50px_rgba(15,74,63,0.6)] ring-1 ring-brandGreen/10">
                <img
                  src="/products/mixed.png"
                  alt="Traditional Punjabi achar being prepared"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add(
                      "flex",
                      "items-center",
                      "justify-center"
                    );
                    e.currentTarget.parentElement.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center text-brandGreen/20"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="w-32 h-32"><path d="M8 3h8v2.5l1.5 2v11.5A2 2 0 0 1 15.5 21h-7A2 2 0 0 1 6.5 19V7.5L8 5.5V3Z"/><path d="M8 8h8"/></svg></div>';
                  }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-7 text-center md:text-left">
              <div className="font-punjabi text-brandPink text-lg">ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ</div>
              <p className="mt-6 text-[16px] md:text-[17px] text-earthy/80 leading-relaxed">
                Jar Of Punjab began with a simple wish — to share the taste of home with everyone. Every jar comes from a kitchen where recipes have been passed down for generations, where mangoes are sun-dried by hand, and where a little piece of Punjab goes into everything we make.
              </p>

              <p className="mt-7 font-display text-2xl md:text-3xl text-brandPink italic">
                "Har jar vich Punjab."
              </p>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 bg-brandPink text-cream px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-brandPinkDark transition-all duration-300"
                >
                  Read Our Story
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
      </SectionReveal>

      {/* ============================================================
          REVIEWS
          ============================================================ */}
      <SectionReveal className="relative bg-[#0A3A30] text-cream py-20 md:py-32 overflow-hidden">
        {/* Subtle dot texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#F5C518 1px, transparent 1px), radial-gradient(#E91E63 1px, transparent 1px)",
            backgroundSize: "36px 36px, 36px 36px",
            backgroundPosition: "0 0, 18px 18px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center bg-brandPink text-cream text-[10px] uppercase tracking-[0.28em] font-bold px-5 py-2.5 rounded-full">
              Loved by families
            </div>
            <h2 className="font-display text-[2.5rem] md:text-[3.8rem] text-cream mt-6 leading-[1.05]">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-7">
            {reviews.map((r, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <Review {...r} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ============================================================
          CLOSING CTA
          ============================================================ */}
      <SectionReveal className="relative bg-paper py-20 md:py-32 overflow-hidden">
        {/* Soft pink glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(233,30,99,0.08), transparent 45%), radial-gradient(circle at 80% 70%, rgba(15,74,63,0.06), transparent 50%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            {/* Mascot */}
            <div className="md:col-span-5 order-2 md:order-1 flex items-center justify-center">
              <img
                src="/products/pickles.png"
                alt="Jar Of Punjab pickle collection"
                className="w-[300px] md:w-[600px] h-auto object-contain drop-shadow-[0_40px_60px_rgba(15,74,63,0.25)]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Text + form */}
            <div className="md:col-span-7 order-1 md:order-2 text-center md:text-left">
              <div className="inline-flex items-center bg-brandPink text-cream text-[10px] uppercase tracking-[0.28em] font-bold px-5 py-2.5 rounded-full">
                Come Into Our Kitchen
              </div>

              <h2 className="font-display text-[2.5rem] md:text-[3.8rem] text-ink mt-6 leading-[1.02]">
                Little notes from Punjab, straight to your inbox.
              </h2>

              <p className="mt-5 text-[15px] md:text-[17px] text-earthy/75 leading-relaxed">
                New batches, behind-the-scenes peeks, and a chance to help shape what we jar next.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="flex-1 px-5 py-3.5 rounded-full bg-white border border-earthy/15 text-earthy placeholder:text-earthy/40 focus:outline-none focus:border-brandPink"
                />
                <button className="px-7 py-3.5 rounded-full bg-brandPink text-cream font-medium text-sm tracking-wide hover:bg-brandPinkDark transition">
                  Join us
                </button>
              </form>

              <div className="mt-6 flex items-center gap-4 justify-center md:justify-start text-sm">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brandPink font-medium underline underline-offset-4 decoration-brandPink/30 hover:decoration-brandPink"
                >
                  @jarofpunjab on Instagram →
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}