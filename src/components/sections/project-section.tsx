import { PROJECTS } from "@/data";
import React from "react";
import ProjectListItem from "../ui/project-list-item";

export default function ProjectSection() {
  return (
    <section className="mt-20 px-10 sm:mt-32 ">
      <div className="mt-40 pb-40 relative">
        <div className="flex flex-row justify-between m-3">
          <div className="flex-1 m-3 max-w-88">
            <h2 className="text-2xl text-neutral-600 font-bold sm:text-3xl">
              Our Projects
            </h2>
            <p className="mt-4 text-gray-800" style={{ lineHeight: "1.5" }}>
              Check out our featured projects and see how we&apos;ve helped
              businesses like yours achieve their digital goals
            </p>
          </div>
          <div>
            <a
              href="/projects"
              className="text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline uppercase"
            >
              View All
            </a>
          </div>
        </div>
      </div>

      <div className="block relative z-1">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 -mt-24">
              <div className="flex flex-wrap">
                {PROJECTS.map((project) => {
                  return <ProjectListItem key={project.id} project={project} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
