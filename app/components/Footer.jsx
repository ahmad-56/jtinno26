function Footer() {
  const items = [
    "Copyright © 2026 LGS JT",
    "⚬",
    "All rights Reserved",
    "⚬",
    <section className="bottom-0">
      Made By :{" "}
      <a
        href="https://www.linkedin.com/in/syed-muhammad-ahmad-hassan-13552641b/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative text-[var(--site-primary-hover)] hover:text-[var(--site-heading)] font-mono transition-all duration-300 hover:shadow-[0_0_8px_var(--site-glow-strong)] hover:scale-105 border-b border-transparent hover:border-[var(--site-accent)] group"
      >
        <span className="relative z-9">Ahmad Hassan</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[var(--site-primary)]/0 via-[var(--site-accent)]/10 to-[var(--site-primary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
      </a>{" "}
      ⚬ Presented By:{" "}
      <a
        href="https://www.instagram.com/lgsjt.itsociety"
        target="_blank"
        rel="noopener noreferrer"
        className="relative text-[var(--site-primary-hover)] hover:text-[var(--site-heading)] font-mono transition-all duration-300 hover:shadow-[0_0_8px_var(--site-glow-strong)] hover:scale-105 border-b border-transparent hover:border-[var(--site-accent)] group"
      >
        <span className="relative z-9">LGS JT IT Society</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[var(--site-primary)]/0 via-[var(--site-accent)]/10 to-[var(--site-primary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
      </a>
    </section>,
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-[var(--site-surface)] via-[var(--site-background)] to-[var(--site-surface)] py-4 sm:py-6 px-2 border-t border-[var(--site-border)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(20,148,136,0.08)_25%,rgba(20,148,136,0.08)_50%,transparent_50%,transparent_75%,rgba(20,148,136,0.08)_75%)] bg-[length:20px_20px] animate-pulse"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--site-accent)]/50 to-transparent"></div>

      <ul className="relative text-slate-300 text-xs font-mono flex flex-col md:flex-row justify-center items-center text-center space-y-1 sm:space-y-0">
        {items.map((item, i) => (
          <li
            key={i}
            className={`px-2 lg:px-3 py-1 transition-all duration-300 hover:text-[var(--site-accent)] ${
              i % 2 === 1 && "hidden md:inline text-[var(--site-primary)]/50"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
