import { ArrowRight, CheckCircle2, MapPin, WalletCards, Clock3, BadgeCheck, Users, Target, Megaphone, ClipboardList, PhoneCall, CalendarCheck } from 'lucide-react';
import styles from './page.module.css';

const BOOKING_URL = 'https://calendly.com/mansur-adlift/30min?back=1&month=2025-11&date=2025-11-24';
const CANONICAL_URL = 'https://adlift.agency/real-estate-buyer-leads/';

export const metadata = {
  title: 'Real Estate Buyer Leads: Generation & Qualification | AdLift',
  description: 'Learn how to generate and qualify real estate buyer leads, compare acquisition channels, and turn serious buyer prospects into booked conversations.',
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: 'Real Estate Buyer Leads: Generation & Qualification | AdLift',
    description: 'A practical guide for U.S. realtors on generating, qualifying and following up with buyer leads — plus how AdLift approaches buyer appointments.',
    url: CANONICAL_URL,
    type: 'article',
  },
};

const channels = [
  ['Referrals & sphere', 'High trust and strong context, but volume depends on the relationships and database you have already built.'],
  ['Organic search & content', 'Can attract buyers while they research markets and homes. It takes time and useful local content to build visibility.'],
  ['Google Business Profile', 'Useful for local discovery and reputation, especially when buyers search for agents in a specific market.'],
  ['Open houses', 'Creates direct conversations with active home shoppers, although not every attendee is unrepresented or ready to buy.'],
  ['Social media', 'Can build familiarity and create inbound interest, but attention does not automatically equal buying intent.'],
  ['Meta advertising', 'Offers control over messaging, geography and campaign structure. It requires budget, testing, qualification and follow-up.'],
  ['Real estate portals', 'Can provide buyer inquiries close to property-search activity, with cost, competition and exclusivity varying by provider.'],
  ['Purchased or shared leads', 'Can add lead flow quickly, but quality varies and the same prospect may be contacted by multiple agents.'],
  ['Partnerships', 'Relationships with lenders, relocation professionals and other local businesses can create relevant introductions over time.'],
];

const steps = [
  ['01', 'Define the buyer', 'Choose the locations, price ranges, buyer situations and other characteristics that make sense for your business.'],
  ['02', 'Choose an acquisition channel', 'Pick channels based on your market, resources and desired level of control rather than chasing every source at once.'],
  ['03', 'Create an offer and message', 'Give the buyer a clear reason to respond: useful property access, local guidance, a relevant search angle or another honest value proposition.'],
  ['04', 'Capture useful information', 'Ask for enough information to understand the inquiry without turning the first interaction into an unnecessary interrogation.'],
  ['05', 'Qualify', 'Check the criteria that matter to your business, such as area, budget, timeline, financing and current agent representation.'],
  ['06', 'Follow up appropriately', 'Respond while the inquiry is still relevant, use the contact method available to you, and keep the conversation useful rather than purely transactional.'],
  ['07', 'Book qualified prospects', 'When a buyer fits the agreed criteria and is ready for a conversation, move them toward a clear next step on the calendar.'],
  ['08', 'Measure outcomes beyond lead count', 'Track which sources create qualified conversations and appointments, not only how many forms or contact records they generate.'],
];

const faqs = [
  ['What is a real estate buyer lead?', 'A real estate buyer lead is a person who has shown interest in buying property and provided a way for an agent to follow up. A lead is not automatically financially ready, unrepresented, qualified or ready to book an appointment.'],
  ['How do realtors get buyer leads?', 'Realtors can generate buyer leads through referrals, their database, search and local visibility, open houses, social media, paid advertising, real estate portals, purchased lead services and partnerships. The right mix depends on the agent’s market, resources and acquisition strategy.'],
  ['How can I get more qualified buyer leads?', 'Start by defining what qualified means for your business, capture information connected to those criteria, and use a consistent follow-up and qualification process. More inquiries alone do not guarantee more qualified buyers.'],
  ['Should realtors buy leads?', 'Buying leads can make sense when speed matters and the economics and follow-up process work for the agent. The trade-offs can include shared competition, variable quality and less control over how the lead was generated. An owned system offers more control but requires setup and management.'],
  ["What’s the difference between a lead and a qualified buyer?", 'A lead has expressed interest and provided contact information. A qualified buyer has also been evaluated against relevant criteria such as location, budget, timeline, financing status and agent representation. Qualification standards should fit the realtor’s market and business.'],
  ['How does AdLift qualify buyer leads?', 'AdLift manually reviews buyer inquiries against criteria agreed with the realtor. These can include desired area, price range, buying timeline, financing or pre-approval status, whether the buyer already has an agent, and other client-specific requirements. Only prospects who meet the agreed criteria move toward appointment booking.'],
];

function CTAButtons() {
  return <div className="cta-row">
    <a className="btn primary" href="/audit/">Get Your Free Buyer Acquisition Audit <ArrowRight size={18}/></a>
    <a className="btn secondary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a Call</a>
  </div>;
}

export default function RealEstateBuyerLeadsPage() {
  return <main className={styles.page}>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="nav">
      <a className="logo" href="/" aria-label="AdLift home"><span>Ad</span>Lift</a>
      <nav aria-label="Primary navigation"><a href="/#problem">Why it fails</a><a href="/#process">Process</a><a href="/#faq">FAQ</a><a href="/audit/">Free Audit</a></nav>
      <a className="nav-cta" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book call</a>
    </header>

    <article>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">Buyer acquisition for U.S. realtors</p>
          <h1>Real Estate Buyer Leads: How to Generate and Qualify Buyers</h1>
          <p className={styles.lead}>Generating a name and phone number is only the beginning. A useful buyer-acquisition system also needs to identify which prospects fit your market, budget and timeline criteria — and which are actually worth moving toward a conversation.</p>
          <CTAButtons/>
        </div>
        <aside className={styles.heroPanel} aria-label="Buyer lead progression">
          <p className="mini-label">From interest to conversation</p>
          <div className={styles.progression}><span>Visitor / prospect</span><ArrowRight/><span>Buyer lead</span><ArrowRight/><span>Qualified buyer</span><ArrowRight/><strong>Appointment</strong></div>
          <p>Each stage means something different. A form submission should not be treated as a qualified appointment before the relevant criteria have been checked.</p>
        </aside>
      </section>

      <div className={styles.content}>
        <section className={styles.section}>
          <p className="eyebrow">The fundamentals</p><h2>What Are Real Estate Buyer Leads?</h2>
          <p>A real estate buyer lead is a prospective property buyer who has shown enough interest to give an agent a way to continue the conversation. That might happen through a property inquiry, an advertisement, an open house, a referral, a website form or another acquisition channel.</p>
          <p>The important distinction is that <strong>lead</strong> describes an opportunity to follow up, not proof that someone is ready or able to buy. A visitor becomes a lead when they identify themselves; a lead becomes qualified when relevant criteria are checked; and a qualified buyer may become an appointment when both sides are ready for a direct conversation.</p>
          <div className={styles.definitionGrid}><div><span>01</span><strong>Visitor / prospect</strong><p>Shows interest but may still be anonymous.</p></div><div><span>02</span><strong>Lead</strong><p>Provides contact details or makes an inquiry.</p></div><div><span>03</span><strong>Qualified buyer</strong><p>Meets the criteria that matter to the realtor.</p></div><div><span>04</span><strong>Appointment</strong><p>A qualified prospect is scheduled for a conversation.</p></div></div>
        </section>

        <section className={styles.section}>
          <p className="eyebrow">Acquisition channels</p><h2>Where Do Realtors Get Buyer Leads?</h2>
          <p>Buyer leads for realtors can come from both relationship-driven and scalable marketing channels. No source is automatically best: the trade-offs are usually some combination of speed, control, buyer intent, cost, competition and the work required to operate the channel.</p>
          <div className={styles.channelGrid}>{channels.map(([title,body])=><div className={styles.channel} key={title}><h3>{title}</h3><p>{body}</p></div>)}</div>
          <p className={styles.note}>A sensible channel mix depends on your market and business. An agent with a mature referral database has different assets from a newer agent who needs to create demand through paid or organic acquisition.</p>
        </section>

        <section className={styles.split}>
          <div><p className="eyebrow">Quality vs. volume</p><h2>Why More Leads Doesn't Necessarily Mean More Clients</h2><p>Lead volume tells you how many inquiries entered the system. It does not tell you how many were relevant, reachable or appropriate for your business.</p><p>A campaign can generate activity while still creating too much work for the agent if nobody separates genuine opportunities from weak-fit inquiries.</p></div>
          <div className={styles.issueList}>{['Weak or unclear buying intent','Budget does not fit the target market','Wrong location or search area','Buying timeline is too long or unclear','Already represented by another agent','Incomplete or unusable contact information','Slow or inconsistent follow-up','No defined qualification process'].map(x=><div key={x}><CheckCircle2 size={17}/><span>{x}</span></div>)}</div>
        </section>

        <section className={styles.section}>
          <p className="eyebrow">Qualification</p><h2>What Makes a Buyer Lead Qualified?</h2>
          <p>There is no single universal definition of a qualified buyer. A luxury agent, a first-time-buyer specialist and an investor-focused team may need different criteria. Qualification should reflect the realtor's market, offer and capacity.</p>
          <div className={styles.criteria}><div><MapPin/><h3>Location</h3><p>Is the buyer looking in an area the realtor serves?</p></div><div><WalletCards/><h3>Budget</h3><p>Does the desired price range fit the properties and market being targeted?</p></div><div><Clock3/><h3>Timeline</h3><p>When does the buyer expect to make a move?</p></div><div><BadgeCheck/><h3>Financing</h3><p>What is known about financing, cash position or pre-approval status?</p></div><div><Users/><h3>Representation</h3><p>Is the prospect already working with another real estate agent?</p></div><div><Target/><h3>Client-specific fit</h3><p>What additional requirements matter to this particular realtor or campaign?</p></div></div>
        </section>

        <section id="how-to-get-buyer-leads" className={styles.section}>
          <p className="eyebrow">Practical framework</p><h2>How to Get Buyer Leads in Real Estate</h2>
          <p>Real estate buyer lead generation works better as a system than as a collection of disconnected tactics. The acquisition channel gets attention; the rest of the process determines whether that attention turns into useful sales conversations.</p>
          <div className={styles.steps}>{steps.map(([num,title,body])=><div className={styles.step} key={num}><span>{num}</span><div><h3>{title}</h3><p>{body}</p></div></div>)}</div>
        </section>

        <section className={styles.section}>
          <p className="eyebrow">Two approaches</p><h2>Buying Real Estate Leads vs. Generating Your Own</h2>
          <p>Both models can produce opportunities, but they give the realtor different levels of control.</p>
          <div className={styles.compare}><div><h3>Purchased or shared leads</h3><p><strong>Potential advantage:</strong> lead flow can begin without building the acquisition system yourself.</p><p><strong>Trade-offs:</strong> quality can vary, prospects may be shared with competitors, and you may have limited control over targeting, messaging and how the inquiry was generated.</p></div><div><h3>Owned acquisition system</h3><p><strong>Potential advantage:</strong> more control over audience, message, lead capture, qualification and follow-up.</p><p><strong>Trade-offs:</strong> requires setup, marketing or advertising effort, budget where paid media is used, ongoing management and a process for handling inquiries.</p></div></div>
          <p>The useful question is not simply whether a lead was bought or generated internally. It is whether the source and process reliably create opportunities that fit your business and whether you can follow them up effectively.</p>
        </section>

        <section className={styles.adliftSection}>
          <p className="eyebrow">The AdLift approach</p><h2>How AdLift Generates Pre-Qualified Buyer Appointments</h2>
          <p>AdLift is built around the gap between delivering contact details and delivering a buyer conversation. The service combines targeted Meta advertising with lead capture, manual qualification and appointment booking for U.S. real estate agents and small teams.</p>
          <div className={styles.flow}><div><Megaphone/><strong>Targeted Meta Ads</strong><span>Generate buyer interest around the realtor's market and campaign.</span></div><ArrowRight/><div><ClipboardList/><strong>Lead capture</strong><span>Collect contact and buyer information needed for follow-up.</span></div><ArrowRight/><div><PhoneCall/><strong>Manual qualification</strong><span>Review and contact the inquiry rather than treating every form fill as qualified.</span></div><ArrowRight/><div><BadgeCheck/><strong>Criteria verification</strong><span>Check the agreed area, budget, timeline, financing, representation and other criteria.</span></div><ArrowRight/><div><CalendarCheck/><strong>Appointment booked</strong><span>Qualified prospects who are ready for the next step are moved onto the realtor's calendar.</span></div></div>
          <p className={styles.note}>Not every inquiry will qualify or become an appointment. AdLift's qualification step exists specifically to separate raw buyer leads from prospects who meet the agreed criteria.</p>
          <CTAButtons/>
        </section>

        <section className={styles.auditCta}>
          <div><p className="eyebrow">Free Buyer Acquisition Audit</p><h2>See how a buyer-acquisition system could be structured for your market.</h2><p>Tell AdLift about your market, ideal buyer, target price range, current acquisition methods and advertising situation. We'll use that context to prepare a practical buyer-acquisition audit tailored to your market, ideal buyer and current acquisition setup.</p></div>
          <a className="btn primary large" href="/audit/">Get Your Free Buyer Acquisition Audit <ArrowRight size={18}/></a>
        </section>

        <section className={styles.section} id="faq">
          <p className="eyebrow">FAQ</p><h2>Real Estate Buyer Lead Questions</h2>
          <div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </section>
      </div>
    </article>

    <footer><a className="logo" href="/"><span>Ad</span>Lift</a><p>Qualified buyer appointments for real estate agents.</p></footer>
  </main>;
}
