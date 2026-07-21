export const GAS_URL = "https://script.google.com/macros/s/AKfycbzQF_zr_Sv_arp6GMfwQbM5IinDCNIrLmnvMMnNuiKtPXAa0ZF4Q3iY_pEx5egL69PU/exec";

export async function submitLead(data: any) {
  // 1. Primary: Direct to Google Apps Script (Bypasses any Vercel backend limits)
  try {
    fetch(GAS_URL, {
      method: "POST",
      body: JSON.stringify(data),
    }).catch(e => console.warn("Direct GAS fetch failed:", e));
  } catch (e) {
    console.warn("GAS fetch error:", e);
  }

  // 2. Secondary: Send to Vercel API (for Google Sheets/Ledger logging)
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return res.ok;
  } catch (err) {
    console.error("Vercel API failed:", err);
    return false; // Still returning false allows WhatsApp fallback if both fail
  }
}
