const CANONICAL_BASE_URL = 'https://adlift.agency';

const pages = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  { path: '/audit/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/real-estate-buyer-leads/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/how-to-generate-real-estate-leads/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/best-real-estate-leads-for-agents/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/real-estate-lead-generation-company/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/facebook-ads-for-real-estate-agents/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/real-estate-lead-qualification/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/real-estate-lead-follow-up/', changeFrequency: 'monthly', priority: 0.9 },
];

export default function sitemap() {
  return pages.map(({ path, ...metadata }) => ({
    url: `${CANONICAL_BASE_URL}${path}`,
    ...metadata,
  }));
}
