import Image from "next/image";
import { STATS } from "../../data";

const SWATCHES = ["var(--ux-accent)", "var(--ux-accent-2)", "var(--ux-accent-3)", "var(--ux-accent-4)", "var(--ux-ink)"];

export default function Hero() {
  return (
    <section id="top" className="ux-hero">
      <span className="ux-blob b1" aria-hidden />
      <span className="ux-blob b2" aria-hidden />

      <div className="ux-wrap ux-hero-inner">
        <span className="ux-tag"><span className="dot" aria-hidden /> UI/UX Design Studio</span>

        <h1 className="ux-h1" style={{ marginTop: 22 }}>
          Design people <span className="mark">love</span> to use.
        </h1>

        <p className="ux-lead" style={{ marginTop: 24, fontSize: 20 }}>
          We craft intuitive, beautiful and accessible interfaces for web and
          mobile products — turning complex ideas into experiences that convert,
          delight and scale.
        </p>

        <div className="ux-hero-foot">
          <a href="#book-call" className="ux-btn ux-btn-primary">
            Start a Project <span aria-hidden>→</span>
          </a>
          <a href="#work" className="ux-btn ux-btn-outline">
            View our work
          </a>
          <div className="ux-swatches" aria-hidden>
            {SWATCHES.map((c, i) => (
              <span className="ux-swatch" key={i} style={{ background: c }} />
            ))}
          </div>
        </div>

        {/* image collage */}
        <div className="ux-collage">
          <figure className="c1">
            <Image src="/landing/uiux/app-ui.jpg" alt="Mobile app interface design" width={900} height={1200} priority sizes="25vw" />
          </figure>
          <figure className="c2">
            <Image src="/landing/uiux/wireframe.jpg" alt="UX wireframes and user flows" width={1200} height={900} sizes="25vw" />
          </figure>
          <figure className="c3">
            <Image src="/landing/uiux/tools.jpg" alt="Design system components and tools" width={1200} height={900} sizes="25vw" />
          </figure>
          <figure className="c4">
            <Image src="/landing/uiux/web-mockup.jpg" alt="Web product interface mockup" width={1200} height={800} sizes="50vw" />
          </figure>
        </div>

        {/* stat ticker */}
        <div className="ux-stats" style={{ marginTop: 26 }}>
          {STATS.map((s) => (
            <div className="ux-stat" key={s.l}>
              <div className="v">{s.v}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
