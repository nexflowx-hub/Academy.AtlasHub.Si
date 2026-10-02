const tracks = [
  { code: "01", title: "AI & Agents", text: "From practical AI fluency to agent operating models." },
  { code: "02", title: "Operations", text: "Intelligent operations, process design and exception management." },
  { code: "03", title: "Growth", text: "Digital growth, commercial systems and augmented customer journeys." },
  { code: "04", title: "Leadership", text: "Directing human and computational capability as one organization." },
];

export default function HomePage() {
  return (
    <main>
      <header className="nav shell">
        <div className="brand"><span className="mark" />AtlasHub <strong>Academy</strong></div>
        <nav><a href="#tracks">Learning Paths</a><a href="#model">Model</a></nav>
      </header>

      <section className="hero shell">
        <p className="eyebrow">ACADEMY.ATLASHUB.SI</p>
        <h1>Knowledge that becomes<br /><em>capability.</em></h1>
        <p className="lead">Courses, masterclasses and operating labs for professionals and organizations building the next generation of work.</p>
        <div className="actions"><a href="#tracks">Explore learning paths</a></div>
      </section>

      <section id="tracks" className="tracks shell">
        <div className="section-head"><span>LEARNING PATHS</span><h2>Learn what changes the work.</h2></div>
        <div className="grid">
          {tracks.map((track) => (
            <article key={track.title}>
              <span>{track.code}</span>
              <h3>{track.title}</h3>
              <p>{track.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="model" className="model shell">
        <p className="eyebrow">THE ATLASHUB LEARNING MODEL</p>
        <div className="flow"><strong>Knowledge</strong><span>→</span><strong>Practice</strong><span>→</span><strong>Capability</strong><span>→</span><strong>Transformation</strong></div>
        <p>Academy connects directly with AtlasHub Editions and applied workshops, so learning can move from idea to operating practice.</p>
      </section>

      <footer className="shell">© 2026 AtlasHub Academy · People | Technology | Results</footer>
    </main>
  );
}
