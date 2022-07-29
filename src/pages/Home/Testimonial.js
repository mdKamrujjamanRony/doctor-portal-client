import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviewInfo = [
    {
      id: 1,
      name: "Winson Herry",
      location: "California",
      img: people1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt adipisci explicabo eum quaerat accusamus officia amet dolore",
    },
    {
      id: 2,
      name: "Minson Merry",
      location: "Los Angela",
      img: people2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt adipisci explicabo eum quaerat accusamus officia amet dolore",
    },
    {
      id: 3,
      name: "Pinson Perry",
      location: "Balifornia",
      img: people3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt adipisci explicabo eum quaerat accusamus officia amet dolore",
    },
  ];
  return (
    <section className="px-12">
      <div className="flex justify-between items-center">
        <div className="">
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl py-6">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12 px-12">
        {reviewInfo.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
