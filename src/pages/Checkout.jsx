import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";

export default function Checkout() {
  const { cart, subtotal, shipping, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", city: "", state: "", pincode: "", payment: "cod" });
  const [errors, setErrors] = useState({});

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="text-6xl">🫙</div>
        <h1 className="font-heading text-3xl text-deepred mt-4">Nothing to checkout</h1>
        <Link to="/shop" className="inline-block mt-6"><Button>Go to Shop</Button></Link>
      </div>
    );
  }

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^[6-9][0-9]{9}$/.test(form.phone)) e.phone = "Enter a valid 10-digit mobile";
    if (!/^[^ ]+@[^ ]+[.][^ ]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.address.trim().length < 10) e.address = "Enter full address";
    if (!form.city.trim()) e.city = "Required";
    if (!form.state.trim()) e.state = "Required";
    if (!/^[0-9]{6}$/.test(form.pincode)) e.pincode = "6-digit PIN";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const orderId = "JOP" + Date.now().toString().slice(-8);
    const order = { orderId, ...form, items: cart, subtotal, shipping, total };
    console.log("Order placed:", order);
    localStorage.setItem("jop-last-order", JSON.stringify(order));
    clearCart();
    navigate("/order-confirmation");
  };

  const input = (name, label, type = "text", placeholder = "") => (
    <div>
      <label className="block text-sm font-semibold text-earthy mb-1">{label}</label>
      <input type={type} value={form[name]} placeholder={placeholder}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className="w-full px-4 py-3 rounded-xl border border-mustard/40 focus:outline-none focus:border-deepred bg-cream/50" />
      {errors[name] && <p className="text-deepred text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h1 className="font-heading text-4xl font-bold text-deepred">Checkout</h1>

      <form onSubmit={submit} className="grid lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-deepred mb-4">Contact</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {input("name", "Full Name")}
              {input("phone", "Phone (10 digits)")}
              <div className="sm:col-span-2">{input("email", "Email", "email")}</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-deepred mb-4">Delivery Address</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">{input("address", "Address")}</div>
              {input("city", "City")}
              {input("state", "State")}
              {input("pincode", "PIN Code")}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-deepred mb-4">Payment</h2>
            <div className="space-y-3">
              <label className="flex items-start gap-3 p-4 rounded-2xl border border-mustard/40 cursor-pointer hover:border-deepred">
                <input type="radio" name="payment" value="cod" checked={form.payment === "cod"} onChange={(e) => setForm({ ...form, payment: e.target.value })} className="mt-1" />
                <div>
                  <div className="font-semibold">Cash on Delivery</div>
                  <div className="text-sm text-earthy/70">Pay when your jars arrive.</div>
                </div>
              </label>
              <label className="flex items-start gap-3 p-4 rounded-2xl border border-mustard/40 cursor-pointer hover:border-deepred opacity-70">
                <input type="radio" name="payment" value="razorpay" checked={form.payment === "razorpay"} onChange={(e) => setForm({ ...form, payment: e.target.value })} className="mt-1" />
                <div>
                  <div className="font-semibold">Pay Online (UPI / Card)</div>
                  <div className="text-sm text-earthy/70">Via Razorpay — coming soon.</div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
            <h2 className="font-heading text-xl font-bold text-deepred">Order Summary</h2>
            <div className="mt-4 space-y-3 max-h-64 overflow-y-auto">
              {cart.map((i) => (
                <div key={i.key} className="flex justify-between text-sm">
                  <span className="text-earthy/80">{i.name} ({i.size}) × {i.qty}</span>
                  <span>₹{i.price * i.qty}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-mustard/20 mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : "₹" + shipping}</span></div>
              <div className="flex justify-between font-heading font-bold text-lg text-deepred pt-2 border-t border-mustard/20">
                <span>Total</span><span>₹{total}</span>
              </div>
            </div>
            <Button type="submit" className="w-full mt-6">Place Order</Button>
            <p className="text-xs text-center text-earthy/60 mt-3">By placing this order you agree to our terms.</p>
          </div>
        </div>
      </form>
    </div>
  );
}
