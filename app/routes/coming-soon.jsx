import { Link, useParams } from "react-router";
import categoryData from "../categoryData";
import schoolBackground from "../assets/school.jpg";

export function meta({ params }) {
  const category = categoryData.find(
    (item) => item.slug === params.categorySlug
  );

  return [
    {
      title: `${
        category?.title || "Category"
      } Coming Soon | JT Innoventions '26`,
    },
    {
      name: "description",
      content: `The ${
        category?.title || "category"
      } study guide for JT Innoventions '26 is coming soon.`,
    },
  ];
}

export default function ComingSoon() {
  const { categorySlug } = useParams();

  const category = categoryData.find(
    (item) => item.slug === categorySlug
  );

  const theme = category?.theme || {
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
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(${theme.primary} 1px, transparent 1px),
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

      {/* Decorative glows */}
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

        {category && (
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.22em]"
            style={{ color: theme.primary }}
          >
            {category.title} Study Guide
          </p>
        )}

        <h1
          className="mb-6 font-monaspace text-4xl font-semibold uppercase tracking-wide sm:text-5xl lg:text-6xl"
          id="headerText"
          style={{
            color: "var(--site-heading)",
            textShadow: `0 0 25px ${theme.glow}`,
          }}
        >
          Coming Soon
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

        <Link
          to="/categories"
          className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-1"
          style={{
            borderColor: theme.primary,
            backgroundColor: `${theme.primary}20`,
            color: theme.primary,
            boxShadow: `0 0 20px ${theme.glow}`,
          }}
        >
          <span aria-hidden="true">←</span>
          All categories
        </Link>
      </section>
    </main>
  );
}