import { Link } from "react-router";
import schoolBackground from "../assets/school.jpg";
import CountdownTimer from "../components/Timer";

const REGISTRATION_OPENING_DATE =
  "2026-08-25T10:00:00+05:00";

export function meta() {
  return [
    {
      title:
        "Registration Coming Soon | JT Innoventions '26",
    },
    {
      name: "description",
      content:
        "Registration for JT Innoventions '26 will open soon.",
    },
  ];
}

function GlowingLink({
  to,
  children,
  theme,
}) {
  return (
    <div className="group relative inline-flex">
      <div
        className="pointer-events-none absolute -inset-3 rounded-xl opacity-60 blur-lg transition duration-500 group-hover:opacity-100 group-hover:blur-xl"
        style={{
          background: `linear-gradient(
            90deg,
            ${theme.primary}33,
            ${theme.secondary}33,
            ${theme.primary}33
          )`,
        }}
        aria-hidden="true"
      />

      <Link
        to={to}
        className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md border border-white/20 px-6 py-2 text-sm font-medium uppercase tracking-widest text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 active:scale-95"
        style={{
          backgroundColor:
            "rgba(17, 17, 17, 0.65)",
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

export default function RegistrationComingSoon() {
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
      {/* Background grid */}
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

      {/* Top-left glowing dot */}
      <div
        className="pointer-events-none absolute left-[10%] top-[20%] h-3 w-3 animate-pulse rounded-full"
        style={{
          backgroundColor: theme.primary,
          boxShadow: `0 0 22px ${theme.primary}`,
        }}
        aria-hidden="true"
      />

      {/* Bottom-right glowing dot */}
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
        {/* Top glowing line */}
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
          Registration for JT Innoventions ’26
          will open soon.
        </p>

        <div className="mb-9 flex justify-center">
          <CountdownTimer
            targetDate={
              REGISTRATION_OPENING_DATE
            }
            expiredText="Registration is now open"
          />
        </div>

        <GlowingLink
          to="/"
          theme={theme}
        >
          <span>Return Home</span>
        </GlowingLink>
      </section>
    </main>
  );
}