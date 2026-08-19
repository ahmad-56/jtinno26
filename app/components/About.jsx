import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import Button from "./Button";

function About({ id }) {
  const svgRef = useRef(null);
  const svgRef2 = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const [padding, setPadding] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      const svg = window.innerWidth < 640 ? svgRef : svgRef2;
      if (svg.current) {
        const extra =
          window.innerWidth >= 1280 ? -64 : window.innerWidth >= 1024 ? -20 : 0;
        setPadding(
          svg.current.getBoundingClientRect().height -
            (headingRef.current?.getBoundingClientRect().height || 0) / 2 +
            extra
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if (contentRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.lastElementChild.classList.add("animate-fade-in");
            } else {
              entry.target.lastElementChild.classList.remove("animate-fade-in");
            }
          });
        },
        { threshold: [0, 0.4] }
      );
      observer.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section
      id={id}
      ref={contentRef}
      style={{ paddingTop: padding }}
      className="relative overflow-hidden pb-8 sm:pb-10 md:pb-12 lg:pb-14 px-4 xs:px-8 md:px-15 w-full text-center text-slate-300"
    >
      <div className="absolute w-full left-0 top-0 lg:-top-5 xl:-top-16 z-5">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block"
        >
          <defs>
            <filter id="glow2">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="8"
                floodColor="#0c6177"
                floodOpacity="0.4"
              />
            </filter>
          </defs>
          <path
            ref={svgRef2}
            preserveAspectRatio="none"
            fill="#000000"
            fillOpacity="0.7"
            d="M0,160L80,165.3C160,171,320,181,480,176C640,171,800,149,960,138.7C1120,128,1280,128,1360,128L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
          <path
            d="M0,160L80,165.3C160,171,320,181,480,176C640,171,800,149,960,138.7C1120,128,1280,128,1360,128L1440,128"
            fill="none"
            stroke="#0c6177"
            strokeWidth="5"
            filter="url(#glow2)"
          />
        </svg>
        <svg
          className="sm:hidden"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="8"
                floodColor="#0c6177"
                floodOpacity="0.4"
              />
            </filter>
          </defs>
          <path
            ref={svgRef}
            fill="#000000"
            fillOpacity="0.7"
            d="M0,240L80,250C160,260,320,280,480,270C640,260,800,220,960,200C1120,180,1280,180,1360,180L1440,180L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
          <path
            d="M0,240L80,250C160,260,320,280,480,270C640,260,800,220,960,200C1120,180,1280,180,1440,200"
            fill="none"
            stroke="#0c6177"
            strokeWidth="8"
            filter="url(#glow)"
          />
        </svg>
      </div>

      <div className="relative max-w-320 mx-auto z-30 opacity-0">
        <h1
          ref={headingRef}
          className="font-monaspace text-3xl xs:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-semibold capitalize text-slate-50"
          id="headerText"
        >
          WHAT IS INNOVENTIONS?
        </h1>
        <p className="my-7 sm:my-8 font-open-sans font-semibold md:font-medium tracking-wide text-sm/relaxed md:text-base lg:text-[17px]">
          Innoventions ’26 is LGS Johar Town’s three-day national science
          olympiad, bringing together students from across Pakistan for an
          immersive celebration of curiosity, creativity and competition.
          Across 14 diverse categories—including pure sciences, mathematics,
          computing, engineering, robotics, astronomy, environmental science
          and creative problem-solving—delegates will investigate, design,
          decode, build and present under pressure. Guided by the spirit of
          “Indulge. Invent. Innovate.”, Innoventions ’26 gives young thinkers a
          platform to challenge convention, transform knowledge into action and
          bring their boldest ideas to life.
        </p>
        <div>
          <div className="relative group inline-block p-1">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r blur-xs from-[var(--site-primary)]/20 via-[var(--site-accent)]/20 to-[var(--site-primary)]/20 opacity-30 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="backdrop-blur-xl">
              <Link to="/categories">
                <Button
                  text="Categories"
                  color="rgba(17, 17, 17, 0.063)"
                  // onClick={() =>
                  //   (window.location.href = `${window.location.origin}/categories`)
                  // }
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
