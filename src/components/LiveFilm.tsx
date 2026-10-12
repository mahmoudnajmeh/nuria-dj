import { Play } from 'lucide-react';
import { useState } from 'react';

export function LiveFilm() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="film-section" id="live" data-reveal>
      <div className="film-header">
        <p className="eyebrow">Live transmission</p>
        <span>Berlin Club Festival</span>
      </div>

      <div className="film-frame">
        {playing ? (
          <iframe
            src="https://www.youtube.com/embed/TVOueVS3ViQ?autoplay=1&rel=0"
            title="NÚRIA techno DJ set at Berlin Club Festival"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            className="film-poster"
            type="button"
            onClick={() => setPlaying(true)}
            aria-label="Play NÚRIA Berlin Club Festival DJ set"
          >
            <img
              src="https://i.ytimg.com/vi/TVOueVS3ViQ/maxresdefault.jpg"
              alt="NÚRIA performing a techno DJ set"
            />
            <span className="film-overlay" />
            <span className="play-pill">
              <Play size={18} fill="currentColor" />
              Play full set
            </span>
            <span className="film-title">NÚRIA / LIVE</span>
          </button>
        )}
      </div>
    </section>
  );
}
