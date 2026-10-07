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

  // Repeat 3x for a seamless infinite loop
  const repeated = [...items, ...items, ...items];

  return (
    <div className="bg-brandYellow text-brandGreen overflow-hidden border-y border-brandGreen/20">
      <div className="flex whitespace-nowrap py-5 marquee-track">
        {repeated.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-10 px-6 flex-shrink-0"
          >
            <span className="font-display text-[18px] md:text-[22px] tracking-tight !font-medium">
              {item}
            </span>
            <span className="text-brandPink">
              <SparkleIcon className="w-4 h-4 md:w-5 md:h-5" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}