import type { ComponentType } from 'react';
import { qaNotes } from '@/data/qa';
import QaMark from '../QaMark';
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
import Mosaic from './Mosaic';
import Points from './Points';
import Faq from './Faq';
import Lists from './Lists';
import Verify from './Verify';
import Feature from './Feature';
import Steps from './Steps';
import Rows from './Rows';
import Logos from './Logos';
import Pull from './Pull';
import Doc from './Doc';

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
  mosaic: Mosaic,
  points: Points,
  faq: Faq,
  lists: Lists,
  verify: Verify,
  feature: Feature,
  steps: Steps,
  rows: Rows,
  logos: Logos,
  pull: Pull,
  doc: Doc,
};

export type SectionType = keyof typeof registry;
export type SectionConfig = { type: SectionType; props?: Record<string, unknown> };

// Pages are lists of section configs (data/pages.ts); each type maps to a component here.
// `path` picks the page's revision notes, shown only with ?qa in the address.
export function Sections({ list, path }: { list: SectionConfig[]; path?: string }) {
  const notes = [...(path !== undefined ? qaNotes[path] ?? [] : [])];
  const noteFor = (s: SectionConfig) => {
    const label = (s.props?.kicker ?? s.props?.title) as string | undefined;
    const i = notes.findIndex(([m]) => {
      const [type, name] = m.split(':');
      return type === s.type && (name === undefined || name === label || name === s.props?.title);
    });
    return i < 0 ? undefined : notes.splice(i, 1)[0][1];
  };
  return (
    <>
      {list.map((s, i) => {
        const Section = registry[s.type] as ComponentType<Record<string, unknown>>;
        return <QaMark key={`${s.type}-${i}`} note={noteFor(s)}><Section {...s.props} /></QaMark>;
      })}
    </>
  );
}
