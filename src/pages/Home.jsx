import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products, reviews } from "../data/products";
import ProductCard from "../components/ProductCard";
import Review from "../components/Review";
import Button from "../components/Button";
import SectionReveal from "../components/SectionReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const featured = products.filter((p) => p.featured);
  const [first, second, third] = featured;

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-el", { y: 30, opacity: 0, duration: 1.1, stagger: 0.14, ease: "power3.out" });
      gsap.from(".hero-jar", { scale: 0.85, opacity: 0, duration: 1.6, delay: 0.25, ease: "power3.out" });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative bg-paper grain">
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 md:pr-8">
            <div className="hero-el inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-brick">
              <span className="w-6 h-px bg-brick"></span> Handmade in Punjab
            </div>
            <h1 className="hero-el font-display text-[3.2rem] md:text-[4.6rem] text-ink mt-6">
              Har Jar Vich <em className="not-italic text-brick">Punjab.</em>
            </h1>
            <p className="hero-el mt-7 text-[17px] md:text-[18px] text-earthy/75 max-w-[30rem] leading-relaxed">
              Traditional Punjabi achar, made in small batches in our home kitchen — with cold-pressed mustard oil, hand-ground spices, and my nani's recipes.
            </p>
            <div className="hero-el mt-9 flex flex-wrap items-center gap-5">
              <Link to="/shop">
                <Button>Shop the achar →</Button>
              </Link>
              <Link to="/about" className="text-sm text-earthy/70 hover:text-brick underline underline-offset-4 decoration-brick/30">
                Read our story
              </Link>
            </div>
            <div className="hero-el mt-12 flex items-center gap-8 text-[12px] uppercase tracking-[0.14em] text-earthy/50">
              <span>No preservatives</span>
              <span className="w-1 h-1 rounded-full bg-earthy/30"></span>
              <span>Small batch</span>
              <span className="w-1 h-1 rounded-full bg-earthy/30"></span>
              <span>Ships all-India</span>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="hero-jar relative max-w-[520px] mx-auto">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-sand shadow-[0_40px_80px_-50px_rgba(62,43,31,0.5)]">
                <img
                  src={first?.image}
                  alt={first?.name || "Punjabi achar"}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-[10rem]">🥭</div>';
                  }}
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-paper rounded-2xl px-5 py-4 shadow-[0_20px_50px_-30px_rgba(62,43,31,0.5)]">
                <div className="text-[10px] uppercase tracking-[0.16em] text-earthy/50">This month</div>
                <div className="font-display text-lg text-ink mt-0.5">1,240 jars shipped</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE MAKE THESE */}
      <SectionReveal className="max-w-prose mx-auto px-6 py-24 md:py-32 text-center">
        <div className="font-punjabi text-brick/70 text-base">ਸਾਡੀ ਕਹਾਣੀ</div>
        <h2 className="font-display text-[2.4rem] md:text-[3.4rem] text-ink mt-4">
          We make thoughtful achar that tastes like home.
        </h2>
        <p className="mt-7 text-[17px] text-earthy/70 leading-relaxed max-w-xl mx-auto">
          Every jar is made in our home kitchen in Punjab, using recipes passed down through three generations. No preservatives, no shortcuts — just sun, salt, spice, and patience.
        </p>
      </SectionReveal>

      {/* MEET THE ACHAR */}
      <section className="bg-paper grain py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionReveal className="text-center mb-20">
            <div className="font-punjabi text-brick/70 text-base">ਸਾਡੇ ਅਚਾਰ</div>
            <h2 className="font-display text-[2.6rem] md:text-[3.4rem] text-ink mt-4">
              Meet the Achar.
            </h2>
            <p className="text-earthy/60 mt-4 max-w-md mx-auto text-[15px]">
              Three jars. Three feelings. Each one carries a story from our kitchen.
            </p>
          </SectionReveal>

          <div className="space-y-28 md:space-y-36">
            {[first, second, third].filter(Boolean).map((p, idx) => (
              <SectionReveal key={p.id}>
                <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="md:col-span-6">
                    <Link to={"/product/" + p.slug} className="block max-w-[440px] mx-auto">
                      <div className="aspect-square rounded-full overflow-hidden bg-sand shadow-[0_40px_80px_-50px_rgba(62,43,31,0.5)] group-hover:scale-[1.02] transition-transform">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                    </Link>
                  </div>
                  <div className="md:col-span-6 md:px-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-brick">
                      {idx === 0 ? "The Signature" : idx === 1 ? "The Patient One" : "The Winter Classic"}
                    </div>
                    <h3 className="font-display text-[2.2rem] md:text-[2.8rem] text-ink mt-4 leading-[1.05]">
                      {p.name}
                    </h3>
                    <p className="font-punjabi text-brick/70 mt-2">{p.punjabiName}</p>
                    <p className="mt-6 text-[16px] text-earthy/75 leading-relaxed max-w-md">
                      {p.story}
                    </p>
                    <div className="mt-8">
                      <Link
                        to={"/product/" + p.slug}
                        className="text-sm text-brick font-medium underline underline-offset-4 decoration-brick/30 hover:decoration-brick"
                      >
                        Meet {p.name.split(" ").slice(-1)[0]} →
                      </Link>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center mt-24">
            <Link to="/shop">
              <Button variant="outline">See all achar →</Button>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* THE DETAILS */}
      <SectionReveal className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="text-[11px] uppercase tracking-[0.18em] text-brick">The details</div>
          <h2 className="font-display text-[2.2rem] md:text-[3rem] text-ink mt-4">
            Made with home in mind.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 max-w-5xl mx-auto">
          {[
            { n: "01", title: "100% natural", desc: "No preservatives, no artificial colour. Ever." },
            { n: "02", title: "Small batch", desc: "Each jar is made by hand in our family kitchen." },
            { n: "03", title: "Punjab-sourced", desc: "Raw mangoes, amla and chillies from local farms." },
            { n: "04", title: "Nani's recipes", desc: "Three generations of taste, in every jar." },
          ].map((f) => (
            <div key={f.n}>
              <div className="font-display text-[2.6rem] text-brick/40">{f.n}</div>
              <h3 className="font-display text-xl text-ink mt-3">{f.title}</h3>
              <p className="text-[14px] text-earthy/65 mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* FOUNDER */}
      <section className="bg-sand/60 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <SectionReveal>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-paper mx-auto shadow-[0_30px_60px_-40px_rgba(62,43,31,0.5)] flex items-center justify-center text-6xl">
              👩🏽‍🍳
            </div>
            <div className="font-punjabi text-brick/70 text-base mt-8">ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ</div>
            <h2 className="font-display text-[2rem] md:text-[2.6rem] text-ink mt-3">
              Hi, I'm Harpreet.
            </h2>
            <p className="mt-7 text-[16px] text-earthy/75 leading-relaxed max-w-2xl mx-auto">
              I'm a Punjabi mother of two, and every jar you receive is made in my kitchen in Ludhiana — with my nani's masala, my mother's patience, and my own two hands. It started with friends asking for a jar. Then their friends. Then yours. And here we are.
            </p>
            <p className="mt-6 font-display text-xl md:text-2xl text-brick italic">
              "Har jar vich Punjab."
            </p>
            <div className="mt-8">
              <Link to="/about" className="text-sm text-brick underline underline-offset-4 decoration-brick/30">
                Read the full story →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* REVIEWS */}
      <SectionReveal className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="font-punjabi text-brick/70 text-base">ਪਿਆਰ</div>
          <h2 className="font-display text-[2.2rem] md:text-[3rem] text-ink mt-3">
            Loved by families.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <Review {...r} />
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>

      {/* CLOSING */}
      <SectionReveal className="bg-paper grain py-24 md:py-32">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="font-punjabi text-brick/70 text-base">ਇੰਸਟਾਗ੍ਰਾਮ</div>
          <h2 className="font-display text-[2rem] md:text-[2.8rem] text-ink mt-3">
            Come Into Our Kitchen.
          </h2>
          <p className="text-[15px] text-earthy/65 mt-5 leading-relaxed">
            Little notes from Punjab, first looks at new batches, and a chance to help shape what we jar next.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-full bg-paper border border-earthy/15 text-earthy placeholder:text-earthy/40 focus:outline-none focus:border-brick"
            />
            <button className="px-7 py-3.5 rounded-full bg-brick text-paper font-medium text-sm tracking-wide hover:bg-deepred transition">
              Join us
            </button>
          </form>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 text-sm text-brick underline underline-offset-4 decoration-brick/30"
          >
            @jarofpunjab on Instagram →
          </a>
        </div>
      </SectionReveal>
    </div>
  );
}
