const contactLocations = [
  'USA',
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Northwest Territories',
  'Nunavut',
  'Yukon'
];

export const contactLocationOptions = contactLocations.map((i) => ({
  id: i,
  label: i,
  value: i
}));
