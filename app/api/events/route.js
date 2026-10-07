import { NextResponse } from 'next/server';
const events = new Set(['homepage_view', 'audit_click', 'audit_view', 'audit_start', 'audit_step', 'audit_submitted', 'call_click']);
const sources = new Set(['homepage','navigation','hero','sample_audit','final','workflow','audit','market','acquisition','contact']);
export async function POST(request) {
  try {
    if (request.headers.get('origin') !== new URL(request.url).origin) return new NextResponse(null, { status: 403 });
    const raw = await request.text();
    if (raw.length > 256) return new NextResponse(null, { status: 413 });
    const { event, source } = JSON.parse(raw);
    if (!events.has(event) || !sources.has(source)) return new NextResponse(null, { status: 400 });
    console.info(JSON.stringify({ type: 'adlift_funnel', event, source }));
    return new NextResponse(null, { status: 204 });
  } catch { return new NextResponse(null, { status: 400 }); }
}
