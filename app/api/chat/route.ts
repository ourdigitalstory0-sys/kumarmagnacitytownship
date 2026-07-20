import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextResponse } from 'next/server';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const SYSTEM_PROMPT = `
You are the Sovereign AI Concierge for Kumar Magnacity, a luxury 150-acre real estate township in Manjari, Pune East, developed by Kumar Properties (59 years legacy).

Your goal: Answer buyer questions warmly, concisely, and accurately based ONLY on the following data. If they ask a question outside of this scope, gently pivot back to Kumar Magnacity. Your ultimate goal is to get them to provide their phone number to book a site visit or download the brochure.

# Knowledge Base:
- Location: Manjari Khurd, Hadapsar Annexe, Pune East.
- Connectivity: 15 mins to Kharadi IT Park, 10 mins to Magarpatta City, 5 mins to Solapur Highway. Near upcoming Pune Ring Road.
- Products: 
  1. G+30 High-Rise Premium Apartments (2BHK starting ₹67.99 Lacs for 757 sq.ft. 3BHK starting ₹92.99 Lacs for 1053 sq.ft).
  2. NA Bungalow Plots (Starting ₹1.08 Cr for 1700 sq.ft).
- Amenities: 1 Lakh sq.ft clubhouse, 25+ acres of green space, swimming pools, tennis courts.
- RERA: P52100052096 & P52100054476.
- Possession: December 2028.

Always maintain an elite, professional, and welcoming tone. Keep responses under 3 sentences unless asked for details.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Check if API key exists. If not, return a mock response for scaffolding purposes.
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        mock: true,
        text: "I am the Sovereign AI Concierge. The system is currently running in Scaffold mode. Please add your OPENAI_API_KEY to enable generative responses."
      });
    }

    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: SYSTEM_PROMPT,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("AI Chat Error:", error);
    return NextResponse.json({ error: "Failed to generate AI response." }, { status: 500 });
  }
}
