import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="card-title text-secondary text-2xl justify-center">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Please Try Another Date!</span>
          )}
        </p>
        <p>
          {slots.length ? (
            <span>
              There are {slots.length} {slots.length > 1 ? "slots " : "slot "}
              available.
            </span>
          ) : (
            <span className="text-red-500">There are no slot available.</span>
          )}
        </p>
        <div class="card-actions justify-center">
          <button class="btn btn-secondary text-white uppercase">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
