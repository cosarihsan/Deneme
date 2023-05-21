import Link from "next/link";

import Layout from "../../../components/Layout"
import ProjectCard from "../../../components/ProjectCard";
import ArrowLeftIcon from "../../../components/icons/ArrowLeft";

import { MyQuery} from "../../../functions/MyQuery";

export default function ProjectsPage({ findJobApps}) {
  console.log(findJobApps)
  return (
    <Layout title={"Portfolio / Projects"} description={"My Projects"}>
      <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
        <Link href="/" >
          <p className="flex items-center space-x-4 font-semibold pb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200">
            <ArrowLeftIcon className="w-8 h-8 fill-current" />
            <span>Back to Home</span>
          </p>
        </Link>

        {/* Projects.. */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          {findJobApps.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const findJobApps = await MyQuery();
  return {
    props: {
      findJobApps,
    },
  };
};