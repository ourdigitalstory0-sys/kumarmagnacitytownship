import json
import os
import re

REGISTRY_PATH = '/Users/vikasyewle/Desktop/kumarmagnacity/data/seo-registry.json'
URL_SUFFIX = "-kumar-magnacity-na-bungalow-plots"

def clean_slug(s):
    # Remove existing suffix if present to avoid doubling
    s = s.replace(URL_SUFFIX, "")
    # Add suffix
    return s + URL_SUFFIX

if not os.path.exists(REGISTRY_PATH):
    print("Error: Registry not found.")
    exit(1)

with open(REGISTRY_PATH, 'r') as f:
    registry = json.load(f)

# 1. ENFORCE SUFFIX ON ALL EXISTING KEYS
new_registry = {}
for key, value in registry.items():
    if '/' in key:
        category, slug = key.split('/', 1)
        new_key = f"{category}/{clean_slug(slug)}"
    else:
        new_key = clean_slug(key)
    new_registry[new_key] = value

# 2. INJECT MASSIVE NEW CONTENT NODES
super_topics = [
    ("Premium Bungalow Plots in Manjari Pune", "Executive analysis of East Pune's most restricted land corridor."),
    ("NA Plots near Hadapsar IT Park", "Strategic land acquisition for Magarpatta and SP Infocity professionals."),
    ("Kharadi vs Manjari Real Estate ROI", "Comparative data on why the wealth shift is moving East."),
    ("Residential Plots on Solapur Pune Highway", "Connectivity as a catalyst for horizontal luxury growth."),
    ("Gated Community Plots near Magarpatta City", "Privacy, security, and institutional trust in Pune East."),
    ("Luxury Villa Lifestyle in East Pune", "Transitioning from high-density skyscrapers to bespoke villa living."),
    ("PMRDA Sanctioned NA Plots Manjari", "Understanding the legal framework of Kumar Magnacity's clear titles."),
    ("Investment Potential of Plotted Developments Pune", "Why land remains the #1 hedge against vertical inflation."),
    ("Bungalow Plots for IT Professionals Pune", "Creating a vacation-home legacy minutes from EON IT Park."),
    ("Swargate Businessmen Investment Strategy Manjari", "Scaling generational wealth via Solapur Highway connectivity."),
    ("Panchshil Resident Villa Upgrade Guide", "Transitioning from vertical luxury to horizontal freedom."),
    ("EON IT Park Executives Real Estate Portfolio", "Diversification into premium RERA-approved NA plots."),
    ("Pune Ring Road Impact on Manjari Plots", "Quantifying the 18% appreciation milestone of 2026."),
    ("Hadapsar Annexe Managed Estates Search", "The rise of institutionalized plotting in Pune Annexe areas."),
    ("Clear Title 7/12 Extract NA Plots Pune", "Zero-risk land acquisition with Kumar legacy support."),
    ("NRI Investment in Pune Plotted Projects", "Secure, remote wealth creation in the native IT corridor."),
    ("Custom Villa Construction Cost vs Value Pune", "Designing your bespoke mansion in a 150-acre township."),
    ("Kumar Magnacity vs Godrej Hillside Plots", "Why 150 acres of integrated township beats isolated parcels."),
    ("Kumar Magnacity vs VTP Plotted Developments", "Institutional trust and the 59-year Kumar Realty legacy."),
    ("East Pune Smart City Corridor Expansion", "Mapping the IT expansion from Mundhwa to Manjari BK."),
    ("Plotted Land Scarcity near Kharadi IT Park", "The supply-demand curve of luxury bungalow plots in 2026."),
    ("HNI Real Estate Trends Pune 2026", "The return to horizontal luxury and large gated estates."),
    ("Sustainable Living in Integrated Townships Pune", "Green lungs, smart grids, and the Magnacity ecosystem."),
    ("Best NA Plots for Villa Construction Pune East", "Ranking accessibility, amenities, and legal peace of mind.")
]

for topic, subtitle in super_topics:
    base_slug = re.sub(r'[^a-z0-9]+', '-', topic.lower()).strip('-')
    full_slug = f"market-analysis/{base_slug}{URL_SUFFIX}"
    
    if full_slug not in new_registry:
        new_registry[full_slug] = {
            "title": f"{topic} | Kumar Magnacity NA Bungalow Plots",
            "description": f"Detailed executive briefing on {topic}. Explore why Kumar Magnacity's 150-acre NA bungalow plots are the definitive investment for Pune's elite.",
            "hero_title": topic,
            "hero_subtitle": subtitle,
            "hero_badge": "Super Blog: Elite Intelligence",
            "blog_content": [
                {
                    "heading": f"The Strategic Importance of {topic}",
                    "paragraph": f"As the East Pune IT corridor expands aggressively towards Manjari, {topic} has emerged as the most searched term for high-intent investors. Kumar Magnacity aligns directly with this demand, offering 150 acres of master-planned infrastructure."
                },
                {
                    "heading": "Market Data & ROI Projections",
                    "paragraph": "Based on 2026 micro-market trends, land in the Hadapsar-Manjari-Kharadi triangle is seeing a CAGR of 14-16%. With the Solapur Highway and upcoming Ring Road, accessibility is driving a transition from vertical apartments to custom horizontal villas."
                },
                {
                    "heading": "Legal Transparency & Security",
                    "paragraph": "Every plot within Kumar Magnacity is RERA registered with an individual 7/12 extract. For businessmen from Swargate and IT execs from Kharadi, this offers the highest tier of institutional security."
                }
            ],
            "faq_json": {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": f"Why choose Kumar Magnacity for {topic}?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": f"Kumar Magnacity is the only 150-acre integrated township in the area offering NA bungalow plots with a 1 lakh sq.ft clubhouse and 25 acres of landscape."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is the title clear for these NA plots?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Kumar Magnacity provides 100% clear titles with individual 7/12 extracts for every plot owner."
                        }
                    }
                ]
            }
        }

with open(REGISTRY_PATH, 'w') as f:
    json.dump(new_registry, f, indent=2)

print(f"Master Expansion Complete.")
print(f"Total Registry size: {len(new_registry)} nodes.")
print(f"Suffix Enforced on ALL urls: {URL_SUFFIX}")
