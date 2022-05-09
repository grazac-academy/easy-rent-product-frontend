import Hero from 'components/Hero/Hero';
import React from 'react';
import FeaturedApartment from 'components/FeaturedApartment/FeaturedApartment';
import PostHouse from 'components/PostHouse/PostHouse';
import How from 'components/How-it-works/How';
import Testimonials from 'components/Testimonials/Testimonials';

function Home() {
  return (
    <>
      <Hero />
      <How />
      <FeaturedApartment />
      <PostHouse />
      <Testimonials />
    </>
  );
}

export default Home;
