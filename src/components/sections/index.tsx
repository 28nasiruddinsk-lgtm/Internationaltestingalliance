import type { ComponentType } from 'react';
import Hero from './Hero';
import Actions from './Actions';
import Stats from './Stats';
import About from './About';
import Services from './Services';
import Independence from './Independence';
import ExamDay from './ExamDay';
import Centres from './Centres';
import Countries from './Countries';
import News from './News';
import ContactSection from './ContactSection';
import Prose from './Prose';
import PageHeader from './PageHeader';

const registry = {
  hero: Hero,
  actions: Actions,
  stats: Stats,
  about: About,
  services: Services,
  independence: Independence,
  examDay: ExamDay,
  centres: Centres,
  countries: Countries,
  news: News,
  contact: ContactSection,
  prose: Prose,
  pageHeader: PageHeader,
};

export type SectionType = keyof typeof registry;
export type SectionConfig = { type: SectionType; props?: Record<string, unknown> };

// Pages are lists of section configs (see data/pages.ts); order and content live in data, not JSX.
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
