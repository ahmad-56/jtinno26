import { Link } from "react-router";
import Logo from "../assets/main-logo.webp";
import Sponsors from "./Sponsors";
import Contact from "./Contact";
import "../temp-homepage.css";

export default function TempHomepage() {
  return (
    <main className="temporary-home-content">
      <section id="hero" className="home-intro" aria-labelledby="home-title">
        <img src={Logo} alt="JT Innoventions ’26 logo" className="home-logo" />
        <p className="home-kicker">Lahore Grammar School · Johar Town</p>
        <h1 id="home-title">JT Innoventions ’26</h1>
        <p className="home-date">11–13 September 2026</p>
        <p className="home-motto">Indulge. Invent. Innovate.</p>
        <div className="home-links">
          <Link to="/register" className="home-register">Registration</Link>
          <Link to="/categories" className="home-categories">Browse categories →</Link>
        </div>
      </section>

      <section id="about" className="home-about" aria-labelledby="home-about-title">
        <h2 id="home-about-title">About the event</h2>
        <div>
          <p>
            Innoventions is LGS Johar Town’s three-day science olympiad.
            Students from across Pakistan take part in 13 categories, including
            science, mathematics, computing, engineering, art, and robotics.
          </p>
          <p>
            Each category has its own challenges and study guide.
            You can find the guides on the categories page. For questions about
            the event or registration, contact the event heads below.
          </p>
          <Link to="/categories">View categories and study guides →</Link>
        </div>
      </section>

      <Sponsors />
      <Contact />
    </main>
  );
}
