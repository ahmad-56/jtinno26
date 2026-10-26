import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  async prerender() {
    return [
      "/",
      "/categories",
      "/categories/dassp",
      "/categories/fraudiye-files",
      "/categories/fantasm",
      "/categories/decodum",
      "/categories/minds-in-motion",
      "/categories/panacea",
      "/categories/infinitesima",
      "/categories/steam",
      "/categories/daedalus-apprenticeship",
      "/categories/feynmans-final-project",
      "/categories/cygnus-veil",
      "/categories/bit-by-bit",
      "/categories/project-x",
      "/categories/envirothon",
    ];
  },
} satisfies Config;
