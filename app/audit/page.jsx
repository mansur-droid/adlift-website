import AuditForm from '@/components/AuditForm';

export const metadata = {
  title: 'Free Buyer Acquisition Audit for Realtors | AdLift',
  description: 'Get a free personalized breakdown of how AdLift would structure buyer targeting, qualification and a buyer acquisition funnel for your real estate market.',
  alternates: { canonical: 'https://adlift.agency/audit/' },
  openGraph: {
    title: 'Free Buyer Acquisition Audit for Realtors | AdLift',
    description: 'See how a buyer acquisition campaign could be structured for your real estate market.',
    url: 'https://adlift.agency/audit/',
    type: 'website',
  },
};

export default function AuditPage(){
  return <main className="audit-page">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="nav"><a className="logo" href="/" aria-label="AdLift home"><img className="brand-logo" src="/adlift-icon.png" alt="AdLift" /></a><a className="nav-cta" href="https://calendly.com/mansur-adlift/30min" target="_blank" rel="noopener noreferrer">Book call</a></header>
    <section className="audit-hero"><div className="audit-intro"><p className="eyebrow">Free strategy audit for realtors</p><h1>Get a buyer acquisition plan for your market.</h1><p>Share your market, buyer profile and current setup in three short steps. We’ll review your answers and email a personalized strategy audit. Delivery timing is confirmed after review.</p><div className="audit-cover"><span>Buyer targeting</span><span>Campaign angle</span><span>Qualification criteria</span><span>Buyer funnel</span><span>Current-system opportunities</span><span>Potential AdLift implementation</span></div></div><AuditForm/></section>
    <section className="audit-seo-copy"><p className="eyebrow">What this audit is</p><h2>A practical review of your next steps.</h2><p>AdLift helps U.S. real estate agents and small teams generate pre-qualified buyer appointments. This free audit is the first step: we use the market and buyer information you provide to outline a sensible targeting, qualification and funnel structure. The paid AdLift service is separate and focuses on running campaigns, manually qualifying buyers and booking qualified appointments onto the realtor’s calendar.</p></section>
    <footer><a className="footer-brand" href="/" aria-label="AdLift home"><img src="/adlift-footer-logo.png" width="1918" height="820" alt="AdLift" /></a><p>Qualified buyer appointments for real estate agents.</p></footer>
  </main>;
}
