import { useEffect, useRef } from "react";
import societyLogo from "../assets/it-society-logo.jpg";
import eventLogo from "../assets/main-logo.webp?url";
import "./IntroScreen.css";

let played = false;

export default function IntroScreen() {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (played) return;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function finish() {
      if (dialog.open) return;
      played = true;
      document.body.style.overflow = previousOverflow;
    }
    function handleAnimationEnd(event) {
      if (event.target === dialog && event.animationName === "intro-exit") {
        dialog.close();
      }
    }
    dialog.addEventListener("close", finish);
    dialog.addEventListener("animationend", handleAnimationEnd);
    dialog.showModal();
    document.body.style.overflow = "hidden";

    const timeout = window.setTimeout(() => dialog.close(), reducedMotion ? 800 : 4000);
    return () => {
      window.clearTimeout(timeout);
      dialog.removeEventListener("close", finish);
      dialog.removeEventListener("animationend", handleAnimationEnd);
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="society-intro" aria-labelledby="intro-title">
      <div className="intro-content">
        <img className="intro-event-logo h-[39vh] lg:h-[50vh]" src={eventLogo} alt="JT Innoventions ’26" />
        <p className="intro-credit" id="intro-title">
          <span className="intro-label">Presented by</span>
          <img className="intro-society-logo" src={societyLogo} alt="" width="32" height="32" />
          <span>LGS JT IT Society</span>
        </p>
        <span className="intro-line" aria-hidden="true" />
      </div>
    </dialog>
  );
}
