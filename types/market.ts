export interface MarketInsight {
  id: string;
  topic: string;
  location: "Kharadi" | "Hadapsar" | "Magarpatta" | "Manjari" | "Pune East" | "Swargate Hub" | "Solapur Highway" | "EON IT Park";
  summary: string;
  investment_potential: string;
  roi_forecast: string;
  infrastructure_boosts: string[];
  investor_benefits: string[];
}

export interface InvestorPersona {
  type: string;
  goal: string;
  strategy: string;
  target_plots: string;
}

export interface EastPuneMarketData {
  lastUpdated: string;
  insights: MarketInsight[];
  personas: InvestorPersona[];
}
