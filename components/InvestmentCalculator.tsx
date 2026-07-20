"use client";

import { useState, useMemo } from "react";
import { Calculator, TrendingUp, Download, PieChart } from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function InvestmentCalculator() {
  const { openModal } = useModal();

  const [propertyValue, setPropertyValue] = useState(8500000); // 85 Lacs
  const [downPaymentPerc, setDownPaymentPerc] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);

  const calculations = useMemo(() => {
    const downPayment = (propertyValue * downPaymentPerc) / 100;
    const principal = propertyValue - downPayment;
    
    // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;
    const emi = Math.round((principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    
    const totalPayment = emi * n;
    const totalInterest = totalPayment - principal;

    const principalPerc = (principal / totalPayment) * 100;
    const interestPerc = (totalInterest / totalPayment) * 100;

    return {
      downPayment,
      principal,
      emi,
      totalInterest,
      totalPayment,
      principalPerc,
      interestPerc
    };
  }, [propertyValue, downPaymentPerc, interestRate, tenureYears]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="w-full bg-[#050505] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10 relative z-10">
        
        {/* Left: Input Controls */}
        <div className="p-8 md:p-12 space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] text-accent font-bold uppercase tracking-widest mb-2">
              <Calculator size={12} /> Financial Intelligence
            </div>
            <h3 className="text-3xl font-heading font-bold text-white">Investment Calculator</h3>
            <p className="text-sm text-white/50">Estimate your monthly commitments and ROI.</p>
          </div>

          <div className="space-y-6">
            {/* Property Value Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Property Value</label>
                <span className="text-xl font-bold text-white">{formatCurrency(propertyValue)}</span>
              </div>
              <input 
                type="range" min="5000000" max="30000000" step="500000"
                value={propertyValue} onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full accent-accent h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/30">
                <span>₹50 L</span><span>₹3 Cr+</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Down Payment ({downPaymentPerc}%)</label>
                <span className="text-xl font-bold text-white">{formatCurrency(calculations.downPayment)}</span>
              </div>
              <input 
                type="range" min="10" max="80" step="5"
                value={downPaymentPerc} onChange={(e) => setDownPaymentPerc(Number(e.target.value))}
                className="w-full accent-accent h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Interest Rate & Tenure Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Interest Rate</label>
                  <span className="text-xl font-bold text-white">{interestRate}%</span>
                </div>
                <input 
                  type="range" min="7" max="12" step="0.1"
                  value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-accent h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Tenure</label>
                  <span className="text-xl font-bold text-white">{tenureYears} Yrs</span>
                </div>
                <input 
                  type="range" min="5" max="30" step="1"
                  value={tenureYears} onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-accent h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Visualization & Results */}
        <div className="p-8 md:p-12 bg-white/[0.02] flex flex-col justify-center space-y-10">
          
          <div className="space-y-2">
            <h4 className="text-sm text-white/50 uppercase tracking-widest font-medium">Estimated EMI</h4>
            <div className="flex items-end gap-2">
              <span className="text-5xl md:text-6xl font-heading font-bold text-accent tracking-tighter">
                {formatCurrency(calculations.emi)}
              </span>
              <span className="text-white/40 mb-2">/ month</span>
            </div>
          </div>

          {/* Visual Progress Bar */}
          <div className="space-y-4">
            <div className="flex justify-between text-xs font-medium text-white/60 uppercase tracking-wider">
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent" /> Principal</span>
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400" /> Interest</span>
            </div>
            <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden flex shadow-inner">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${calculations.principalPerc}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-accent"
              />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${calculations.interestPerc}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-red-400"
              />
            </div>
            <div className="flex justify-between text-sm font-bold text-white">
              <span>{formatCurrency(calculations.principal)}</span>
              <span>{formatCurrency(calculations.totalInterest)}</span>
            </div>
          </div>

          {/* ROI Metric */}
          <div className="bg-[#111] border border-white/5 p-6 rounded-2xl flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs text-white/50 uppercase tracking-widest font-medium flex items-center gap-2">
                <TrendingUp size={12} className="text-green-400" /> Projected ROI
              </div>
              <div className="text-lg font-bold text-white">12-15% Est. YoY Growth</div>
            </div>
            <PieChart className="text-white/10" size={40} />
          </div>

          <button
            onClick={() => openModal({
              title: "Request Amortization Schedule",
              subtitle: `Detailed loan breakdown and exclusive pre-launch offers for the ${formatCurrency(propertyValue)} asset.`,
              source: "calculator"
            })}
            className="w-full bg-white text-dark hover:bg-accent hover:text-dark transition-all py-5 rounded-xl font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3"
          >
            Get Detailed Breakdown <Download size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
