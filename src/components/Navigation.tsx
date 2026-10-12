import { Instagram, Menu, Music2, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { number: '01', label: 'Music', href: '#music' },
  { number: '02', label: 'Live', href: '#live' },
  { number: '03', label: 'About', href: '#about' },
  { number: '04', label: 'Shows', href: '#shows' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap nav-wrap-visible">
      <a className="nav-mark" href="#top" aria-label="NÚRIA home">
        NÚRIA
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            <span>{link.number}</span>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-socials">
        <a
          href="https://www.instagram.com/nuriamusik/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <Instagram size={18} strokeWidth={1.7} />
        </a>
        <a
          href="https://soundcloud.com/nuriamusik"
          target="_blank"
          rel="noreferrer"
          aria-label="SoundCloud"
        >
          <Music2 size={18} strokeWidth={1.7} />
        </a>
        <a
          className="nav-ra"
          href="https://ra.co/dj/nuria-de"
          target="_blank"
          rel="noreferrer"
          aria-label="Resident Advisor"
        >
          RA
        </a>
      </div>

      <button
        className="nav-toggle"
        type="button"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>{link.number}</span>
              {link.label}
            </a>
          ))}
          <a href="https://soundcloud.com/nuriamusik" target="_blank" rel="noreferrer">
            SoundCloud
          </a>
          <a href="https://www.instagram.com/nuriamusik/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://ra.co/dj/nuria-de" target="_blank" rel="noreferrer">
            Resident Advisor
          </a>
        </div>
      )}
    </header>
  );
}
