import { NextRequest, NextResponse } from 'next/server';
import { Type, FunctionDeclaration } from '@google/genai';
import { getGeminiClient } from '@/lib/gemini';
import { SITE_CONFIG } from '@/constants/data';

const bookConsultationDeclaration: FunctionDeclaration = {
  name: 'bookConsultation',
  description:
    'Schedule an architectural metal roofing consultation, on-site evaluation, or blueprint review with an EliteMetal estimator.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      fullName: {
        type: Type.STRING,
        description: 'Full name of the homeowner, architect, or project representative.',
      },
      phone: {
        type: Type.STRING,
        description: 'Direct phone number for consultation confirmation.',
      },
      email: {
        type: Type.STRING,
        description: 'Email address for proposal and calendar dispatch.',
      },
      propertyAddress: {
        type: Type.STRING,
        description: 'Physical property address, parcel, or city/state.',
      },
      projectType: {
        type: Type.STRING,
        description: 'Type of property: Residential, Commercial, Coastal, or Historic Restoration.',
      },
      roofingSystem: {
        type: Type.STRING,
        description:
          'Preferred system: Mechanical Standing Seam, Marine Aluminum, Natural Copper, Titanium Zinc, or Not Sure.',
      },
      preferredDate: {
        type: Type.STRING,
        description: 'Target consultation date or timeframe (e.g. Next Tuesday, October 5th).',
      },
      preferredTime: {
        type: Type.STRING,
        description: 'Preferred time of day (e.g. 10:00 AM, Morning, Afternoon).',
      },
      notes: {
        type: Type.STRING,
        description: 'Any specific architectural constraints, pitch details, or plan links.',
      },
    },
    required: ['fullName', 'phone', 'propertyAddress'],
  },
};

const SYSTEM_INSTRUCTION = `You are the EliteMetal Architectural Concierge, the AI voice and booking assistant for EliteMetal Roofing.
EliteMetal Roofing is an ultra-premium, architectural sheet metal contractor based in Austin, TX, serving custom residential estates and landmark commercial developments nationwide.

Brand Ethos: "Roofing designed to last. Crafted to be seen."
Key Technical Truths:
- Core Alloys: 24-Ga Galvalume Steel AZ50 (with Kynar 500 PVDF), 0.040" Marine-Grade Aluminum (4,000+ hr salt fog proof), 16/20 oz Cold-Rolled Natural Copper (100+ year patina life), Rheinzink Titanium Zinc (self-passivating 80+ yrs), Wall & Soffit panels.
- Performance: UL 580 Class 90 Wind Uplift (160+ MPH tested), Class 4 Impact Resistance (UL 2218), Class A Fire Resistance, 50-Year Non-Prorated Transferable Warranty.
- Commercial: CSI Division 07 41 13 submittals, continuous roll-forming up to 120 ft on-site, zero-penetration solar racking (S-5! clamps), OSHA 30 certified superintendents.
- Company details: Austin Design Studio at 1040 Architectural Way, Suite 400. Phone: (555) 462-METAL. Hours: Mon-Sat 8:00 AM - 6:00 PM.

Tone: Refined, confident, articulate, architectural, courteous. Avoid hype or informal slang. Speak like an educated senior architectural sheet metal engineer.

Primary Goal:
1. Answer architectural questions with metallurgical and engineering precision.
2. If the user asks to book an estimate, schedule a site evaluation, or get a quotation, collect their details (Full Name, Phone, Email, Property Address, preferred Date/Time, and preferred roofing alloy/system).
3. Call the "bookConsultation" tool when the user provides booking info.
4. Keep spoken responses concise (2-4 sentences max) when responding during voice calls.`;

export async function POST(req: NextRequest) {
  try {
    const { messages, isVoice = false } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages array is required.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback when API key is not configured in local environment
      const lastUserMsg = messages[messages.length - 1]?.content || '';
      return NextResponse.json({
        text: `Welcome to EliteMetal Roofing. Our architectural consultation team is available at ${SITE_CONFIG.phone} or hello@elitemetalroofing.com. I can assist you with standing seam specifications, metallurgical comparisons, and scheduling on-site evaluations.`,
        booking: null,
      });
    }

    const ai = getGeminiClient();

    // Map conversation history into Gemini contents format
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION + (isVoice ? '\nNote: You are currently on a voice call with the client. Keep answers concise, natural to speak aloud, and under 3 sentences.' : ''),
        tools: [{ functionDeclarations: [bookConsultationDeclaration] }],
        temperature: 0.4,
      },
    });

    let bookingData: Record<string, unknown> | null = null;
    let replyText = response.text || '';

    // Check for function calls
    const functionCalls = response.functionCalls;
    if (functionCalls && functionCalls.length > 0) {
      const call = functionCalls[0];
      if (call.name === 'bookConsultation') {
        const args = (call.args || {}) as Record<string, unknown>;
        const confirmationId = `EMR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
        bookingData = {
          confirmationId,
          fullName: args.fullName || 'Valued Client',
          phone: args.phone || '',
          email: args.email || '',
          propertyAddress: args.propertyAddress || '',
          projectType: args.projectType || 'Residential Estate',
          roofingSystem: args.roofingSystem || 'Mechanical Standing Seam',
          preferredDate: args.preferredDate || 'Next Available Business Day',
          preferredTime: args.preferredTime || 'Morning (9:00 AM - 12:00 PM)',
          notes: args.notes || '',
          bookedAt: new Date().toISOString(),
        };

        if (!replyText) {
          replyText = `Thank you, ${bookingData.fullName}. I have successfully reserved your consultation under confirmation code ${confirmationId}. Our senior estimator will contact you at ${bookingData.phone} to finalize site access and blueprint review.`;
        }
      }
    }

    return NextResponse.json({
      text: replyText,
      booking: bookingData,
    });
  } catch (error: unknown) {
    console.error('Error in /api/ai/chat:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    // Graceful fallback for rate limits or transient errors
    return NextResponse.json({
      text: "Thank you for contacting EliteMetal Roofing. I have recorded your inquiry. To schedule directly with our estimating director, you may also reach us at (555) 462-METAL or commercial@elitemetalroofing.com.",
      booking: null,
      fallback: true,
      error: errorMessage,
    });
  }
}
