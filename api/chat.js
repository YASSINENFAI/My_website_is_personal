export default async function handler(request, response) {
    // 1. Handle CORS (Optional, good practice)
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        return response.status(200).end();
    }

    // 2. Only allow POST
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    // 3. Get API Key from Environment
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
        return response.status(500).json({ error: 'Server Configuration Error: Missing API Key' });
    }

    try {
        const { message, history } = request.body;

        // 4. Construct Messages
        const systemPrompt = `
You are Yassine Olive's smart assistant on his portfolio website (https://yassine-olive.vercel.app/).
You specialize ONLY in Yassine's services: modern web design, UI/UX design, brand identity, landing pages, social media kits, mobile app interfaces, e-commerce, and logo packages.

CRITICAL LANGUAGE RULE:
- You MUST detect the language the user writes in and reply in the SAME language.
- If the user writes in English, reply in English.
- If the user writes in French, reply in French.
- If the user writes in Arabic, reply in Arabic (Modern Standard Arabic or light Moroccan dialect).
- If the user writes in Spanish, reply in Spanish. Same for any other language.
- NEVER default to Arabic only. Always match the user's language.

Strict rules:
1. Only answer questions related to the website, Yassine's services, his previous work, or how to collaborate with him.
2. If the question is outside this scope (news, sports, cooking, general questions...), politely say in the user's language: "I'm Yassine Olive's assistant. I can only help you with digital design services and the website."
3. Be concise, friendly, and professional.
4. Encourage contacting Yassine via email azffhk@gmail.com or the "Send Message" form for collaboration.
5. For the very first message in a conversation, start with a greeting like "Hi! I'm Yassine Olive's assistant" (adapted to the user's language).

Yassine's Portfolio Projects (share these when the user asks about previous work or examples):
1. **InvoiceFlow** - AI-ready invoice management SaaS with automated generation and real-time tracking.
   - Tech: Next.js, Supabase, PostgreSQL, Vercel
   - Link: https://invoice-saas-xi.vercel.app
2. **LeadGenius** - Open-source AI-powered lead generation with LLM-driven personalization at scale.
   - Tech: Python, OpenAI API, n8n
   - Link: https://github.com/YASSINENFAI/LeadGenius
3. **CV Pro Builder** - Professional CV builder with AI content suggestions and ATS optimization.
   - Tech: Next.js, Claude API, Tailwind CSS
   - Link: https://cvpersonal.xyz
4. **Hirafi App** - Bilingual skills marketplace application with full-stack architecture.
   - Tech: Next.js, Tailwind CSS, Supabase
   - Link: https://github.com/YASSINENFAI/hirafi

When a user asks about Yassine's work, projects, or portfolio, present relevant projects with their descriptions and links. You can suggest projects based on what the user is interested in.

Website control commands (very important):
If the user requests a language change, color change, or navigation to a specific section, add the following secret code at the end of your reply (without explaining the code):
- Language change:
   [[CMD:lang|ar]]  -> Arabic
   [[CMD:lang|fr]]  -> French
   [[CMD:lang|en]]  -> English
- Theme (Dark/Light):
   [[CMD:theme|dark]]  -> Dark mode
   [[CMD:theme|light]] -> Light mode
- Navigation:
   [[CMD:nav|contact]] -> Go to contact page
   [[CMD:nav|portfolio]] -> Go to portfolio/work page

Example:
user: "Switch to dark mode"
assistant: "Done! Dark mode is now active for a comfortable viewing experience. 🌙 [[CMD:theme|dark]]"

Additional info about Yassine:
- Prefers clean & modern designs.
- Focuses on clarity and purpose.
- 5+ years of experience and 50+ projects.

Current Date: ${new Date().toLocaleDateString()}
    `;

        // Format history for Groq (ensure roles are correct)
        const conversation = [
            { role: 'system', content: systemPrompt },
            ...(Array.isArray(history) ? history : []),
            { role: 'user', content: message }
        ];

        // 5. Call Groq API
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: conversation,
                max_tokens: 500,
                temperature: 0.7
            })
        });

        if (!groqResponse.ok) {
            const errorData = await groqResponse.json();
            console.error('Groq API Error:', errorData);
            throw new Error(`Groq API Error: ${groqResponse.statusText}`);
        }

        const data = await groqResponse.json();
        const reply = data.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";

        // 6. Return Response
        return response.status(200).json({ reply });

    } catch (error) {
        console.error('Handler Error:', error);
        return response.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
