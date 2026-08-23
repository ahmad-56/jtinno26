import Hero from "../components/Hero";
import SpotlightCanvas from "../components/SpotlightCanvas";
import About from "../components/About";
import Sponsors from "../components/Sponsors";
import Contact from "../components/Contact";

export const meta = () => {
  return [
    { title: "JT Innoventions'26" },
    { 
      name: "description", 
      content: "Innoventions '26 is LGS Johar Town's three-day national science olympiad, bringing together students from across Pakistan across 14 categories in science, mathematics, computing, engineering, robotics, astronomy and creative problem-solving.", 
    },
    { name: "keywords", content: "Innoventions 2026, Science Olympiad, LGS, JT, Lahore Grammar School,mathematics,JT Innoventions 26" },
    { name: "author", content: "LGS JT" },
    { name: "robots", content: "index, follow" },

    { property: "og:type", content: "event" },
    { property: "og:title", content: "Innoventions'26 - 3-Day Science Olympiad by LGS JT" },
    { 
      property: "og:description", 
      content: "Join Pakistan's premier Science Olympiad! 3 days of Science, Mathematics, IT, Robotics & Astronomy competitions. Open to students nationwide. Fostering creativity, innovation & critical thinking." 
    },
    { property: "og:url", content: "https://lgsjtinnoventions.com" },
    { property: "og:site_name", content: "Innoventions'26 - LGS JT Science Olympiad" },
    { property: "og:image", content: "https://lgsjtinnoventions.com/og.png" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Innoventions'26 - Pakistan's Premier Science Olympiad" },
    { 
      name: "twitter:description", 
      content: "3-day Science Olympiad by LGS JT. Science, Math, IT, Robotics & Astronomy competitions for students across Pakistan. Register now!" 
    },

    { name: "theme-color", content: "#020812" },
    { name: "msapplication-TileColor", content: "#020812" },
    { name: "language", content: "English" },
    { name: "revisit-after", content: "7 days" },
    { name: "distribution", content: "global" },
    { name: "rating", content: "general" },

    { name: "geo.region", content: "PK-PB" },
    { name: "geo.placename", content: "Lahore, Punjab, Pakistan" },
    { name: "geo.position", content: "31.5204;74.3587" },
    { name: "ICBM", content: "31.5204, 74.3587" }
  ];
};

export default function Home() {
  return (
    <main className="relative w-full h-full flex flex-col items-center justify-center overflow-visible">
      <SpotlightCanvas />
      <Hero id="hero" />
      <div className="w-full border-4 border-[var(--site-border)]">
        <About id="about" />
        <Sponsors id="sponsors" />
        <Contact id="contact" />
      </div>
    </main>
  );
}
