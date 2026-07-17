<section
  id="services"
  className="bg-[#F8F8F6] py-28"
></section>
function Services() {
  const services = [
    {
      title: "Architecture",
      description:
        "Innovative architectural solutions tailored to residential, commercial and industrial developments.",
    },
    {
      title: "Urban Design",
      description:
        "Thoughtful planning that creates sustainable, functional and connected communities.",
    },
    {
      title: "Interior Design",
      description:
        "Beautiful interior environments that complement architecture while improving everyday experiences.",
    },
    {
      title: "Project Management",
      description:
        "Professional coordination from concept through completion to ensure quality and efficiency.",
    },
    {
      title: "AI & LiDAR Technology",
      description:
        "Modern digital workflows using advanced technologies to improve design precision and project delivery.",
    },
    {
      title: "Sustainable Design",
      description:
        "Environmentally responsible solutions focused on efficiency, longevity and future-ready buildings.",
    },
  ];

  return (
    <section className="bg-[#F8F8F6] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gray-500">
          Services
        </p>

        <h2 className="mb-5 font-serif text-5xl">
          What We Do
        </h2>

        <p className="mb-16 max-w-2xl text-lg leading-8 text-gray-600">
          We provide comprehensive architectural services that combine
          creativity, sustainability and technical excellence across every
          stage of the design process.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[32px] bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="mb-6 font-serif text-3xl">
                {service.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;