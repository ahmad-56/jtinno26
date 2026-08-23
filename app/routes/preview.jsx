import { Link } from "react-router";
import schoolBackground from "../assets/school.jpg";

const head_delegate = "/rules/headdelegate.pdf";

const codeofconduct =
  "/rules/codeofconduct.pdf";

export function meta() {
  return [
    {
      title: "Registrations | JT Innoventions '26",
    },
    {
      name: "description",
      content:
        "Register for JT Innoventions '26.",
    },
  ];
}

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

function ExternalLinkIcon() {
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

function RegisterButton({ theme }) {
  return (
    <Link
      to={"/register"}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-1"
      style={{
        borderColor: theme.primary,
        backgroundColor: `${theme.primary}20`,
        color: theme.primary,
        boxShadow: `0 0 20px ${theme.glow}`,
      }}
    >
      Start Registeration
    </Link>
  );
}

function PDFCard({ document }) {
  return (
    <article
      className="relative overflow-hidden rounded-2xl border bg-black/70 p-3 backdrop-blur-md sm:p-4"
      style={{
        borderColor: `${document.accent}77`,
        boxShadow: `0 0 30px ${document.glow}`,
      }}
    >

      <div className="px-2 pb-4 pt-3">
        <h2
          className="font-monaspace text-2xl font-semibold uppercase text-[var(--site-heading)] sm:text-3xl"
          style={{
            textShadow: `0 0 16px ${document.glow}`,
          }}
        >
          {document.title}
        </h2>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
        <iframe
          src={`${document.file}#toolbar=1&navpanes=0&view=FitH`}
          title={`${document.title} PDF preview`}
          className="h-[58vh] min-h-[500px] w-full bg-white"
          loading="lazy"
        />
      </div>
    </article>
  );
}

export default function Register() {
  const theme = {
    primary: "#149488",
    secondary: "#0d766f",
    glow: "rgba(20, 148, 136, 0.35)",
  };

  const documents = [
    {
      title: "Head Delegate Form",
      file: head_delegate,
      accent: "#149488",
      glow: "rgba(20, 148, 136, 0.3)",
    },
    {
      title: "Code of Conduct",
      file: codeofconduct,
      accent: "#0c7489",
      glow: "rgba(12, 116, 137, 0.3)",
    },
  ];

  return (
    <main
      className="relative min-h-screen overflow-hidden px-5 pb-20 pt-28 text-slate-100 sm:px-8 lg:px-12"
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
        backgroundAttachment: "fixed",
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
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-10 flex justify-start">
          <RegisterButton theme={theme} />
        </div>

        <header className="mb-12 text-center">
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
            Registrations
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Please fill out the following documents.
          </p>
        </header>

        <section className="grid gap-7 lg:grid-cols-2">
          {documents.map((document) => (
            <PDFCard
              key={document.title}
              document={document}
            />
          ))}
        </section>
      </div>
    </main>
  );
}