import "../app.css";

// Add sponsor logos here
const sponsors = [
  {
    name: "JT Innoventions Sponsor",
    logo: "/sponsors/tetrapak.png",
  },
];

const minimumTrackItems = 6;

const baseTrack = Array.from(
  { length: Math.max(minimumTrackItems, sponsors.length) },
  (_, index) => sponsors[index % sponsors.length]
);

const marqueeTrack = [...baseTrack, ...baseTrack];

function Sponsors() {
  return (
    <section
      className="relative flex min-h-[35vh] w-full flex-col items-center justify-center overflow-hidden border-y-[0.3rem] border-[var(--site-border)] bg-[var(--site-background)] py-10 sm:py-12"
      id="sponsors"
      aria-labelledby="sponsors-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--site-glow),_transparent_55%)]" />

      <div className="relative z-10 mb-8 px-5 text-center">
        <h1
          className="text-4xl font-normal uppercase tracking-wider text-[var(--site-heading)] sm:text-5xl"
          id="sponsors-heading"
          style={{
            fontFamily: '"Vermin", sans-serif',
          }}
        >
          Sponsors
        </h1>
      </div>

      <div className="sponsor-marquee relative z-10 w-full overflow-hidden">
        <div
          className="sponsor-marquee-track flex w-max items-center"
          role="list"
          aria-label="Event sponsors"
        >
          {marqueeTrack.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="mx-8 flex h-24 w-52 shrink-0 items-center justify-center sm:mx-12 sm:h-28 sm:w-64"
              role="listitem"
              aria-hidden={index >= baseTrack.length}
            >
              <img
                src={sponsor.logo}
                alt={index < baseTrack.length ? sponsor.name : ""}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
