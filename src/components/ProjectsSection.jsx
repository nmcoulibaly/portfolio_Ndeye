import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    title: "projects.inventory.title",
    description: "projects.inventory.desc",
    image: "/projects/project1.png",
    tags: ["Next.js", "TailwindCSS", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "projects.analytics.title",
    description: "projects.analytics.desc",
    image: "/projects/project2.png",
    tags: ["Elasticsearch", "Grafana", "Power BI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "projects.restaurant.title",
    description: "projects.restaurant.desc",
    image: "/projects/project3.png",
    tags: ["HTML/5", "Javascript", "CSS/3"],
    demoUrl: "#",
    githubUrl: "#",
  },
];
const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          {t("projects.title1")} <span className="text-primary"> {t("projects.title2")} </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.title)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={tag + idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {t(project.title)}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(project.description)}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/nmcoulibaly"
          >
           {t("projects.check")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;