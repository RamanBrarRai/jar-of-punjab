export default function Review({ name, text, rating = 5, city }) {
  return (
    <div className="bg-paper rounded-3xl p-8 h-full flex flex-col border border-earthy/5">
      <div className="text-brick/50 text-sm tracking-[0.3em]">{"★".repeat(rating)}</div>
      <p className="mt-5 text-[15px] text-earthy/80 leading-relaxed flex-1">
        "{text}"
      </p>
      <div className="mt-6 pt-5 border-t border-earthy/10">
        <p className="font-display text-base text-ink">{name}</p>
        <p className="text-[12px] text-earthy/50 mt-0.5">{city}</p>
      </div>
    </div>
  );
}
