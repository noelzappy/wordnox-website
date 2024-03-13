import Image from "next/image";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

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
    <div className="transition-all duration-300 ease-in-out hover:scale-105 bg-neutral-200 rounded-md m-5">
      <Image
        src={project.image}
        alt={project.name}
        width={400}
        height={400}
        className="rounded-t-md"
      />
      <div className="mt-5 p-5">
        <p className="text-xs text-gray-800 font-bold uppercase tracking-wider">
          {project.category}
        </p>
        <h2 className="text-3xl text-neutral-600 font-bold md:text-4xl">
          {project.name}
        </h2>

        <hr className="border-0 bg-gray-800 h-px text-center items-center w-full my-3" />
        <div className="flex flex-row justify-between items-center w-full my-3">
          <a
            href={`/projects/${project.slug}`}
            className="text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline uppercase"
          >
            View Project
          </a>
          <BiLinkExternal />
        </div>
      </div>
    </div>
  );
}
