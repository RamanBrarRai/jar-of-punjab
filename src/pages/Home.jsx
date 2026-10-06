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
import { LeafIcon, JarIcon, SparkleIcon, HeartIcon } from "../components/Icons";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const featured = products.filter((p) => p.featured);
  const allProducts = products;
  const heroProduct = featured[0] || allProducts[0];

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Sequential hero entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-label", { y: 16, opacity: 0, duration: 0.7 })
        .from(".hero-title", { y: 40, opacity: 0, duration: 1 }, "-=0.4")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.7 }, "-=0.6")
        .from(".hero-jar", { y: 60, opacity: 0, scale: 0.88, duration: 1.3 }, "-=0.5")
        .from(".hero-ctas", { y: 16, opacity: 0, duration: 0.7 }, "-=0.8")
        .from(".hero-scroll-hint", { opacity: 0, duration: 0.6 }, "-=0.3");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* ============================================================
          HERO — calm, centered, Tigris-style
          Layout choice (a): headline top, jar below, cream background
          ============================================================ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-b from-sand/60 via-paper to-paper"
      >
        <div className="max-w-4xl mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-20 md:pb-28 text-center">
          {/* Small label */}
          <div className="hero-label inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-brick/80">
            <span className="w-8 h-px bg-brick/50" />
            Handmade in Punjab
            <span className="w-8 h-px bg-brick/50" />
          </div>

          {/* Headline */}
          <h1 className="hero-title font-display text-[2.8rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[5.6rem] text-ink mt-6 leading-[0.98] tracking-tight">
            Punjab, Packed
            <br />
            <em className="not-italic text-brick">in Every Jar.</em>
          </h1>

          {/* Supporting text */}
          <p className="hero-sub mt-6 md:mt-8 text-[15px] md:text-[18px] text-earthy/70 max-w-xl mx-auto leading-relaxed">
            Bold spices. Traditional recipes. The unmistakable taste of Punjab — made by hand, in small batches.
          </p>

          {/* Jar image — big, centered, calm */}
          <div className="hero-jar mt-12 md:mt-16 mx-auto max-w-[320px] md:max-w-[420px]">
            <img
              src={heroProduct.image}
              alt={heroProduct.name}
              className="w-full h-auto object-contain drop-shadow-[0_40px_60px_-30px_rgba(62,43,31,0.45)]"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.innerHTML =
                  '<div class="aspect-square rounded-[2rem] bg-sand flex items-center justify-center text-[10rem]">🫙</div>';
              }}
            />
          </div>

          {/* CTAs */}
          <div className="hero-ctas mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link to="/shop">
              <Button showArrow>Explore the Flavours</Button>
            </Link>
            <Link
              to="/about"
              className="text-sm text-earthy/70 hover:text-brick underline underline-offset-4 decoration-brick/30"
            >
              Our Story
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="hero-scroll-hint mt-14 md:mt-16 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-earthy/40">
            <span>Scroll</span>
            <span className="w-px h-8 bg-earthy/30 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============================================================
          MARQUEE — running strip under the hero
          ============================================================ */}
      <Marquee />

      {/* ============================================================
          INTRO / MISSION
          ============================================================ */}
      <SectionReveal className="bg-ink text-paper/90 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <div className="font-punjabi text-mustard/80 text-base">ਸਾਡੀ ਕਹਾਣੀ</div>
          <h2 className="font-display text-[1.9rem] md:text-[3rem] text-paper mt-4 leading-[1.1]">
            We make achar the way it was always meant to be made.
          </h2>
          <p className="mt-6 md:mt-7 text-[15px] md:text-[17px] text-paper/65 leading-relaxed max-w-xl mx-auto">
            In small batches. With cold-pressed mustard oil. Under the Punjabi sun. From recipes that have stayed in the family for three generations.
          </p>
        </div>
      </SectionReveal>

      {/* ============================================================
          MEET THE ACHAR
          ============================================================ */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionReveal className="text-center mb-14 md:mb-20">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brick/80">
              The Collection
            </div>
            <h2 className="font-display text-[2.1rem] md:text-[3.2rem] text-ink mt-4">
              Explore Our Pickles
            </h2>
            <p className="text-earthy/60 mt-4 max-w-md mx-auto text-[15px]">
              Bring authentic Punjabi flavours to every meal.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20">
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
      </section>

      {/* ============================================================
          WHY
          ============================================================ */}
      <SectionReveal className="bg-sand/50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14 md:mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brick/80">
              Why choose us
            </div>
            <h2 className="font-display text-[2rem] md:text-[3rem] text-ink mt-4">
              Why Jar Of Punjab?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-5xl mx-auto">
            {[
              { Icon: LeafIcon, title: "Authentic Recipes", desc: "Traditional Punjabi achar, made the way it has been for generations." },
              { Icon: JarIcon, title: "Small Batch", desc: "Each jar is made by hand in our family kitchen." },
              { Icon: SparkleIcon, title: "Careful Ingredients", desc: "Raw mangoes, amla and chillies from local Punjab farms." },
              { Icon: HeartIcon, title: "Delivered With Care", desc: "Packed with love and shipped across India." },
            ].map(({ Icon, title, desc }) => (
              <div key={title}>
                <div className="w-12 h-12 rounded-full bg-brick/10 text-brick flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg md:text-xl text-ink mt-4">{title}</h3>
                <p className="text-[14px] text-earthy/65 mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ============================================================
          STORY
          ============================================================ */}
      <section className="relative bg-paper py-20 md:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#7A1F1F 1.2px, transparent 1.2px), radial-gradient(#E8B65A 1.2px, transparent 1.2px)",
            backgroundSize: "32px 32px, 32px 32px",
            backgroundPosition: "0 0, 16px 16px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-sand shadow-[0_30px_70px_-50px_rgba(62,43,31,0.5)]">
              <img
                src="/products/mixed.jpg"
                alt="Traditional Punjabi achar being prepared"
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("flex","items-center","justify-center");
                  e.currentTarget.parentElement.innerHTML =
                    '<div class="w-full h-full flex items-center justify-center text-brick/20"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="w-32 h-32"><path d="M8 3h8v2.5l1.5 2v11.5A2 2 0 0 1 15.5 21h-7A2 2 0 0 1 6.5 19V7.5L8 5.5V3Z"/><path d="M8 8h8"/></svg></div>';
                }}
              />
            </div>
          </div>
          <div className="md:col-span-7 text-center md:text-left">
            <div className="font-punjabi text-brick/70 text-base">ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ</div>
            <h2 className="font-display text-[1.9rem] md:text-[2.8rem] text-ink mt-3 leading-[1.1]">
              A Taste of Punjab in Every Jar
            </h2>
            <p className="mt-5 md:mt-6 text-[15px] md:text-[16px] text-earthy/75 leading-relaxed">
              Jar Of Punjab began with a simple wish — to share the taste of home with everyone. Every jar comes from a kitchen where recipes have been passed down for generations, where mangoes are sun-dried by hand, and where a little piece of Punjab goes into everything we make.
            </p>
            <p className="mt-5 font-display text-xl md:text-2xl text-brick italic">
              "Har jar vich Punjab."
            </p>
            <div className="mt-6 md:mt-8">
              <Link to="/about" className="group inline-flex items-center gap-2 text-sm text-brick font-medium">
                <span className="underline underline-offset-4 decoration-brick/30 group-hover:decoration-brick">
                  Read Our Story
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          REVIEWS
          ============================================================ */}
      <SectionReveal className="bg-sand/50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14 md:mb-16">
            <div className="font-punjabi text-brick/70 text-base">ਪਿਆਰ</div>
            <h2 className="font-display text-[2rem] md:text-[3rem] text-ink mt-3">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {reviews.map((r, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <Review {...r} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ============================================================
          CLOSING
          ============================================================ */}
      <SectionReveal className="bg-ink text-paper py-20 md:py-28">
        <div className="max-w-xl mx-auto px-5 text-center">
          <div className="font-punjabi text-mustard/80 text-base">ਇੰਸਟਾਗ੍ਰਾਮ</div>
          <h2 className="font-display text-[1.9rem] md:text-[2.6rem] text-paper mt-3">
            Come Into Our Kitchen
          </h2>
          <p className="text-[15px] text-paper/60 mt-5 leading-relaxed">
            Little notes from Punjab, first looks at new batches, and a chance to help shape what we jar next.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              className="flex-1 px-5 py-3.5 rounded-full bg-paper/10 border border-paper/15 text-paper placeholder:text-paper/40 focus:outline-none focus:border-mustard"
            />
            <button className="px-7 py-3.5 rounded-full bg-mustard text-ink font-medium text-sm tracking-wide hover:bg-brick hover:text-paper transition">
              Join us
            </button>
          </form>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-block mt-6 text-sm text-mustard underline underline-offset-4 decoration-mustard/30">
            @jarofpunjab on Instagram →
          </a>
        </div>
      </SectionReveal>
    </div>
  );
}
