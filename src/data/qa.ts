// QA notes for the 5 Nov 2026 revisions brief. Open any page with ?qa in the address to see them.
// Each note is matched to a section by `type`, or `type:kicker` (falling back to the title) when the type repeats.
// ponytail: delete this file and the QaMark wrapper once the client signs the revisions off
export const qaNotes: Record<string, [match: string, note: string][]> = {
  '': [
    ['hero', 'Logos added under the headline in the Awarding bodies tab (names until the logo files arrive)'],
    ['intro', 'Removed: “We play no part in teaching or in marking.”'],
    ['logos', 'New: “Delivering for” logo strip under Where we work'],
  ],
  'about-us': [
    ['cards:The people in the room', 'Removed: the “Every member of our venue staff…” paragraph'],
    ['strip:Where we work', 'New one-line Where we work + See our venues (city chips removed; map kept, awaiting your decision)'],
    ['milestones', 'Removed: the last “Today: Delivering for…” step'],
    ['split:Our parent company', 'Shortened to one line, link now goes to Licensing and approvals'],
  ],
  services: [
    ['services', 'New link under the cards: See how a session runs. Removed below: How a session runs'],
    ['strip:What working with us is like', 'Replaces the six points with one line + What you get as a partner'],
    ['cards:Our partners', 'Name list removed from here'],
    ['logos', 'New: logo strip in place of the names'],
    ['band', 'Removed above: the Questions section'],
  ],
  'exam-management': [
    ['pageHeader', 'See an exam day now goes to the home page timeline'],
    ['model', 'New link: Watch an exam day, hour by hour. Removed below: the hour-by-hour timeline'],
    ['prose', 'Cut to one line + See the partner portal. Removed below: Independent by design'],
    ['faq', 'Removed “What do we receive after a session?”; city answer shortened'],
  ],
  'exam-venues': [
    ['gallery', 'Merged with What every venue has: one photo strip, five new captions'],
    ['band:Tell us where your candidates are.', 'New text. Removed above: the Questions section'],
  ],
  'technology-driven-solutions': [
    ['prose', 'New line: Candidates have their own portal too + Book an exam link. Removed below: Simpler for candidates'],
    ['model:Quality assurance', 'Policies sentence removed, new link: See our policies'],
    ['services', 'Removed above: the Questions section'],
  ],
  'professional-invigilation': [
    ['pull', 'Three-party diagram replaced by this pull line'],
    ['strip', 'Removed below: Already supervising for'],
    ['faq', 'Only “What is exam invigilation?” kept'],
    ['band:Need invigilators for your next exam?', 'New text'],
  ],
  'book-an-exam': [
    ['rows', 'Logos added; City & Guilds row has the Foundation Programme line and second link'],
    ['faq', 'Removed 2 questions, added “Does ITA mark my exam?”'],
  ],
  'exam-day-guidelines': [
    ['faq', 'Removed phone and leaving-early questions'],
  ],
  'compliance-security': [
    ['cards:Controls', 'Each control now links to its page. Removed below: The people we put in the room'],
    ['strip:Registered and recognised', 'Replaces the two recognition cards with one line'],
  ],
  'become-a-partner': [
    ['logos', 'Logo strip in place of the partner names'],
  ],
  uae: [
    ['faq', 'Removed “Can exams run on our own premises in the UAE?”'],
    ['band:Running exams in the UAE?', 'New text'],
  ],
  'licensing-and-approvals': [
    ['strip', 'Removed above: How we got here (timeline is on About Us)'],
  ],
  'awarding-bodies': [['pageHeader', 'New page (brief 5.1)']],
  'university-of-greenwich-uk': [
    ['pageHeader', 'Rewritten page (brief 5.2): logo tile beside the H1, breadcrumb above'],
    ['split', 'New About section, website link opens in a new tab'],
  ],
  'city-and-guilds': [
    ['pageHeader', 'Rewritten page (brief 5.3): logo tile beside the H1, breadcrumb above'],
    ['split', 'New About section, website link opens in a new tab'],
    ['cards:Related pages', 'New: links to Foundation Programme and GEMS Pathways'],
  ],
  'international-foundation-program': [['pageHeader', 'New page (brief 5.4), same URL, breadcrumb under City & Guilds']],
  'ncc-education': [
    ['pageHeader', 'Rewritten page (brief 5.5): logo tile beside the H1, breadcrumb above'],
    ['split', 'New About section, website link opens in a new tab'],
  ],
  'gems-pathways': [
    ['pageHeader', 'Rewritten page (brief 5.6): logo tile beside the H1, breadcrumb above'],
    ['split', 'New About section with the GEMS website and City & Guilds links'],
  ],
};
