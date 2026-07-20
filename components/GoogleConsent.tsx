"use client";

import Script from "next/script";

export default function GoogleConsent() {
  return (
    <Script
      id="google-consent-v2"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          // Define dataLayer and the gtag function.
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Set default consent to 'denied' as a placeholder
          // EU / EEA / UK: Strict Defaults (Denied until granted)
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'region': ['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'GR', 'HU', 'IE', 'LV', 'LT', 'LU', 'MT', 'PL', 'PT', 'RO', 'SK', 'SI', 'SE', 'IS', 'LI', 'NO', 'CH'],
            'wait_for_update': 500
          });

          // US / UAE / India / ROW: Relaxed Defaults (Granted by default)
          gtag('consent', 'default', {
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'analytics_storage': 'granted',
            'wait_for_update': 500
          });

          // Enable conversion modeling if needed
          gtag('set', 'ads_data_redaction', true);
        `,
      }}
    />
  );
}
