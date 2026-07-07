'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  FileSearch,
  Filter,
  Handshake,
  Layers3,
  MessageSquareText,
  MousePointerClick,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  XCircle,
  Zap,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Detailed buyer journey from ad click to booked appointment.
const process = [
  ['01', 'Meta Ads', 'Campaigns are built around buyer intent, your local market, and clear qualification signals.', Zap],
  ['02', 'Buyer submits information', 'The buyer shares contact details, timeline, budget, preferred area, and buying situation.', FileSearch],
  ['03', 'Manual qualification', 'Every inquiry is reviewed and contacted before it reaches your calendar.', Filter],
  ['04', 'Entered into AdLift CRM', 'Qualified buyers are entered into the AdLift CRM to track status and next steps.', Layers3],
  ['05', 'Appointment booked', 'Only buyers matching the agreed criteria are passed forward as appointments.', CalendarCheck],
  ['06', 'Realtor speaks with qualified buyer', 'You spend your time with serious buyers instead of sorting through noise.', Handshake],
];

const problems = [
  ['Unqualified buyers', 'Most lead systems optimize for form fills, not fit. That creates volume, but not confidence.', 'AdLift filters for financial readiness, intent, timeline, and client criteria before booking.'],
  ['Time wasters', 'Agents lose hours chasing people who clicked an ad but are nowhere near ready.', 'We manually qualify buyers so your calendar is protected from weak conversations.'],
  ['Poor communication', 'Many vendors disappear after launch and leave agents guessing what is happening.', 'You get a straightforward process, clear expectations, and no confusing black box.'],
  ['Low intent', 'A buyer lead is not useful just because someone filled out a form.', 'We focus on appointments with buyers who are actively looking and worth speaking with.'],
];

// Points that explain why agents trust AdLift.
const reasons = [
  ['Quality over quantity', 'The goal is not to flood your CRM. The goal is to create buyer conversations worth taking.', Target],
  ['Payment after agreed delivery', 'You are billed after the agreed service has been delivered, not before value exists.', ShieldCheck],
  ['No long-term contracts', 'Simple terms. No lock-in designed to trap you after a weak month.', BadgeCheck],
  ['Manual qualification', 'Human review keeps obvious bad fits from reaching your calendar.', PhoneCall],
  ['Transparent communication', 'You should understand what is happening, what is being tested, and what gets booked.', MessageSquareText],
  ['Structured lead management', 'Each buyer moves through an organized internal workflow before you ever see them.', Layers3],
];

const faqs = [
  [
    'How do you generate buyers?',
    'We run targeted Meta Ads that drive buyer inquiries through a structured form. The goal is to capture useful qualification details before any appointment is booked.',
  ],
  [
    'How does payment work?',
    'You are billed after the agreed service has been delivered. There are no hidden fees and no long\u2011term contract requirement.',
  ],
  [
    'How are buyers qualified?',
    'Buyers are reviewed against criteria like budget, preferred area, buying timeline, financial readiness or pre\u2011approval, and whether they are already working with an agent. Only those who meet the agreed criteria are booked.',
  ],
  [
    'What if a buyer isn\u2019t qualified?',
    'They are not passed forward as a qualified appointment. The qualification step protects your time by filtering out poor\u2011quality enquiries before they reach your calendar.',
  ],
  [
    'Do I need to sign a long\u2011term contract?',
    'No. AdLift offers simple terms with no long\u2011term lock\u2011in.',
  ],
  [
    'How quickly do leads arrive?',
    'Timing depends on your market, offer, ad performance, and area. During the discovery call we\u2019ll set realistic expectations for how quickly qualified appointments can be generated.',
  ],
  [
    'Why don\u2019t you show testimonials yet?',
    'AdLift prefers to earn genuine testimonials through client results rather than publishing fake reviews. Once real clients have benefited from the service, we will share their feedback professionally.',
  ],
  [
    'What areas do you work in?',
    'AdLift works with real estate agents and small teams in the United States. Campaign criteria are adjusted around the local market and the agent\u2019s target buyer profile.',
  ],
];

// Criteria used to evaluate and qualify each buyer.
const qualificationCriteria = [
  'Budget and price range',
  'Preferred area or neighbourhood',
  'Buying timeline',
  'Financial qualification or pre\u2011approval',
  'Already working with another agent',
];

// Steps in our internal lead management workflow.
const internalLeadSteps = [
  'Lead enters the system',
  'Manual review & conversation',
  'Qualified against agreed criteria',
  'Only serious buyers move forward',
];

// End\u2011to\u2011end operational process from first click to client communication.
const operations = [
  ['01', 'Campaign creation', 'Campaigns are crafted around your local market, offer and ideal buyer profile.', Zap],
  ['02', 'Buyer generation', 'Potential buyers submit details through a structured form.', Layers3],
  ['03', 'Manual qualification', 'Every inquiry is reviewed and contacted before it is considered qualified.', PhoneCall],
  ['04', 'CRM management', 'Qualified buyers are organized in our CRM to track status and next actions.', Layers3],
  ['05', 'Appointment booking', 'We schedule calls between you and buyers who meet all criteria.', CalendarCheck],
  ['06', 'Client communication', 'You stay informed with transparent updates and insights at every stage.', MessageSquareText],
];

function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div className="section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function CTAButtons() {
  return (
    <div className="cta-row">
      <a className="btn primary" href="#contact">
        Book a discovery call <ArrowRight size={18} />
      </a>
      <a className="btn secondary" href="#process">
        See how it works
      </a>
    </div>
  );
}

export default function Site() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav">
        <a className="logo" href="#top" aria-label="AdLift home">
          <span>Ad</span>Lift
        </a>
        <nav aria-label="Primary navigation">
          <a href="#problem">Why it fails</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Book call</a>
      </header>

      <section id="top" className="hero">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="pill" variants={fadeUp}>
            <Sparkles size={16} /> Qualified buyer appointments for real estate agents
          </motion.div>
          <motion.h1 variants={fadeUp}>Qualified buyer appointments through targeted Meta Ads and manual qualification.</motion.h1>
          <motion.p className="hero-sub" variants={fadeUp}>
            AdLift helps real estate agents and small teams generate qualified buyer appointments through targeted Meta Ads and a hands\u2011on qualification process. Only buyers who meet your criteria are booked, and you pay after the service is delivered.
          </motion.p>
          <motion.div variants={fadeUp}><CTAButtons /></motion.div>
          <motion.div className="trust-strip" variants={fadeUp}>
            <span><CheckCircle2 size={16} /> No fake testimonials</span>
            <span><CheckCircle2 size={16} /> No long-term contracts</span>
            <span><CheckCircle2 size={16} /> Billed after agreed delivery</span>
          </motion.div>
        </motion.div>

        <motion.div className="hero-panel" initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
          <div className="panel-top">
            <div><p>Appointment pipeline</p><h3>Buyer Qualification</h3></div>
            <span className="status">Live process</span>
          </div>
          <div className="pipeline">
            <div className="pipe-card active"><Zap size={18}/><span>Meta Ads</span></div>
            <div className="line" />
            <div className="pipe-card"><Layers3 size={18}/><span>Buyer Form</span></div>
            <div className="line" />
            <div className="pipe-card"><PhoneCall size={18}/><span>Manual Call</span></div>
            <div className="line" />
            <div className="pipe-card booked"><CalendarCheck size={18}/><span>Booked</span></div>
          </div>
          <div className="qualification-card">
            <p className="mini-label">Qualified buyer criteria</p>
            {['Financially qualified or pre-approved', 'Actively looking to purchase', 'Moving within agreed timeframe', 'Matches client criteria'].map((item) => (
              <div className="check-row" key={item}><CheckCircle2 size={17}/><span>{item}</span></div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="problem" className="section">
        <SectionHeader eyebrow="The problem" title="Most buyer lead generation is built for volume. Agents need quality." text="A full pipeline means nothing if the people inside it are not ready, qualified, or worth your time." />
        <motion.div className="problem-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          {problems.map(([title, pain, fix]) => (
            <motion.article className="problem-card" variants={fadeUp} key={title}>
              <div className="bad"><XCircle size={18}/> {title}</div>
              <p>{pain}</p>
              <div className="solution"><CheckCircle2 size={18}/><span>{fix}</span></div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="process" className="section process-section">
        <SectionHeader
          eyebrow="How it works"
          title="A simple system from ad click to booked appointment."
          text="The process is intentionally narrow: generate buyer interest, qualify manually, and only book appointments that meet the agreed criteria."
        />
        <div className="process-line" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
          {process.map(([num, title, body, Icon]) => (
            <motion.div className="process-step" key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="step-num">{num}</span>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{body}</p>
            </motion.div>
          ))}
        </div>
        <CTAButtons />
      </section>

      {/* Buyer qualification criteria */}
      <section id="qualification" className="section">
        <SectionHeader
          eyebrow="Buyer qualification"
          title="How buyers are qualified"
          text="Every buyer is evaluated against clear criteria so only serious prospects reach your calendar."
        />
        <div className="qualification-card">
          <p className="mini-label">Qualification criteria</p>
          {qualificationCriteria.map((item) => (
            <div className="check-row" key={item}>
              <CheckCircle2 size={17} />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <CTAButtons />
      </section>

      <section className="section split-section">
        <motion.div className="glass-block" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="eyebrow">Risk reduction</p>
          <h2>AdLift is structured so trust is earned, not assumed.</h2>
          <p>There are no fake client logos, no manufactured reviews, and no inflated claims. The offer is simple: agree on the service, deliver it, then bill after delivery.</p>
          <CTAButtons />
        </motion.div>
        <motion.div className="terms-card" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {['Billed after agreed delivery', 'No long-term contracts', 'No hidden fees', 'Clear buyer qualification criteria'].map((item) => (
            <motion.div className="term" variants={fadeUp} key={item}><ShieldCheck size={20}/>{item}</motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Why agents trust AdLift"
          title="Built on transparency, structure and fairness."
          text=""
        />
        <motion.div className="reason-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          {reasons.map(([title, body, Icon]) => (
            <motion.article className="reason-card" variants={fadeUp} key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{body}</p>
            </motion.article>
          ))}
        </motion.div>
        <CTAButtons />
      </section>

      {/* Operational process section */}
      <section id="our-process" className="section">
        <SectionHeader
          eyebrow="Our process"
          title="An end\u2011to\u2011end system from first click to client communication."
          text="This is more than ad campaigns \u2013 it\u2019s a structured operation ensuring quality at every step."
        />
        <div className="process-line" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
          {operations.map(([num, title, body, Icon]) => (
            <motion.div
              className="process-step"
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="step-num">{num}</span>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{body}</p>
            </motion.div>
          ))}
        </div>
        <CTAButtons />
      </section>

      {/* Internal lead management section */}
      <section id="lead-management" className="section">
        <SectionHeader
          eyebrow="Internal lead management"
          title="Every buyer moves through a structured qualification workflow."
          text="No generic spreadsheets or chaotic lists. Our internal CRM ensures each buyer is contacted, vetted and tracked before they reach you."
        />
        <div className="qualification-card">
          <p className="mini-label">Workflow overview</p>
          {internalLeadSteps.map((item) => (
            <div className="check-row" key={item}>
              <CheckCircle2 size={17} />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <CTAButtons />
      </section>

      <section className="section about">
        <SectionHeader
          eyebrow="Founder & mission"
          title="Built by marketers for real estate agents who value clarity and quality."
          text="AdLift exists because real estate agents don\u2019t need more low\u2011quality leads. They need transparent systems, strict qualification standards and a partner who respects their time."
        />
        <div className="about-copy">
          <p>
            AdLift was founded by a real estate marketing professional who recognised that agents don\u2019t need more low\u2011quality leads. They need transparent systems, strict qualification standards and a partner who respects their time.
          </p>
          <p>
            Our mission is to help independent agents and small teams create a steady path to qualified buyer appointments without forcing them into long contracts or upfront payments for unproven volume. We aren\u2019t decades old; we are modern, focused and working to earn our reputation through results.
          </p>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <SectionHeader eyebrow="FAQ" title="Questions a serious agent would ask before booking a call." />
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <motion.div className="contact-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div>
            <p className="eyebrow">Discovery call</p>
            <h2>Find out if AdLift makes sense for your market.</h2>
            <p>Book a call to discuss your area, ideal buyer profile, qualification criteria, and whether the model is a fit. No pressure. No inflated promises.</p>
          </div>
          <a className="btn primary large" href="mailto:mansur.betelguiriev@gmail.com?subject=AdLift%20Discovery%20Call">
            Contact AdLift <ArrowRight size={18}/>
          </a>
        </motion.div>
      </section>

      <footer>
        <div className="logo"><span>Ad</span>Lift</div>
        <p>Qualified buyer appointments for real estate agents.</p>
      </footer>
    </main>
  );
}
