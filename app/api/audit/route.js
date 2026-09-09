import { NextResponse } from 'next/server';

const MAX = { short:100, medium:200, long:500 };
const clean=(v,max=MAX.medium)=>typeof v==='string'?v.trim().replace(/[<>]/g,'').slice(0,max):'';
const cleanList=(v)=>Array.isArray(v)?v.slice(0,12).map(x=>clean(x,100)).filter(Boolean):[];
const emailOk=(v)=>/^\S+@\S+\.\S+$/.test(v)&&v.length<=200;

export async function POST(request){
  try{
    const body=await request.json();
    if(body.website) return NextResponse.json({ok:true});
    const row={
      first_name:clean(body.first_name,80), email:clean(body.email,200).toLowerCase(), phone:clean(body.phone,40)||null,
      brokerage:clean(body.brokerage,150)||null, city:clean(body.city,100), state:clean(body.state,100),
      average_home_price:clean(body.average_home_price,100), target_buyer_type:cleanList(body.target_buyer_type),
      target_price_range:clean(body.target_price_range,100), target_areas:clean(body.target_areas,MAX.long),
      current_acquisition_methods:cleanList(body.current_acquisition_methods), current_monthly_buyer_volume:clean(body.current_monthly_buyer_volume,50),
      currently_running_ads:clean(body.currently_running_ads,10), monthly_ad_budget:clean(body.monthly_ad_budget,50),
      marketing_consent:body.marketing_consent===true, status:'new'
    };
    if(!row.first_name||!emailOk(row.email)||!row.city||!row.state||!row.average_home_price||!row.target_buyer_type.length||!row.target_price_range||!row.target_areas||!row.current_acquisition_methods.length||!row.current_monthly_buyer_volume||!['Yes','No'].includes(row.currently_running_ads)||!row.monthly_ad_budget){
      return NextResponse.json({error:'Please complete all required fields.'},{status:400});
    }
    const url=process.env.SUPABASE_URL; const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
    if(!url||!key){console.error('Audit storage is not configured'); return NextResponse.json({error:'Audit submissions are temporarily unavailable. Please try again shortly.'},{status:503});}
    const result=await fetch(`${url}/rest/v1/audit_requests`,{method:'POST',headers:{apikey:key,Authorization:`Bearer ${key}`,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(row),cache:'no-store'});
    if(!result.ok){console.error('Audit insert failed',result.status,await result.text()); return NextResponse.json({error:'We could not save your audit request. Please try again.'},{status:500});}
    return NextResponse.json({ok:true},{status:201});
  }catch(error){console.error('Audit request error',error); return NextResponse.json({error:'Invalid request.'},{status:400});}
}
