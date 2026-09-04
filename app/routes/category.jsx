import { Link, useParams } from "react-router";
import categoryData from "../categoryData";
import schoolBackground from "../assets/school.jpg";
import Button from "../components/Button";

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
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-[var(--site-primary-hover)]">
          Error 404
        </p>
        <h1 className="mb-5 text-4xl font-semibold">Category not found</h1>
        <p className="mb-8 text-slate-400">
          The category you requested does not exist or may have moved.
        </p>
        <Link
          to="/categories"
          className="inline-flex rounded-lg border border-[var(--site-border)] bg-[var(--site-primary)]/10 px-5 py-3 text-[var(--site-heading)] transition hover:bg-[var(--site-primary)]/20"
        >
          View all categories
        </Link>
      </main>
    );
  }
const handleOpenStudyGuide = () => {
  window.open(
    category.pdfLink,
    "_blank",
    "noopener,noreferrer"
  );
};

  const handleDownloadStudyGuide = () => {
    const downloadLink = document.createElement("a");

    downloadLink.href = category.pdfLink;
    downloadLink.download =
      `${category.title}-Study-Guide.pdf`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const { theme } = category;

function DownloadIcon() {
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
            rgba(2, 8, 18, 0.90),
            rgba(4, 18, 28, 0.95)
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
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
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
          className="mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] transition hover:opacity-75 transition-transform duration-100 hover:-translate-y-0.25"
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
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]"
                style={{
                  borderColor: `${theme.primary}66`,
                  backgroundColor: `${theme.primary}18`,
                  color: theme.primary,
                  boxShadow: `0 0 12px ${theme.glow}`,
                }}
              >
                {category.subject}
              </span>

              {category.compulsory && (
                <span
                  className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{
                    borderColor: `${theme.secondary}66`,
                    backgroundColor: `${theme.secondary}18`,
                    color: theme.secondary,
                    boxShadow: `0 0 12px ${theme.glow}`,
                  }}
                >
                  Compulsory
                </span>
              )}
            </div>

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

            <div className="mt-8 flex flex-wrap gap-5">
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

                <div className="relative rounded-lg p-1">
                  <Button
                    text="OPEN STUDY GUIDE"
                    color="rgba(17, 17, 17, 0.65)"
                    glowColor={theme.primary}
                    onClick={handleOpenStudyGuide}
                  />
                </div>
              </div>

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

                <div className="relative rounded-lg p-1">
                  <Button
                    text={
                      <span className="inline-flex items-center gap-2">
                        <DownloadIcon />
                        <span>Download PDF</span>
                      </span>
                    }
                    color="rgba(17, 17, 17, 0.65)"
                    glowColor={theme.primary}
                    onClick={handleDownloadStudyGuide}
                  />
                </div>
              </div>
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
