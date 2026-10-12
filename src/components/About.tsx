export function About() {
  return (
    <section className="about-section" id="about" data-reveal>
      <div className="about-photo-wrap">
        <img
          className="about-photo"
          src="https://revo-artists.com/app/uploads/2024/05/NURIA1.jpg"
          alt="NÚRIA, Berlin-based techno DJ and producer"
        />
        <div className="about-photo-caption">
          <span>NÚRIA</span>
          <span>Berlin</span>
        </div>
      </div>

      <div className="about-copy">
        <p className="eyebrow">About</p>
        <h2>
          A feminine edge.
          <span>A heavy pulse.</span>
        </h2>
        <p className="about-lead">
          NÚRIA is a Berlin-based DJ and producer originally from Syria. Her
          sets move through driving techno, deep grooves and euphoric pressure,
          built for dance floors that want energy without losing emotion.
        </p>
        <p>
          Since beginning her career in 2020, she has played across Berlin at
          venues including KitKatClub, Sisyphos, Kater Blau, Ritter Butzke and
          Mensch Meier, while taking her sound to festivals and international
          stages beyond Germany.
        </p>

        <div className="about-stats">
          <div>
            <strong>2020</strong>
            <span>First RA event</span>
          </div>
          <div>
            <strong>Berlin</strong>
            <span>Home base</span>
          </div>
          <div>
            <strong>Techno</strong>
            <span>DJ / Producer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
