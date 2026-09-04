import Fraudiye from "./assets/CategoriesImg/fraudiye.webp";
import BitByBit from "./assets/CategoriesImg/bitbybit.webp";
import CygnusVeil from "./assets/CategoriesImg/cygnusveil.webp";
import Daedalus from "./assets/CategoriesImg/daedalus.webp";
import Dassp from "./assets/CategoriesImg/dassp.webp";
import Envirothon from "./assets/CategoriesImg/envirothon.webp";
import Fantasm from "./assets/CategoriesImg/fantasm.webp";
import Infinitesima from "./assets/CategoriesImg/infinitesima.webp";
import MindsInMotion from "./assets/CategoriesImg/mindsInMotion.webp";
import Panacea from "./assets/CategoriesImg/panacea.webp";
import Projectx from "./assets/CategoriesImg/projectx.webp";
import Steam from "./assets/CategoriesImg/steam.webp";
import Decodum from "./assets/CategoriesImg/decodum.webp";

const categoryData = [
  {
    title: "DASSP",
    fullTitle: "Dr. Abdus Salam Science Project",
    slug: "dassp",
    subject: "Pure Sciences",
    compulsory: true,
    img: Dassp,
    pdfLink: "/StudyGuides/dassp.pdf",
    description:
      "One spark, one chain, one shot at glory. DASSP fuses the precision of chemistry, the logic of physics, and the wonder of biology into our pure sciences category—daring delegates to chain together every answer, push their luck, and test their limits in a relentless pursuit of scientific glory.",
    gradient: "from-emerald-600/20 via-teal-400/20 to-green-500/20",
    theme: {
      primary: "#5eead4",
      secondary: "#22c55e",
      surface: "#052e24",
      glow: "rgba(94, 234, 212, 0.28)",
    },
  },
  {
    title: "Fantasm",
    fullTitle: "Fantasm",
    slug: "fantasm",
    subject: "Fiction",
    compulsory: true,
    img: Fantasm,
    pdfLink: "/StudyGuides/fantasm.pdf",
    description:
      "The plot thickens in our pop culture category. Fantasm amalgamates storytelling and fandom culture through each round.",
    gradient: "from-red-700/25 via-rose-600/20 to-red-500/20",
    theme: {
      primary: "#ef4444",
      secondary: "#be123c",
      surface: "#2f1015",
      glow: "rgba(239, 68, 68, 0.27)",
    },
  },
  {
    title: "Fraudiye Files",
    fullTitle: "Fraudiye Files",
    slug: "fraudiye-files",
    subject: "Law",
    compulsory: false,
    img: Fraudiye,
    pdfLink: "/StudyGuides/fraudiyefiles.pdf",
    description:
      "Did you see what happened, or only what you were meant to see? Which evidence survives scrutiny, and which was planted to mislead you? When every clue points somewhere, who decides which direction is the truth? Follow the trail. Question everything. Trust no one.",
    gradient: "from-rose-700/25 via-red-600/20 to-orange-500/20",
    theme: {
      primary: "#f43f5e",
      secondary: "#f97316",
      surface: "#3b0a16",
      glow: "rgba(244, 63, 94, 0.26)",
    },
  },
  {
    title: "Decodum",
    fullTitle: "Decodum",
    slug: "decodum",
    subject: "Cryptography",
    compulsory: false,
    img: Decodum,
    pdfLink: "/StudyGuides/decodum.pdf",
    description:
      "Solve cryptic codes and concealed messages within an immersive alternate reality game that fuses narrative storytelling with problem-solving. The division evaluates critical thinking, pattern recognition, originality, and decoding ability as participants step into the shoes of codebreakers, uncovering layers of mystery through an engaging and intellectually stimulating experience.",
    gradient: "from-indigo-800/30 via-blue-700/25 to-violet-600/20",
    theme: {
      primary: "#6366f1",
      secondary: "#3b82f6",
      surface: "#090b3a",
      glow: "rgba(99, 102, 241, 0.27)",
    },
  },
  {
    title: "Minds in Motion",
    fullTitle: "Minds in Motion",
    slug: "minds-in-motion",
    subject: "Psychology",
    compulsory: false,
    img: MindsInMotion,
    pdfLink: "/StudyGuides/mindsinmotion.pdf",
    description:
      "Mind over matter starts here in our psychology category. Minds in Motion explores the inner workings of human behaviour, blending the depth of cognitive science with the intriguing patterns of the everyday mind.",
    gradient: "from-teal-600/25 via-cyan-500/20 to-pink-500/20",
    gradient: "from-emerald-700/25 via-teal-500/20 to-cyan-500/20",
    theme: {
      primary: "#34d399",
      secondary: "#22d3ee",
      surface: "#0b3a35",
      glow: "rgba(52, 211, 153, 0.25)",
    },
  },
  {
    title: "Panacea",
    fullTitle: "Panacea",
    slug: "panacea",
    subject: "Bio-Medical",
    compulsory: false,
    img: Panacea,
    pdfLink: "/StudyGuides/panacea.pdf",
    description:
      "A stethoscope pressed to Panacea's chest would pick up nothing but the frantic thumping of buzzers and the occasional flatline of a wrong guess. Ask it for a diagnosis, though, and it'll tell you the patient just needs more extra credit.",
    gradient: "from-amber-600/25 via-yellow-400/20 to-emerald-500/20",
    theme: {
      primary: "#f6c453",
      secondary: "#d39e34",
      surface: "#16382c",
      glow: "rgba(246, 196, 83, 0.27)",
    },
  },
  {
    title: "Infinitesima",
    fullTitle: "Infinitesima",
    slug: "infinitesima",
    subject: "Mathematics",
    compulsory: false,
    img: Infinitesima,
    pdfLink: "/StudyGuides/infinitesima.pdf",
    description:
      "An abacus that counts how many times you second-guess yourself would surely come in handy at Infinitesima. By round two, it would probably just give up and count backwards.",
    gradient: "from-amber-700/25 via-yellow-500/20 to-teal-600/20",
    theme: {
      primary: "#d4af37",
      secondary: "#5f8f8b",
      surface: "#27362f",
      glow: "rgba(212, 175, 55, 0.25)",
    },
  },
  {
    title: "steAm",
    fullTitle: "steAm",
    slug: "steam",
    subject: "Art & Design",
    compulsory: false,
    img: Steam,
    pdfLink: "/StudyGuides/steAm.pdf",
    description:
      "Science meets imagination in our creative art category. steAm amalgamates the rigour of ecological world-building with the boundless expression of original design.",
    gradient: "from-violet-600/25 via-purple-500/20 to-fuchsia-500/20",
    theme: {
      primary: "#a855f7",
      secondary: "#d946ef",
      surface: "#24054a",
      glow: "rgba(168, 85, 247, 0.27)",
    },
  },
  {
    title: "Daedalus's Apprenticeship",
    fullTitle: "Daedalus Apprenticeship",
    slug: "daedalus-apprenticeship",
    subject: "Engineering",
    compulsory: false,
    img: Daedalus,
    pdfLink: "/StudyGuides/daedalus_s apprentice.pdf",
    description:
      "Build. Innovate. Optimize. Turn engineering principles into real-world solutions. Design prototypes, tackle challenges, and optimize your creations through creativity, critical thinking, and applied science.",
    gradient: "from-blue-700/25 via-indigo-500/20 to-violet-500/20",
    theme: {
      primary: "#60a5fa",
      secondary: "#2563eb",
      surface: "#101b4f",
      glow: "rgba(96, 165, 250, 0.26)",
    },
  },
  {
    title: "Cygnus Veil",
    fullTitle: "Cygnus Veil",
    slug: "cygnus-veil",
    subject: "Space & Astronomy",
    compulsory: false,
    img: CygnusVeil,
    pdfLink: "/StudyGuides/cygnusveil.pdf",
    description:
      "Explore the mysteries of astronomy through challenges that test knowledge and problem-solving while uncovering the wonders of the universe.",
    gradient: "from-slate-800/25 via-amber-600/20 to-yellow-500/20",
    theme: {
      primary: "#f59e0b",
      secondary: "#3b82f6",
      surface: "#1f2f3a",
      glow: "rgba(245, 158, 11, 0.25)",
    },
  },
  {
    title: "Bit by Bit",
    fullTitle: "Bit by Bit",
    slug: "bit-by-bit",
    subject: "IT & Computer Science",
    compulsory: false,
    img: BitByBit,
    pdfLink: "/StudyGuides/bitbybit.pdf",
    description:
      "Bit by Bit investigates the intersection of technology within the sphere of digital innovation. Participants test their skills in data analysis, cybersecurity, programming, and related computing disciplines. This track empowers competitors to leverage information technology to forge functional solutions, moving from network-troubleshooting simulations to coding battles.",
    gradient: "from-sky-700/25 via-cyan-500/20 to-teal-500/20",
    theme: {
      primary: "#67e8f9",
      secondary: "#38bdf8",
      surface: "#082f49",
      glow: "rgba(103, 232, 249, 0.27)",
    },
  },
  {
    title: "Project X",
    fullTitle: "Project X",
    slug: "project-x",
    subject: "Robotics",
    compulsory: false,
    img: Projectx,
    pdfLink: "/StudyGuides/projectX.pdf",
    description:
      "A multimeter pressed to Project X would pick up nothing but the frantic hum of a 90-minute Nano build, the silent panic of a line-follower losing its track, and the violent crunch of Bluetooth magnet duels on the narrow bridge. Ask it for a winning strategy, though, and it'll tell you the bot just needs a faster sketch, a lucky flag steal, and a whole lot of extra credit.",
    gradient: "from-red-600/20 via-orange-500/20 to-red-500/20",
    theme: {
      primary: "#fb7185",
      secondary: "#fb923c",
      surface: "#450a0a",
      glow: "rgba(251, 113, 133, 0.27)",
    },
  },
  {
    title: "Envirothon",
    fullTitle: "Envirothon",
    slug: "envirothon",
    subject: "Environment",
    compulsory: false,
    img: Envirothon,
    pdfLink: "/StudyGuides/envirothon.pdf",
    description:
      "Are you ready to take on the challenges our planet faces? This season’s Envirothon is your chance to Explore, Innovate, and Sustain! Tackle urgent environmental and climate issues, think creatively, and develop bold solutions for a greener, more sustainable future.",
    gradient: "from-green-700/25 via-lime-500/20 to-emerald-500/20",
    theme: {
      primary: "#84cc16",
      secondary: "#22c55e",
      surface: "#11351f",
      glow: "rgba(132, 204, 22, 0.26)",
    },
  },
];

export default categoryData;