import Image from "next/image";
import { WORK } from "../../data";

export default function Work() {
  return (
    <section id="work" className="ux-section">
      <div className="ux-wrap">
        <div className="ux-head">
          <span className="ux-tag"><span className="dot" aria-hidden /> Selected work</span>
          <h2 className="ux-h2" style={{ marginTop: 16 }}>
            A look at what we&apos;ve been crafting.
          </h2>
        </div>

        <div className="ux-masonry">
          {WORK.map((w) => (
            <figure className="ux-work" key={w.title}>
              <Image
                src={w.img}
                alt={`${w.title} — ${w.tag}`}
                width={w.w}
                height={w.h}
                sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
              <figcaption>
                <div className="wt">{w.title}</div>
                <span className="wtag">{w.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
