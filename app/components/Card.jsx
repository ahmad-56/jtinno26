import { Link } from "react-router";
import Tag from "./Tag";

function Card({
  img,
  title,
  slug,
  description,
  compulsory,
  gradient = "from-blue-600/20 via-cyan-500/20 to-blue-600/20",
}) {
  return (
    <Link
      to={`/categories/${slug}`}
      aria-label={`Open the ${title} category page`}
      className="group relative block max-w-40 cursor-pointer transition-transform duration-300 ease-out hover:z-20 hover:scale-105 hover:drop-shadow-xl hover:drop-shadow-cyan-900 sm:max-w-50 md:max-w-60 xl:max-w-65 2xl:max-w-75"
    >
      <article className="relative">
        <div
          className={`pointer-events-none absolute -inset-3 rounded-xl bg-gradient-to-r ${gradient} animate-pulse opacity-60 blur-lg transition duration-500 group-hover:opacity-100`}
        />

        {compulsory && (
          <div className="pointer-events-none absolute right-0 top-0 z-20">
            <Tag text="Compulsory" />
          </div>
        )}

        <div
          className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${gradient} transition-all duration-300 sm:group-hover:rounded-b-none`}
        >
          <div className="bg-black/20 transition-colors group-hover:bg-black/10">
            <img
              src={img}
              alt={`${title} category artwork`}
              className="block w-full"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 hidden translate-y-[80%] rounded-b-lg opacity-0 transition-all duration-300 group-hover:translate-y-[95%] group-hover:opacity-100 sm:block">
          <div className="w-full bg-primary px-2 py-5 text-center text-slate-300">
            <h2 className="mb-2 font-semibold text-white">{title}</h2>

            <p className="text-sm font-medium">
              {description}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default Card;