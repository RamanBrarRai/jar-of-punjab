import { useState } from "react";
import Button from "../components/Button";
import SectionReveal from "../components/SectionReveal";
import { WhatsAppIcon, MailIcon, MapPinIcon, ClockIcon } from "../components/Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    console.log("Contact message:", form);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <SectionReveal className="text-center mb-12">
        <div className="font-punjabi text-warmorange text-lg">ਸੰਪਰਕ ਕਰੋ</div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-deepred mt-2">Say Hello</h1>
        <p className="mt-3 text-earthy/70">Questions, bulk orders, or just want to chat achar? We'd love to hear from you.</p>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-10">
        <SectionReveal>
          {sent ? (
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="text-6xl">💌</div>
              <h2 className="font-heading text-2xl font-bold text-deepred mt-4">Message received!</h2>
              <p className="text-earthy/70 mt-2">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-white p-8 rounded-3xl shadow-sm space-y-5">
              <div>
                <label className="block text-sm font-semibold text-earthy mb-1">Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-mustard/40 focus:outline-none focus:border-deepred bg-cream/50" />
                {errors.name && <p className="text-deepred text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-earthy mb-1">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-mustard/40 focus:outline-none focus:border-deepred bg-cream/50" />
                {errors.email && <p className="text-deepred text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-earthy mb-1">Message</label>
                <textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-mustard/40 focus:outline-none focus:border-deepred bg-cream/50" />
                {errors.message && <p className="text-deepred text-xs mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          )}
        </SectionReveal>

        <SectionReveal delay={0.1} className="space-y-4">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-leaf/10 p-6 rounded-3xl hover:bg-leaf/20 transition"
          >
            <div className="text-leaf">
              <WhatsAppIcon className="w-8 h-8" />
            </div>
            <div>
              <div className="font-display font-medium text-ink">WhatsApp</div>
              <div className="text-sm text-earthy/70">
                Fastest way to reach us — order in 1 minute
              </div>
            </div>
          </a>
          <div className="flex items-center gap-4 bg-paper p-6 rounded-3xl border border-earthy/5">
            <div className="text-brick">
              <MailIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="font-display font-medium text-ink">Email</div>
              <div className="text-sm text-earthy/70">hello@jarofpunjab.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-paper p-6 rounded-3xl border border-earthy/5">
            <div className="text-brick">
              <MapPinIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="font-display font-medium text-ink">Kitchen</div>
              <div className="text-sm text-earthy/70">
                Ludhiana, Punjab — shipping all over India
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-paper p-6 rounded-3xl border border-earthy/5">
            <div className="text-brick">
              <ClockIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="font-display font-medium text-ink">Hours</div>
              <div className="text-sm text-earthy/70">Mon–Sat · 9am to 7pm</div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
