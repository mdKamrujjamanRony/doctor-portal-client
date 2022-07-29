import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  const cardBody = [
    { 
        id: 1,
        title: "Opening Hours",
        body: "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates",
        img: clock,
        isGradient: true
    },
    { 
        id: 2,
        title: "Visit our location",
        body: "Brooklyn, NY 10036, United States",
        img: marker,
        isGradient: false
    },
    {  
        id: 3,
        title: "Contact us now",
        body: "+880 1763 137836",
        img: phone,
        isGradient: true
    }
];
  return (
    <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
        {cardBody.map(card => <InfoCard 
        key={card.id}
        card={card}
        ></InfoCard>)}
    </div>
  );
};

export default Info;
