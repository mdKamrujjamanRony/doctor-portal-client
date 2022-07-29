import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{review.text}</p>
        <div class="flex items-center pt-6">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-6">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">{review.name}</h3>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
