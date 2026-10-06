import { Link } from "react-router-dom";
import {
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/85 mt-0">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 grid md:grid-cols-6 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
                src="/logo.png"
                alt="Jar Of Punjab logo"
                className="h-[80px] w-[80px] object-contain flex-shrink-0"
              />
            <div>
              <div className="font-display text-lg text-mustard">Jar Of Punjab</div>
              <div className="font-punjabi text-xs text-paper/50">ਜਾਰ ਆਫ਼ ਪੰਜਾਬ</div>
            </div>
          </div>
          <p className="mt-5 text-[13px] text-paper/60 leading-relaxed max-w-xs">
            Authentic Punjabi flavours in every jar.
          </p>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-[11px] uppercase tracking-[0.18em] text-mustard/90 mb-4">Shop</h4>
          <ul className="space-y-2.5 text-[13px] text-paper/70">
            <li><Link to="/shop" className="hover:text-mustard">All Pickles</Link></li>
            <li><Link to="/shop" className="hover:text-mustard">Mango</Link></li>
            <li><Link to="/shop" className="hover:text-mustard">Lemon</Link></li>
            <li><Link to="/shop" className="hover:text-mustard">Mixed</Link></li>
            <li><Link to="/shop" className="hover:text-mustard">Chilli</Link></li>
            <li><Link to="/shop" className="hover:text-mustard">Amla</Link></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-[11px] uppercase tracking-[0.18em] text-mustard/90 mb-4">Company</h4>
          <ul className="space-y-2.5 text-[13px] text-paper/70">
            <li><Link to="/about" className="hover:text-mustard">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-mustard">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[11px] uppercase tracking-[0.18em] text-mustard/90 mb-4">Say Hello</h4>
          <ul className="space-y-2.5 text-[13px] text-paper/70">
            <li className="flex items-center gap-2">
              <MailIcon className="w-4 h-4 text-mustard/80" />
              hello@jarofpunjab.com
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-mustard/80" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-mustard/80" />
              Ludhiana, Punjab
            </li>
          </ul>
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-mustard transition"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-mustard transition"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="hover:text-mustard transition"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-6 border-t border-paper/10 text-[12px] text-paper/40 px-5">
        © {new Date().getFullYear()} Jar Of Punjab · Made with ❤️ in Punjab
      </div>
    </footer>
  );
}
