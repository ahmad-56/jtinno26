import { useEffect, useState } from "react";
import { Link } from "react-router";
import categoryData from "../categoryData";
import "../app.css";

function Chevron({ open = false }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={`h-3.5 w-3.5 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="m5 7.5 5 5 5-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenus = () => {
    setIsOpen(false);
    setIsCategoriesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-full border-4 border-[var(--site-border)] px-3 font-[Vermin] tracking-wider shadow-md shadow-[var(--site-glow)] backdrop-blur-md transition-all duration-300 xs:px-6 md:px-10 ${
        isScrolled ? "bg-black/70 pb-1 pt-2" : "bg-black/40 pb-2 pt-3"
      }`}
      aria-label="Primary navigation"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_#0c6177_1px,_transparent_1px)] bg-[length:20px_20px] opacity-30"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--site-primary)] to-transparent opacity-60" />

      <div className="relative mx-auto flex w-full flex-col px-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center space-x-3"
            aria-label="JT Innoventions home"
          >
            <span
              className="flex items-center space-x-1"
              aria-hidden="true"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--site-accent)]" />
              <span className="h-1 w-1 rounded-full bg-[var(--site-primary)]" />
            </span>

            <span
              className={`text-white drop-shadow-[0_0_10px_var(--site-glow-strong)] transition-all duration-300 ${
                isScrolled
                  ? "text-base md:text-lg lg:text-xl"
                  : "text-lg md:text-xl lg:text-2xl"
              }`}
              id="headerText"
            >
              JT Innoventions

              <span className="ml-1 font-mono text-xs text-[var(--site-heading)] opacity-90">
                ’26
              </span>
            </span>

            <span className="hidden h-px w-16 bg-gradient-to-r from-[var(--site-primary)] to-transparent sm:block" />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="relative z-10 cursor-pointer p-2 text-[var(--site-accent)] drop-shadow-[0_0_8px_var(--site-glow)] transition-all hover:drop-shadow-[0_0_12px_var(--site-glow-strong)] sm:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-6"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6 6 18"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        <ul
          className={`flex w-full flex-col items-center justify-center overflow-y-auto text-center uppercase tracking-wide text-white drop-shadow-[0_0_8px_var(--site-glow)] transition-all duration-500 ease-in-out sm:w-auto sm:flex-row sm:overflow-visible sm:opacity-100 ${
            isScrolled ? "text-xs md:text-sm" : "text-sm md:text-base"
          } ${
            isOpen
              ? "mt-4 max-h-[78vh] opacity-100 sm:mt-0 sm:max-h-none"
              : "mt-0 max-h-0 opacity-0 sm:max-h-none sm:opacity-100"
          }`}
          id="headerText"
        >
          <li className="relative w-full sm:w-auto">
            <Link
              className="nav-link block px-2 py-2 md:px-3"
              to="/#hero"
              onClick={closeMenus}
            >
              Home
            </Link>
          </li>

          <li className="relative w-full sm:w-auto">
            <Link
              className="nav-link block px-2 py-2 md:px-3"
              to="/#about"
              onClick={closeMenus}
            >
              About
            </Link>
          </li>

          <li
            className="relative w-full sm:w-auto"
            onMouseEnter={() => setIsCategoriesOpen(true)}
            onMouseLeave={() => setIsCategoriesOpen(false)}
          >
            <div className="flex items-center justify-center">
              <Link
                className="nav-link block px-2 py-2 md:px-3"
                to="/categories"
                onClick={closeMenus}
              >
                Categories
              </Link>

              <button
                type="button"
                className="mr-2 rounded p-2 text-[var(--site-accent)] sm:hidden"
                onClick={() =>
                  setIsCategoriesOpen((open) => !open)
                }
                aria-label="Toggle category links"
                aria-expanded={isCategoriesOpen}
              >
                <Chevron open={isCategoriesOpen} />
              </button>

              <span
                className={`pointer-events-none -ml-2 mr-1 hidden origin-center text-[var(--site-accent)] transition-all duration-300 ease-out sm:inline-flex ${
                  isCategoriesOpen
                    ? "translate-y-0.5 rotate-180 drop-shadow-[0_0_6px_var(--site-glow-strong)]"
                    : ""
                }`}
              >
                <Chevron />
              </span>
            </div>

            <div
              className={`z-[70] overflow-hidden transition-all duration-300 sm:absolute sm:left-1/2 sm:top-full sm:max-h-none sm:w-[34rem] sm:-translate-x-1/2 sm:rounded-xl sm:border sm:border-[var(--site-border)] sm:bg-[var(--site-background-secondary)]/95 sm:p-3 sm:shadow-2xl sm:shadow-[var(--site-glow)] sm:backdrop-blur-xl ${
                isCategoriesOpen
                  ? "visible max-h-[70vh] translate-y-0 opacity-100 sm:visible sm:opacity-100"
                  : "invisible max-h-0 translate-y-2 opacity-0 sm:invisible sm:max-h-none sm:opacity-0"
              }`}
            >
              <div className="grid gap-1 py-2 sm:grid-cols-2 sm:py-0">
                <Link
                  to="/categories"
                  onClick={closeMenus}
                  className="rounded-lg border border-[var(--site-border)] bg-[var(--site-primary)]/10 px-3 py-2.5 text-left text-xs text-[var(--site-heading)] transition-all duration-200 hover:border-[var(--site-border-hover)] hover:bg-[var(--site-primary)]/20 active:translate-y-0.5 active:scale-[0.98] active:bg-[var(--site-accent)]/20 sm:col-span-2"
                >
                  View all categories
                </Link>

                {categoryData.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/categories/${category.slug}`}
                    onClick={closeMenus}
                    className="!flex min-h-10 w-full flex-row items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs text-slate-200 transition-all duration-200 hover:bg-[var(--site-primary)]/15 hover:text-white active:translate-y-0.5 active:scale-[0.97] active:bg-[var(--site-accent)]/20"
                  >
                    <span className="flex min-w-0 items-center">
                      <span
                        className="mr-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-200"
                        style={{
                          backgroundColor: category.theme.primary,
                          boxShadow: `0 0 7px ${category.theme.glow}`,
                        }}
                        aria-hidden="true"
                      />

                      <span className="truncate">
                        {category.title}
                      </span>
                    </span>

                    {category.compulsory && (
                      <span className="pointer-events-none ml-auto inline-flex shrink-0 items-center rounded-sm bg-[#111] px-2 py-1">
                        <span className="bg-linear-65 from-purple-500 from-5% via-pink-500 to-orange-500 to-90% bg-clip-text text-[10px] font-bold uppercase tracking-wider text-transparent">
                          Compulsory
                        </span>
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li className="group relative w-full sm:w-auto">
            <Link
              className="nav-link relative block px-2 py-2 md:px-3"
              to="/register"
              onClick={closeMenus}
            >
              <span className="absolute inset-0 bg-[var(--site-primary)]/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-[var(--site-accent)]/25" />
              <span className="relative">Register</span>
            </Link>
          </li>

          <li className="relative w-full sm:w-auto">
            <Link
              className="nav-link block px-2 py-2 md:px-3"
              to="/#sponsors"
              onClick={closeMenus}
            >
              Sponsors
            </Link>
          </li>

          <li className="relative w-full sm:w-auto">
            <Link
              className="nav-link block px-2 py-2 md:px-3"
              to="/#contact"
              onClick={closeMenus}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--site-primary)]/70 to-transparent" />
    </nav>
  );
}

export default Navbar;