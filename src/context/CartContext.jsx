import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("jop-cart");
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("jop-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, size, qty = 1) => {
    const key = product.id + "-" + size.size;
    setCart((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) => i.key === key ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, {
        key, id: product.id, slug: product.slug,
        name: product.name, image: product.image,
        size: size.size, price: size.price, qty,
      }];
    });
  };

  const removeFromCart = (key) => setCart((prev) => prev.filter((i) => i.key !== key));
  const updateQty = (key, qty) => {
    if (qty < 1) return removeFromCart(key);
    setCart((prev) => prev.map((i) => (i.key === key ? { ...i, qty } : i)));
  };
  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal === 0 || subtotal > 999 ? 0 : 79;
  const total = subtotal + shipping;
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, subtotal, shipping, total, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
