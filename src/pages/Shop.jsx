import { useState } from "react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import SectionReveal from "../components/SectionReveal";

export default function Shop() {
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) => {
    const mCat = cat === "All" || p.category === cat;
    const mQ = p.name.toLowerCase().includes(query.toLowerCase()) || p.shortDesc.toLowerCase().includes(query.toLowerCase());
    return mCat && mQ;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <SectionReveal>
        <div className="font-punjabi text-warmorange text-lg">ਸਾਡੇ ਅਚਾਰ</div>
        <h1 className="font-heading text-4xl md:text-6xl font-black text-deepred mt-1">Shop All Achar</h1>
        <p className="text-earthy/70 mt-3 max-w-xl">Handmade Punjabi pickles, jarred fresh from our kitchen in Ludhiana.</p>
      </SectionReveal>

      <div className="mt-10 flex flex-col md:flex-row gap-4 md:items-center">
        <div className="relative flex-1">
          <input type="text" placeholder="Search achar..." value={query} onChange={(e) => setQuery(e.target.value)}
            className="w-full px-5 py-3.5 pl-12 rounded-full border border-mustard/40 focus:outline-none focus:border-deepred bg-white text-earthy" />
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-earthy/50">🔍</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={"px-5 py-2.5 rounded-full text-sm font-semibold transition-all " + (cat === c ? "bg-deepred text-cream shadow-md" : "bg-white text-earthy/80 border border-mustard/40 hover:border-deepred")}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
        {filtered.length ? filtered.map((p, i) => (
          <SectionReveal key={p.id} delay={i * 0.05}><ProductCard product={p} /></SectionReveal>
        )) : (
          <div className="col-span-full text-center py-20">
            <div className="text-6xl">🫙</div>
            <p className="mt-4 text-earthy/60">No achar found. Try a different search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
