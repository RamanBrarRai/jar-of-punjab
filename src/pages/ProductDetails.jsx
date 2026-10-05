import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import SectionReveal from "../components/SectionReveal";

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useCart();
  const [sizeIdx, setSizeIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => { if (product) document.title = product.name + " | Jar Of Punjab"; }, [product]);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="text-6xl">🫙</div>
        <h1 className="font-heading text-3xl text-deepred mt-4">Jar not found</h1>
        <Link to="/shop" className="inline-block mt-6"><Button>Back to Shop</Button></Link>
      </div>
    );
  }

  const size = product.sizes[sizeIdx];
  const handleAdd = () => { addToCart(product, size, qty); setAdded(true); setTimeout(() => setAdded(false), 1800); };
  const handleBuyNow = () => { addToCart(product, size, qty); navigate("/checkout"); };
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <nav className="text-sm text-earthy/60 mb-6">
        <Link to="/" className="hover:text-deepred">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-deepred">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-deepred font-medium">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <SectionReveal>
          <div className="aspect-square rounded-3xl overflow-hidden bg-mustard/20 flex items-center justify-center text-[10rem] sticky top-24">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display="none"; e.currentTarget.parentElement.innerHTML='<span>🫙</span>'; }} />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="font-punjabi text-warmorange text-lg">{product.punjabiName}</div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-deepred mt-2">{product.name}</h1>
          <p className="mt-3 text-earthy/70 italic">"{product.tagline}"</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="font-heading text-3xl font-bold text-deepred">₹{size.price}</span>
            <span className="text-earthy/60 text-sm">/ {size.size}</span>
            <span className="text-xs font-semibold text-leaf bg-leaf/10 px-3 py-1 rounded-full">{product.inStock ? "In Stock" : "Sold Out"}</span>
          </div>

          <p className="mt-6 text-earthy/85 leading-relaxed">{product.story}</p>

          <div className="mt-6">
            <div className="font-semibold text-earthy mb-2">Size</div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s, i) => (
                <button key={s.size} onClick={() => setSizeIdx(i)}
                  className={"px-5 py-2.5 rounded-full text-sm font-semibold border transition " + (i === sizeIdx ? "bg-deepred text-cream border-deepred" : "bg-white text-earthy border-mustard/40 hover:border-deepred")}>
                  {s.size} · ₹{s.price}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="font-semibold text-earthy mb-2">Quantity</div>
            <div className="inline-flex items-center border border-mustard/40 rounded-full bg-white">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-5 py-2.5 text-xl text-deepred">−</button>
              <span className="px-5 font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-5 py-2.5 text-xl text-deepred">+</button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={handleAdd} variant="secondary" className="flex-1 min-w-[180px]">{added ? "✓ Added to Cart" : "Add to Cart"}</Button>
            <Button onClick={handleBuyNow} className="flex-1 min-w-[180px]">Buy Now</Button>
          </div>

          <a href={"https://wa.me/919876543210?text=Hi! I want to order " + product.name + " (" + size.size + ")"} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-leaf font-semibold hover:underline">
            💬 Order via WhatsApp
          </a>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-4 rounded-2xl"><div className="font-semibold text-earthy mb-1">🧂 Ingredients</div><p className="text-earthy/70">{product.ingredients}</p></div>
            <div className="bg-white p-4 rounded-2xl"><div className="font-semibold text-earthy mb-1">🌶 Taste</div><p className="text-earthy/70">{product.taste}</p></div>
            <div className="bg-white p-4 rounded-2xl"><div className="font-semibold text-earthy mb-1">📦 Storage</div><p className="text-earthy/70">{product.storage}</p></div>
            <div className="bg-white p-4 rounded-2xl"><div className="font-semibold text-earthy mb-1">⏳ Shelf Life</div><p className="text-earthy/70">{product.shelfLife}</p></div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="font-semibold text-earthy text-sm">Spice level:</span>
            <span className="text-lg">{"🌶️".repeat(product.spiceLevel)}<span className="opacity-30">{"🌶️".repeat(5 - product.spiceLevel)}</span></span>
          </div>
        </SectionReveal>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-heading text-3xl font-bold text-deepred mb-8">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {related.map((p) => (
              <Link key={p.id} to={"/product/" + p.slug} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
                <div className="aspect-square bg-mustard/15 flex items-center justify-center text-6xl overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-earthy">{p.name}</h3>
                  <p className="text-deepred font-bold mt-1">₹{p.price}+</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
