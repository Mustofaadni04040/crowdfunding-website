import React from 'react';
import HeroList from '../components/fragments/homePage/HeroList';
import Milestones from '../components/fragments/homePage/Milestones';
import Benefits from '../components/fragments/homePage/Benefits';

export default function HomePage() {
  return (
    <>
      <HeroList />
      <Milestones />
      <Benefits />
    </>
  );
}
