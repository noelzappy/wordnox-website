import { SERVICES } from "@/data";
import React from "react";
import SingleService from "../ui/single-service";

export default function ServiceListSection() {
  return (
    <section>
      <div className="px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-10">
          {SERVICES.map((service) => {
            return <SingleService service={service} key={service.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
