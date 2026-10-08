/* ===== Trip data: the only part that changes during the trip =====
   stops[i].photos: [{ src: "photos/<file>.jpg", caption: "..." }]
   current: index of the stop Maayan is in now (null = not left yet)
   counters: things that are not derivable from the stops; updated by hand */
const TRIP = {
  departure: "2026-12-07T16:05:00+02:00",   // Air Europa, TLV
  home: { name: "תל אביב", country: "ישראל", lat: 32.0114, lng: 34.8867 },
  current: null,
  lastUpdate: null,
  stops: [
    { name: "בואנוס איירס", country: "ארגנטינה", lat: -34.6037, lng: -58.3816, from: "2026-12-08", to: null, plan: true, photos: [] },
    { name: "אושוואיה",      country: "ארגנטינה", lat: -54.8019, lng: -68.3030, from: "2026-12-11", to: null, plan: true, photos: [] }
  ],
  counters: { flights: 0, nightBuses: 0, treks: 0, extreme: 0, hostels: 0 },
  links: [
    { label: "מפת הטיול", note: "מסלול ותמונות ב-Polarsteps", href: "", icon: "map" },
    { label: "אינסטגרם",  note: "", href: "", icon: "camera" }
  ]
};

/* ===== Shared helpers ===== */
const fmtDate = d => new Date(d).toLocaleDateString("he-IL",{day:"numeric",month:"numeric"});
const km = (a,b) => { const r=x=>x*Math.PI/180, R=6371;
  const h=Math.sin(r(b.lat-a.lat)/2)**2+Math.cos(r(a.lat))*Math.cos(r(b.lat))*Math.sin(r(b.lng-a.lng)/2)**2;
  return Math.round(2*R*Math.asin(Math.sqrt(h))); };
const latLabel = p => `${Math.abs(p.lat).toFixed(1)}°${p.lat<0?"S":"N"}`;
const nf = n => n.toLocaleString("he-IL");
const ago = iso => { const m=Math.round((Date.now()-new Date(iso))/60000);
  if(m<60) return `לפני ${m} דק׳`; const h=Math.round(m/60); if(h<24) return `לפני ${h} שע׳`; return `לפני ${Math.round(h/24)} ימים`; };
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
/* stops already reached (up to and including the current one) */
const visited = () => TRIP.current==null ? [] : TRIP.stops.slice(0, TRIP.current+1);
const stopState = i => i===TRIP.current ? "now" : (TRIP.current!=null && i<TRIP.current ? "done" : "plan");
