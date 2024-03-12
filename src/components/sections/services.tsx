"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Service } from "@prisma/client";

type ServicesProps = {
  services: Service[];
};

const Services = ({ services }: ServicesProps) => {
  return (
    <div className="py-24 bg-yellow-50" id="services">
      <div className="flex flex-col items-center justify-center my-10">
        <h2 className="text-4xl font-bold text-center text-yellow-900">
          Services
        </h2>
        <p>Here are some of the services we offer.</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 flex-wrap">
        {services?.map((service) => (
          <Card className="w-[350px]" key={service.id}>
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
              <CardDescription>{service.categoryName}</CardDescription>
            </CardHeader>
            <CardContent>{service.description}</CardContent>
            <CardFooter>
              <a className="btn" href={`/services/${service.slug}`}>
                Learn More
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center my-10">
        <Button className="btn">View All Services</Button>
      </div>
    </div>
  );
};

export default Services;
