import { PageProps } from "@/models";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = PageProps;

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;

  return {
    title: "Services Details",
    // openGraph: {
    //   images: [
    //     {
    //       url: "https://www.example.ie/og-image.jpg",
    //       width: 800,
    //       height: 600,
    //       alt: "Og Image Alt",
    //     },
    //     {
    //       url: "https://www.example.ie/og-image-2.jpg",
    //       width: 800,
    //       height: 600,
    //       alt: "Og Image Alt 2",
    //     },
    //   ],
    // },
  };
}

const Page: React.FC<PageProps> = ({ params, searchParams }) => {
  return (
    <div>
      <h1>
        Services
        {JSON.stringify(params, null, 2)}
      </h1>
      <p>{JSON.stringify(searchParams, null, 2)}</p>
    </div>
  );
};

export default Page;
