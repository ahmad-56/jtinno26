import { useLocation } from "react-router";
import school480Avif from "../assets/backgrounds/school-480.avif";
import school960Avif from "../assets/backgrounds/school-960.avif";
import school1440Avif from "../assets/backgrounds/school-1440.avif";
import school480 from "../assets/backgrounds/school-480.webp";
import school960 from "../assets/backgrounds/school-960.webp";
import school1440 from "../assets/backgrounds/school-1440.webp";

function HeroBg() {
  const { pathname } = useLocation();
  // Category and document pages draw their own gradients over this same photo.
  const hasPageOverlay = pathname.startsWith("/categories/") || pathname === "/preview";

  return (
    <>
      <picture>
        <source
          type="image/avif"
          srcSet={`${school480Avif} 480w, ${school960Avif} 960w, ${school1440Avif} 1440w`}
          sizes="100vw"
        />
        <img
          src={school960}
          srcSet={`${school480} 480w, ${school960} 960w, ${school1440} 1440w`}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          width="2592"
          height="4608"
          decoding="async"
          className="fixed inset-0 w-full h-full object-cover object-center z-[-2]"
        />
      </picture>
      {!hasPageOverlay && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[-1] bg-[rgba(2,8,18,0.95)]"
        />
      )}
    </>
  );
}

export default HeroBg;
