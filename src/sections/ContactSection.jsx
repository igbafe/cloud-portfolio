import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import { profile } from "../data/portfolio.js";

export default function ContactSection() {
  return (
    <>
      <section className="section section-contact" id="contact">
        <div className="container">
          <Reveal className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow"><span>05</span><span className="eyebrow-divider">//</span>CONTACT</p>
              <h2>Have a cloud challenge<br />in mind?</h2>
              <p>Let’s talk about AWS, infrastructure automation, or the next platform you’re building.</p>
              <a className="button button-primary" href={`mailto:${profile.email}`}>Start a conversation <Icon name="arrowUpRight" size={17} /></a>
            </div>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`} className="contact-row">
                <span className="contact-icon"><Icon name="mail" size={17} /></span>
                <span><small>EMAIL</small><strong>{profile.email}</strong></span>
                <Icon name="arrowUpRight" size={16} />
              </a>
              <a href={`tel:${profile.phoneHref}`} className="contact-row">
                <span className="contact-icon"><Icon name="phone" size={17} /></span>
                <span><small>PHONE</small><strong>{profile.phone}</strong></span>
                <Icon name="arrowUpRight" size={16} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-row">
                <span className="contact-icon"><Icon name="github" size={17} /></span>
                <span><small>GITHUB</small><strong>github.com/igbafe</strong></span>
                <Icon name="arrowUpRight" size={16} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-row">
                <span className="contact-icon"><Icon name="linkedin" size={17} /></span>
                <span><small>LINKEDIN</small><strong>linkedin.com/in/igbafe-simonpeter</strong></span>
                <Icon name="arrowUpRight" size={16} />
              </a>
              <div className="contact-row contact-location">
                <span className="contact-icon"><Icon name="pin" size={17} /></span>
                <span><small>BASED IN</small><strong>{profile.location}</strong></span>
              </div>
              <div className="contact-status"><span className="status-pulse" /> DIRECT CONTACT / LAGOS, NIGERIA</div>
            </div>
            <span className="contact-crosshair" aria-hidden="true">+</span>
          </Reveal>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#top"><span className="brand-dot" />{profile.shortName}<span>// CLOUD ENGINEER</span></a>
          <p>Built with care in Lagos, Nigeria.</p>
          <a className="back-to-top" href="#top">BACK TO TOP <Icon name="arrowUpRight" size={14} /></a>
          <small>© {new Date().getFullYear()} {profile.name}</small>
        </div>
      </footer>
    </>
  );
}
