import { ArrowDown, ArrowRight, Volume2 } from 'lucide-react';

const equalizerBars = Array.from({ length: 20 }, (_, index) => index);

export function Hero() {
  return (
    <section className="hero hero-artwork" id="top" aria-label="NÚRIA artist introduction">
      <picture className="hero-artwork-picture" aria-hidden="true">
        <source media="(max-width: 640px)" srcSet="/nuria-hero-portrait.jpg" />
        <img
          className="hero-artwork-image"
          src="/nuria-hero-photo-clean.png"
          alt=""
          width="1074"
          height="819"
          decoding="async"
        />
      </picture>

      <div className="hero-photo-fade" aria-hidden="true" />

      <div className="hero-club-lights" aria-hidden="true">
        <div className="hero-light-rig hero-light-rig-left">
          <span className="hero-beam hero-beam-left-a" />
          <span className="hero-beam hero-beam-left-b" />
          <span className="hero-beam hero-beam-left-c" />
          <span className="hero-lamp hero-lamp-left" />
        </div>
        <div className="hero-light-rig hero-light-rig-right">
          <span className="hero-beam hero-beam-right-a" />
          <span className="hero-beam hero-beam-right-b" />
          <span className="hero-beam hero-beam-right-c" />
          <span className="hero-lamp hero-lamp-right" />
        </div>
        <span className="hero-floor-flare hero-floor-flare-a" />
        <span className="hero-floor-flare hero-floor-flare-b" />
        <span className="hero-floor-flare hero-floor-flare-c" />
      </div>

      <div className="hero-copy">
        <div className="hero-kicker">
          <span>Berlin based</span>
          <span>DJ / Producer</span>
        </div>

        <h1 aria-label="NÚRIA">
          <span className="hero-name-top">NÚ</span>
          <span className="hero-name-bottom">RIA</span>
        </h1>

        <p className="hero-intro">
          Driving grooves, deep basslines and emotional intensity for rooms that
          refuse to stand still.
        </p>

        <a className="hero-enter" href="#music">
          <span className="hero-enter-icon" aria-hidden="true">
            <ArrowRight size={22} strokeWidth={1.4} />
          </span>
          <span>Enter the sound</span>
          <span className="hero-enter-line" aria-hidden="true" />
        </a>
      </div>

      <a className="hero-scroll" href="#music" aria-label="Scroll to music">
        <span>Scroll</span>
        <ArrowDown size={18} strokeWidth={1.35} />
      </a>

      <div className="hero-equalizer" aria-label="Animated audio visualizer">
        <Volume2 size={17} strokeWidth={1.5} aria-hidden="true" />
        <div className="hero-equalizer-bars" aria-hidden="true">
          {equalizerBars.map((bar) => (
            <span key={bar} />
          ))}
        </div>
      </div>
    </section>
  );
}
