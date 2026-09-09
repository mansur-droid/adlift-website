import './globals.css';
import './audit.css';

export const metadata = {
  metadataBase: new URL('https://www.adlift.agency'),
  title: 'AdLift — Qualified Buyer Appointments for Real Estate Agents',
  description: 'AdLift helps independent real estate agents and small teams generate qualified buyer appointments through Meta Ads, manual qualification, and transparent delivery.',
  keywords: ['real estate appointment setting','buyer appointments','real estate lead generation','Meta Ads for realtors','AdLift'],
  alternates: { canonical: 'https://www.adlift.agency/' },
  openGraph: {
    title: 'AdLift — Qualified Buyer Appointments',
    description: 'Qualified buyer appointments for real estate agents. No long-term contracts. Billed after agreed service delivery.',
    type: 'website',
    url: 'https://www.adlift.agency/',
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
