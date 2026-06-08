import { CHANNELS } from "../../data";

export default function Channels() {
  return (
    <section className="bot-section bot-section--alt" style={{ paddingBlock: "clamp(48px,6vw,80px)" }}>
      <div className="bot-wrap bot-center">
        <span className="bot-pill" style={{ marginInline: "auto" }}>Works everywhere</span>
        <h2 className="bot-h2" style={{ marginTop: 16, marginBottom: 28 }}>
          One brain. Every channel.
        </h2>
        <div className="bot-channels">
          {CHANNELS.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
