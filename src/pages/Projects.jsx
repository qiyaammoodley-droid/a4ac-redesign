import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <>
      <PageHero
        subtitle="FEATURED PROJECTS"
        title="Architecture That Leaves A Lasting Impression."
        description="Explore a curated selection of A4AC Architects' work across South Africa and internationally, showcasing innovation, sustainability and timeless architectural design."
      />

      <section className="bg-[#F8F8F6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center lg:mb-20">

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
              Selected Works
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              A collection of projects that demonstrate A4AC's commitment to
              exceptional architecture across residential, commercial and
              international developments.
            </p>

          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                location={project.location}
                description={project.description}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Projects;