import Image from "next/image";
import { DELIVERABLES } from "../../data";

export default function Deliverables() {
  return (
    <section id="deliverables" className="ux-section">
      <div className="ux-wrap">
        <div className="ux-deliver">
          <div className="ux-deliver-media">
            <Image
              src="/landing/uiux/designer.jpg"
              alt="A designer working on interface designs in Figma"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>

          <div>
            <span className="ux-tag"><span className="dot" aria-hidden /> What you get</span>
            <h2 className="ux-h2" style={{ marginTop: 16 }}>
              Everything your team needs to build with confidence.
            </h2>
            <p className="ux-lead" style={{ marginTop: 14 }}>
              No loose ends. You walk away with a complete, organised set of
              deliverables — and you own all of it.
            </p>

            <ul className="ux-deliver-list">
              {DELIVERABLES.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
