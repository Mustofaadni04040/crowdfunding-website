import React from 'react';
import HeroList from '../components/fragments/homePage/HeroList';
import Milestones from '../components/fragments/homePage/Milestones';
import Benefits from '../components/fragments/homePage/Benefits';
import FundraisersList from '../components/fragments/homePage/FundraisersList';
import Pillars from '../components/fragments/homePage/Pillars';

export default function HomePage() {
  return (
    <main>
      <HeroList />
      <Milestones />
      <Benefits />
      <FundraisersList />
      <Pillars />
    </main>
  );
}
