import Hero from 'components/Hero/Hero';
import React from 'react';
import FeaturedApartment from 'components/FeaturedApartment/FeaturedApartment';
import PostHouse from 'components/PostHouse/PostHouse';

function Home() {
  return (
    <>
      <Hero />
      <FeaturedApartment />
      <PostHouse />
    </>
  );
}

export default Home;
