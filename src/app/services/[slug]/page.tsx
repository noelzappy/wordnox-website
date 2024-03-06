import { PageProps } from "@/models";
import React from "react";

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
