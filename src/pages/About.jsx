import PageHero from "../components/PageHero";
import AboutSection from "../sections/About";
import Stats from "../sections/Stats";

function About() {
  return (
    <>
      <PageHero
        subtitle="ABOUT A4AC"
        title="Architecture For A Better Future."
        description="Established in 2013, A4AC Architects is an award-winning South African architectural practice delivering innovative residential, commercial, industrial and mixed-use developments across Africa."
      />

      <AboutSection />

      <Stats />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">

          <div>
            <h2 className="mb-6 font-serif text-4xl sm:text-5xl">
              Our Mission
            </h2>

            <p className="text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
              Our mission is to create meaningful architecture that improves
              communities through innovative design, sustainability and
              technical excellence. Every project is approached with a balance
              of creativity and functionality to ensure lasting value.
            </p>
          </div>

          <div>
            <h2 className="mb-6 font-serif text-4xl sm:text-5xl">
              Our Vision
            </h2>

            <p className="text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
              We aspire to shape the future of architecture across Africa by
              embracing modern technology, sustainable practices and timeless
              design principles while delivering exceptional client
              experiences.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;