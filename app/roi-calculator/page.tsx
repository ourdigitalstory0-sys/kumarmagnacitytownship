'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SovereignBar from '@/components/SovereignBar';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Calculator, TrendingUp, Landmark, ShieldCheck } from 'lucide-react';

export default function ROICalculatorPage() {
  const [propertyValue, setPropertyValue] = useState<number>(6800000); // 68 Lacs
  const [appreciationRate, setAppreciationRate] = useState<number>(12); // 12% YoY
  const [fdRate, setFdRate] = useState<number>(7); // 7% YoY

  // Generate 10-year projection data
  const data = useMemo(() => {
    const result = [];
    let currentPropValue = propertyValue;
    let currentFdValue = propertyValue;

    for (let year = 0; year <= 10; year++) {
      result.push({
        year: `Year ${year}`,
        "Real Estate (Manjari)": Math.round(currentPropValue),
        "Fixed Deposit": Math.round(currentFdValue),
      });
      currentPropValue *= (1 + appreciationRate / 100);
      currentFdValue *= (1 + fdRate / 100);
    }
    return result;
  }, [propertyValue, appreciationRate, fdRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <main className="min-h-screen bg-light text-dark selection:bg-accent selection:text-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-dark text-white rounded-b-[4rem]">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-bold text-[10px] uppercase tracking-[0.3em]">
            <Calculator size={14} /> Financial Intelligence
          </div>
          <h1 className="text-4xl md:text-7xl font-heading font-bold leading-tight">
            Wealth Generation <br /> <span className="text-accent italic">Engine.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            Interactive 10-Year ROI projection for Pune East real estate vs traditional fixed-income assets.
          </p>
        </div>
      </section>

      {/* Interactive Calculator Area */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Controls (Sidebar) */}
            <div className="space-y-8 bg-white p-8 rounded-[2.5rem] border border-dark/5 shadow-2xl">
              <h3 className="text-2xl font-heading font-bold mb-6">Simulation Parameters</h3>
              
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-widest text-dark/70">
                  Initial Property Value
                </label>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold">₹</span>
                  <input 
                    type="range" 
                    min={5000000} 
                    max={20000000} 
                    step={100000}
                    value={propertyValue} 
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full accent-accent"
                  />
                </div>
                <div className="text-right text-lg font-bold text-accent">{formatCurrency(propertyValue)}</div>
              </div>

              <div className="space-y-4 pt-4 border-t border-dark/10">
                <label className="block text-sm font-bold uppercase tracking-widest text-dark/70">
                  Expected Appreciation (YoY)
                </label>
                <input 
                  type="range" 
                  min={5} 
                  max={20} 
                  step={1}
                  value={appreciationRate} 
                  onChange={(e) => setAppreciationRate(Number(e.target.value))}
                  className="w-full accent-accent"
                />
                <div className="text-right text-lg font-bold text-accent">{appreciationRate}%</div>
              </div>

              <div className="space-y-4 pt-4 border-t border-dark/10">
                <label className="block text-sm font-bold uppercase tracking-widest text-dark/70">
                  Standard FD Rate (YoY)
                </label>
                <input 
                  type="range" 
                  min={4} 
                  max={10} 
                  step={0.5}
                  value={fdRate} 
                  onChange={(e) => setFdRate(Number(e.target.value))}
                  className="w-full accent-dark"
                />
                <div className="text-right text-lg font-bold text-dark">{fdRate}%</div>
              </div>

              <div className="pt-8 space-y-4">
                 <div className="flex items-center gap-3 text-sm font-bold text-dark/60">
                   <ShieldCheck className="text-accent" size={20} /> Data backed by historical Manjari trends
                 </div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="lg:col-span-2 space-y-8">
               <div className="bg-dark p-8 rounded-[2.5rem] shadow-2xl h-[500px]">
                 <ResponsiveContainer width="100%" height="100%">
                   <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                     <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                     <XAxis dataKey="year" stroke="#ffffff50" />
                     <YAxis stroke="#ffffff50" tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`} />
                     <Tooltip 
                       contentStyle={{ backgroundColor: '#111', border: '1px solid #c9a227', borderRadius: '1rem', color: '#fff' }}
                       formatter={(value: number) => formatCurrency(value)}
                     />
                     <Legend />
                     <Line type="monotone" dataKey="Real Estate (Manjari)" stroke="#c9a227" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                     <Line type="monotone" dataKey="Fixed Deposit" stroke="#ffffff50" strokeWidth={2} borderDash={[5, 5]} />
                   </LineChart>
                 </ResponsiveContainer>
               </div>
               
               <div className="grid grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-[2rem] border border-dark/5 shadow-lg">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-dark/40 mb-2">10-Year Real Estate Value</div>
                    <div className="text-3xl font-heading font-bold text-accent">{formatCurrency(data[10]["Real Estate (Manjari)"])}</div>
                 </div>
                 <div className="bg-white p-6 rounded-[2rem] border border-dark/5 shadow-lg">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-dark/40 mb-2">10-Year FD Value</div>
                    <div className="text-3xl font-heading font-bold text-dark/70">{formatCurrency(data[10]["Fixed Deposit"])}</div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lead Capture Wall */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,162,39,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Download the Complete 10-Year Micro-Market Report
          </h2>
          <p className="text-white/60 mb-12 text-lg">
            Get the full, data-backed PDF report covering Pune East appreciation trends, rental yields, and upcoming Ring Road infrastructure impacts.
          </p>
          <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 md:p-12">
            <AdvancedEnquiryForm formId="ROI_Report_Download" buttonText="GENERATE MY PDF REPORT" />
          </div>
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
