import ProjectHero from "@/components/sections/project-hero";
import ProjectListItem from "@/components/ui/project-list-item";
import { PROJECTS } from "@/data";
import React from "react";

export default function Page() {
  return (
    <div>
      <ProjectHero />

      <div className="block relative z-1 mt-20">
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
    </div>
  );
}
