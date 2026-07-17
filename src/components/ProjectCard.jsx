import { useState } from "react";

function ProjectCard({
  image,
  title,
  location,
  description,
}) {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Image */}

        <div className="cursor-pointer overflow-hidden">
          <img
            src={image}
            alt={title}
            onClick={() => setShowImage(true)}
            className="h-[260px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[350px] lg:h-[500px]"
          />
        </div>

        {/* Content */}

        <div className="p-6 sm:p-8">

          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
            {location}
          </p>

          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            {title}
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {description}
          </p>

        </div>

      </div>

      {/* Fullscreen Image */}

      {showImage && (
        <div
          onClick={() => setShowImage(false)}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 sm:p-6"
        >

          <button
            onClick={() => setShowImage(false)}
            className="absolute right-6 top-6 text-4xl text-white transition hover:text-gray-300 sm:right-8 sm:top-8 sm:text-5xl"
          >
            ×
          </button>

          <img
            src={image}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-2xl sm:max-w-[90vw]"
          />

        </div>
      )}
    </>
  );
}

export default ProjectCard;