import { Link } from "react-router-dom";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";

function Projects() {
  const projects = [
    {
      image: project1,
      title: "Cape Town Student Housing",
      category: "Student Housing",
      location: "Cape Town, South Africa",
    },
    {
      image: project2,
      title: "Northcliff Container House",
      category: "Residential Architecture",
      location: "Johannesburg, South Africa",
    },
    {
      image: project3,
      title: "Linden Container House",
      category: "Container Architecture",
      location: "Johannesburg, South Africa",
    },
    {
      image: project4,
      title: "Ivory Coast Architects",
      category: "Commercial Development",
      location: "Abidjan, Ivory Coast",
    },
    {
      image: project5,
      title: "AUMA Tower",
      category: "High-Rise Development",
      location: "Dubai, UAE",
    },
  ];

  return (
    <section id="projects" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
            Selected Work
          </p>

          <h2 className="font-serif text-6xl">
            Projects That
            <br />
            Define Excellence
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            Explore a curated selection of A4AC Architects' work,
            showcasing innovative residential, commercial and
            international developments across Africa and beyond.
          </p>

        </div>

        <div className="space-y-32">

          {projects.map((project, index) => (

            <div
              key={project.title}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              <div className="overflow-hidden rounded-[36px]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[650px] w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div>

                <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gray-500">
                  {project.category}
                </p>

                <h3 className="font-serif text-5xl leading-tight">
                  {project.title}
                </h3>

                <p className="mt-4 text-lg text-gray-500">
                  {project.location}
                </p>

                <p className="mt-8 max-w-lg leading-8 text-gray-600">
                  Every project is approached with a commitment to
                  innovation, sustainability and timeless architectural
                  design, creating spaces that inspire communities and
                  improve the built environment.
                </p>

                <Link
                  to="/projects"
                  className="mt-10 inline-block rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
                >
                  View Project →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;