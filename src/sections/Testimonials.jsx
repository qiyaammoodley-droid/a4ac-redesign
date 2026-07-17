function Testimonials() {
  const testimonials = [
    {
      name: "Property Developer",
      company: "Mixed-Use Development",
      quote:
        "A4AC delivered a design that exceeded our expectations. Their professionalism and attention to detail made the entire process seamless.",
    },
    {
      name: "Commercial Client",
      company: "Office Development",
      quote:
        "Their ability to combine creativity with functionality resulted in a space that perfectly represents our business.",
    },
    {
      name: "Residential Client",
      company: "Luxury Home",
      quote:
        "From concept to completion, the team demonstrated exceptional communication and architectural expertise.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gray-500">
          Testimonials
        </p>

        <h2 className="mb-16 font-serif text-5xl">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-[32px] bg-[#F8F8F6] p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <p className="mb-8 text-lg leading-8 text-gray-600">
                "{testimonial.quote}"
              </p>

              <div>
                <h3 className="font-semibold text-xl">
                  {testimonial.name}
                </h3>

                <p className="text-gray-500">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;