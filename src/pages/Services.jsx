import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import services from "../data/services";

function Services() {
  return (
    <>
      <PageHero
        subtitle="OUR SERVICES"
        title="Architecture With Purpose."
        description="A4AC Architects provides comprehensive architectural services from concept to completion, combining creativity, innovation and sustainable thinking."
      />

      <section className="bg-[#F8F8F6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
              What We Offer
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              From residential homes to international commercial developments,
              we deliver architectural solutions tailored to every client's
              vision.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default Services;