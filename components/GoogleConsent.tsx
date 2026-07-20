"use client";

import Script from "next/script";

export default function GoogleConsent() {
  return (
    <Script
      id="google-consent-v2"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          // Define dataLayer and the gtag function.
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Set default consent to 'denied' as a placeholder
          // Determine actual values based on your own requirements
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 500
          });

          // Enable conversion modeling if needed
          gtag('set', 'ads_data_redaction', true);
        `,
      }}
    />
  );
}
