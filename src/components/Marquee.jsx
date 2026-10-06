import { SparkleIcon } from "./Icons";

export default function Marquee() {
  const items = [
    "Authentic Punjabi Recipes",
    "Small Batch, Handmade",
    "Freshly Packed",
    "No Preservatives",
    "Free Shipping Over ₹999",
    "Shipped With Care",
  ];

  // Repeat so the loop has no visible jump
  const repeated = [...items, ...items, ...items];

  return (
    <div className="bg-ink text-paper overflow-hidden border-y border-paper/10">
      <div className="flex whitespace-nowrap py-5 marquee-track">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-10 px-6 flex-shrink-0">
            <span className="font-display text-[18px] md:text-[22px] tracking-tight">
              {item}
            </span>
            <span className="text-brick">
              <SparkleIcon className="w-4 h-4 md:w-5 md:h-5" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
