"use client";

import { useCallback } from "react";

// Define the global window object to accept dataLayer and gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

type EventName = 'generate_lead' | 'view_item' | 'virtual_page_view' | 'conversion';

interface LeadEventData {
  currency?: string;
  value?: number;
  lead_type?: string;
  project?: string;
}

interface ConversionEventData {
  send_to: string;
  value?: number;
  currency?: string;
}

export function useDataLayer() {
  
  const pushToDataLayer = useCallback((event: EventName, data?: Record<string, any>) => {
    if (typeof window !== "undefined") {
      // 1. Push to GTM DataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event,
        ...data,
      });

      // 2. Direct GA4 / Google Ads gtag call (Fallback/Explicit)
      if (typeof window.gtag === 'function') {
        window.gtag('event', event, data);
      }
    }
  }, []);

  const trackLead = useCallback((data: LeadEventData) => {
    // Google Ecosystem (GA4 & GTM)
    pushToDataLayer('generate_lead', {
      currency: 'INR',
      value: data.value || 0,
      lead_type: data.lead_type || 'enquiry',
      project: data.project || 'Kumar Magnacity',
    });

    // Google Ads Conversion tracking
    const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    const adsLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
    if (adsId && adsLabel && typeof window !== "undefined" && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
            'send_to': `${adsId}/${adsLabel}`
        });
    }

    // Meta Pixel Fallback Tracker (Centralized logic)
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'Lead', {
        currency: 'INR',
        value: data.value || 0,
        content_name: data.project || 'Kumar Magnacity'
      });
    }
  }, [pushToDataLayer]);

  return {
    pushToDataLayer,
    trackLead
  };
}
