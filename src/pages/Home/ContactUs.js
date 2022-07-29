import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
  return (
    <section className="p-24" style={{background: `url(${appointment})`}}>
      <div className="text-center">
        <h4 className="text-xl text-primary font-bold">Contact Us</h4>
        <h2 className="text-4xl text-white py-6">Stay connected with us</h2>
        <form action="" className="">
          <input
            type="email"
            placeholder="Email Address"
            class="input input-bordered w-full max-w-xs m-2"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            class="input input-bordered w-full max-w-xs m-2"
          />
          <br />
          <textarea
            class="textarea textarea-bordered m-2 w-80"
            placeholder="Your message"
          ></textarea>
          <br />
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
