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

const Services = () => {
  return (
    <div className="py-24 bg-yellow-50" id="services">
      <div className="flex flex-col items-center justify-center my-10">
        <h2 className="text-4xl font-bold text-center text-yellow-900">
          Services
        </h2>
        <p>Here are some of the services we offer.</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 flex-wrap">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card className="w-[350px]" key={index}>
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>Software Dev</CardDescription>
            </CardHeader>
            <CardContent>
              Deploy your new project in one-click. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cum, esse eum. Voluptate quisquam at
              et quasi dolore dicta iure vel! Quam rerum unde adipisci!
              Blanditiis aperiam molestiae officiis ullam et!
            </CardContent>
            <CardFooter>
              <button className="btn">Learn More</button>
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
