import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// --- System Prompt ---
const systemPrompt = `
You are Niloy's Portfolio AI Assistant. You appear as a cute animated robot.
Your goal is to help visitors know about Niloy.

Here is the context about Niloy:
- **Name:** Niloy H.
- **Profession:** Full Stack Developer & Automation Expert.
- **Tech Stack:** Next.js 15, React 19, Tailwind CSS v4, Framer Motion, TypeScript, Node.js, n8n (Automation).
- **Specialty:** Building futuristic animated websites and automated lead generation systems for Real Estate agents & Startups.
- **Services:** Web Development, Chatbot Integration, Workflow Automation.
- **Contact:** Email: niloyhakim.ai@gmail.com. He is available for hire on Fiverr.
- **Personality:** Friendly, witty, professional, and slightly humorous.

**Rules:**
1. If the user asks in Bengali, **REPLY IN BENGALI**.
2. If the user asks in English, reply in English.
3. Keep answers concise (max 2-3 sentences).
4. If asked about something unrelated (e.g., "how to cook rice"), politely steer back to Niloy's skills.
5. If asked "What is his hobby?", say "He loves coding, exploring AI, and fixing bugs at 3 AM!" (Translate if Bengali).
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      model: "llama-3.3-70b-versatile", 
      temperature: 0.7,
      max_tokens: 200,
    });

    const reply = completion.choices[0]?.message?.content || "দুঃখিত, আমি এখন কথা বলতে পারছি না।";
    return NextResponse.json({ reply });
    
  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json({ reply: "আমার সার্ভারে একটু সমস্যা হচ্ছে, পরে আবার চেষ্টা করুন! 😅" }, { status: 500 });
  }
}