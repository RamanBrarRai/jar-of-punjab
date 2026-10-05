import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function OrderConfirmation() {
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const saved = localStorage.getItem("jop-last-order");
    if (saved) setOrder(JSON.parse(saved));
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-7xl">🎉</div>
      <h1 className="font-heading text-4xl font-bold text-deepred mt-4">Thank you!</h1>
      <p className="mt-3 text-earthy/75 text-lg">Your achar is being packed with love in Punjab.</p>
      {order && (
        <div className="bg-white rounded-3xl p-6 mt-8 text-left shadow-sm">
          <div className="flex justify-between items-center pb-4 border-b border-mustard/20">
            <div>
              <div className="text-xs text-earthy/60">Order ID</div>
              <div className="font-heading font-bold text-deepred">{order.orderId}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-earthy/60">Total</div>
              <div className="font-heading font-bold text-deepred">₹{order.total}</div>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            {order.items.map((i) => (
              <div key={i.key} className="flex justify-between"><span>{i.name} ({i.size}) × {i.qty}</span><span>₹{i.price * i.qty}</span></div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-mustard/20 text-sm text-earthy/70">
            <div>Delivering to: {order.name}, {order.city}, {order.state} — {order.pincode}</div>
            <div className="mt-1">We'll contact you at {order.phone}</div>
          </div>
        </div>
      )}
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link to="/shop"><Button>Continue Shopping</Button></Link>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><Button variant="outline">💬 Chat on WhatsApp</Button></a>
      </div>
    </div>
  );
}
