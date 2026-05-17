import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'en' | 'ar'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    nav_about: 'About',
    nav_work: 'Work',
    nav_skills: 'Skills',
    nav_contact: 'Contact',
    nav_lets_talk: "Let's Talk",
    hero_subtitle: '——— AI Developer + Creative Designer',
    hero_name1: 'YASSINE',
    hero_name2: 'NFOUH',
    hero_desc: 'AI Developer and Web Designer with 3+ years of experience building AI-powered applications, LLM integrations, and intelligent automation systems.',
    hero_view_work: 'View Work',
    hero_get_in_touch: 'Get in Touch',
    stat_projects: 'Projects',
    stat_years: 'Years Experience',
    stat_tools: 'AI Tools',
    stat_efficiency: 'Efficiency Gain',
    about_title: 'About',
    about_quote: 'I build intelligent systems that feel human and design interfaces that feel alive.',
    about_bio: "I'm Yassine Nfouh, an AI Developer and Web Designer based in Morocco. Over the past 3+ years, I've focused on bridging the gap between artificial intelligence and human-centered design. From building LLM-powered applications and intelligent automation systems to crafting responsive web interfaces, my work lives at the intersection of technology and creativity. I specialize in GPT-4, Claude API, Next.js, Python, and workflow automation tools like n8n and Make.",
    exp_1_title: 'AI Developer & Automation Specialist',
    exp_1_date: '2024 - Present',
    exp_1_company: 'Freelance',
    exp_1_1: 'Building AI-powered applications with LLM integrations',
    exp_1_2: 'Developing intelligent automation workflows with n8n and Make',
    exp_1_3: 'Creating RAG systems and conversational AI agents',
    exp_2_title: 'UI/UX Designer & Web Developer',
    exp_2_date: '2022 - 2023',
    exp_2_company: 'Freelance',
    exp_2_1: 'Designing responsive web interfaces and mobile app UIs',
    exp_2_2: 'Building full-stack applications with Next.js and Supabase',
    exp_2_3: 'Creating brand identities and visual design systems',
    work_title: 'Selected Work',
    proj_1_desc: 'AI-ready invoice management SaaS with automated generation and real-time tracking.',
    proj_2_desc: 'Open-source AI-powered lead generation with LLM-driven personalization at scale.',
    proj_3_desc: 'Professional CV builder with AI content suggestions and ATS optimization.',
    proj_4_desc: 'Bilingual skills marketplace application with full-stack architecture.',
    view_project: 'View Project',
    skills_title: 'Technical Expertise',
    skill_ai: 'AI / LLM',
    skill_dev: 'Development & Cloud',
    skill_design: 'Web & App Design',
    skill_auto: 'Automation & Tools',
    contact_title: "Let's Build Something",
    contact_desc: 'Currently available for freelance projects and remote opportunities in AI development and web design.',
    contact_location: 'Morocco (Remote)',
    footer_text: 'Built with passion.',
    chat_title: "Yassine's Assistant",
    chat_welcome: "Hello! I'm Yassine's assistant. How can I help you with your next project?",
    chat_placeholder: 'Type your message here...',
    chat_error: 'Sorry, a connection error occurred. Please try again later.',
  },
  ar: {
    nav_about: 'حول',
    nav_work: 'الأعمال',
    nav_skills: 'المهارات',
    nav_contact: 'تواصل',
    nav_lets_talk: 'لنتحدث',
    hero_subtitle: '——— مطور ذكاء اصطناعي + مصمم إبداعي',
    hero_name1: 'ياسين',
    hero_name2: 'نفوح',
    hero_desc: 'مطور ذكاء اصطناعي ومصمم ويب بخبرة 3+ سنوات في بناء تطبيقات مدعومة بالذكاء الاصطناعي ودمج نماذج اللغة الكبيرة وأنظمة الأتمتة الذكية.',
    hero_view_work: 'عرض الأعمال',
    hero_get_in_touch: 'تواصل معي',
    stat_projects: 'مشاريع',
    stat_years: 'سنوات خبرة',
    stat_tools: 'أدوات ذكاء اصطناعي',
    stat_efficiency: 'كفاءة محسنة',
    about_title: 'حول',
    about_quote: 'أبني أنظمة ذكية تشعر بالإنسانية وأصمم واجهات تنبض بالحياة.',
    about_bio: 'أنا ياسين نفوح، مطور ذكاء اصطناعي ومصمم ويب من المغرب. على مدار 3+ سنوات، ركزت على سد الفجوة بين الذكاء الاصطناعي والتصميم المتمحور حول الإنسان. من بناء تطبيقات مدعومة بنماذج اللغة الكبيرة وأنظمة الأتمتة الذكية إلى تصميم واجهات ويب استجابية، يعيش عملي عند تقاطع التكنولوجيا والإبداع. أتخصص في GPT-4 وClaude API وNext.js وPython وأدوات أتمتة سير العمل مثل n8n وMake.',
    exp_1_title: 'مطور ذكاء اصطناعي ومتخصص أتمتة',
    exp_1_date: '2024 - الحاضر',
    exp_1_company: 'عمل حر',
    exp_1_1: 'بناء تطبيقات مدعومة بالذكاء الاصطناعي مع دمج نماذج اللغة الكبيرة',
    exp_1_2: 'تطوير سير عمل الأتمتة الذكية باستخدام n8n وMake',
    exp_1_3: 'إنشاء أنظمة RAG ووكلاء ذكاء اصطناعي تحادثية',
    exp_2_title: 'مصمم UI/UX ومطور ويب',
    exp_2_date: '2022 - 2023',
    exp_2_company: 'عمل حر',
    exp_2_1: 'تصميم واجهات ويب استجابية وواجهات تطبيقات الموبايل',
    exp_2_2: 'بناء تطبيقات شاملة باستخدام Next.js وSupabase',
    exp_2_3: 'إنشاء هويات بصرية وأنظمة تصميم',
    work_title: 'أعمال مختارة',
    proj_1_desc: 'SaaS لإدارة الفواتير جاهز للذكاء الاصطناعي مع إنشاء فواتير آلي وتتبع مالي في الوقت الحقيقي.',
    proj_2_desc: 'أداة مفتوحة المصدر مدعومة بالذكاء الاصطناعي للبحث عن العملاء وأتمتة التواصل عبر البريد الإلكتروني.',
    proj_3_desc: 'تطبيق ويب احترافي لإنشاء السير الذاتية مع اقتراحات محتوى ذكية وميزات تحسين ATS.',
    proj_4_desc: 'تطبيق سوق مهارات ثنائي اللغة (العربية/الإنجليزية) بهيكلية تطوير شاملة.',
    view_project: 'عرض المشروع',
    skills_title: 'الخبرات التقنية',
    skill_ai: 'الذكاء الاصطناعي / LLM',
    skill_dev: 'التطوير والسحابة',
    skill_design: 'تصميم الويب والتطبيقات',
    skill_auto: 'الأتمتة والأدوات',
    contact_title: 'لنبني شيئاً معاً',
    contact_desc: 'متاح حالياً للمشاريع المستقلة والفرص عن بُعد في تطوير الذكاء الاصطناعي وتصميم الويب.',
    contact_location: 'المغرب (عن بُعد)',
    footer_text: 'بُني بشغف.',
    chat_title: 'مساعد ياسين',
    chat_welcome: 'مرحبا! أنا مساعد ياسين. كيف يمكنني مساعدتك في مشروعك القادم؟',
    chat_placeholder: 'اكتب رسالتك هنا...',
    chat_error: 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة لاحقاً.',
  },
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    return (saved === 'ar' ? 'ar' : 'en') as Lang
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
  }

  const t = (key: string): string => {
    return translations[lang][key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
