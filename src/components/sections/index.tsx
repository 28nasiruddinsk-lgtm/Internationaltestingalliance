import type { ComponentType } from 'react';
import Hero from './Hero';
import Actions from './Actions';
import Counters from './Counters';
import Intro from './Intro';
import Services from './Services';
import Model from './Model';
import Film from './Film';
import Hall from './Hall';
import Day from './Day';
import Gallery from './Gallery';
import Operate from './Operate';
import News from './News';
import Contact from './Contact';
import AboutIntro from './AboutIntro';
import Structure from './Structure';
import Cards from './Cards';
import Milestones from './Milestones';
import Prose from './Prose';
import PageHeader from './PageHeader';
import Split from './Split';
import Band from './Band';
import Strip from './Strip';
import ContactForm from './ContactForm';
import Offices from './Offices';

const registry = {
  hero: Hero,
  actions: Actions,
  counters: Counters,
  intro: Intro,
  services: Services,
  model: Model,
  film: Film,
  hall: Hall,
  day: Day,
  gallery: Gallery,
  operate: Operate,
  news: News,
  contact: Contact,
  aboutIntro: AboutIntro,
  structure: Structure,
  cards: Cards,
  milestones: Milestones,
  prose: Prose,
  pageHeader: PageHeader,
  split: Split,
  band: Band,
  strip: Strip,
  contactForm: ContactForm,
  offices: Offices,
};

export type SectionType = keyof typeof registry;
export type SectionConfig = { type: SectionType; props?: Record<string, unknown> };

// Pages are lists of section configs (data/pages.ts); each type maps to a component here.
export function Sections({ list }: { list: SectionConfig[] }) {
  return (
    <>
      {list.map((s, i) => {
        const Section = registry[s.type] as ComponentType<Record<string, unknown>>;
        return <Section key={`${s.type}-${i}`} {...s.props} />;
      })}
    </>
  );
}
