import Site from '@/components/Site';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return <>
    <Site />
    <aside className="audit-floating-cta" aria-label="Free Buyer Acquisition Audit">
      <div><strong>Not ready to book a call?</strong><span>See how AdLift would structure buyer acquisition for your market.</span></div>
      <a className="btn primary" href="/audit">Get Your Free Buyer Acquisition Audit <ArrowRight size={17}/></a>
    </aside>
  </>;
}
