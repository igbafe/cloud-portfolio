import portrait from "../../profile-pic.PNG";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import { heroMetrics, profile } from "../data/portfolio.js";

export default function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-inner container">
        <div className="hero-layout">
          <Reveal className="hero-copy">
            <div className="availability-tag"><span className="status-pulse" /> CLOUD ENGINEERING / LAGOS, NG</div>
            <p className="hero-kicker">INFRASTRUCTURE · AUTOMATION · OPERATIONS</p>
            <h1>Peter<br /><span>Igbafe</span><i className="hero-period">.</i></h1>
            <h2>{profile.role}<span className="hero-role-mark"> / </span><span className="hero-focus">AWS &amp; DevOps</span></h2>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Icon name="arrowRight" size={17} /></a>
              <a className="button button-quiet" href={`mailto:${profile.email}`}><Icon name="mail" size={16} /> Get in touch</a>
              <a className="text-link hero-github" href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" size={17} /> GitHub <Icon name="arrowUpRight" size={14} /></a>
            </div>
            <div className="hero-metrics" aria-label="Selected experience and project metrics">
              {heroMetrics.map((metric) => (
                <div className="metric-tile" key={metric.value}>
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={140}>
            <div className="portrait-panel">
              <div className="portrait-panel-top"><span>PROFILE // PETER_IGBAFE</span><span className="live-mark"><i /> PERSONAL</span></div>
              <div className="portrait-frame">
                <img src={portrait} alt="Peter Igbafe, cloud engineer" fetchPriority="high" />
                <div className="portrait-caption">
                  <span className="portrait-caption-dot" />
                  <span>BUILDING IN THE CLOUD</span>
                  <span className="caption-divider">/</span>
                  <span>LAGOS · NG</span>
                </div>
              </div>
              <div className="portrait-readout">
                <div><span>FOCUS</span><strong>AWS / IaC / PLATFORM</strong></div>
                <div><span>APPROACH</span><strong>BUILD · DOCUMENT · IMPROVE</strong></div>
              </div>
              <span className="frame-corner frame-corner-tl" />
              <span className="frame-corner frame-corner-br" />
            </div>
            <div className="visual-coordinate">06°27′N&nbsp; 03°23′E <span>//</span> NG-LAG</div>
          </Reveal>
        </div>
        <div className="hero-scroll"><span className="scroll-line" /> SCROLL TO INSPECT</div>
      </div>
    </section>
  );
}
