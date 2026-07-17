function PageHero({ subtitle, title, description }) {
  return (
    <section className="border-b border-gray-200 bg-[#F8F8F6]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
          {subtitle}
        </p>

        <h1 className="max-w-4xl font-serif text-5xl leading-tight text-[#1A1A1A] lg:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          {description}
        </p>

      </div>
    </section>
  );
}

export default PageHero;