function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Understanding the client's vision, goals and project requirements.",
    },
    {
      number: "02",
      title: "Concept Design",
      description:
        "Developing creative concepts that balance aesthetics, functionality and sustainability.",
    },
    {
      number: "03",
      title: "Planning",
      description:
        "Producing technical drawings, approvals and detailed project documentation.",
    },
    {
      number: "04",
      title: "Delivery",
      description:
        "Supporting construction and ensuring every project is delivered to the highest standard.",
    },
  ];

  return (
    <section className="bg-[#1A1A1A] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gray-400">
          Our Process
        </p>

        <h2 className="mb-16 font-serif text-5xl">
          From Vision To Reality
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[32px] border border-gray-700 p-8 transition hover:border-white"
            >
              <h3 className="mb-6 font-serif text-5xl text-gray-400">
                {step.number}
              </h3>

              <h4 className="mb-4 text-2xl font-semibold">
                {step.title}
              </h4>

              <p className="leading-8 text-gray-300">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;