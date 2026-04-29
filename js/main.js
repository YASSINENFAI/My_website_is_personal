/**
 * Portfolio - Main JavaScript
 * Handles animations, interactions, UI functionality, and i18n
 */

// =====================================================
// TRANSLATIONS
// =====================================================
const translations = {
    en: {
        // Navigation
        nav_about: "About",
        nav_skills: "Skills",
        nav_services: "Services",
        nav_work: "Projects",
        nav_contact: "Contact",
        nav_cta: "Hire Me",
        
        // Hero
        hero_status: "Available for AI Projects",
        hero_title_1: "AI Developer &",
        hero_title_2: "Chatbot Specialist",
        hero_desc: "I build intelligent chatbots, train AI models, and automate workflows using GPT-4, Claude, Gemini, and OpenAI APIs. Specialized in LLM integration, RAG systems, and fine-tuning.",
        hero_btn_1: "View My Projects",
        hero_btn_2: "Let's Work Together",
        scroll: "Scroll",
        
        // About
        about_label: "About Me",
        about_title_1: "Building",
        about_title_2: "Intelligent",
        about_title_3: "AI Solutions",
        about_text_1: "I'm an AI Developer and Chatbot Specialist with hands-on experience in building intelligent conversational agents and training AI models. I work with GPT-4, Claude, Gemini, and OpenAI to create smart automation solutions.",
        about_text_2: "My expertise includes LLM integration, prompt engineering, RAG systems, fine-tuning models, and building production-ready chatbots. I help businesses leverage AI to automate processes and enhance customer experiences.",
        about_stat_1: "Years in AI",
        about_stat_2: "Projects Built",
        about_stat_3: "Live Products",
        
        // Experience
        exp_label: "My Journey",
        exp_title: "Professional Experience",
        exp_1_title: "Lead AI Developer",
        exp_1_desc: "Specializing in custom LLM solutions, RAG pipeline development, and automated AI agents.",
        exp_2_title: "Chatbot Specialist",
        exp_2_desc: "Built and deployed intelligent customer support bots integrated with CRM systems.",
        exp_3_title: "Full Stack Developer",
        exp_3_desc: "Developed responsive web applications with a focus on AI integrations.",

        // Testimonials
        test_label: "Testimonials",
        test_title: "What Clients Say",
        test_1_text: '"Yassine delivered an AI chatbot that exceeded our expectations. Our customer support efficiency increased by 40%."',
        test_2_text: '"The RAG system Yassine built for our documentation is incredibly accurate. Highly professional developer."',

        // Skills
        skills_label: "My Expertise",
        skills_title: "Technical Skills",
        skills_desc: "Technologies and tools I use to build AI solutions",
        skill_1_title: "AI & LLMs",
        skill_1_desc: "GPT-4 • Claude • Gemini • OpenAI API • Llama • Mistral",
        skill_2_title: "Chatbot Development",
        skill_2_desc: "Conversational AI • RAG Systems • Voice Assistants • Multi-modal Bots",
        skill_3_title: "AI Training & Fine-tuning",
        skill_3_desc: "Model Fine-tuning • Prompt Engineering • Dataset Preparation • Evaluation",
        skill_4_title: "Workflow Automation",
        skill_4_desc: "Make (Integromat) • n8n • Zapier • Custom Scripts • API Integration",
        skill_5_title: "Programming",
        skill_5_desc: "Python • TypeScript • JavaScript • REST APIs • SQL",
        skill_6_title: "Tools & Platforms",
        skill_6_desc: "Supabase • Vercel • Hugging Face • LangChain • Pinecone",
        
        // Services
        services_label: "What I Do",
        services_title: "Services I Offer",
        service_1_title: "Chatbot Development",
        service_1_desc: "Custom chatbots powered by GPT-4, Claude, and Gemini. RAG systems, voice assistants, and multi-modal bots.",
        service_2_title: "AI Training & Fine-tuning",
        service_2_desc: "Fine-tune models for your specific use case. Prompt engineering and dataset preparation.",
        service_3_title: "Workflow Automation",
        service_3_desc: "Automate business processes with Make, n8n, and custom scripts. Save time and reduce errors.",
        service_4_title: "API Integration",
        service_4_desc: "Connect AI models to your existing systems. REST APIs, webhooks, and databases.",
        
        // Portfolio
        portfolio_label: "My Work",
        portfolio_title: "Featured Projects",
        portfolio_desc: "AI-powered applications and chatbots I've built",
        project_1_title: "InvoiceFlow",
        project_1_desc: "AI-ready invoice management system with smart automation features.",
        project_2_title: "CV Pro Builder",
        project_2_desc: "Professional CV builder with AI-powered content suggestions.",
        project_3_title: "Bac Calculator Morocco",
        project_3_desc: "Smart grade calculator for Moroccan students.",
        project_4_title: "Age Calculator",
        project_4_desc: "AI-powered age calculation with natural language processing.",
        project_5_title: "AI Thumbnail Generator",
        project_5_desc: "Generate YouTube thumbnails using AI image generation.",
        project_6_title: "Prompt Manager",
        project_6_desc: "AI prompt library and management system for developers.",
        project_7_title: "SCSIL Club",
        project_7_desc: "Modern bilingual website for a scientific club with dark mode.",
        project_8_title: "Hirafi App",
        project_8_desc: "Skills marketplace connecting skilled workers with customers.",
        project_9_title: "LeadGenius",
        project_9_desc: "Free AI-powered lead generation and email outreach tool.",
        live_demo: "Live Demo",
        view_github: "View on GitHub",
        open_source: "Open Source",
        
        // Quote
        quote_text: '"AI should augment human capabilities, not replace them. Every intelligent system should solve real problems for real people."',
        quote_author: "— My AI Philosophy",
        
        // Contact
        contact_label: "Get in Touch",
        contact_title_1: "Let's build something",
        contact_title_2: "intelligent",
        contact_desc: "Have an AI project in mind? Let's discuss how I can help bring your ideas to life.",
        form_name: "Your Name",
        form_email: "Email Address",
        form_project: "Project Type",
        form_message: "Project Details",
        form_submit: "Send Message",
        form_sending: "Sending...",
        form_sent: "Message Sent!",
        project_chatbot: "Chatbot Development",
        project_training: "AI Training/Fine-tuning",
        project_automation: "Workflow Automation",
        project_other: "Other",
        
        // Footer
        footer_rights: "Building the future with AI.",
        
        // Tags
        tag_nextjs: "Next.js",
        tag_supabase: "Supabase",
        tag_ai: "AI",
        tag_javascript: "JavaScript",
        tag_html: "HTML",
        tag_typescript: "TypeScript",
        tag_education: "Education",
        tag_prompt: "Prompt Engineering",
        tag_tailwind: "Tailwind CSS",
        tag_image: "AI Image",
        tag_opensource: "Open Source"
    },
    ar: {
        // Navigation
        nav_about: "من أنا",
        nav_skills: "المهارات",
        nav_services: "الخدمات",
        nav_work: "المشاريع",
        nav_contact: "تواصل",
        nav_cta: "توظيفي",
        
        // Hero
        hero_status: "متاح لمشاريع الذكاء الاصطناعي",
        hero_title_1: "مطور ذكاء اصطناعي",
        hero_title_2: "ومتخصص في الشات بوت",
        hero_desc: "أبني روبوتات محادثة ذكية، أدرب نماذج AI، وأؤتمت العمليات باستخدام GPT-4 وClaude وGemini. متخصص في دمج LLM وأنظمة RAG والضبط الدقيق.",
        hero_btn_1: "شاهد مشاريعي",
        hero_btn_2: "لنعمل معاً",
        scroll: "مرر للأسفل",
        
        // About
        about_label: "من أنا",
        about_title_1: "أبني حلول",
        about_title_2: "ذكية",
        about_title_3: "بالذكاء الاصطناعي",
        about_text_1: "مطور ذكاء اصطناعي ومتخصص في روبوتات المحادثة مع خبرة عملية في بناء وكلاء محادثة أذكياء وتدريب نماذج AI. أعمل مع GPT-4 و Claude و Gemini لإنشاء حلول أتمتة ذكية.",
        about_text_2: "تشمل خبرتي دمج LLM، هندسة الأوامر، أنظمة RAG، ضبط النماذج، وبناء روبوتات محادثة جاهزة للإنتاج. أساعد الشركات على الاستفادة من AI لأتمتة العمليات.",
        about_stat_1: "سنوات في AI",
        about_stat_2: "مشروع منجز",
        about_stat_3: "منتج حي",

        // Experience
        exp_label: "مساري المهني",
        exp_title: "الخبرة الاحترافية",
        exp_1_title: "مطور ذكاء اصطناعي أول",
        exp_1_desc: "متخصص في حلول LLM المخصصة، تطوير أنظمة RAG، ووكلاء الذكاء الاصطناعي الأوتوماتيكية.",
        exp_2_title: "متخصص شات بوت",
        exp_2_desc: "بناء ونشر بوتات دعم فني ذكية مدمجة مع أنظمة إدارة العملاء CRM.",
        exp_3_title: "مطور ويب شامل",
        exp_3_desc: "تطوير تطبيقات ويب متجاوبة مع التركيز على دمج تقنيات الذكاء الاصطناعي.",

        // Testimonials
        test_label: "آراء العملاء",
        test_title: "ماذا يقول العملاء",
        test_1_text: '"قدم ياسين شات بوت تجاوز توقعاتنا. زادت كفاءة دعم العملاء لدينا بنسبة 40%."',
        test_2_text: '"نظام RAG الذي بناه ياسين لتوثيقنا دقيق بشكل لا يصدق. مطور محترف للغاية."',
        
        // Skills
        skills_label: "خبراتي",
        skills_title: "المهارات التقنية",
        skills_desc: "التقنيات والأدوات التي أستخدمها لبناء حلول AI",
        skill_1_title: "الذكاء الاصطناعي وLLM",
        skill_1_desc: "GPT-4 • Claude • Gemini • OpenAI API • Llama • Mistral",
        skill_2_title: "تطوير الشات بوت",
        skill_2_desc: "AI المحادثي • أنظمة RAG • المساعدات الصوتية • بوتات متعددة الوسائط",
        skill_3_title: "تدريب وضبط AI",
        skill_3_desc: "ضبط النماذج • هندسة الأوامر • إعداد البيانات • التقييم",
        skill_4_title: "أتمتة العمليات",
        skill_4_desc: "Make • n8n • Zapier • سكريبتات مخصصة • دمج API",
        skill_5_title: "البرمجة",
        skill_5_desc: "Python • TypeScript • JavaScript • REST APIs • SQL",
        skill_6_title: "الأدوات والمنصات",
        skill_6_desc: "Supabase • Vercel • Hugging Face • LangChain • Pinecone",
        
        // Services
        services_label: "ماذا أفعل",
        services_title: "الخدمات التي أقدمها",
        service_1_title: "تطوير الشات بوت",
        service_1_desc: "روبوتات محادثة مخصصة بالاعتماد على GPT-4 وClaude وGemini. أنظمة RAG ومساعدات صوتية.",
        service_2_title: "تدريب وضبط AI",
        service_2_desc: "ضبط النماذج لحالتك الخاصة. هندسة الأوامر وإعداد البيانات.",
        service_3_title: "أتمتة العمليات",
        service_3_desc: "أتمتة العمليات التجارية بـ Make وn8n. توفير الوقت وتقليل الأخطاء.",
        service_4_title: "دمج API",
        service_4_desc: "ربط نماذج AI بأنظمتك الحالية. REST APIs وwebhooks وقواعد بيانات.",
        
        // Portfolio
        portfolio_label: "أعمالي",
        portfolio_title: "مشاريع مميزة",
        portfolio_desc: "تطبيقات وروبوتات محادثة بالذكاء الاصطناعي قمت ببنائها",
        project_1_title: "InvoiceFlow",
        project_1_desc: "نظام إدارة فواتير جاهز للذكاء الاصطناعي مع ميزات أتمتة ذكية.",
        project_2_title: "CV Pro Builder",
        project_2_desc: "منشئ سيرة ذاتية احترافي مع اقتراحات ذكية بالذكاء الاصطناعي.",
        project_3_title: "حاسبة الباك المغربية",
        project_3_desc: "حاسبة معدلات ذكية لطلاب الباكالوريا المغربية.",
        project_4_title: "حاسبة العمر",
        project_4_desc: "حساب العمر بالذكاء الاصطناعي مع معالجة اللغة الطبيعية.",
        project_5_title: "مولد الصور المصغرة AI",
        project_5_desc: "إنشاء صور مصغرة ليوتيوب باستخدام توليد الصور بالذكاء الاصطناعي.",
        project_6_title: "مدير الأوامر",
        project_6_desc: "مكتبة أوامر AI ونظام إدارة للمطورين.",
        project_7_title: "نادي SCSIL",
        project_7_desc: "موقع حديث ثنائي اللغة لنادي علمي مع الوضع الليلي.",
        project_8_title: "تطبيق Hirafi",
        project_8_desc: "سوق للمهارات يربط العمال المهرة بالزبائن.",
        project_9_title: "LeadGenius",
        project_9_desc: "أداة مجانية للبحث عن العملاء وإرسال الإيميلات بالذكاء الاصطناعي.",
        live_demo: "معاينة حية",
        view_github: "عرض على GitHub",
        open_source: "مفتوح المصدر",
        
        // Quote
        quote_text: '"الذكاء الاصطناعي يجب أن يعزز القدرات البشرية، لا يستبدلها. كل نظام ذكي يجب أن يحل مشاكل حقيقية لأناس حقيقيين."',
        quote_author: "— فلسفتي في AI",
        
        // Contact
        contact_label: "تواصل معي",
        contact_title_1: "لنبني شيئاً",
        contact_title_2: "ذكياً",
        contact_desc: "لديك مشروع AI في ذهنك؟ دعنا نناقش كيف يمكنني مساعدتك.",
        form_name: "اسمك",
        form_email: "البريد الإلكتروني",
        form_project: "نوع المشروع",
        form_message: "تفاصيل المشروع",
        form_submit: "إرسال الرسالة",
        form_sending: "جاري الإرسال...",
        form_sent: "تم الإرسال!",
        project_chatbot: "تطوير شات بوت",
        project_training: "تدريب/ضبط AI",
        project_automation: "أتمتة العمليات",
        project_other: "أخرى",
        
        // Footer
        footer_rights: "نبني المستقبل بالذكاء الاصطناعي.",
        
        // Tags
        tag_nextjs: "Next.js",
        tag_supabase: "Supabase",
        tag_ai: "ذكاء اصطناعي",
        tag_javascript: "JavaScript",
        tag_html: "HTML",
        tag_typescript: "TypeScript",
        tag_education: "تعليم",
        tag_prompt: "هندسة الأوامر",
        tag_tailwind: "Tailwind CSS",
        tag_image: "صور AI",
        tag_opensource: "مفتوح المصدر"
    },
    fr: {
        // Navigation
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_services: "Services",
        nav_work: "Projets",
        nav_contact: "Contact",
        nav_cta: "Recrutez-moi",
        
        // Hero
        hero_status: "Disponible pour projets AI",
        hero_title_1: "Développeur AI &",
        hero_title_2: "Spécialiste Chatbot",
        hero_desc: "Je construis des chatbots intelligents, j'entraîne des modèles AI et j'automatise des flux de travail en utilisant GPT-4, Claude et Gemini.",
        hero_btn_1: "Voir mes projets",
        hero_btn_2: "Travaillons ensemble",
        scroll: "Défiler",
        
        // About
        about_label: "À propos de moi",
        about_title_1: "Création de",
        about_title_2: "Solutions AI",
        about_title_3: "Intelligentes",
        about_text_1: "Je suis un développeur AI spécialisé dans la création d'agents conversationnels intelligents et l'automatisation intelligente.",
        about_text_2: "Mon expertise inclut l'intégration de LLM, le prompt engineering et les systèmes RAG.",
        about_stat_1: "Années en AI",
        about_stat_2: "Projets réalisés",
        about_stat_3: "Produits en ligne",

        // Experience
        exp_label: "Mon Parcours",
        exp_title: "Expérience Professionnelle",
        exp_1_title: "Développeur AI Principal",
        exp_1_desc: "Spécialisé dans les solutions LLM personnalisées, le développement RAG et les agents AI autonomes.",
        exp_2_title: "Spécialiste Chatbot",
        exp_2_desc: "Déploiement de bots de support client intelligents intégrés aux systèmes CRM.",
        exp_3_title: "Développeur Full Stack",
        exp_3_desc: "Développement d'applications web réactives avec focus sur les intégrations AI.",

        // Testimonials
        test_label: "Témoignages",
        test_title: "Ce que disent les clients",
        test_1_text: '"Yassine a livré un chatbot AI qui a dépassé nos attentes. Notre efficacité a augmenté de 40%."',
        test_2_text: '"Le système RAG construit par Yassine pour notre documentation est incroyablement précis."',
        
        // Skills
        skills_label: "Mon Expertise",
        skills_title: "Compétences Techniques",
        skills_desc: "Technologies et outils que j'utilise",
        skill_1_title: "AI & LLMs",
        skill_1_desc: "GPT-4 • Claude • Gemini • Llama • Mistral",
        skill_2_title: "Développement Chatbot",
        skill_2_desc: "AI Conversationnelle • Systèmes RAG • Assistants Vocaux",
        
        // Services
        services_label: "Ce que je fais",
        services_title: "Mes Services",
        service_1_title: "Développement Chatbot",
        service_1_desc: "Chatbots personnalisés propulsés par GPT-4, Claude et Gemini.",
        
        // Portfolio
        portfolio_label: "Mon Travail",
        portfolio_title: "Projets Phares",
        portfolio_desc: "Applications AI et chatbots que j'ai construits",
        project_1_title: "InvoiceFlow",
        project_1_desc: "Système de gestion de factures avec automatisation intelligente.",
        project_2_title: "CV Pro Builder",
        project_2_desc: "Générateur de CV professionnel avec suggestions AI.",
        live_demo: "Démo en direct",
        view_github: "Voir sur GitHub",
        open_source: "Open Source",
        
        // Contact
        contact_label: "Contact",
        contact_title_1: "Construisons quelque chose",
        contact_title_2: "d'intelligent",
        contact_desc: "Un projet AI en tête ? Discutons de la manière dont je peux vous aider.",
        form_name: "Votre Nom",
        form_email: "Adresse Email",
        form_project: "Type de Projet",
        form_message: "Détails du Projet",
        form_submit: "Envoyer le Message",
        form_sending: "Envoi en cours...",
        form_sent: "Message Envoyé !",
        
        // Footer
        footer_rights: "Construisons le futur avec l'AI.",
        
        // Tags
        tag_nextjs: "Next.js",
        tag_supabase: "Supabase",
        tag_ai: "AI",
        tag_javascript: "JavaScript",
        tag_html: "HTML",
        tag_typescript: "TypeScript",
        tag_tailwind: "Tailwind CSS"
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
            // Check if element has spans or needs innerHTML
            if (el.querySelector('span')) {
                // If it has complex structure, we might need a more specific logic
                // But for most headers, innerHTML is fine or replace text nodes
                el.innerHTML = el.innerHTML.replace(el.textContent.trim(), translations[lang][key]);
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // Update language toggle button
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'العربية' : (lang === 'ar' ? 'English' : 'العربية');
    }

    // Refresh scroll animations as content height might change
    initScrollAnimations();
}

// =====================================================
// GLOBAL ACTIONS FOR AI & UI (Compatibility with site-controls.js)
// =====================================================
window.siteActions = {
    setLang: function (lang) {
        setLanguage(lang);
    },

    setTheme: function (mode) {
        if (mode === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    },

    navigate: function (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
};

function initLanguageSwitcher() {
    // Create language toggle button
    const navbar = document.querySelector('.navbar .container');
    if (navbar) {
        const langToggle = document.createElement('button');
        langToggle.className = 'lang-toggle';
        langToggle.style.cssText = `
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
            margin-right: 12px;
        `;
        langToggle.textContent = currentLang === 'en' ? 'العربية' : 'English';
        
        langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
        
        langToggle.addEventListener('mouseenter', () => {
            langToggle.style.background = 'rgba(255,255,255,0.2)';
        });
        
        langToggle.addEventListener('mouseleave', () => {
            langToggle.style.background = 'rgba(255,255,255,0.1)';
        });
        
        // Insert before nav-cta
        const navCta = navbar.querySelector('.nav-cta');
        if (navCta) {
            navbar.insertBefore(langToggle, navCta);
        } else {
            navbar.appendChild(langToggle);
        }
    }
    
    // Apply initial language
    setLanguage(currentLang);
}

// =====================================================
// DOM READY INITIALIZATION
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initNavbar();
    initScrollAnimations();
    initPortfolioFilters();
    initSmoothScroll();
    initContactForm();
    initParallaxEffects();
    initTypewriter();
});

// =====================================================
// NAVBAR FUNCTIONALITY
// =====================================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Scroll behavior for navbar
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('mobile-open');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle?.classList.remove('active');
            navLinks?.classList.remove('mobile-open');
            document.body.classList.remove('menu-open');
        });
    });
}

// =====================================================
// SCROLL ANIMATIONS (Intersection Observer)
// =====================================================
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Also add animation classes to sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (!section.classList.contains('fade-in')) {
            section.classList.add('fade-in');
            observer.observe(section);
        }
    });
}

// =====================================================
// PORTFOLIO FILTERS
// =====================================================
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            // Filter items with animation
            portfolioItems.forEach((item, index) => {
                const category = item.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
                } else {
                    item.style.animation = 'fadeOut 0.3s ease forwards';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Add filter animations to stylesheet dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOut {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0.9); }
        }
    `;
    document.head.appendChild(style);
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
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =====================================================
// CONTACT FORM
// =====================================================
function initContactForm() {
    const form = document.querySelector('.contact-form form');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = `
            <svg class="spinner" width="20" height="20" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="60" stroke-dashoffset="60">
                    <animate attributeName="stroke-dashoffset" values="60;0" dur="0.5s" fill="freeze"/>
                    <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="1s" repeatCount="indefinite"/>
                </circle>
            </svg>
            ${translations[currentLang].form_sending}
        `;
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success state
        submitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
            </svg>
            ${translations[currentLang].form_sent}
        `;
        submitBtn.style.background = '#10b981';
        
        // Reset form
        form.reset();
        
        // Reset button after delay
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    });
    
    // Input focus animations
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// =====================================================
// PARALLAX EFFECTS
// =====================================================
function initParallaxEffects() {
    const bgGlows = document.querySelectorAll('.bg-glow');
    
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        bgGlows.forEach((glow, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            
            glow.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}

// =====================================================
// TYPEWRITER EFFECT
// =====================================================
function initTypewriter() {
    const typewriterElement = document.querySelector('.typewriter');
    
    if (!typewriterElement) return;
    
    const words = ['Chatbots', 'AI Models', 'Automation', 'LLMs'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// =====================================================
// COUNTER ANIMATION
// =====================================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target) || parseInt(counter.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', animateCounters);

// Add loaded class to body when page is fully loaded
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
