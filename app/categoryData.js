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
    pdfLink: "/StudyGuides/DASSP.pdf",
    description:
      "One spark, one chain, one shot at glory. DASSP fuses the precision of chemistry, the logic of physics, and the wonder of biology into our pure sciences category—daring delegates to chain together every answer, push their luck, and test their limits in a relentless pursuit of scientific glory.",
    gradient:
      "from-blue-600/20 via-cyan-400/20 to-blue-500/20",
    theme: {
      primary: "#38bdf8",
      secondary: "#22d3ee",
      surface: "#082f49",
      glow: "rgba(56, 189, 248, 0.28)",
    },
  },
  {
<<<<<<< Updated upstream
=======
    title: "Fantasm",
    fullTitle: "Fantasm",
    slug: "fantasm",
    subject: "Fiction",
    compulsory: true,
    img: Fantasm,
    pdfLink: "/StudyGuides/fantasm.pdf",
    description:
      "The plot thickens in our pop culture category. Fantasm amalgamates storytelling and fandom culture through each round.",
    gradient:
      "from-red-700/20 via-red-500/20 to-orange-600/20",
    theme: {
      primary: "#f87171",
      secondary: "#fb923c",
      surface: "#450a0a",
      glow: "rgba(248, 113, 113, 0.27)",
    },
  },
  {
>>>>>>> Stashed changes
    title: "Fraudiye Files",
    fullTitle: "Fraudiye Files",
    slug: "fraudiye-files",
    subject: "Law",
    compulsory: false,
    img: Fraudiye,
    pdfLink: "/StudyGuides/fraudiyefiles.pdf",
    description:
      "Did you see what happened, or only what you were meant to see? Which evidence survives scrutiny, and which was planted to mislead you? When every clue points somewhere, who decides which direction is the truth? Follow the trail. Question everything. Trust no one.",
    gradient:
      "from-orange-600/20 via-red-500/20 to-orange-500/20",
    theme: {
      primary: "#fb7185",
      secondary: "#f97316",
      surface: "#451a03",
      glow: "rgba(251, 113, 133, 0.26)",
    },
  },
  {
    title: "Fantasm",
    fullTitle: "Fantasm",
    slug: "fantasm",
    subject: "Fiction",
    compulsory: false,
    img: Fantasm,
    pdfLink: "/StudyGuides/Fantasm.pdf",
    description:
      "The plot thickens in our pop culture category. Fantasm amalgamates storytelling and fandom culture through each round.",
    gradient:
      "from-red-700/20 via-red-500/20 to-orange-600/20",
    theme: {
      primary: "#f87171",
      secondary: "#fb923c",
      surface: "#450a0a",
      glow: "rgba(248, 113, 113, 0.27)",
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
    gradient:
      "from-purple-600/20 via-blue-500/20 to-cyan-400/20",
    theme: {
      primary: "#a78bfa",
      secondary: "#22d3ee",
      surface: "#2e1065",
      glow: "rgba(167, 139, 250, 0.27)",
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
    gradient:
      "from-pink-500/20 via-purple-400/20 to-blue-500/20",
    theme: {
      primary: "#e879f9",
      secondary: "#a78bfa",
      surface: "#3b0764",
      glow: "rgba(232, 121, 249, 0.25)",
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
    gradient:
      "from-yellow-500/20 via-orange-400/20 to-yellow-600/20",
    theme: {
      primary: "#facc15",
      secondary: "#fb923c",
      surface: "#422006",
      glow: "rgba(250, 204, 21, 0.24)",
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
    gradient:
      "from-blue-500/20 via-cyan-400/20 to-blue-600/20",
    theme: {
      primary: "#60a5fa",
      secondary: "#22d3ee",
      surface: "#172554",
      glow: "rgba(96, 165, 250, 0.27)",
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
    gradient:
      "from-purple-500/20 via-pink-400/20 to-purple-600/20",
    theme: {
      primary: "#c084fc",
      secondary: "#f472b6",
      surface: "#3b0764",
      glow: "rgba(192, 132, 252, 0.27)",
    },
  },
  {
    title: "Daedalus's Apprenticeship",
    fullTitle: "Daedalus Apprenticeship",
    slug: "daedalus-apprenticeship",
    subject: "Engineering",
    compulsory: false,
    img: Daedalus,
    pdfLink: "/StudyGuides/daedalus's apprentice.pdf",
    description:
      "Build. Innovate. Optimize. Turn engineering principles into real-world solutions. Design prototypes, tackle challenges, and optimize your creations through creativity, critical thinking, and applied science.",
    gradient:
      "from-blue-400/20 via-cyan-300/20 to-blue-500/20",
    theme: {
      primary: "#67e8f9",
      secondary: "#38bdf8",
      surface: "#083344",
      glow: "rgba(103, 232, 249, 0.25)",
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
    gradient:
      "from-yellow-500/20 via-orange-400/20 to-yellow-600/20",
    theme: {
      primary: "#fcd34d",
      secondary: "#feab67",
      surface: "#422006",
      glow: "rgba(250, 204, 21, 0.24)",
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
    gradient:
      "from-green-500/20 via-cyan-400/20 to-green-600/20",
    theme: {
      primary: "#34d399",
      secondary: "#22d3ee",
      surface: "#022c22",
      glow: "rgba(52, 211, 153, 0.27)",
    },
  },
  {
    title: "Project X",
    fullTitle: "Project X",
    slug: "project-x",
    subject: "Robotics",
    compulsory: false,
    img: Projectx,
    pdfLink: "/StudyGuides/ProjectX.pdf",
    description:
      "A multimeter pressed to Project X would pick up nothing but the frantic hum of a 90-minute Nano build, the silent panic of a line-follower losing its track, and the violent crunch of Bluetooth magnet duels on the narrow bridge. Ask it for a winning strategy, though, and it'll tell you the bot just needs a faster sketch, a lucky flag steal, and a whole lot of extra credit.",
    gradient:
      "from-red-600/20 via-orange-500/20 to-red-500/20",
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
    gradient:
      "from-green-600/20 via-emerald-500/20 to-green-700/20",
    theme: {
      primary: "#4ade80",
      secondary: "#2dd4bf",
      surface: "#052e16",
      glow: "rgba(74, 222, 128, 0.26)",
    },
  },
];

export default categoryData;