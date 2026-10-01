import React, { useRef } from "react";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import CuratedCollections from "../components/CuratedCollections";
import WhyShan from "../components/WhyShan";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const curatedRef = useRef();
  const featuredRef = useRef();
  return (
    <div>
      <Hero curatedRef={curatedRef} />
      <div ref={curatedRef} className="scroll-mt-29">
        <CuratedCollections />
      </div>
      <FeaturedCollections />

      <WhyShan />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
