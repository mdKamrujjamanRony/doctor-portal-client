import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Terms from "./Terms";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <div className="px-12">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Terms></Terms>
      </div>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
