import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={"/product/" + product.slug}
      className="group block text-center"
    >
      <div className="relative aspect-square rounded-full overflow-hidden bg-sand mx-auto max-w-[300px] shadow-[0_20px_50px_-30px_rgba(62,43,31,0.35)] group-hover:shadow-[0_30px_70px_-30px_rgba(168,69,46,0.45)] transition-all duration-700">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms]"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-7xl">🫙</div>';
          }}
        />
      </div>
      <div className="mt-6">
        <div className="font-punjabi text-xs text-brick/70">{product.punjabiName}</div>
        <h3 className="font-display text-2xl md:text-[1.6rem] text-ink mt-1 leading-tight">
          {product.name}
        </h3>
        <p className="text-[13px] text-earthy/60 mt-2 max-w-[260px] mx-auto leading-relaxed">
          {product.shortDesc}
        </p>
        <div className="mt-3 text-sm text-brick font-medium">₹{product.price} · {product.sizes[0].size}</div>
      </div>
    </Link>
  );
}
