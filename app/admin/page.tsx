'use client';

import { useState } from 'react';
import { fetchLeads } from './actions';
import { Lock, Download, ShieldAlert, Activity, Users, Globe } from 'lucide-react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leads, setLeads] = useState<any[]>([]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const res = await fetchLeads(passcode);
    if (res.success) {
      setLeads(res.data);
      setIsAuthenticated(true);
    } else {
      setError(res.error || 'Authentication failed');
    }
    setIsLoading(false);
  };

  const exportCSV = () => {
    if (leads.length === 0) return;

    // Convert JSON to CSV
    const headers = ['Timestamp', 'Name', 'Phone', 'Email', 'Configuration', 'Form ID'];
    const rows = leads.map(lead => [
      new Date(lead.timestamp).toLocaleString(),
      `"${lead.name || ''}"`,
      `"${lead.phone || ''}"`,
      `"${lead.email || ''}"`,
      `"${lead.configuration || ''}"`,
      `"${lead.formId || ''}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    
    // Trigger Download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `kumar_magnacity_leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] p-4">
        <div className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-md w-full animate-in fade-in zoom-in duration-500">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-[#c9a227]/10 rounded-full flex items-center justify-center text-[#c9a227]">
              <Lock size={32} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-white mb-2 tracking-wide">Sovereign Command</h1>
          <p className="text-center text-white/40 text-sm mb-8">Enter authorization code to access the CRM ledger.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Passcode"
                className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a227] transition-colors text-center tracking-[0.5em]"
              />
            </div>
            {error && <div className="text-red-400 text-sm text-center flex items-center justify-center gap-2"><ShieldAlert size={14}/> {error}</div>}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#c9a227] text-black font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-[#b08d22] transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Decrypting...' : 'Authenticate'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#111] border border-white/10 rounded-3xl p-6 md:p-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Sovereign Command Center</h1>
            <p className="text-white/40">Real-time Lead Management & Analytics</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={exportCSV}
              className="flex items-center gap-2 bg-[#c9a227] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#b08d22] transition-colors"
            >
              <Download size={18} /> EXPORT CSV
            </button>
          </div>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-6 flex items-start gap-4">
            <div className="p-3 bg-[#c9a227]/10 text-[#c9a227] rounded-xl"><Users size={24} /></div>
            <div>
              <div className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Total Leads</div>
              <div className="text-4xl font-bold text-white">{leads.length}</div>
            </div>
          </div>
          <div className="bg-[#111] border border-white/10 rounded-3xl p-6 flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><Globe size={24} /></div>
            <div>
              <div className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Active Endpoints</div>
              <div className="text-xl font-bold text-white">/api/leads</div>
              <div className="text-sm text-green-400 mt-1">Operational</div>
            </div>
          </div>
          <div className="bg-[#111] border border-white/10 rounded-3xl p-6 flex items-start gap-4">
            <div className="p-3 bg-green-500/10 text-green-500 rounded-xl"><Activity size={24} /></div>
            <div>
              <div className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">System Health</div>
              <div className="text-xl font-bold text-white">100%</div>
              <div className="text-sm text-white/40 mt-1">Ledger Sync: Active</div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-white/70">
              <thead className="bg-black/50 text-white/40 uppercase tracking-widest text-[10px]">
                <tr>
                  <th className="px-6 py-4 font-bold">Timestamp</th>
                  <th className="px-6 py-4 font-bold">Name</th>
                  <th className="px-6 py-4 font-bold">Contact</th>
                  <th className="px-6 py-4 font-bold">Configuration</th>
                  <th className="px-6 py-4 font-bold">Source Form</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {leads.map((lead, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-white/50">
                      {new Date(lead.timestamp).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 font-medium text-white">
                      {lead.name}
                    </td>
                    <td className="px-6 py-4">
                      <div>{lead.phone}</div>
                      <div className="text-white/40">{lead.email}</div>
                    </td>
                    <td className="px-6 py-4 text-[#c9a227]">
                      {lead.configuration || 'N/A'}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded bg-white/10 text-[10px] uppercase tracking-wider">
                        {lead.formId || 'Unknown'}
                      </span>
                    </td>
                  </tr>
                ))}
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-white/40">
                      No leads captured in the ledger yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
