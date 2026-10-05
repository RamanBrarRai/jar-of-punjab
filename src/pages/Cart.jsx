import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";

export default function Cart() {
  const { cart, updateQty, removeFromCart, subtotal, shipping, total } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="text-7xl">🛒</div>
        <h1 className="font-heading text-3xl font-bold text-deepred mt-6">Your cart is empty</h1>
        <p className="text-earthy/70 mt-3">Let's fix that. Our mango achar is a good place to start.</p>
        <Link to="/shop" className="inline-block mt-8"><Button>Browse Achar →</Button></Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h1 className="font-heading text-4xl font-bold text-deepred">Your Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.key} className="bg-white rounded-3xl p-4 flex gap-4 items-center shadow-sm">
              <div className="w-24 h-24 rounded-2xl bg-mustard/20 overflow-hidden flex-shrink-0 flex items-center justify-center text-4xl">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display="none"; e.currentTarget.parentElement.innerHTML='🫙'; }} />
              </div>
              <div className="flex-1 min-w-0">
                <Link to={"/product/" + item.slug} className="font-heading font-bold text-earthy hover:text-deepred">{item.name}</Link>
                <div className="text-sm text-earthy/60">{item.size}</div>
                <div className="text-deepred font-bold mt-1">₹{item.price}</div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="inline-flex items-center border border-mustard/40 rounded-full bg-cream">
                  <button onClick={() => updateQty(item.key, item.qty - 1)} className="px-3 py-1.5 text-deepred">−</button>
                  <span className="px-2 font-semibold text-sm">{item.qty}</span>
                  <button onClick={() => updateQty(item.key, item.qty + 1)} className="px-3 py-1.5 text-deepred">+</button>
                </div>
                <button onClick={() => removeFromCart(item.key)} className="text-xs text-deepred/70 hover:text-deepred underline">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
            <h2 className="font-heading text-xl font-bold text-deepred">Order Summary</h2>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : "₹" + shipping}</span></div>
              {shipping > 0 && <div className="text-xs text-leaf">Add ₹{999 - subtotal} more for free shipping</div>}
              <div className="border-t border-mustard/20 pt-3 flex justify-between font-heading font-bold text-lg text-deepred">
                <span>Total</span><span>₹{total}</span>
              </div>
            </div>
            <Button onClick={() => navigate("/checkout")} className="w-full mt-6">Checkout →</Button>
            <Link to="/shop" className="block text-center mt-3 text-sm text-earthy/70 hover:text-deepred">Continue shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
