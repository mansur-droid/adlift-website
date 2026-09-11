const CANONICAL_BASE_URL = 'https://adlift.agency';

const pages = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  { path: '/audit/', changeFrequency: 'monthly', priority: 0.9 },
];

export default function sitemap() {
  return pages.map(({ path, ...metadata }) => ({
    url: `${CANONICAL_BASE_URL}${path}`,
    ...metadata,
  }));
}
