import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 lg:py-20"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500 sm:text-sm">
            Award Winning Architects
          </p>

          <h1 className="font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Designing
            <br />
            Spaces That
            <br />
            Shape The
            <br />
            Future.
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-9 text-gray-600">
            A4AC Architects creates innovative residential,
            commercial and industrial spaces through
            sustainable design and timeless architecture.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">

            <Link
              to="/projects"
              className="rounded-full bg-black px-9 py-4 text-center text-white transition duration-300 hover:-translate-y-1 hover:bg-neutral-800"
            >
              View Projects
            </Link>

            <Link
              to="/services"
              className="rounded-full border border-gray-300 px-9 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
            >
              Our Services
            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <img
            src={heroImage}
            alt="A4AC Architecture"
            className="h-[420px] w-full rounded-3xl object-cover shadow-2xl transition duration-700 hover:scale-105 sm:h-[520px] lg:h-[720px]"
          />

          {/* Floating Card */}

          <div className="absolute bottom-6 left-6 rounded-2xl border border-white/40 bg-white/90 p-6 shadow-2xl backdrop-blur-md">

            <h2 className="font-serif text-4xl">
              2013
            </h2>

            <p className="mt-2 leading-7 text-gray-600">
              Established
              <br />
              in Johannesburg
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;