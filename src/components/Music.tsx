import { ExternalLink } from 'lucide-react';

const tracks = [
  {
    number: '01',
    type: 'Live set',
    title: 'Sisyphos · Hammahalle',
    year: '2026',
    detail: 'Berlin',
    url: 'https://soundcloud.com/nuriamusik/nuria-sisyphos-hammahalle-29',
  },
  {
    number: '02',
    type: 'Festival set',
    title: 'Fusion Festival',
    year: '2024',
    detail: 'Luftschloss',
    url: 'https://soundcloud.com/nuriamusik/nuria-fusion-festival-luftschloss-2024',
  },
  {
    number: '03',
    type: 'Club set',
    title: 'Ritter Butzke',
    year: '2023',
    detail: 'Berlin',
    url: 'https://soundcloud.com/nuriamusik/nuria-ritter-butzke-bdme-270523',
  },
];

function embedUrl(url: string) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23f1a8c6&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`;
}

export function Music() {
  return (
    <section className="music-section" id="music" data-reveal>
      <header className="music-intro">
        <div>
          <p className="eyebrow">Music</p>
          <h2>Selected releases &amp; sets</h2>
        </div>
        <p className="music-note">
          A focused selection from NÚRIA&apos;s catalogue, live recordings and
          club sets. Every player below is connected to the original SoundCloud
          upload.
        </p>
      </header>

      <div className="music-list">
        {tracks.map((track) => (
          <article className="music-entry" key={track.url} data-reveal>
            <div className="music-entry-index">{track.number}</div>

            <div className="music-entry-copy">
              <span>{track.type}</span>
              <h3>{track.title}</h3>
              <div className="music-entry-meta">
                <span>{track.detail}</span>
                <span>{track.year}</span>
              </div>
            </div>

            <div className="music-entry-player">
              <iframe
                title={`${track.title} on SoundCloud`}
                width="100%"
                height="122"
                scrolling="no"
                frameBorder="0"
                allow="autoplay; encrypted-media; clipboard-write"
                loading="lazy"
                src={embedUrl(track.url)}
              />
            </div>
          </article>
        ))}
      </div>

      <a
        className="music-profile-link"
        href="https://soundcloud.com/nuriamusik"
        target="_blank"
        rel="noreferrer"
      >
        <span>Open full SoundCloud profile</span>
        <ExternalLink size={16} strokeWidth={1.5} />
      </a>
    </section>
  );
}
