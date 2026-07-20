import { headers } from 'next/headers';
import Link from 'next/link';
import { Globe, ArrowRight } from 'lucide-react';

export default async function NRIGeoBanner() {
  const headersList = await headers();
  const geo = headersList.get('x-user-geo');

  // If running locally or no geo detected, fallback to UNKNOWN
  const country = geo || 'UNKNOWN';

  // Target high-value foreign countries
  const nriCountries = ['AE', 'US', 'GB', 'SG', 'QA', 'SA', 'AU'];
  
  if (!nriCountries.includes(country)) {
    return null; // Do not show for domestic traffic
  }

  return (
    <div className="bg-accent text-dark px-4 py-2 text-center relative z-[100] border-b border-dark/10">
      <div className="container mx-auto max-w-7xl flex items-center justify-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Globe size={16} />
          <span className="text-sm font-bold uppercase tracking-widest">
            NRI Investment Desk
          </span>
        </div>
        <div className="text-sm font-medium">
          Special pre-launch allocation and structured payment plans available for investors from your region.
        </div>
        <Link 
          href="/nri-investment" 
          className="inline-flex items-center gap-1 text-[11px] font-bold bg-dark text-white px-3 py-1 rounded-full hover:bg-dark/80 transition-colors"
        >
          VIEW NRI OFFERS <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
