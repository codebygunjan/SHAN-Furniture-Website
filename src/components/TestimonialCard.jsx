import { Star } from "lucide-react";
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="border-gray-300 shrink-0 rounded-md bg-gray-200/30 md:w-100 w-80 md:p-4 p-2 flex flex-col gap-3 m-3 border">
      <div className="flex items-center gap-2">
        <img
          className="md:h-15 md:w-15 h-10 w-10 rounded-full object-cover bg-center"
          src={testimonial.image}
        />
        <h1 className="md:text-md text-gray-700 ">{testimonial.name}</h1>
      </div>
      <div className="flex gap-1">
        <Star color="orange" size={14} fill="orange" />
        <Star color="orange" size={14} fill="orange" />
        <Star color="orange" size={14} fill="orange" />
        <Star color="orange" size={14} fill="orange" />
        <Star color="orange" size={14} fill="orange" />
      </div>
      <p className="md:text-sm text-xsm text-gray-700/80">
        {testimonial.review}
      </p>
    </div>
  );
};

export default TestimonialCard;
