import React from "react";

export type Project = {
  id: string | number;
  name: string;
  description: string;
  slug: string;
  image: string;
  category: string;
};

type ProjectListItemProps = {
  project: Project;
};

export default function ProjectListItem({
  project,
}: Readonly<ProjectListItemProps>) {
  return (
    <div className="w-full lg:w-4/12 px-4">
      <h5 className="text-xl font-semibold pb-4 text-center">{project.name}</h5>
      <div className="hover:-mt-4 cursor-pointer relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
        <img
          src={project.image}
          alt={project.name}
          className="align-middle border-none max-w-full h-auto rounded-lg"
        />
      </div>

      {/* <p className="text-xs text-gray-800 font-bold uppercase tracking-wider">
          {project.category}
        </p>
        <h2 className="text-3xl text-neutral-600 font-bold md:text-4xl">
          {project.name}
        </h2> */}
    </div>
  );
}
