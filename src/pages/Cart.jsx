import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import { CartIcon, PlusIcon, MinusIcon } from "../components/Icons";

export default function Cart() {
  const { cart, updateQty, removeFromCart, subtotal, shipping, total } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <div className="flex justify-center text-brick/40">
          <CartIcon className="w-16 h-16" />
        </div>
        <h1 className="font-display text-3xl text-ink mt-6">Your cart is empty</h1>
        <p className="text-earthy/70 mt-3">
          Let's fix that. Our mango achar is a good place to start.
        </p>
        <Link to="/shop" className="inline-block mt-8">
          <Button showArrow>Browse Pickles</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-12">
      <h1 className="font-display text-4xl text-ink">Your Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.key} className="bg-paper rounded-3xl p-4 flex gap-4 items-center border border-earthy/5">
              <div className="w-24 h-24 rounded-2xl bg-sand overflow-hidden flex-shrink-0 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  to={"/product/" + item.slug}
                  className="font-display text-lg text-ink hover:text-brick"
                >
                  {item.name}
                </Link>
                <div className="text-sm text-earthy/60">{item.size}</div>
                <div className="text-brick font-medium mt-1">₹{item.price}</div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="inline-flex items-center border border-earthy/15 rounded-full bg-paper">
                  <button
                    onClick={() => updateQty(item.key, item.qty - 1)}
                    className="p-2 text-ink hover:text-brick"
                    aria-label="Decrease quantity"
                  >
                    <MinusIcon className="w-4 h-4" />
                  </button>
                  <span className="px-2 font-medium text-sm">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.key, item.qty + 1)}
                    className="p-2 text-ink hover:text-brick"
                    aria-label="Increase quantity"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.key)}
                  className="text-xs text-earthy/50 hover:text-brick underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-paper rounded-3xl p-6 border border-earthy/5 sticky top-24">
            <h2 className="font-display text-xl text-ink">Order Summary</h2>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : "₹" + shipping}</span>
              </div>
              {shipping > 0 && (
                <div className="text-xs text-leaf">
                  Add ₹{999 - subtotal} more for free shipping
                </div>
              )}
              <div className="border-t border-earthy/10 pt-3 flex justify-between font-display text-lg text-ink">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            <Button onClick={() => navigate("/checkout")} className="w-full mt-6" showArrow>
              Proceed to Checkout
            </Button>
            <Link
              to="/shop"
              className="block text-center mt-3 text-sm text-earthy/70 hover:text-brick"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
