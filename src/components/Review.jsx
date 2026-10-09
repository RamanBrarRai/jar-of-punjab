import { StarIcon } from "./Icons";

export default function Review({ name, text, rating = 5, city }) {
  return (
    <div className="bg-cream/[0.06] backdrop-blur rounded-3xl p-8 h-full flex flex-col border border-cream/10">
      <div
        className="flex gap-1 text-brandYellow"
        aria-label={rating + " out of 5 stars"}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <StarIcon key={n} filled={n <= rating} className="w-4 h-4" />
        ))}
      </div>
      <p className="mt-5 text-[15px] md:text-[16px] text-cream/85 leading-relaxed flex-1">
        "{text}"
      </p>
      <div className="mt-6 pt-5 border-t border-cream/10">
        <p className="font-display text-base text-cream">{name}</p>
        <p className="text-[12px] text-cream/50 mt-0.5">{city}</p>
      </div>
    </div>
  );
}