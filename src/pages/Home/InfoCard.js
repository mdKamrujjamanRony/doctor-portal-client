import React from "react";

const InfoCard = ({card}) => {
  return (
    <div className={card.isGradient ? "card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-primary to-secondary" : "card lg:card-side bg-base-100 shadow-xl bg-accent"}>
      <figure className="ml-5">
        <img className="w-16" src={card.img} alt="" />
      </figure>
  <div class="card-body text-white">
    <h2 class="card-title">{card.title}</h2>
    <p>{card.body}</p>
  </div>
</div>
  );
};

export default InfoCard;
