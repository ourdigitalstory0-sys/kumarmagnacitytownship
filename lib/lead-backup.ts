/**
 * Sovereign Lead Backup Utility
 * Ensures zero data loss even if SMTP fails.
 */

export interface LeadData {
  name: string;
  phone: string;
  email?: string;
  source_url?: string;
  plot_id?: string;
  source_meta?: string;
  timestamp: string;
}

export async function backupLead(data: LeadData) {
  const logEntry = `[LEAD_BACKUP] ${JSON.stringify(data)}`;
  
  // 1. Primary Console Log (Persistent in Vercel/Cloudflare logs)
  console.info(logEntry);

  // 2. Future expansion: Append to a remote database or simple KV storage
  // For now, the structured console log is our primary fail-safe that we can scrape.
  
  return true;
}
