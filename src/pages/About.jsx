import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionReveal from "../components/SectionReveal";

export default function About() {
  return (
    <div>
      <SectionReveal className="bg-gradient-to-br from-mustard/25 via-cream to-warmorange/15 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionReveal>
            <div className="font-punjabi text-warmorange text-lg">ਸਾਡੀ ਕਹਾਣੀ</div>
            <h1 className="font-heading text-5xl md:text-6xl font-black text-deepred mt-3">A Punjabi Kitchen,<br />Opened to the World.</h1>
            <p className="mt-6 text-lg text-earthy/75 max-w-2xl mx-auto leading-relaxed">
              Jar Of Punjab started on a small stove in Ludhiana — one jar of mango achar at a time.
            </p>
          </SectionReveal>
        </div>
      </SectionReveal>

      <SectionReveal className="max-w-3xl mx-auto px-4 py-16 leading-relaxed text-lg text-earthy/85 space-y-6">
        <p>I'm a Punjabi woman, a mother, and — for as long as I can remember — the person in my family who stands by the stove in summer, cutting raw mangoes for achar. The recipe I use today is my nani's. My mother taught me. Now it's mine.</p>
        <p>For years, friends and family would ask for a jar. Then their friends asked. Then strangers. I realized that what I made in my kitchen — with mustard oil, sunshine, and patience — was something people couldn't find in stores anymore.</p>
        <p>So Jar Of Punjab was born. It's still homemade. Still small-batch. Still made by hand, with a dry spoon and a lot of love. The only thing that's changed is that now the jars travel further — to Delhi, Mumbai, Bengaluru, and sometimes all the way to Toronto.</p>
        <p className="font-heading text-2xl text-deepred italic pt-4">"Har jar vich Punjab" — every jar carries a piece of home.</p>
      </SectionReveal>

      <SectionReveal className="bg-mustard/20 py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-center">
          {[
            { n: "3", l: "Generations of recipes" },
            { n: "1,240+", l: "Jars shipped this month" },
            { n: "0", l: "Preservatives, ever" },
          ].map((s, i) => (
            <div key={i} className="bg-cream rounded-3xl p-8 shadow-sm">
              <div className="font-heading text-5xl font-black text-deepred">{s.n}</div>
              <div className="text-earthy/70 mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </SectionReveal>

      <div className="text-center py-16"><Link to="/shop"><Button>Shop the Achar →</Button></Link></div>
    </div>
  );
}
