import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();
  const loc = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "Our Story" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={
        "sticky top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-paper/95 backdrop-blur border-b border-earthy/10 shadow-sm"
          : "bg-paper")
      }
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src="/favicon.png"
            alt="Jar Of Punjab logo"
            className="h-10 w-10 md:h-11 md:w-11 object-contain rounded-full flex-shrink-0"
          />
          <div className="leading-tight hidden sm:block min-w-0">
            <div className="font-display text-lg text-ink truncate">Jar Of Punjab</div>
            <div className="font-punjabi text-xs text-brick/80 truncate">ਜਾਰ ਆਫ਼ ਪੰਜਾਬ</div>
          </div>
        </Link>

        <ul className="hidden md:flex gap-10 text-[14px] text-earthy/70">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  "relative pb-1 transition-colors " +
                  (isActive
                    ? "text-brick font-medium"
                    : "hover:text-brick")
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-earthy/70 hover:text-brick transition"
            aria-label={"Cart, " + cartCount + " items"}
          >
            Cart
            {cartCount > 0 && (
              <span className="bg-brick text-paper text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-ink w-10 h-10 flex items-center justify-center"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden px-5 pb-6 flex flex-col gap-1 text-earthy/80 bg-paper border-t border-earthy/10">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  "block py-3 border-b border-earthy/10 " +
                  (isActive ? "text-brick font-medium" : "")
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
