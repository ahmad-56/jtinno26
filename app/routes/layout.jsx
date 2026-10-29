import { Outlet, useLocation } from "react-router";
import { staticHomepage, staticHeader } from "../homepagePresentation";
import "../static-homepage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBg from "../components/HeroBg";

export default function Layout() {
  const { pathname } = useLocation();
  const isStaticHome = staticHomepage && pathname === "/";
  return (
    <main
      className={isStaticHome ? "static-home" : undefined}
      data-header-motion={staticHeader ? "off" : "on"}
    >
      <HeroBg />
      <Navbar motion={!staticHeader && !isStaticHome} />

      <Outlet />
      <Footer />

      <div className="fixed top-20 left-6 w-16 h-16 border-t-2 border-l-2 border-[var(--site-border)] animate-pulse z-50 transition-all duration-300"></div>
      <div className="fixed top-20 right-6 w-16 h-16 border-t-2 border-r-2 border-[var(--site-border)] animate-pulse [animation-delay:300ms] z-50 transition-all duration-300"></div>
      <div className="fixed bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-[var(--site-border)] animate-pulse [animation-delay:600ms] z-50"></div>
      <div className="fixed bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-[var(--site-border)] animate-pulse [animation-delay:900ms] z-50"></div>
    </main>
  );
}
