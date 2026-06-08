import Image from "next/image";
import { STEPS } from "../../data";

export default function HowItWorks() {
  return (
    <section id="how" className="bot-section">
      <div className="bot-wrap">
        <div className="bot-head">
          <span className="bot-pill">How it works</span>
          <h2 className="bot-h2" style={{ marginTop: 16 }}>
            From your content to a live assistant in days.
          </h2>
        </div>

        <div className="bot-how">
          <div className="bot-how-media">
            <Image
              src="/landing/chatbot/neural.jpg"
              alt="Abstract visualisation of an AI model being trained"
              width={1200}
              height={800}
              sizes="(max-width: 940px) 100vw, 50vw"
            />
          </div>

          <div className="bot-steps">
            {STEPS.map((s) => (
              <div className="bot-step" key={s.step}>
                <div className="n">{s.step}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
