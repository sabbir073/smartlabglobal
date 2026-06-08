import { CHAT_DEMO, TRUST } from "../../data";

export default function Hero() {
  return (
    <section id="top" className="bot-hero bot-section" style={{ paddingTop: "clamp(40px,5vw,72px)" }}>
      <div className="bot-mesh" aria-hidden />
      <div className="bot-wrap">
        <div className="bot-hero-grid">
          <div>
            <span className="bot-pill" style={{ marginBottom: 22 }}>
              <span className="badge">NEW</span> Custom AI chatbots, trained on your business
            </span>

            <h1 className="bot-h1">
              Your smartest <span className="bot-grad-text">support agent</span> never sleeps.
            </h1>

            <p className="bot-lead" style={{ marginTop: 22 }}>
              We build custom AI chatbots trained on your own content — answering
              customers, capturing leads and booking meetings 24/7, in 50+
              languages, across every channel you use.
            </p>

            <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="#book-call" className="bot-btn bot-btn-primary">
                Get a Free Demo <span aria-hidden>→</span>
              </a>
              <a href="#capabilities" className="bot-btn bot-btn-ghost">
                See what it can do
              </a>
            </div>

            <ul className="bot-hero-trust" style={{ marginTop: 28 }}>
              {TRUST.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          {/* Animated chat demo */}
          <div className="bot-chat" aria-label="Example chatbot conversation">
            <div className="bot-chat-bar">
              <span className="bot-chat-av" aria-hidden>🤖</span>
              <div style={{ marginRight: "auto" }}>
                <div className="nm">Smart Assistant</div>
                <div className="st">Online · replies instantly</div>
              </div>
            </div>

            <div className="bot-chat-body">
              {CHAT_DEMO.map((m, i) => (
                <div key={i} className={`bot-msg ${m.from} m${i}`}>
                  {m.text}
                </div>
              ))}
              <div className="bot-typing" aria-hidden>
                <span /><span /><span />
              </div>
            </div>

            <div className="bot-chat-input" aria-hidden>
              <span className="fake">Ask anything…</span>
              <span className="send">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
