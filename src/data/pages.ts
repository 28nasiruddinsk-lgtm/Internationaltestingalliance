import type { SectionConfig } from '@/components/sections';

export type PageConfig = { title: string; intro: string; sections: SectionConfig[] };

// The homepage section order. Reorder, remove or add entries here.
// TODO (not built yet): film section, "Inside a sitting" replay, map graphic. Needs client assets.
export const home: SectionConfig[] = [
  { type: 'hero' },
  { type: 'actions' },
  { type: 'stats' },
  { type: 'about' },
  { type: 'services' },
  { type: 'independence' },
  { type: 'examDay' },
  { type: 'centres' },
  { type: 'countries' },
  { type: 'news' },
  { type: 'contact' },
];

const head = (title: string, intro: string): SectionConfig => ({ type: 'pageHeader', props: { title, intro } });

export const pages: Record<string, PageConfig> = {
  about: {
    title: 'About ITA',
    intro: 'An independent examination services organisation, supported by International Testing Services.',
    sections: [
      {
        type: 'prose',
        props: {
          title: 'Purpose, vision and mission',
          paragraphs: [
            'Purpose: to advance fair, secure and accessible assessment by enabling learners to take part in trusted examinations, wherever they are.',
            'Vision: to be a globally trusted examination services partner, setting the standard for secure, independent and technology-enabled assessment delivery.',
            'Mission: to protect the integrity of every examination through independent delivery, rigorous standards, trained professionals and technology.',
          ],
          image: '/images/invigilators.webp',
        },
      },
      {
        type: 'prose',
        props: {
          title: 'Corporate structure',
          paragraphs: [
            'International Testing Services (ITS) is the parent company and holds the group registrations and approvals. International Testing Alliance (ITA) is the operating subsidiary, delivering examinations in nine cities across Pakistan and in our other core markets.',
          ],
        },
      },
      { type: 'independence' },
    ],
  },
  services: {
    title: 'Services',
    intro: 'Choose individual services or entrust ITA with end-to-end examination delivery.',
    sections: [{ type: 'services' }, { type: 'contact' }],
  },
  'awarding-bodies': {
    title: 'Awarding bodies',
    intro: 'What partners get when ITA runs their sittings.',
    sections: [
      {
        type: 'prose',
        props: {
          title: 'One partner, one portal',
          paragraphs: ['Partners see registrations, candidate numbers, schedules and attendance in a dedicated portal, and receive one consolidated record after each session.'],
          points: [
            'Partner portal with real-time visibility',
            'Flexible, value-led delivery: choose the services you need',
            'Priority partner service from planning to reporting',
            'Nationwide reach, including Quetta, Peshawar and Gilgit',
            'Promotion of your examinations on ITA channels',
          ],
          image: '/images/hall-rows.webp',
        },
      },
      { type: 'independence' },
      { type: 'contact' },
    ],
  },
  candidates: {
    title: 'Candidates',
    intro: 'Register, pay and sit your examination close to home.',
    sections: [
      {
        type: 'prose',
        props: {
          title: 'Before and on exam day',
          paragraphs: ['Candidates register, pay securely and download their Statement of Entry (SOE) online. On the day, a three-step identity check, including QR verification, confirms every candidate before the exam begins.'],
          points: ['Register and pay online', 'Download your Statement of Entry', 'Bring valid photo ID', 'Arrive early for check-in'],
          image: '/images/qr-scan.webp',
        },
      },
      { type: 'examDay' },
      { type: 'contact' },
    ],
  },
  centres: {
    title: 'Centres',
    intro: 'Standardised venues in nine Pakistani cities.',
    sections: [{ type: 'centres' }, { type: 'countries' }],
  },
  governance: {
    title: 'Governance',
    intro: 'Registrations, approvals and the controls behind every sitting.',
    sections: [
      {
        type: 'prose',
        props: {
          title: 'Registrations and controls',
          paragraphs: [
            'IBCC registration reference IBCC/RC-1/Impl-2/2025/758. The Pakistan Bar Council listed ITS as an approved foreign exam agency in its September 2026 directive.',
            'Controls include documented SOPs, chain of custody for materials, incident reporting and quality assurance checks. Policy documents will be published here.', // TODO: policy PDFs
          ],
          image: '/images/ibcc-registered.png',
        },
      },
    ],
  },
  news: {
    title: 'News',
    intro: 'Updates from ITA.',
    sections: [{ type: 'news', props: { limit: 99 } }],
  },
  contact: {
    title: 'Contact us',
    intro: 'Send an email query. Offices in Karachi and Dubai.',
    sections: [{ type: 'contact' }],
  },
};

export const withHeader = (p: PageConfig): SectionConfig[] => [head(p.title, p.intro), ...p.sections];
