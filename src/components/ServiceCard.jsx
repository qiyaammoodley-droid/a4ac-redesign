function ServiceCard({ title, description }) {
  return (
    <div className="rounded-3xl bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <h2 className="mb-6 font-serif text-4xl">
        {title}
      </h2>

      <p className="leading-8 text-gray-600">
        {description}
      </p>

    </div>
  );
}

export default ServiceCard;