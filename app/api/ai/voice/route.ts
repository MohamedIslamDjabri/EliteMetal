import { NextRequest, NextResponse } from 'next/server';
import { getGeminiClient } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const { text, voice = 'Kore' } = await req.json();

    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Text string is required.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ audioBase64: null, fallback: true });
    }

    const ai = getGeminiClient();

    // Clean text of markdown asterisks or bullet chars for smoother speech
    const cleanText = text
      .replace(/[*_#`~]/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .trim();

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [{ text: cleanText }],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: voice === 'Fenrir' ? 'Fenrir' : 'Kore',
            },
          },
        },
      },
    });

    const base64Audio =
      response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!base64Audio) {
      return NextResponse.json({ audioBase64: null, fallback: true });
    }

    return NextResponse.json({
      audioBase64: base64Audio,
      format: 'audio/wav',
    });
  } catch (error) {
    console.error('Error generating audio in /api/ai/voice:', error);
    return NextResponse.json({ audioBase64: null, fallback: true });
  }
}
