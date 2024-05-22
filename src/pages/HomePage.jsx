import React from 'react';
import HeroList from '../components/fragments/homePage/HeroList';
import Milestones from '../components/fragments/homePage/Milestones';
import Benefits from '../components/fragments/homePage/Benefits';
import Donations from '../components/fragments/homePage/Donations';

export default function HomePage() {
  return (
    <main>
      <HeroList />
      <Milestones />
      <Benefits />
      <Donations />
    </main>
  );
}
