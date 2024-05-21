import React from 'react';
import { Carousel } from 'flowbite-react';
import HomePageData from '../../../json/HomePage.json';
import HeroItem from './HeroItem';

export default function HeroList() {
  return (
    <section className="container mx-auto p-5">
      <Carousel setinterval={5000} className="lg:w-[900px] mx-auto">
        {HomePageData.hero.map((item) => (
          <HeroItem key={item._id} {...item} />
        ))}
      </Carousel>
    </section>
  );
}
