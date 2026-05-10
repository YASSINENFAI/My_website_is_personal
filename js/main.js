/**
 * Yassine Nfouh — Premium Portfolio JavaScript
 * Particle system, counter animations, scroll effects, language switching
 */

// =====================================================
// TRANSLATIONS
// =====================================================
const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        nav_cta: "Get in Touch",
        hero_subtitle: "AI Developer | Web Designer | App Interface Designer | Automation Specialist",
        hero_summary: "AI Developer and Web Designer with 1+ year of hands-on experience building AI-powered applications, LLM integrations, and intelligent automation systems — alongside responsive website design and app interface design. Proficient in integrating GPT-4, Claude API, and Gemini into production-grade tools. Specialized in prompt engineering, end-to-end AI pipeline development, and crafting polished web and mobile UI using Next.js, React, and Tailwind CSS.",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Contact Me",
        stat_projects: "Projects",
        stat_experience: "Year Experience",
        stat_tools: "AI Tools",
        stat_efficiency: "% Efficiency Gain",
        skills_title: "Technical Expertise",
        skill_dev_title: "Development & Cloud",
        skill_design_title: "Web & App Design",
        skill_auto_title: "Automation & Tools",
        badge_prompt_eng: "Prompt Engineering",
        badge_chatbot: "Chatbot Dev",
        badge_web_design: "Web Design",
        badge_app_design: "App Interface Design",
        badge_responsive: "Responsive Design",
        badge_brand: "Brand Identity",
        exp_title: "Professional Experience",
        exp_1_title: "AI Developer & Automation Specialist",
        exp_1_company: "Freelance / Remote",
        exp_1_1: "Designed and deployed end-to-end AI-powered automation pipelines using Make and n8n, integrating LLMs for automated content generation, reducing manual processing time by 70%.",
        exp_1_2: "Integrated GPT-4, Claude API, and Gemini APIs into production applications, implementing NLP solutions and intelligent chatbot systems for real-world client use cases.",
        exp_1_3: "Developed advanced prompt engineering strategies to produce consistent, high-quality AI outputs across multiple LLM providers.",
        exp_1_4: "Architected AI API connections to third-party platforms via REST APIs and webhooks, delivering fully automated, scalable systems for business process automation.",
        exp_1_5: "Built and deployed full-stack web applications (InvoiceFlow, LeadGenius) using Next.js, Supabase, and Vercel.",
        exp_1_6: "Implemented retrieval-augmented generation (RAG) architectures and AI agent workflows to extend LLM capabilities with external data sources.",
        exp_2_company: "Freelance / Remote",
        exp_2_1: "Designed responsive web and mobile interfaces using StitchAI, delivering brand identity systems and digital product designs for early-stage startups.",
        exp_2_2: "Leveraged AI-powered design tools to accelerate UI/UX workflows, reducing design iteration cycles and improving time-to-market for client products.",
        projects_title: "Selected Projects",
        proj_1_desc: "AI-ready invoice management SaaS with automated invoice generation, AI-powered data extraction, and real-time financial tracking.",
        proj_2_desc: "Open-source AI-powered lead generation and personalized email outreach automation tool with LLM-driven personalization at scale.",
        proj_3_desc: "Professional CV builder web application with AI-powered content suggestions and ATS optimization features.",
        proj_4_desc: "Bilingual (Arabic/English) skills marketplace application with full-stack architecture.",
        edu_title: "Education & Languages",
        edu_label: "Self-Directed Learning",
        edu_sub: "AI Development, Web Design, App Interface Design & Automation",
        edu_projects: "Hands-on Projects",
        lang_title: "Languages",
        lang_ar: "Arabic",
        lang_ar_level: "Native",
        lang_en_level: "Intermediate (Technical)",
        comp_title: "Core Competencies",
        comp_1: "Artificial Intelligence (AI)",
        comp_2: "Natural Language Processing",
        comp_3: "Large Language Models",
        comp_4: "Generative AI",
        comp_5: "AI Application Development",
        comp_6: "LLM Integration",
        comp_7: "API Development",
        comp_8: "Automation Engineering",
        comp_9: "Web Design",
        comp_10: "App Interface Design",
        comp_11: "Python Development",
        comp_12: "Full-Stack Development",
        comp_13: "Cloud Deployment",
        comp_14: "Agile Development",
        contact_title: "Let's Build Something",
        contact_desc: "Currently available for freelance projects and remote opportunities in AI development and web design.",
        contact_location: "Morocco (Remote)",
        footer_text: "Built with passion."
    },
    ar: {
        nav_about: "\u0645\u0646 \u0623\u0646\u0627",
        nav_skills: "\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a",
        nav_experience: "\u0627\u0644\u062e\u0628\u0631\u0629",
        nav_projects: "\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639",
        nav_contact: "\u062a\u0648\u0627\u0635\u0644",
        nav_cta: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a",
        hero_subtitle: "\u0645\u0637\u0648\u0631 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a | \u0645\u0635\u0645\u0645 \u0648\u064a\u0628 | \u0645\u0635\u0645\u0645 \u0648\u0627\u062c\u0647\u0627\u062a \u062a\u0637\u0628\u064a\u0642\u0627\u062a | \u0645\u062a\u062e\u0635\u0635 \u0641\u064a \u0627\u0644\u0623\u062a\u0645\u062a\u0629",
        hero_summary: "\u0645\u0637\u0648\u0631 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u0645\u0635\u0645\u0645 \u0648\u064a\u0628 \u0645\u0639 \u0623\u0643\u062b\u0631 \u0645\u0646 \u0633\u0646\u0629 \u0645\u0646 \u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0641\u064a \u0628\u0646\u0627\u0621 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0645\u062f\u0639\u0648\u0645\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a\u060c \u0648\u062f\u0645\u062c \u0646\u0645\u0627\u0630\u062c LLM\u060c \u0648\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0623\u062a\u0645\u062a\u0629 \u0627\u0644\u0630\u0643\u064a\u0629 \u2014 \u0625\u0644\u0649 \u062c\u0627\u0646\u0628 \u062a\u0635\u0645\u064a\u0645 \u0645\u0648\u0627\u0642\u0639 \u0648\u064a\u0628 \u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0648\u0648\u0627\u062c\u0647\u0627\u062a \u062a\u0637\u0628\u064a\u0642\u0627\u062a. \u0628\u0627\u0631\u0639 \u0641\u064a \u062f\u0645\u062c GPT-4 \u0648 Claude API \u0648 Gemini \u0641\u064a \u0623\u062f\u0648\u0627\u062a \u062c\u0627\u0647\u0632\u0629 \u0644\u0644\u0625\u0646\u062a\u0627\u062c. \u0645\u062a\u062e\u0635\u0635 \u0641\u064a \u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0623\u0648\u0627\u0645\u0631\u060c \u0648\u062a\u0637\u0648\u064a\u0631 \u0645\u0633\u0627\u0631\u0627\u062a \u0639\u0645\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0644\u0644\u0646\u0647\u0627\u064a\u0629\u060c \u0648\u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u062c\u0647\u0627\u062a \u0648\u064a\u0628 \u0648\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u0635\u0642\u0648\u0644\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Next.js \u0648 React \u0648 Tailwind CSS.",
        hero_btn_projects: "\u0634\u0627\u0647\u062f \u0645\u0634\u0627\u0631\u064a\u0639\u064a",
        hero_btn_contact: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a",
        stat_projects: "\u0645\u0634\u0627\u0631\u064a\u0639",
        stat_experience: "\u0633\u0646\u0629 \u062e\u0628\u0631\u0629",
        stat_tools: "\u0623\u062f\u0627\u0629 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a",
        stat_efficiency: "% \u0632\u064a\u0627\u062f\u0629 \u0641\u064a \u0627\u0644\u0643\u0641\u0627\u0621\u0629",
        skills_title: "\u0627\u0644\u062e\u0628\u0631\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629",
        skill_dev_title: "\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u0644\u0633\u062d\u0627\u0628\u0629",
        skill_design_title: "\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a",
        skill_auto_title: "\u0627\u0644\u0623\u062a\u0645\u062a\u0629 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u062a",
        badge_prompt_eng: "\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0623\u0648\u0627\u0645\u0631",
        badge_chatbot: "\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0634\u0627\u062a \u0628\u0648\u062a",
        badge_web_design: "\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0648\u064a\u0628",
        badge_app_design: "\u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a",
        badge_responsive: "\u062a\u0635\u0645\u064a\u0645 \u0645\u062a\u062c\u0627\u0648\u0628",
        badge_brand: "\u0627\u0644\u0647\u0648\u064a\u0629 \u0627\u0644\u0628\u0635\u0631\u064a\u0629",
        exp_title: "\u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0645\u0647\u0646\u064a\u0629",
        exp_1_title: "\u0645\u0637\u0648\u0631 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u0645\u062a\u062e\u0635\u0635 \u0641\u064a \u0627\u0644\u0623\u062a\u0645\u062a\u0629",
        exp_1_company: "\u0639\u0645\u0644 \u062d\u0631 / \u0639\u0646 \u0628\u064f\u0639\u062f",
        exp_1_1: "\u062a\u0635\u0645\u064a\u0645 \u0648\u0646\u0634\u0631 \u0645\u0633\u0627\u0631\u0627\u062a \u0623\u062a\u0645\u062a\u0629 \u0634\u0627\u0645\u0644\u0629 \u0645\u062f\u0639\u0648\u0645\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Make \u0648 n8n\u060c \u0648\u062f\u0645\u062c \u0646\u0645\u0627\u0630\u062c LML \u0644\u062a\u0648\u0644\u064a\u062f \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u062a\u0644\u0642\u0627\u0626\u064a\u0627\u064b\u060c \u0645\u0645\u0627 \u0642\u0644\u0644 \u0648\u0642\u062a \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u064a\u062f\u0648\u064a\u0629 \u0628\u0646\u0633\u0628\u0629 70%.",
        exp_1_2: "\u062f\u0645\u062c GPT-4 \u0648 Claude API \u0648 Gemini APIs \u0641\u064a \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0625\u0646\u062a\u0627\u062c\u064a\u0629\u060c \u0648\u062a\u0646\u0641\u064a\u0630 \u062d\u0644\u0648\u0644 NLP \u0648\u0623\u0646\u0638\u0645\u0629 \u0634\u0627\u062a \u0628\u0648\u062a \u0630\u0643\u064a\u0629 \u0644\u062d\u0627\u0644\u0627\u062a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062d\u0642\u064a\u0642\u064a\u0629.",
        exp_1_3: "\u062a\u0637\u0648\u064a\u0631 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629 \u0644\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0644\u0625\u0646\u062a\u0627\u062c \u0645\u062e\u0631\u062c\u0627\u062a \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u062a\u0633\u0642\u0629 \u0648\u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062c\u0648\u062f\u0629 \u0639\u0628\u0631 \u0645\u0632\u0648\u062f\u064a LLM \u0645\u062a\u0639\u062f\u062f\u064a\u0646.",
        exp_1_4: "\u0647\u0646\u062f\u0633\u0629 \u0627\u062a\u0635\u0627\u0644\u0627\u062a API \u0644\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0639 \u0645\u0646\u0635\u0627\u062a \u062e\u0627\u0631\u062c\u064a\u0629 \u0639\u0628\u0631 REST APIs \u0648 webhooks\u060c \u0648\u062a\u0642\u062f\u064a\u0645 \u0623\u0646\u0638\u0645\u0629 \u0622\u0644\u064a\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0648\u0633\u0639 \u0644\u0623\u062a\u0645\u062a\u0629 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629.",
        exp_1_5: "\u0628\u0646\u0627\u0621 \u0648\u0646\u0634\u0631 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0648\u064a\u0628 \u0634\u0627\u0645\u0644\u0629 (InvoiceFlow, LeadGenius) \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Next.js \u0648 Supabase \u0648 Vercel.",
        exp_1_6: "\u062a\u0646\u0641\u064a\u0630 \u0647\u064a\u0627\u0643\u0644 RAG \u0648\u0633\u064a\u0631 \u0639\u0645\u0644 \u0648\u0643\u0644\u0627\u0621 AI \u0644\u062a\u0648\u0633\u064a\u0639 \u0642\u062f\u0631\u0627\u062a LLM \u0645\u0639 \u0645\u0635\u0627\u062f\u0631 \u0628\u064a\u0627\u0646\u0627\u062a \u062e\u0627\u0631\u062c\u064a\u0629.",
        exp_2_company: "\u0639\u0645\u0644 \u062d\u0631 / \u0639\u0646 \u0628\u064f\u0639\u062f",
        exp_2_1: "\u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u062c\u0647\u0627\u062a \u0648\u064a\u0628 \u0648\u0645\u0648\u0628\u0627\u064a\u0644 \u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 StitchAI\u060c \u0648\u062a\u0642\u062f\u064a\u0645 \u0623\u0646\u0638\u0645\u0629 \u0647\u0648\u064a\u0629 \u0628\u0635\u0631\u064a\u0629 \u0648\u062a\u0635\u0645\u064a\u0645\u0627\u062a \u0645\u0646\u062a\u062c\u0627\u062a \u0631\u0642\u0645\u064a\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0646\u0627\u0634\u0626\u0629.",
        exp_2_2: "\u0627\u0633\u062a\u063a\u0644\u0627\u0644 \u0623\u062f\u0648\u0627\u062a \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u062f\u0639\u0648\u0645\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0644\u062a\u0633\u0631\u064a\u0639 \u0633\u064a\u0631 \u0639\u0645\u0644 UI/UX\u060c \u0648\u062a\u0642\u0644\u064a\u0644 \u062f\u0648\u0631\u0627\u062a \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u062a\u062d\u0633\u064a\u0646 \u0633\u0631\u0639\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0644\u0633\u0648\u0642.",
        projects_title: "\u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u062e\u062a\u0627\u0631\u0629",
        proj_1_desc: "SaaS \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631 \u062c\u0627\u0647\u0632 \u0644\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0639 \u0625\u0646\u0634\u0627\u0621 \u0641\u0648\u0627\u062a\u064a\u0631 \u0622\u0644\u064a \u0648\u0627\u0633\u062a\u062e\u0631\u0627\u062c \u0628\u064a\u0627\u0646\u0627\u062a \u0630\u0643\u064a \u0648\u062a\u062a\u0628\u0639 \u0645\u0627\u0644\u064a \u0641\u064a \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u062d\u0642\u064a\u0642\u064a.",
        proj_2_desc: "\u0623\u062f\u0627\u0629 \u0645\u0641\u062a\u0648\u062d\u0629 \u0627\u0644\u0645\u0635\u062f\u0631 \u0645\u062f\u0639\u0648\u0645\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0644\u0644\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0623\u062a\u0645\u062a\u0629 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0645\u0639 \u062a\u062e\u0635\u064a\u0635 \u0634\u062e\u0635\u064a \u0639\u0628\u0631 LLM.",
        proj_3_desc: "\u062a\u0637\u0628\u064a\u0642 \u0648\u064a\u0628 \u0627\u062d\u062a\u0631\u0627\u0641\u064a \u0644\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0633\u064a\u0631 \u0627\u0644\u0630\u0627\u062a\u064a\u0629 \u0645\u0639 \u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a \u0645\u062d\u062a\u0648\u0649 \u0630\u0643\u064a\u0629 \u0648\u0645\u064a\u0632\u0627\u062a \u062a\u062d\u0633\u064a\u0646 ATS.",
        proj_4_desc: "\u062a\u0637\u0628\u064a\u0642 \u0633\u0648\u0642 \u0645\u0647\u0627\u0631\u0627\u062a \u062b\u0646\u0627\u0626\u064a \u0627\u0644\u0644\u063a\u0629 (\u0627\u0644\u0639\u0631\u0628\u064a\u0629/\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629) \u0628\u0647\u064a\u0643\u0644\u064a\u0629 \u062a\u0637\u0648\u064a\u0631 \u0634\u0627\u0645\u0644\u0629.",
        edu_title: "\u0627\u0644\u062a\u0639\u0644\u064a\u0645 \u0648\u0627\u0644\u0644\u063a\u0627\u062a",
        edu_label: "\u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0630\u0627\u062a\u064a",
        edu_sub: "\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a\u060c \u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0648\u064a\u0628\u060c \u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0648\u0627\u0644\u0623\u062a\u0645\u062a\u0629",
        edu_projects: "\u0645\u0634\u0627\u0631\u064a\u0639 \u0639\u0645\u0644\u064a\u0629",
        lang_title: "\u0627\u0644\u0644\u063a\u0627\u062a",
        lang_ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        lang_ar_level: "\u0644\u063a\u0629 \u0623\u0645",
        lang_en_level: "\u0645\u062a\u0648\u0633\u0637 (\u062a\u0642\u0646\u064a)",
        comp_title: "\u0627\u0644\u0643\u0641\u0627\u0621\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629",
        comp_1: "\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a",
        comp_2: "\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u0629",
        comp_3: "\u0627\u0644\u0646\u0645\u0627\u0630\u062c \u0627\u0644\u0644\u063a\u0648\u064a\u0629 \u0627\u0644\u0643\u0628\u064a\u0631\u0629",
        comp_4: "\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0627\u0644\u062a\u0648\u0644\u064a\u062f\u064a",
        comp_5: "\u062a\u0637\u0648\u064a\u0631 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a",
        comp_6: "\u062f\u0645\u062c LLM",
        comp_7: "\u062a\u0637\u0648\u064a\u0631 API",
        comp_8: "\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0623\u062a\u0645\u062a\u0629",
        comp_9: "\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0648\u064a\u0628",
        comp_10: "\u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a",
        comp_11: "\u062a\u0637\u0648\u064a\u0631 \u0628\u0627\u064a\u062b\u0648\u0646",
        comp_12: "\u062a\u0637\u0648\u064a\u0631 \u0634\u0627\u0645\u0644",
        comp_13: "\u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0633\u062d\u0627\u0628\u064a",
        comp_14: "\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0631\u0634\u064a\u0642",
        contact_title: "\u0644\u0646\u0628\u0646\u064a \u0634\u064a\u0626\u0627\u064b \u0645\u0639\u0627\u064b",
        contact_desc: "\u0645\u062a\u0627\u062d \u062d\u0627\u0644\u064a\u0627\u064b \u0644\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u0629 \u0648\u0627\u0644\u0641\u0631\u0635 \u0639\u0646 \u0628\u064f\u0639\u062f \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0648\u064a\u0628.",
        contact_location: "\u0627\u0644\u0645\u063a\u0631\u0628 (\u0639\u0646 \u0628\u064f\u0639\u062f)",
        footer_text: "\u0628\u064f\u0646\u064a \u0628\u0634\u063a\u0641."
    }
};

// =====================================================
// LANGUAGE SYSTEM
// =====================================================
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? '\u0627\u0644\u0639\u0631\u0628\u064a\u0629' : 'English';
    }
}

function initLanguageSwitcher() {
    const navInner = document.querySelector('.nav-inner');
    if (navInner) {
        const langToggle = document.createElement('button');
        langToggle.className = 'lang-toggle';
        langToggle.textContent = currentLang === 'en' ? '\u0627\u0644\u0639\u0631\u0628\u064a\u0629' : 'English';

        langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });

        const btnOutline = navInner.querySelector('.btn-outline');
        const mobileToggle = navInner.querySelector('.mobile-toggle');
        if (btnOutline) {
            navInner.insertBefore(langToggle, btnOutline);
        } else if (mobileToggle) {
            navInner.insertBefore(langToggle, mobileToggle);
        } else {
            navInner.appendChild(langToggle);
        }
    }
    setLanguage(currentLang);
}

// =====================================================
// PARTICLE SYSTEM
// =====================================================
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrame;
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.4 + 0.1;
            this.hue = Math.random() > 0.5 ? 260 : 200;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > width) this.speedX *= -1;
            if (this.y < 0 || this.y > height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'hsla(' + this.hue + ', 80%, 70%, ' + this.opacity + ')';
            ctx.fill();
        }
    }

    var count = Math.min(80, Math.floor(width * height / 15000));
    for (var i = 0; i < count; i++) {
        particles.push(new Particle());
    }

    function connectParticles() {
        for (var i = 0; i < particles.length; i++) {
            for (var j = i + 1; j < particles.length; j++) {
                var dx = particles[i].x - particles[j].x;
                var dy = particles[i].y - particles[j].y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    var opacity = (1 - dist / 150) * 0.12;
                    ctx.beginPath();
                    ctx.strokeStyle = 'hsla(260, 60%, 65%, ' + opacity + ')';
                    ctx.lineWidth = 0.6;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(function(p) {
            p.update();
            p.draw();
        });
        connectParticles();
        animFrame = requestAnimationFrame(animate);
    }
    animate();
}

// =====================================================
// COUNTER ANIMATION
// =====================================================
function initCounters() {
    var counters = document.querySelectorAll('.stat-number');
    var observed = new Set();

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !observed.has(entry.target)) {
                observed.add(entry.target);
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(function(counter) {
        observer.observe(counter);
    });
}

function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var duration = 2000;
    var start = performance.now();

    function update(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 4);
        el.textContent = Math.round(target * eased) + (target === 70 ? '' : '+');
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

// =====================================================
// SCROLL REVEAL ANIMATIONS
// =====================================================
function initScrollReveal() {
    var revealEls = document.querySelectorAll('.reveal');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    revealEls.forEach(function(el) { observer.observe(el); });

    document.querySelectorAll('.hero .reveal').forEach(function(el, i) {
        setTimeout(function() { el.classList.add('visible'); }, i * 150);
    });
}

// =====================================================
// NAVBAR — Scroll Effect
// =====================================================
function initNavbar() {
    var nav = document.querySelector('nav');
    var mobileToggle = document.querySelector('.mobile-toggle');
    var navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('mobile-open');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (mobileToggle) mobileToggle.classList.remove('active');
            if (navLinks) navLinks.classList.remove('mobile-open');
        });
    });
}

// =====================================================
// SMOOTH SCROLL
// =====================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                var offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });
}

// =====================================================
// TILT EFFECT ON CARDS
// =====================================================
function initTiltEffect() {
    var cards = document.querySelectorAll('.skill-card, .proj-card');

    cards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            var rotateX = (y - centerY) / centerY * -4;
            var rotateY = (x - centerX) / centerX * 4;

            card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });
}

// =====================================================
// GLOBAL ACTIONS FOR AI
// =====================================================
window.siteActions = {
    setLang: function(lang) { setLanguage(lang); },
    navigate: function(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            var offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    }
};

// =====================================================
// DOM READY
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    initParticles();
    initScrollReveal();
    initCounters();
    initNavbar();
    initSmoothScroll();
    initTiltEffect();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
