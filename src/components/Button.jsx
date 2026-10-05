export default function Button({ children, variant = "primary", className = "", as: As = "button", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300";
  const styles = {
    primary: "bg-brick text-paper hover:bg-deepred",
    secondary: "bg-mustard text-ink hover:bg-brick hover:text-paper",
    outline: "border border-earthy/25 text-ink hover:border-brick hover:text-brick",
    ghost: "text-brick hover:bg-sand",
  };
  return (
    <As className={base + " " + styles[variant] + " " + className} {...props}>
      {children}
    </As>
  );
}
