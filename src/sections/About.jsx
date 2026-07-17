<section
  id="about"
  className="bg-white py-28"
></section>
import aboutImage from "../assets/images/about.png";

function About() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}

        <div>
          <img
            src={aboutImage}
            alt="A4AC Architects"
            className="h-[650px] w-full rounded-[32px] object-cover shadow-xl"
          />
        </div>

        {/* Content */}

        <div>

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gray-500">
            About A4AC
          </p>

          <h2 className="font-serif text-5xl leading-tight">
            Architecture
            <br />
            For A Change
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            A4AC Architects is an award-winning architectural practice
            established in 2013 and based in Johannesburg, South Africa.
            The practice delivers innovative architectural solutions across
            residential, commercial, industrial, healthcare, educational,
            hospitality and mixed-use developments throughout Africa.
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            Through sustainable thinking, cutting-edge technology and a
            collaborative design process, A4AC continues to create spaces
            that are functional, inspiring and built for the future.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div className="rounded-3xl bg-[#F8F8F6] p-6">

              <h3 className="font-serif text-4xl">
                2013
              </h3>

              <p className="mt-2 text-gray-500">
                Established
              </p>

            </div>

            <div className="rounded-3xl bg-[#F8F8F6] p-6">

              <h3 className="font-serif text-4xl">
                Africa
              </h3>

              <p className="mt-2 text-gray-500">
                Projects Across The Continent
              </p>

            </div>

            <div className="rounded-3xl bg-[#F8F8F6] p-6">

              <h3 className="font-serif text-4xl">
                AI
              </h3>

              <p className="mt-2 text-gray-500">
                Modern Design Technology
              </p>

            </div>

            <div className="rounded-3xl bg-[#F8F8F6] p-6">

              <h3 className="font-serif text-4xl">
                Award
              </h3>

              <p className="mt-2 text-gray-500">
                Winning Practice
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;