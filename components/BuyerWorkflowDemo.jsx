'use client';

import { useState } from 'react';
import { trackEvent } from './funnel';
import { ArrowRight, CheckCircle2, Clock3, CalendarCheck } from 'lucide-react';

const stages = ['Buyer inquiry', 'Manual qualification', 'Appointment handoff'];
const checks = [
  ['Target market', 'Miami, FL — within the agreed service area'],
  ['Budget', '$450,000 — within the example agent’s price range'],
  ['Timeline', 'Within 90 days — matches the example criteria'],
  ['Financing', 'Reports preapproval — lender details discussed during follow-up'],
  ['Representation', 'Reports no existing agent — confirmed in conversation'],
];

export default function BuyerWorkflowDemo() {
  const [stage, setStage] = useState(0);

  return (
    <section id="qualification" className="section buyer-demo" aria-labelledby="buyer-demo-title">
      <div className="section-header">
        <p className="eyebrow">Explore the workflow</p>
        <h2 id="buyer-demo-title">See what happens before a buyer reaches your calendar.</h2>
        <p>A form fill is the starting point. Here’s how an inquiry would be reviewed, contacted and prepared for an agent introduction.</p>
      </div>
      <div className="demo-shell">
        <div className="demo-banner"><span>Illustrative demo</span><p>Fictional buyer information. Not actual leads, campaign results or a client case study.</p></div>
        <div className="demo-stage-buttons" role="group" aria-label="Explore buyer workflow stages">
          {stages.map((label, index) => (
            <button key={label} type="button" aria-pressed={stage === index} aria-controls="buyer-demo-detail" onClick={() => setStage(index)}>
              <span>0{index + 1}</span>{label}
            </button>
          ))}
        </div>
        <div className="demo-grid">
          <article className="demo-buyer">
            <p className="mini-label">Example buyer inquiry</p>
            <h3>Alex Morgan <span>Fictional buyer</span></h3>
            <dl>
              {[['Market', 'Miami, Florida'], ['Budget', '$450,000'], ['Property', 'Single-family home'], ['Timeline', 'Within 90 days'], ['Financing', 'Preapproved (self-reported)'], ['Existing agent', 'None (self-reported)']].map(([label, value]) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
            <p className="demo-note">Qualification criteria are agreed with each agent. These are example criteria, not a universal standard.</p>
          </article>
          <div id="buyer-demo-detail" className="demo-detail" aria-live="polite" aria-atomic="true">
            <p className="mini-label">Stage 0{stage + 1} / 03</p>
            {stage === 0 && <>
              <h3>An inquiry, not an appointment.</h3>
              <p>The buyer submits information after responding to a Meta ad. Submitted details still need follow-up; clicking an ad doesn’t establish readiness.</p>
              <div className="demo-outcome pending"><Clock3 size={20} /><div><strong>Awaiting contact and review</strong><span>No appointment is booked from a form submission alone.</span></div></div>
            </>}
            {stage === 1 && <>
              <h3>Check fit through a conversation.</h3>
              <p>In this example, a follow-up conversation establishes the buyer’s situation against the agent’s agreed criteria.</p>
              <ul className="demo-checks">{checks.map(([title, detail]) => <li key={title}><CheckCircle2 size={18} /><div><strong>{title}</strong><span>{detail}</span></div></li>)}</ul>
              <div className="demo-outcome pending"><Clock3 size={20} /><div><strong>Example decision: fit established</strong><span>Still awaiting an agreed appointment time.</span></div></div>
            </>}
            {stage === 2 && <>
              <h3>Confirm the time. Hand over the context.</h3>
              <p>Once the buyer agrees to an introduction and a time is confirmed, the agent receives the appointment details and qualification notes.</p>
              <div className="demo-outcome"><CalendarCheck size={22} /><div><strong>Example appointment confirmed</strong><span>Buyer introduction · Thursday, 2:00 PM ET · 20 minutes</span></div></div>
              <div className="demo-handoff"><strong>Example handoff notes</strong><p>Looking for a single-family home in Miami within 90 days. Budget up to $450,000. Reports mortgage preapproval and no current agent. Wants to discuss available homes and next steps.</p></div>
              <p className="demo-note">A booked appointment is not a guaranteed attendance, transaction or closed sale.</p>
            </>}
            {stage < 2 && <button className="demo-next" type="button" onClick={() => setStage(stage + 1)}>Explore {stages[stage + 1].toLowerCase()} <ArrowRight size={17} /></button>}
          </div>
        </div>
        <div className="demo-filter"><strong>What if the buyer doesn’t fit?</strong><p>An inquiry outside the agreed area, budget or timeline would not advance as a qualified appointment. An unanswered inquiry remains pending.</p></div>
      </div>
      <div className="demo-cta"><div><h3>What would qualification look like in your market?</h3><p>Request a free audit tailored to your market, ideal buyer and current acquisition setup.</p></div><a className="btn primary" href="/audit/" onClick={() => trackEvent('audit_click', 'workflow')}>Get Your Free Buyer Acquisition Audit <ArrowRight size={18} /></a></div>
    </section>
  );
}
