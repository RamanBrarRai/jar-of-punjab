import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/85">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Jar Of Punjab logo"
              className="h-10 w-10 object-contain"
            />
            <div>
              <div className="font-display text-lg text-mustard">Jar Of Punjab</div>
              <div className="font-punjabi text-xs text-paper/50">ਜਾਰ ਆਫ਼ ਪੰਜਾਬ</div>
            </div>
          </div>
          <p className="mt-5 text-[13px] text-paper/60 leading-relaxed max-w-xs">
            Homemade Punjabi achar, made in small batches in our family kitchen. Har jar vich Punjab.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.18em] text-mustard/90 mb-4">Shop</h4>
          <ul className="space-y-2.5 text-[13px] text-paper/70">
            <li><Link to="/shop" className="hover:text-mustard">All Achar</Link></li>
            <li><Link to="/shop" className="hover:text-mustard">Mango Pickle</Link></li>
            <li><Link to="/shop" className="hover:text-mustard">Lemon Pickle</Link></li>
            <li><Link to="/shop" className="hover:text-mustard">Chilli Pickle</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.18em] text-mustard/90 mb-4">Company</h4>
          <ul className="space-y-2.5 text-[13px] text-paper/70">
            <li><Link to="/about" className="hover:text-mustard">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-mustard">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.18em] text-mustard/90 mb-4">Say Hello</h4>
          <p className="text-[13px] text-paper/70">hello@jarofpunjab.com</p>
          <p className="text-[13px] text-paper/70 mt-1">+91 98765 43210</p>
          <p className="text-[13px] text-paper/70 mt-1">Ludhiana, Punjab</p>
          <div className="flex gap-4 mt-5 text-[13px]">
            <a href="https://instagram.com" className="hover:text-mustard">Instagram</a>
            <a href="https://wa.me/919876543210" className="hover:text-mustard">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="text-center py-6 border-t border-paper/10 text-[12px] text-paper/40">
        © {new Date().getFullYear()} Jar Of Punjab · Made with ❤️ in Punjab
      </div>
    </footer>
  );
}
