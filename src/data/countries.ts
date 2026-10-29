export type Country = { name: string; status: 'Operating' | 'Core market'; note: string };

// TODO: status of each market to be confirmed by the client.
export const countries: Country[] = [
  { name: 'Pakistan', status: 'Operating', note: 'Nine cities, IBCC-registered delivery.' },
  { name: 'United Arab Emirates', status: 'Operating', note: 'Dubai office.' },
  { name: 'Iraq', status: 'Core market', note: 'Delivery planned with partner premises.' },
  { name: 'Saudi Arabia', status: 'Core market', note: 'Delivery planned with partner premises.' },
  { name: 'Egypt', status: 'Core market', note: 'Delivery planned with partner premises.' },
  { name: 'Bahrain', status: 'Core market', note: 'Delivery planned with partner premises.' },
  { name: 'Malaysia', status: 'Core market', note: 'Delivery planned with partner premises.' },
  { name: 'Uzbekistan', status: 'Core market', note: 'Delivery planned with partner premises.' },
  { name: 'United Kingdom', status: 'Core market', note: 'Delivery planned with partner premises.' },
];

export const cities = [
  'Karachi', 'Hyderabad', 'Lahore', 'Islamabad', 'Rawalpindi',
  'Gujranwala', 'Multan', 'Gilgit', 'Faisalabad',
];
