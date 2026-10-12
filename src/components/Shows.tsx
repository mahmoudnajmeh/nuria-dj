import { ArrowUpRight } from 'lucide-react';

const shows = [
  {
    date: '21 NOV',
    city: 'Berlin',
    venue: 'Ritter Butzke',
    event: 'Alan Fitzpatrick · NÚRIA · Techmo',
    href: 'https://ra.co/dj/nuria-de',
  },
];

export function Shows() {
  return (
    <section className="shows-section" id="shows" data-reveal>
      <header className="shows-header">
        <div>
          <p className="eyebrow">Shows</p>
          <h2>Upcoming dates</h2>
        </div>
        <a
          href="https://ra.co/dj/nuria-de"
          target="_blank"
          rel="noreferrer"
        >
          Resident Advisor
          <ArrowUpRight size={16} strokeWidth={1.4} />
        </a>
      </header>

      <div className="show-list">
        {shows.map((show) => (
          <a
            className="show-row"
            data-reveal
            key={`${show.date}-${show.venue}`}
            href={show.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="show-date">{show.date}</span>
            <span className="show-city">{show.city}</span>
            <span className="show-venue">{show.venue}</span>
            <span className="show-event">{show.event}</span>
            <ArrowUpRight size={22} strokeWidth={1.4} />
          </a>
        ))}
      </div>

      <div className="booking-panel">
        <div className="booking-panel-heading">
          <p className="eyebrow">Booking &amp; enquiries</p>
          <h3>Book NÚRIA for clubs, festivals and events.</h3>
        </div>
        <div className="booking-panel-contact">
          <span>Management contact</span>
          <a href="mailto:andrea@miraclemgmt.com">andrea@miraclemgmt.com</a>
        </div>
      </div>
    </section>
  );
}
