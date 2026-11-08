import { useRef, useState } from "react";
import { Link } from "react-router";

const Button = ({
  text,
  glowColor = "#149488",
  onClick,
  color = "#0c6177",
}) => {
  const btnRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    btnRef.current.style.setProperty("--x", "0px");
    btnRef.current.style.setProperty("--y", "0px");
    setHovered(false);
  };

  const handleClick = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    onClick?.();

    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 500);
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative px-6 py-2 rounded-md text-white font-medium overflow-hidden transition duration-150 active:scale-95 border border-white/20 backdrop-blur-md cursor-pointer"
      style={{ background: color }}
    >
      <span
        className="absolute inset-0 pointer-events-none rounded-md border z-10 transition-opacity duration-300 ease-out"
        style={{
          borderColor: glowColor,
          borderWidth: "2px",
          opacity: hovered ? 1 : 0,
          maskImage: "radial-gradient(120px at var(--x, 0px) var(--y, 0px), white 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(120px at var(--x, 0px) var(--y, 0px), white 0%, transparent 70%)",
          transition: "mask-position 0.05s linear, opacity 0.3s ease-out",
          boxShadow: hovered ? `0 0 10px ${glowColor}` : "none",
        }}
      />

      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/20 animate-ripple"
          style={{
            left: ripple.x - 50,
            top: ripple.y - 50,
            width: 100,
            height: 100,
            pointerEvents: "none",
            zIndex: 5,
          }}
        />
      ))}

      <span className="relative z-20 text-lg uppercase tracking-widest">
        {text}
      </span>
    </button>
  );
};

export default Button;

export function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export function GlowingLink({ to, children, theme, className = "" }) {
  return (
    <div className="group relative inline-flex">
      <div
        className="pointer-events-none absolute -inset-3 rounded-xl opacity-60 blur-lg transition duration-500 group-hover:opacity-100 group-hover:blur-xl"
        style={{
          background: `linear-gradient(90deg, ${theme.primary}33, ${theme.secondary}33, ${theme.primary}33)`,
        }}
        aria-hidden="true"
      />
      <Link
        to={to}
        className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md border border-white/20 px-6 py-2 text-sm font-medium uppercase tracking-widest text-white backdrop-blur-md active:scale-95 ${className}`}
        style={{
          backgroundColor: "rgba(17, 17, 17, 0.65)",
          boxShadow: `0 0 12px ${theme.glow}`,
        }}
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-md border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            borderColor: theme.primary,
            boxShadow: `inset 0 0 10px ${theme.glow}`,
          }}
          aria-hidden="true"
        />
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </Link>
    </div>
  );
}
