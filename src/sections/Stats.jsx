<section
  id="why-a4ac"
  className="bg-[#1A1A1A] py-28 text-white"
></section>
function Stats() {
  const strengths = [
    {
      title: "Award-Winning Practice",
      description:
        "Recognised for delivering innovative architectural solutions that combine creativity, functionality and excellence.",
    },
    {
      title: "Established in 2013",
      description:
        "Over a decade of designing residential, commercial and institutional projects across Africa.",
    },
    {
      title: "Pan-African Reach",
      description:
        "Successfully delivering projects throughout South Africa and across the African continent.",
    },
    {
      title: "AI & LiDAR Technology",
      description:
        "Using advanced digital tools to improve accuracy, collaboration and project delivery.",
    },
    {
      title: "Multi-Sector Experience",
      description:
        "Experienced in residential, commercial, education, healthcare, hospitality and mixed-use developments.",
    },
    {
      title: "Sustainable Design",
      description:
        "Designing buildings that are environmentally responsible, efficient and built for the future.",
    },
  ];

  return (
    <section className="bg-[#1A1A1A] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400">
            Why Choose A4AC
          </p>

          <h2 className="font-serif text-5xl">
            Architecture
            <br />
            That Creates Impact
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            A4AC Architects combines innovative thinking, sustainable design
            and advanced technology to deliver spaces that improve communities
            and shape the future of the built environment.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] border border-gray-700 bg-[#232323] p-10 transition duration-300 hover:-translate-y-2 hover:border-white"
            >
              <h3 className="mb-5 font-serif text-3xl">
                {item.title}
              </h3>

              <p className="leading-8 text-gray-300">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;