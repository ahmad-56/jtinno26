import { useEffect, useState } from "react";
import { Link } from "react-router";
import schoolBackground from "../assets/school.jpg";

const REGISTRATION_OPENING_DATE = "2026-08-24T12:00:00+05:00";

export function meta() {
  return [
    {
      title: "Registrations | JT Innoventions '26",
    },
  ];
}

function calculateTimeLeft() {
  const difference =
    new Date(REGISTRATION_OPENING_DATE).getTime() - Date.now();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Register() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
      setHasLoaded(true);
    };

    updateCountdown();

    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const theme = {
    primary: "#149488",
    secondary: "#0d766f",
    glow: "rgba(20, 148, 136, 0.35)",
  };

  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-20 pt-28 text-slate-100"
      style={{
        backgroundImage: `
          radial-gradient(
            circle at 20% 20%,
            ${theme.glow},
            transparent 35%
          ),
          radial-gradient(
            circle at 85% 75%,
            ${theme.glow},
            transparent 30%
          ),
          linear-gradient(
            180deg,
            rgba(2, 8, 18, 0.92),
            rgba(4, 18, 28, 0.97)
          ),
          url("${schoolBackground}")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(
              ${theme.primary} 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              ${theme.primary} 1px,
              transparent 1px
            )
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[10%] top-[20%] h-3 w-3 animate-pulse rounded-full"
        style={{
          backgroundColor: theme.primary,
          boxShadow: `0 0 22px ${theme.primary}`,
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[20%] right-[12%] h-2 w-2 animate-pulse rounded-full"
        style={{
          backgroundColor: theme.secondary,
          boxShadow: `0 0 20px ${theme.secondary}`,
          animationDelay: "500ms",
        }}
        aria-hidden="true"
      />

      <section
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border bg-black/70 px-6 py-12 text-center backdrop-blur-md sm:px-12 sm:py-16"
        style={{
          borderColor: `${theme.primary}88`,
          boxShadow: `
            0 0 25px ${theme.glow},
            0 25px 70px rgba(0, 0, 0, 0.55)
          `,
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{
            background: `linear-gradient(
              90deg,
              transparent,
              ${theme.primary},
              ${theme.secondary},
              transparent
            )`,
            boxShadow: `0 0 18px ${theme.glow}`,
          }}
          aria-hidden="true"
        />

        <p
          className="mb-4 font-mono text-xs uppercase tracking-[0.35em]"
          style={{ color: theme.secondary }}
        >
          JT Innoventions ’26
        </p>

        <h1
          className="mb-6 font-monaspace text-4xl font-semibold uppercase tracking-wide sm:text-5xl lg:text-6xl"
          id="headerText"
          style={{
            color: "var(--site-heading)",
            textShadow: `0 0 25px ${theme.glow}`,
          }}
        >
          Registrations Start Soon
        </h1>

        <div
          className="mx-auto mb-7 h-px w-32"
          style={{
            background: `linear-gradient(
              90deg,
              transparent,
              ${theme.primary},
              transparent
            )`,
          }}
          aria-hidden="true"
        />

        <p className="mx-auto mb-8 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
          Registration for JT Innoventions ’26 will open soon.
        </p>

        {/* Countdown */}
        {hasLoaded && timeLeft ? (
          <div
            className="mx-auto mb-9 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
            aria-label="Time remaining until registration opens"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="rounded-xl border bg-black/50 px-3 py-4"
                style={{
                  borderColor: `${theme.primary}55`,
                  boxShadow: `inset 0 0 18px ${theme.glow}`,
                }}
              >
                <span
                  className="block font-mono text-3xl font-bold sm:text-4xl"
                  style={{
                    color: theme.primary,
                    textShadow: `0 0 14px ${theme.glow}`,
                  }}
                >
                  {String(value).padStart(2, "0")}
                </span>

                <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        ) : hasLoaded ? (
          <div className="mb-9">
            <p
              className="text-xl font-semibold uppercase tracking-[0.15em]"
              style={{
                color: theme.primary,
                textShadow: `0 0 16px ${theme.glow}`,
              }}
            >
              Registration is now open
            </p>
          </div>
        ) : (
          <div className="mb-9 h-24" aria-hidden="true" />
        )}

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-1"
          style={{
            borderColor: theme.primary,
            backgroundColor: `${theme.primary}20`,
            color: theme.primary,
            boxShadow: `0 0 20px ${theme.glow}`,
          }}
        >
          <span aria-hidden="true">←</span>
          Return home
        </Link>
      </section>
    </main>
  );
}