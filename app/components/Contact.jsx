import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faLocationPin,
  faLocationPinLock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const contacts = [
  {
    name: "Shayan Akbar",
    initials: "SA",
    role: "Event Head",
    phoneLabel: "+92 309 9333096",
    phoneHref: "+923099333096",
    email: "shaayanakbar@gmail.com",
    accent: "#0c6177",
  },
  {
    name: "M Anas Salman",
    initials: "AS",
    role: "Event Head",
    phoneLabel: "+92 317 0222290",
    phoneHref: "+923170222290",
    email: "muhammad.anas.salman@gmail.com",
    accent: "#0d766f",
  },
];

function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: [0, 0.2] }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative w-full overflow-hidden px-4 py-12 text-center transition-all duration-1000 ease-out xs:px-8 md:px-15 md:py-16 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--site-secondary)]/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1
            className="text-3xl font-normal uppercase tracking-wider text-[var(--site-heading)] xs:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            id="contact-heading"
            style={{ fontFamily: '"Vermin", sans-serif' }}
          >
            Contact
          </h1>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {contacts.map((contact) => (
            <article
              key={contact.email}
              className="group relative overflow-hidden rounded-xl border-2 bg-black p-6 transition duration-300 hover:-translate-y-1 sm:p-8"
              style={{
                borderColor: `${contact.accent}99`,
                boxShadow: `
                  0 0 16px ${contact.accent}30,
                  0 16px 45px ${contact.accent}18
                `,
              }}
            >
              {/* Animated glowing circle */}
              <div
                className="pointer-events-none absolute right-4 top-4 z-20 flex h-5 w-5 items-center justify-center"
                aria-hidden="true"
              >
                <span
                  className="absolute h-4 w-4 animate-ping rounded-full opacity-70"
                  style={{
                    backgroundColor: contact.accent,
                  }}
                />

                <span
                  className="relative h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: contact.accent,
                    boxShadow: `0 0 10px ${contact.accent}`,
                  }}
                />
              </div>
              {/* Glow behind the heading */}
              <div
                className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full opacity-25 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
                style={{
                  backgroundColor: contact.accent,
                }}
                aria-hidden="true"
              />

              {/* Subtle inner border glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[10px]"
                style={{
                  boxShadow: `inset 0 0 14px ${contact.accent}18`,
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 min-w-0">
                <div className="mb-6 text-center">
                  <h2
                    className="mb-2 font-monaspace text-2xl font-semibold"
                    style={{
                      color: contact.accent,
                      textShadow: `0 0 18px ${contact.accent}55`,
                    }}
                  >
                    {contact.name}
                  </h2>

                  <p
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-white"
                    style={{
                      textShadow: `0 0 12px ${contact.accent}55`,
                    }}
                  >
                    {contact.role}
                  </p>
                </div>

                <div className="mx-auto max-w-sm space-y-1">
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="flex items-center gap-3 rounded-md px-1 py-2 text-sm text-slate-300 transition hover:text-[var(--site-heading)]"
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="w-4 shrink-0"
                      style={{ color: contact.accent }}
                    />

                    <span>{contact.phoneLabel}</span>
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 rounded-md px-1 py-2 text-sm text-slate-300 transition hover:text-[var(--site-heading)]"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-4 shrink-0"
                      style={{ color: contact.accent }}
                    />

                    <span className="min-w-0 break-all">
                      {contact.email}
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl border border-[var(--site-border)] bg-black/30 p-2 shadow-2xl shadow-[var(--site-glow)] backdrop-blur-sm sm:p-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12602.049475408632!2d74.27454330050205!3d31.46684539008887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e0fc887323%3A0xab96115d544c1796!2sLahore%20Grammar%20School%20for%20Boys%20(LGS%20JT)!5e1!3m2!1sen!2s!4v1725424124783!5m2!1sen!2s"
            width="100%"
            height="400"
            className="rounded-xl brightness-90 transition duration-300 hover:brightness-100"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lahore Grammar School Johar Town location"
          />
        </div>

        <div className="text-center mb-8 animate-[fadeIn_2.5s_ease-in-out]">
          <h2 className="text-lg font-semibold text-teal-600 mb-2 font-monaspace">
            Location
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto font-open-sans font-medium tracking-wide text-sm md:text-base">
            364-E/1, M. A. Block E 1 Phase 1 Johar Town, Lahore, Punjab 54700
          </p>
        </div>

        <div className="flex justify-center space-x-12 animate-[fadeIn_3s_ease-in-out]">
          <a
            href="https://www.instagram.com/jtinnoventions"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            aria-label="Instagram"
          >
            <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative text-4xl sm:text-5xl text-slate-300 hover:text-pink-400 transition duration-300 transform group-hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </a>
          <a
            href="mailto:Jtinnoventions25@gmail.com"
            className="relative group"
            aria-label="Email"
          >
            <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative text-4xl sm:text-5xl text-slate-300 hover:text-teal-400 transition duration-300 transform group-hover:scale-110">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </a>
          <a
            href="https://www.facebook.com/InnoventionsOfficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            aria-label="Facebook"
          >
            <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-400/20 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative text-4xl sm:text-5xl text-slate-300 hover:text-blue-500 transition duration-300 transform group-hover:scale-110">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
