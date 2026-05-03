/**
 * Yassine Nfouh — Interactive CV JavaScript
 * Handles scroll animations, language switching, smooth scroll, mobile menu
 */

// =====================================================
// TRANSLATIONS
// =====================================================
const translations = {
    en: {
        // Navigation
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        nav_cta: "Get in Touch",

        // Hero
        hero_subtitle: "AI Developer | Web Designer | App Interface Designer | Automation Specialist",
        hero_summary: "AI Developer and Web Designer with 1+ year of hands-on experience building AI-powered applications, LLM integrations, and intelligent automation systems — alongside responsive website design and app interface design. Proficient in integrating GPT-4, Claude API, and Gemini into production-grade tools. Specialized in prompt engineering, end-to-end AI pipeline development, and crafting polished web and mobile UI using Next.js, React, and Tailwind CSS.",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Contact Me",

        // Skills
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

        // Experience
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

        // Projects
        projects_title: "Selected Projects",
        proj_1_desc: "AI-ready invoice management SaaS with automated invoice generation, AI-powered data extraction, and real-time financial tracking.",
        proj_2_desc: "Open-source AI-powered lead generation and personalized email outreach automation tool with LLM-driven personalization at scale.",
        proj_3_desc: "Professional CV builder web application with AI-powered content suggestions and ATS optimization features.",
        proj_4_desc: "Bilingual (Arabic/English) skills marketplace application with full-stack architecture.",

        // Education
        edu_title: "Education & Languages",
        edu_label: "Self-Directed Learning",
        edu_sub: "AI Development, Web Design, App Interface Design & Automation",
        edu_projects: "Hands-on Projects",
        lang_title: "Languages",
        lang_ar: "Arabic",
        lang_ar_level: "Native",
        lang_en_level: "Intermediate (Technical)",

        // Competencies
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

        // Contact
        contact_title: "Let's Build Something",
        contact_desc: "Currently available for freelance projects and remote opportunities in AI development and web design.",
        contact_location: "Morocco (Remote)",

        // Footer
        footer_text: "Built with passion."
    },
    ar: {
        // Navigation
        nav_about: "من أنا",
        nav_skills: "المهارات",
        nav_experience: "الخبرة",
        nav_projects: "المشاريع",
        nav_contact: "تواصل",
        nav_cta: "تواصل معي",

        // Hero
        hero_subtitle: "مطور ذكاء اصطناعي | مصمم ويب | مصمم واجهات تطبيقات | متخصص في الأتمتة",
        hero_summary: "مطور ذكاء اصطناعي ومصمم ويب مع أكثر من سنة من الخبرة العملية في بناء تطبيقات مدعومة بالذكاء الاصطناعي، ودمج نماذج LLM، وأنظمة الأتمتة الذكية — إلى جانب تصميم مواقع ويب متجاوبة وواجهات تطبيقات. بارع في دمج GPT-4 و Claude API و Gemini في أدوات جاهزة للإنتاج. متخصص في هندسة الأوامر، وتطوير مسارات عمل الذكاء الاصطناعي من البداية للنهاية، وتصميم واجهات ويب وموبايل مصقولة باستخدام Next.js و React و Tailwind CSS.",
        hero_btn_projects: "شاهد مشاريعي",
        hero_btn_contact: "تواصل معي",

        // Skills
        skills_title: "الخبرات التقنية",
        skill_dev_title: "التطوير والسحابة",
        skill_design_title: "تصميم الويب والتطبيقات",
        skill_auto_title: "الأتمتة والأدوات",
        badge_prompt_eng: "هندسة الأوامر",
        badge_chatbot: "تطوير الشات بوت",
        badge_web_design: "تصميم الويب",
        badge_app_design: "تصميم واجهات التطبيقات",
        badge_responsive: "تصميم متجاوب",
        badge_brand: "الهوية البصرية",

        // Experience
        exp_title: "الخبرة المهنية",
        exp_1_title: "مطور ذكاء اصطناعي ومتخصص في الأتمتة",
        exp_1_company: "عمل حر / عن بُعد",
        exp_1_1: "تصميم ونشر مسارات أتمتة شاملة مدعومة بالذكاء الاصطناعي باستخدام Make و n8n، ودمج نماذج LML لتوليد المحتوى تلقائياً، مما قلل وقت المعالجة اليدوية بنسبة 70%.",
        exp_1_2: "دمج GPT-4 و Claude API و Gemini APIs في تطبيقات إنتاجية، وتنفيذ حلول NLP وأنظمة شات بوت ذكية لحالات استخدام حقيقية.",
        exp_1_3: "تطوير استراتيجيات متقدمة لهندسة الأوامر لإنتاج مخرجات ذكاء اصطناعي متسقة وعالية الجودة عبر مزودي LLM متعددين.",
        exp_1_4: "هندسة اتصالات API للذكاء الاصطناعي مع منصات خارجية عبر REST APIs و webhooks، وتقديم أنظمة آلية قابلة للتوسع لأتمتة العمليات التجارية.",
        exp_1_5: "بناء ونشر تطبيقات ويب شاملة (InvoiceFlow, LeadGenius) باستخدام Next.js و Supabase و Vercel.",
        exp_1_6: "تنفيذ هياكل RAG وسير عمل وكلاء AI لتوسيع قدرات LLM مع مصادر بيانات خارجية.",
        exp_2_company: "عمل حر / عن بُعد",
        exp_2_1: "تصميم واجهات ويب وموبايل متجاوبة باستخدام StitchAI، وتقديم أنظمة هوية بصرية وتصميمات منتجات رقمية للشركات الناشئة.",
        exp_2_2: "استغلال أدوات التصميم المدعومة بالذكاء الاصطناعي لتسريع سير عمل UI/UX، وتقليل دورات التصميم وتحسين سرعة الوصول للسوق.",

        // Projects
        projects_title: "مشاريع مختارة",
        proj_1_desc: "SaaS لإدارة الفواتير جاهز للذكاء الاصطناعي مع إنشاء فواتير آلي واستخراج بيانات ذكي وتتبع مالي في الوقت الحقيقي.",
        proj_2_desc: "أداة مفتوحة المصدر مدعومة بالذكاء الاصطناعي للبحث عن العملاء وأتمتة التواصل عبر البريد الإلكتروني مع تخصيص شخصي عبر LLM.",
        proj_3_desc: "تطبيق ويب احترافي لإنشاء السير الذاتية مع اقتراحات محتوى ذكية وميزات تحسين ATS.",
        proj_4_desc: "تطبيق سوق مهارات ثنائي اللغة (العربية/الإنجليزية) بهيكلية تطوير شاملة.",

        // Education
        edu_title: "التعليم واللغات",
        edu_label: "التعلم الذاتي",
        edu_sub: "تطوير الذكاء الاصطناعي، تصميم الويب، تصميم واجهات التطبيقات والأتمتة",
        edu_projects: "مشاريع عملية",
        lang_title: "اللغات",
        lang_ar: "العربية",
        lang_ar_level: "لغة أم",
        lang_en_level: "متوسط (تقني)",

        // Competencies
        comp_title: "الكفاءات الأساسية",
        comp_1: "الذكاء الاصطناعي",
        comp_2: "معالجة اللغة الطبيعية",
        comp_3: "النماذج اللغوية الكبيرة",
        comp_4: "الذكاء الاصطناعي التوليدي",
        comp_5: "تطوير تطبيقات الذكاء الاصطناعي",
        comp_6: "دمج LLM",
        comp_7: "تطوير API",
        comp_8: "هندسة الأتمتة",
        comp_9: "تصميم الويب",
        comp_10: "تصميم واجهات التطبيقات",
        comp_11: "تطوير بايثون",
        comp_12: "تطوير شامل",
        comp_13: "النشر السحابي",
        comp_14: "التطوير الرشيق",

        // Contact
        contact_title: "لنبني شيئاً معاً",
        contact_desc: "متاح حالياً للمشاريع المستقلة والفرص عن بُعد في تطوير الذكاء الاصطناعي وتصميم الويب.",
        contact_location: "المغرب (عن بُعد)",

        // Footer
        footer_text: "بُني بشغف."
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

    // Set RTL for Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Update all translatable elements
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

    // Update language toggle button
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'العربية' : 'English';
    }
}

function initLanguageSwitcher() {
    const navInner = document.querySelector('.nav-inner');
    if (navInner) {
        const langToggle = document.createElement('button');
        langToggle.className = 'lang-toggle';
        langToggle.textContent = currentLang === 'en' ? 'العربية' : 'English';

        langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });

        // Insert before btn-outline
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

    // Apply initial language
    setLanguage(currentLang);
}

// =====================================================
// SCROLL REVEAL ANIMATIONS
// =====================================================
function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));

    // Trigger hero reveals immediately
    document.querySelectorAll('.hero .reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 120);
    });
}

// =====================================================
// NAVBAR
// =====================================================
function initNavbar() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('mobile-open');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle?.classList.remove('active');
            navLinks?.classList.remove('mobile-open');
        });
    });
}

// =====================================================
// SMOOTH SCROLL
// =====================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });
}

// =====================================================
// GLOBAL ACTIONS FOR AI (Compatibility with site-controls.js)
// =====================================================
window.siteActions = {
    setLang: function(lang) { setLanguage(lang); },
    navigate: function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    }
};

// =====================================================
// DOM READY
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initScrollReveal();
    initNavbar();
    initSmoothScroll();
});

// Add loaded class
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
