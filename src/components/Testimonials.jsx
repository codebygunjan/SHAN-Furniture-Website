import React from "react";
import { testimonialData } from "../assets/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="flex gap-5 md:mt-10 mt-5 md:mb-10 mb-6 overflow-hidden">
      <div className="animate-[testimonialMove_25s_linear_infinite] flex">
        {testimonialData.map((testimonial) => {
          return (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          );
        })}
        {testimonialData.map((testimonial) => {
          return (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
