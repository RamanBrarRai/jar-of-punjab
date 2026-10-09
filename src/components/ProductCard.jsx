import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const isFeatured = product.featured;

  return (
    <Link to={"/product/" + product.slug} className="group block text-center">
      {/* Circular image frame */}
      <div className="relative aspect-square rounded-full overflow-hidden bg-sand mx-auto max-w-[280px] shadow-[0_25px_60px_-35px_rgba(15,74,63,0.35)] group-hover:shadow-[0_35px_80px_-35px_rgba(233,30,99,0.45)] transition-all duration-700">
        {/* Image — padded so it doesn't touch circle edges */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain p-6 group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-out"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.innerHTML =
              '<div class="w-full h-full flex items-center justify-center text-7xl">🫙</div>';
          }}
        />

        {/* Most Loved badge — inside the circle, top-center */}
        {isFeatured && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-brandPink text-cream text-[9px] uppercase tracking-[0.18em] font-bold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
            Most Loved
          </div>
        )}
      </div>

      {/* Text block */}
      <div className="mt-6 max-w-[280px] mx-auto">
        {/* Category label */}
        <div className="text-[10px] uppercase tracking-[0.22em] text-brandPink font-bold">
          {product.category}
        </div>

        {/* Punjabi name */}
        <div className="font-punjabi text-[13px] text-brandGreen/70 mt-2">
          {product.punjabiName}
        </div>

        {/* Product name */}
        <h3 className="font-display text-[1.4rem] md:text-[1.5rem] text-ink mt-1 leading-[1.15] group-hover:text-brandPink transition-colors duration-300">
          {product.name}
        </h3>

        {/* Short description */}
        <p className="text-[13px] text-earthy/60 mt-3 leading-relaxed line-clamp-2">
          {product.shortDesc}
        </p>

        {/* Price + size */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="text-brandGreen font-display text-lg font-medium">
            ₹{product.price}
          </span>
          <span className="text-earthy/40 text-[12px]">·</span>
          <span className="text-earthy/60 text-[12px]">
            {product.sizes[0].size}
          </span>
        </div>

        {/* Hover-reveal CTA */}
        <div className="mt-3 flex items-center justify-center gap-1.5 text-[12px] uppercase tracking-[0.16em] text-brandPink font-bold opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <span>View</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}