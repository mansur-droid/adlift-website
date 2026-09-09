import AuditForm from '@/components/AuditForm';

export const metadata = {
  title: 'Free Buyer Acquisition Audit for Realtors | AdLift',
  description: 'Get a free personalized breakdown of how AdLift would structure buyer targeting, qualification and a buyer acquisition funnel for your real estate market.',
  alternates: { canonical: 'https://www.adlift.agency/audit' },
  openGraph: {
    title: 'Free Buyer Acquisition Audit for Realtors | AdLift',
    description: 'See how a buyer acquisition campaign could be structured for your real estate market.',
    url: 'https://www.adlift.agency/audit',
    type: 'website',
  },
};

export default function AuditPage(){
  return <main className="audit-page">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="nav"><a className="logo" href="/" aria-label="AdLift home"><span>Ad</span>Lift</a><a className="nav-cta" href="https://calendly.com/mansur-adlift/30min?back=1&month=2025-11&date=2025-11-24" target="_blank" rel="noopener noreferrer">Book call</a></header>
    <section className="audit-hero"><div className="audit-intro"><p className="eyebrow">Free strategy audit for realtors</p><h1>See how AdLift would structure buyer acquisition for your market.</h1><p>Answer a few focused questions about your market, ideal buyer and current acquisition. We’ll review your answers and prepare a personalized audit — without fake forecasts or inflated promises.</p><div className="audit-cover"><span>Buyer targeting</span><span>Campaign angle</span><span>Qualification criteria</span><span>Buyer funnel</span><span>Current-system opportunities</span><span>Potential AdLift implementation</span></div></div><AuditForm/></section>
    <section className="audit-seo-copy"><p className="eyebrow">What this audit is</p><h2>A practical buyer-acquisition review, not an automated vanity report.</h2><p>AdLift helps U.S. real estate agents and small teams generate pre-qualified buyer appointments. This free audit is the first step: we use the market and buyer information you provide to outline a sensible targeting, qualification and funnel structure. The paid AdLift service is separate and focuses on running campaigns, manually qualifying buyers and booking qualified appointments onto the realtor’s calendar.</p></section>
    <footer><div className="logo"><span>Ad</span>Lift</div><p>Qualified buyer appointments for real estate agents.</p></footer>
  </main>;
}
