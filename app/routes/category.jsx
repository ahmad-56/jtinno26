import { Link, useParams } from "react-router";
import categoryData from "../categoryData";
import schoolBackground from "../assets/school.jpg";

export function meta({ params }) {
  const category = categoryData.find(
    (item) => item.slug === params.categorySlug
  );

  if (!category) {
    return [{ title: "Category Not Found | JT Innoventions '26" }];
  }

  return [
    { title: `${category.title} | JT Innoventions '26` },
    {
      name: "description",
      content: `${category.description} View the ${category.title} study guide for JT Innoventions '26.`,
    },
  ];
}

export default function Category() {
  const { categorySlug } = useParams();
  const category = categoryData.find((item) => item.slug === categorySlug);

  if (!category) {
    return (
      <main className="min-h-screen px-6 pb-24 pt-32 text-center text-slate-100">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-teal-300">
          Error 404
        </p>
        <h1 className="mb-5 text-4xl font-semibold">Category not found</h1>
        <p className="mb-8 text-slate-400">
          The category you requested does not exist or may have moved.
        </p>
        <Link
          to="/categories"
          className="inline-flex rounded-lg border border-teal-400/40 bg-teal-400/10 px-5 py-3 text-teal-200 transition hover:bg-teal-400/20"
        >
          View all categories
        </Link>
      </main>
    );
  }

  const { theme } = category;

  return (
    <main
      className="category-page relative min-h-screen overflow-hidden px-5 pb-24 pt-28 text-slate-100 sm:px-8 lg:px-12"
      style={{
        "--category-primary": theme.primary,
        "--category-secondary": theme.secondary,
        "--category-surface": theme.surface,
        "--category-glow": theme.glow,

        backgroundImage: `
          radial-gradient(
            circle at 18% 15%,
            ${theme.glow},
            transparent 35%
          ),
          radial-gradient(
            circle at 85% 35%,
            ${theme.glow},
            transparent 30%
          ),
          linear-gradient(
            180deg,
            rgba(2, 18, 24, 0.90),
            rgba(2, 12, 18, 0.94)
          ),
          url("${schoolBackground}")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(${theme.primary} 1px, transparent 1px),
            linear-gradient(90deg, ${theme.primary} 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Link
          to="/categories"
          className="mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] transition hover:opacity-75"
          style={{ color: theme.primary }}
        >
          <span aria-hidden="true">←</span>
          All categories
        </Link>

        <section className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div
            className="relative overflow-hidden rounded-2xl border bg-black/30 p-3 backdrop-blur-sm"
            style={{
              borderColor: `${theme.primary}66`,
              boxShadow: `0 0 44px ${theme.glow}`,
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
              }}
            />
            <img
              src={category.img}
              alt={`${category.title} category artwork`}
              className="w-full rounded-xl object-cover"
            />
          </div>

          <div>
          {/*
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]"
                style={{
                  borderColor: `${theme.primary}66`,
                  backgroundColor: `${theme.primary}18`,
                  color: theme.primary,
                }}
              >
                {category.subject}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                {category.compulsory ? "Compulsory" : "Elective"}
              </span>
            </div>
        */}
            <p
              className="mb-3 text-xs uppercase tracking-[0.3em]"
              style={{ color: theme.secondary }}
            >
              Innoventions '26
            </p>
            <h1
              className="mb-6 font-monaspace text-4xl font-semibold uppercase leading-tight sm:text-5xl lg:text-6xl"
              id="headerText"
              style={{
                color: theme.primary,
                textShadow: `0 0 26px ${theme.glow}`,
              }}
            >
              {category.fullTitle}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {category.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={category.pdfLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: theme.primary,
                  backgroundColor: `${theme.primary}20`,
                  color: theme.primary,
                  boxShadow: `0 0 20px ${theme.glow}`,
                }}
              >
                Open study guide
              </a>

              <a
                href={category.pdfLink}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
              >
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

                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </section>

        <section className="mt-16 lg:mt-20">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl"
                  style={{ color: theme.secondary }}>
                Study Guide
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              If the preview isnt available, use the Open Study
              Guide button above to view the PDF directly.
            </p>
          </div>

          <div
            className="overflow-hidden rounded-2xl border bg-slate-950/80 p-2 sm:p-3"
            style={{
              borderColor: `${theme.primary}55`,
              boxShadow: `0 0 36px ${theme.glow}`,
            }}
          >
            <iframe
              src={`${category.pdfLink}#toolbar=1&navpanes=0&view=FitH`}
              title={`${category.title} study guide`}
              className="h-[70vh] min-h-[560px] w-full rounded-xl bg-white"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
