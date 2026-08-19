import Fraudiye from "./assets/CategoriesImg/fraudiye.webp";
import BitByBit from "./assets/CategoriesImg/bitbybit.webp";
import CygnusVeil from "./assets/CategoriesImg/cygnusveil.webp";
import Daedalus from "./assets/CategoriesImg/daedalus.webp";
import Dassp from "./assets/CategoriesImg/dassp.webp";
import Envirothon from "./assets/CategoriesImg/envirothon.webp";
import Fantasm from "./assets/CategoriesImg/fantasm.webp";
import Feynmans from "./assets/CategoriesImg/feynmans.webp";
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
      "As our first compulsory category, Dr. Abdus Salam Science Project combines pure sciences to produce a category that amalgamates chemical reactions, theoretical physics and anatomical biology. So delegates, are you ready to overcome the curveball in our indispensable category?",
    gradient: "from-blue-600/20 via-cyan-400/20 to-blue-500/20",
    theme: {
      primary: "#38bdf8",
      secondary: "#22d3ee",
      surface: "#082f49",
      glow: "rgba(56, 189, 248, 0.28)",
    },
  },
  {
    title: "Fraudiye Files",
    fullTitle: "Fraudiye Files",
    slug: "fraudiye-files",
    subject: "Forensics & Investigation",
    compulsory: false,
    img: Fraudiye,
    pdfLink: "/StudyGuides/FraudiyeFiles.pdf",
    description:
      "Did the butler do it? Did you do it? Unveil the mystery in our second compulsory category. Trust no statistic or, as we at Fraudiye Files like to say, nothing is more deceptive than a simple fact.",
    gradient: "from-orange-600/20 via-red-500/20 to-orange-500/20",
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
    subject: "Pop Culture & Storytelling",
    compulsory: false,
    img: Fantasm,
    pdfLink: "/StudyGuides/Fantasm.pdf",
    description:
      "The plot thickens in our pop culture category. Fantasm amalgamates the thrill of comic-book storytelling with world-building in recognisable scenes.",
    gradient: "from-red-700/20 via-red-500/20 to-orange-600/20",
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
    subject: "Cryptography & Languages",
    compulsory: false,
    img: Decodum,
    pdfLink: "/StudyGuides/Decodum.pdf",
    description:
      "Decipher cryptography, different languages and codes to assess pattern recognition in Decodum. In fact, why wait? Here is a code to get ahead: ... . . / -.-- --- ..- / --- -. / .---- ..---",
    gradient: "from-purple-600/20 via-blue-500/20 to-cyan-400/20",
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
    subject: "Psychology & Behaviour",
    compulsory: false,
    img: MindsInMotion,
    pdfLink: "/StudyGuides/MindsInMotion.pdf",
    description:
      "Achieve a fully functional frontal lobe before your mid-twenties with Minds in Motion. Side effects may include a crippling addiction to self-diagnosing psychological illness.",
    gradient: "from-pink-500/20 via-purple-400/20 to-blue-500/20",
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
    subject: "Life Sciences & Medicine",
    compulsory: false,
    img: Panacea,
    pdfLink: "/StudyGuides/Panacea.pdf",
    description:
      "Practise life sciences and prescribe medicines to your own patients at Panacea, because who needs a residency when lives are on the line?",
    gradient: "from-yellow-500/20 via-orange-400/20 to-yellow-600/20",
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
    pdfLink: "/StudyGuides/Infinitesima.pdf",
    description:
      "A graphing calculator to show the imaginary solution to the square root of a negative number would surely come in handy at Infinitesima. Maybe the practical application of mathematical concepts is the friends we made along the way.",
    gradient: "from-blue-500/20 via-cyan-400/20 to-blue-600/20",
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
    subject: "Art & Science",
    compulsory: false,
    img: Steam,
    pdfLink: "/StudyGuides/steAm.pdf",
    description:
      "Reveal the art and conceal the artist in steAm. Showcase your artistic impression in our fusion of arts and science. After all, all art is quite meaningless.",
    gradient: "from-purple-500/20 via-pink-400/20 to-purple-600/20",
    theme: {
      primary: "#c084fc",
      secondary: "#f472b6",
      surface: "#3b0764",
      glow: "rgba(192, 132, 252, 0.27)",
    },
  },
  {
    title: "Daedalus Apprenticeship",
    fullTitle: "Daedalus Apprenticeship",
    slug: "daedalus-apprenticeship",
    subject: "Engineering",
    compulsory: false,
    img: Daedalus,
    pdfLink: "/StudyGuides/Daedalus_s.pdf",
    description:
      "Put your engineering prowess to the test. Daedalus Apprenticeship can simultaneously ask you to build a car chassis and a motor engine.",
    gradient: "from-blue-400/20 via-cyan-300/20 to-blue-500/20",
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
    subject: "Astronomy",
    compulsory: false,
    img: CygnusVeil,
    pdfLink: "/StudyGuides/Cygnus_Veil.pdf",
    description:
      "Identify hidden constellations and celestial bodies in Cygnus Veil, our astronomy category. You might even explore the origins of the world on your lookout.",
    gradient: "from-yellow-500/20 via-orange-400/20 to-yellow-600/20",
    theme: {
      primary: "#fcd34d",
      secondary: "#818cf8",
      surface: "#1e1b4b",
      glow: "rgba(129, 140, 248, 0.28)",
    },
  },
  {
    title: "Bit by Bit",
    fullTitle: "Bit by Bit",
    slug: "bit-by-bit",
    subject: "Computer Science & IT",
    compulsory: false,
    img: BitByBit,
    pdfLink: "/StudyGuides/BitByBit.pdf",
    description:
      "Test your coding skills with Bit by Bit, our Information Technology and Computer Science category. The stronger the code, the higher the chances of winning.",
    gradient: "from-green-500/20 via-cyan-400/20 to-green-600/20",
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
      "Building Mindstorm Legos pays off in Project X. Program robots to perform autonomous functions and integrate coding with real-world applications in our robotics category.",
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
    subject: "Environmental Science",
    compulsory: false,
    img: Envirothon,
    pdfLink: "/StudyGuides/Envirothon.pdf",
    description:
      "Global temperatures are rising. Investigate climate change and help devise ecological solutions to overcome a global catastrophe in our environmental science category.",
    gradient: "from-green-600/20 via-emerald-500/20 to-green-700/20",
    theme: {
      primary: "#4ade80",
      secondary: "#2dd4bf",
      surface: "#052e16",
      glow: "rgba(74, 222, 128, 0.26)",
    },
  },
];

export default categoryData;
