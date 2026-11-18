import { useState } from "react";
import { profile } from "../data/portfolio.js";
import Icon from "./Icon.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { href: "#work", label: "WORK" },
  { href: "#skills", label: "STACK" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label={`${profile.name}, home`} onClick={() => setOpen(false)}>
          <span className="brand-dot" />
          <span className="brand-name">{profile.shortName}</span>
          <span className="brand-role">// CLOUD ENGINEER</span>
        </a>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span className="nav-index">0{index + 1}</span> {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="nav-contact" href="#contact">
            <span className="status-dot" /> LET’S TALK
            <Icon name="arrowUpRight" size={15} />
          </a>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} size={21} />
        </button>
      </div>
    </header>
  );
}
