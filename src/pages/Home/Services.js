import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceCard = [
    {
      id: 1,
      title: "Fluoride Treatment",
      body: "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates",
      img: fluoride,
    },
    {
      id: 2,
      title: "Cavity Filling",
      body: "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates",
      img: cavity,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      body: "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates",
      img: whitening,
    },
  ];
  return (
    <div className="py-20">
        <div className="text-center py-10">
            <h3 className="uppercase text-primary text-xl font-bold">our services</h3>
            <h2 className="text-4xl">Services We Provide</h2>
        </div>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
        {serviceCard.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
