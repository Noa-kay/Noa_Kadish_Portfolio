export type Language = 'he' | 'en';

export interface Project {
  id: string;
  title: {
    he: string;
    en: string;
  };
  subtitle: {
    he: string;
    en: string;
  };
  category: 'fullstack' | 'backend' | 'frontend' | 'automation' | 'hardware';
  categoryLabel: {
    he: string;
    en: string;
  };
  period: string;
  tools: string[];
  summary: {
    he: string;
    en: string;
  };
  highlights: {
    he: string[];
    en: string[];
  };
  architecture?: {
    he: string;
    en: string;
  };
  githubUrl: string;
  githubRepoName: string;
  hasPlayableDemo?: boolean;
  image?: string;
  featured?: boolean;
  colorTheme: {
    gradient: string;
    badge: string;
    border: string;
    accent: string;
    iconBg: string;
  };
}

export interface EducationItem {
  period: string;
  institution: {
    he: string;
    en: string;
  };
  title: {
    he: string;
    en: string;
  };
  description: {
    he: string;
    en: string;
  };
  tags: string[];
}

export interface SkillGroup {
  category: {
    he: string;
    en: string;
  };
  items: {
    name: string;
    proficiency?: 'primary' | 'experienced';
    note?: {
      he: string;
      en: string;
    };
  }[];
}

export const portfolioData = {
  profile: {
    name: {
      he: 'נועה קדיש',
      en: 'Noa Kadish',
    },
    title: {
      he: 'Junior Full Stack Developer',
      en: 'Junior Full Stack Developer',
    },
    bio: {
      he: 'מפתחת Full Stack ממוקדת תוצאות בעלת חשיבה לוגית חדה, קוד נקי ויכולת למידה עצמאית מהירה. ניסיון מעשי בפיתוח מערכות Web מקצה לקצה (React, Angular, Node.js, Spring Boot, .NET Core) לצד פרקטיקום אינטנסיבי בן 250 שעות בתכנון ואימות שבבים (UVM). זמינה מיידית להשתלב בצוות פיתוח.',
      en: 'Results-driven Full Stack Developer with strong logical thinking, clean code discipline, and rapid mastery of new technologies. Hands-on experience across end-to-end web architectures (React, Angular, Node.js, Spring Boot, .NET Core) paired with a 250-hour intensive semiconductor verification practicum (UVM). Open to development opportunities.',
    },
    email: 'noa.kadish@outlook.com',
    phone: '054-8527526',
    phoneInternational: '+972548527526',
    location: {
      he: 'פתח תקווה, ישראל (אזור המרכז / היברידי)',
      en: 'Petach Tikva, Israel (Central / Hybrid)',
    },
    githubUsername: 'Noa-kay',
    githubUrl: 'https://github.com/Noa-kay',
    linkedinName: 'Noa kadish',
    linkedinUrl: 'https://linkedin.com/in/noa-kadish',
    openToWorkText: {
      he: 'זמינה למשרת Full Stack הבאה שלכם',
      en: 'Available for Full Stack Developer roles',
    },
  },

  stats: [
    {
      value: '7',
      label: {
        he: 'פרויקטים מקיפים ב-GitHub',
        en: 'Comprehensive Projects',
      },
      sub: {
        he: 'Full Stack, Backend, אימות שבבים',
        en: 'Full Stack, Backend & Silicon',
      },
    },
    {
      value: '250h',
      label: {
        he: 'פרקטיקום תכנון ואימות חומרה',
        en: 'Hardware Practicum',
      },
      sub: {
        he: 'אימות בלוק Decimation ב-WIFI RX (UVM)',
        en: 'WIFI-RX Decimation Block (UVM)',
      },
    },
    {
      value: 'E2E',
      label: {
        he: 'פיתוח מקצה לקצה',
        en: 'End-to-End Stack',
      },
      sub: {
        he: 'React, Angular, Node.js, Spring Boot, .NET',
        en: 'React, Angular, Node, Spring, .NET',
      },
    },
  ],

  projects: [
    {
      id: 'seminar-microservice',
      title: {
        he: 'Seminar-Site – מיקרוסרוויס לפרופיל סטודנטים ו-CV Chatbot',
        en: 'Seminar-Site – Student Profile Microservice & CV Chatbot',
      },
      subtitle: {
        he: 'רכיב מיקרוסרוויס במערכת מוסדית עם שרת ASP.NET Core וממשק React Vite',
        en: 'Student Profile Component in Institutional System with ASP.NET Core & React Vite',
      },
      category: 'fullstack',
      categoryLabel: {
        he: 'פול סטאק ומיקרוסרוויסים',
        en: 'Full-Stack & Microservices',
      },
      period: '2025 – 2026',
      tools: ['ASP.NET Core 7', 'React (Vite)', 'Entity Framework Core', 'JWT', 'Material UI', 'C#'],
      summary: {
        he: 'פיתוח מיקרוסרוויס ייעודי למערכת מוסדית אינטגרטיבית, המאפשר ניהול פרופילים אישיים, פרויקטים, מיומנויות ובוט AI ליצירת קורות חיים. ארכיטקטורה מקצה לקצה הכוללת שרת API מאובטח וממשק לקוח דינמי.',
        en: 'Developed a microservice for an integrated institutional system, enabling management of personal profiles, projects, skills, and a CV-generator chatbot. Implemented an End-to-End architecture featuring a secured API server and a dynamic Vite-based client interface.',
      },
      highlights: {
        he: [
          'ארכיטקטורת שרת מאובטחת באמצעות JWT והרשאות מותאמות לתפקידים ב-ASP.NET Core 7.',
          'מידול נתונים ושאילתות מותאמות אישית בעזרת Entity Framework Core.',
          'בוט חכם מובנה לסיוע בבניית קורות חיים וניהול כישורים אישיים של סטודנטים.',
          'ממשק לקוח מודרני, מהיר ואינטואיטיבי המבוסס React עם Vite ו-Material UI.',
        ],
        en: [
          'Secured API architecture featuring token-based authentication (JWT) with ASP.NET Core 7.',
          'Relational database modeling and high-efficiency querying with Entity Framework Core.',
          'Built-in smart CV-generator chatbot assisting students in structuring skills and project profiles.',
          'Modern, lightning-fast client UI built with React, Vite bundling, and Material UI components.',
        ],
      },
      architecture: {
        he: 'מיקרוסרוויס מודולרי המאפשר תקשורת מאובטחת בין שירות הפרופילים לשאר חלקי המערכת המוסדית. הפרדה ברורה בין שכבת ה-Data Access (EF Core), הלוגיקה העסקית והבקרים (Controllers).',
        en: 'Modular microservice enabling authenticated communication between the student profile subsystem and core institutional services. Clean separation between data access layer (EF Core), business services, and controllers.',
      },
      image: '/src/assets/images/project_microservice_showcase_1790868482637.jpg',
      githubUrl: 'https://github.com/Noa-kay/Microservice-Profile',
      githubRepoName: 'Microservice-Profile',
      featured: true,
      colorTheme: {
        gradient: 'from-violet-500 via-purple-500 to-indigo-600',
        badge: 'bg-violet-100 text-violet-800 border border-violet-200',
        border: 'border-violet-200 hover:border-violet-400',
        accent: '#8B5CF6',
        iconBg: 'bg-violet-50 text-violet-600',
      },
    },
    {
      id: 'fynx-web-app',
      title: {
        he: 'Fynx – מערכת Full-Stack שיתופית לניהול נתונים',
        en: 'Fynx – Collaborative Full-Stack Application',
      },
      subtitle: {
        he: 'מערכת Web מקצה לקצה ב-Angular ו-Spring Boot עם צ\'אטבוט והעלאת קבצים',
        en: 'End-to-End Web System with Angular, Spring Boot, AI Chatbot & Multipart Uploads',
      },
      category: 'fullstack',
      categoryLabel: {
        he: 'פול סטאק שיתופי',
        en: 'Collaborative Full-Stack',
      },
      period: '2025',
      tools: ['Angular', 'Java', 'Spring Boot', 'H2 Database', 'REST APIs', 'DTO Pattern'],
      summary: {
        he: 'פיתוח מערכת Web מלאה לניהול נתונים בזמן אמת ואינטראקציית משתמשים. מימוש REST APIs מורכבים, העלאת קבצים (Multipart File Uploads) ושילוב בוט שיחה חכם, תוך שמירה על הפרדת נתונים באמצעות DTOs ו-Mappers.',
        en: 'Developed an end-to-end web system using Angular and Spring Boot for real-time data management and user interaction. Implemented REST APIs, multipart file uploads, and integrated an AI Chatbot while maintaining clear data separation through DTOs and Mappers.',
      },
      highlights: {
        he: [
          'פיתוח שרת מבוסס Spring Boot עם הגדרת נתיבי RESTful מאובטחים ויעילים.',
          'שימוש בתבניות עיצוב DTOs ו-Mappers להפרדה הרמטית בין ישויות מסד הנתונים לשכבת התצוגה.',
          'תמיכה בהעלאת קבצים מרובי חלקים (Multipart) וניהול מדיה בצורה מאובטחת.',
          'ממשק Angular מודולרי וריאקטיבי הכולל צ\'אטבוט מובנה לתמיכה ועזרה אינטראקטיבית.',
        ],
        en: [
          'Spring Boot backend engine exposing clean, robust RESTful endpoints.',
          'Rigorous application of DTO and Mapper patterns ensuring loose coupling and secure data exposure.',
          'Engineered seamless multipart file upload pipelines with validation and storage handling.',
          'Modular reactive Angular client featuring an integrated chatbot for dynamic user guidance.',
        ],
      },
      architecture: {
        he: 'ארכיטקטורת שכבות קלאסית ב-Spring Boot: בקרים (Controllers) -> שירותים (Services) -> מאגרים (Repositories) -> מסד נתונים H2, עם מנגנון שגיאות גלובלי וממשק שירות ב-Angular.',
        en: 'Tiered Spring Boot architecture: Controller -> Service -> Repository -> H2 DB, complemented by centralized exception handling and structured Angular services.',
      },
      image: '/src/assets/images/project_fynx_colorful_1790869694289.jpg',
      githubUrl: 'https://github.com/Noa-kay/web-app-Fynx',
      githubRepoName: 'web-app Fynx',
      featured: true,
      colorTheme: {
        gradient: 'from-blue-500 via-indigo-500 to-cyan-500',
        badge: 'bg-blue-100 text-blue-800 border border-blue-200',
        border: 'border-blue-200 hover:border-blue-400',
        accent: '#3B82F6',
        iconBg: 'bg-blue-50 text-blue-600',
      },
    },
    {
      id: 'fynx-automation',
      title: {
        he: 'Fynx Automation – תשתית בדיקות רגרסיה ואוטומציה',
        en: 'Fynx Automation – Robust Test Automation Framework',
      },
      subtitle: {
        he: 'פריימוורק אוטומציה מקיף ב-C# ו-Selenium בתבנית Page Object Model',
        en: 'Full Regression Suite in C# & Selenium with Page Object Model (POM)',
      },
      category: 'automation',
      categoryLabel: {
        he: 'אוטומציה ובדיקות תוכנה',
        en: 'Automation & QA Engineering',
      },
      period: '2025',
      tools: ['C#', 'Selenium WebDriver', 'Page Object Model (POM)', 'JS Executor', 'WebDriverWait'],
      summary: {
        he: 'פיתוח תשתית אוטומציה ובדיקות רגרסיה מקיפה ויציבה למערכת Fynx. טיפול באלמנטים דינמיים וסנכרון מתקדם (WebDriverWait) להבטחת עמידות בדיקות ויציבות פלטפורמה.',
        en: 'Developed a robust regression testing framework using C# and Selenium (POM), handling dynamic elements and advanced synchronization to ensure platform stability.',
      },
      highlights: {
        he: [
          'מימוש תבנית Page Object Model (POM) להפרדה בין לוגיקת הבדיקות למבנה הדפים בדפדפן.',
          'שימוש ב-WebDriverWait וב-ExpectedConditions להתמודדות עם רכיבי UI אסינכרוניים.',
          'הפעלת סקריפטים מתקדמים באמצעות JavaScript Executor לתרחישים מורכבים.',
          'דוחות הרצה ברורים והפחתה דרסטית של Flaky Tests.',
        ],
        en: [
          'Engineered clean Page Object Model (POM) architecture decoupling test specifications from DOM selectors.',
          'Implemented advanced synchronization using WebDriverWait and explicit waits to eliminate test flakiness.',
          'Utilized JavaScript Executor for intricate edge-case interactions and scroll validations.',
          'Structured regression suites guaranteeing regression-free deployments across application flows.',
        ],
      },
      githubUrl: 'https://github.com/Noa-kay/Fynx-Automation',
      githubRepoName: 'Fynx-Automation',
      colorTheme: {
        gradient: 'from-emerald-500 via-teal-500 to-green-600',
        badge: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
        border: 'border-emerald-200 hover:border-emerald-400',
        accent: '#10B981',
        iconBg: 'bg-emerald-50 text-emerald-600',
      },
    },
    {
      id: 'recipes-api',
      title: {
        he: 'Recipes – שרת RESTful API לניהול מתכונים ותוכן',
        en: 'Recipes – RESTful API Recipe Management Server',
      },
      subtitle: {
        he: 'שרת Node.js & Express עם MongoDB Atlas, אימות JWT והרשאות RBAC',
        en: 'Node.js & Express backend with MongoDB Atlas, Authentication & RBAC',
      },
      category: 'backend',
      categoryLabel: {
        he: 'פיתוח שרת ומסדי נתונים',
        en: 'Backend & Cloud Databases',
      },
      period: '2025',
      tools: ['Node.js', 'Express', 'MongoDB Atlas', 'Mongoose', 'Joi Validation', 'JWT', 'Postman'],
      summary: {
        he: 'פיתוח שרת Backend לניהול משתמשים ותכני מתכונים עשירים, כולל מנגנוני אימות (JWT) והרשאות מבוססות תפקידים (RBAC). ולידציית קלט קפדנית עם Joi ועבודה עם מסד נתונים בענן.',
        en: 'Developed a backend system for user and content management, including authentication and RBAC. Implemented core server-side logic, data validation, and cloud-based database management.',
      },
      highlights: {
        he: [
          'אימות משתמשים מאובטח באמצעות סיסמאות מוצפנות (Bcrypt) וטוקנים מבוססי JWT.',
          'מנגנון הרשאות תפקידים (RBAC) המבדיל בין יוצרי מתכונים, מנהלים ומשתמשים רגילים.',
          'אימות נתונים קפדני (Schema Validation) לכל בקשה באמצעות ספריית Joi.',
          'תיעוד מקיף ובדיקות יסודיות של כל ה-Endpoints באמצעות Postman Collections.',
        ],
        en: [
          'Secure password hashing with Bcrypt and stateless token authentication via JWT.',
          'Role-Based Access Control (RBAC) governing recipe modifications, moderation, and viewer access.',
          'Strict schema payload validation across all endpoints using Joi middlewares.',
          'Comprehensive Postman collection and integration testing across cloud MongoDB Atlas collections.',
        ],
      },
      githubUrl: 'https://github.com/Noa-kay/Recipes-Project-NodeJS',
      githubRepoName: 'Recipes-Project-NodeJS',
      featured: true,
      colorTheme: {
        gradient: 'from-amber-500 via-orange-500 to-rose-500',
        badge: 'bg-amber-100 text-amber-800 border border-amber-200',
        border: 'border-amber-200 hover:border-amber-400',
        accent: '#F59E0B',
        iconBg: 'bg-amber-50 text-amber-600',
      },
    },
    {
      id: 'color-bomb-game',
      title: {
        he: 'Color Bomb – משחק דפדפן אינטראקטיבי ואלגוריתמי',
        en: 'Color Bomb – Interactive Browser Game',
      },
      subtitle: {
        he: 'משחק JavaScript עם לוגיקה אלגוריתמית בצד הלקוח, חישובי זמן ותגובתיות',
        en: 'JavaScript game with client-side algorithmic logic, time mechanics & responsive UI',
      },
      category: 'frontend',
      categoryLabel: {
        he: 'משחק אינטראקטיבי ו-Frontend',
        en: 'Interactive Game & Frontend',
      },
      period: '2024',
      tools: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Web Audio API', 'Algorithmic State'],
      summary: {
        he: 'פיתוח משחק דפדפן אינטראקטיבי ומאתגר מבוסס JavaScript, המממש לוגיקה אלגוריתמית עשירה בצד הלקוח: התאמת צבעים, ניהול מצבי משחק, תזמונים ותגובתיות חלקה.',
        en: 'Developed a game application based on JavaScript, implementing complex client-side algorithmic logic, state management, timer loops, and smooth player feedback.',
      },
      highlights: {
        he: [
          'לוגיקת התאמה ובדיקת תנאים מתמטית מתקדמת בצד הלקוח ב-Vanilla JavaScript.',
          'מנוע ניהול מצב (State Machine) המנהל מעברים בין תפריטים, סיבובי משחק וחישוב ניקוד.',
          'עיצוב אנימציות עדינות ותגובתיות מלאה למחשבים ניידים ולמסכי מגע.',
          'חוויית משחק מהנה עם פידבק מיידי ואפקטים קוליים עדינים.',
        ],
        en: [
          'Pure JavaScript client-side algorithmic state machine and color matching logic.',
          'Precise timing loops handling game progression, countdown pressure, and score calculation.',
          'Fluid CSS animations and responsive grid mechanics tested across screen sizes.',
          'Delightful interactive feedback with sound effects and score milestones.',
        ],
      },
      githubUrl: 'https://github.com/Noa-kay/Color-bomb-game',
      githubRepoName: 'Color-bomb game',
      hasPlayableDemo: true,
      colorTheme: {
        gradient: 'from-pink-500 via-rose-500 to-red-500',
        badge: 'bg-pink-100 text-pink-800 border border-pink-200',
        border: 'border-pink-200 hover:border-pink-400',
        accent: '#EC4899',
        iconBg: 'bg-pink-50 text-pink-600',
      },
    },
    {
      id: 'semiconductor-verification',
      title: {
        he: 'WIFI-RX Decimation Verification – אימות שבבים וחומרה',
        en: 'WIFI-RX Decimation Verification – Semiconductor Practicum',
      },
      subtitle: {
        he: 'אימות בלוק דסימציה ב-WIFI RX במסגרת פרקטיקום 250 שעות לתכנון שבבים',
        en: 'Hardware verification of WIFI-RX decimation block in a 250-hour intensive program',
      },
      category: 'hardware',
      categoryLabel: {
        he: 'אימות שבבים וחומרה (Hardware)',
        en: 'Hardware & Chip Verification',
      },
      period: '05/2026 – 07/2026',
      tools: ['Verilog', 'SystemVerilog', 'UVM Methodology', 'Logic Simulation', 'SOC Fundamentals'],
      summary: {
        he: 'סיום מוצלח של תוכנית פרקטיקום אינטנסיבית בת 250 שעות (9.5 שבועות) בתכנון מוליכים למחצה, סימולציות מתקדמות ומתודולוגיות אימות חומרה. מימוש סביבת בדיקות (Testbench) מקיפה עבור רכיב Decimation בנתיב הקליטה של רשתות אלחוטיות (WIFI RX).',
        en: 'Successfully completed a comprehensive 250-hour, 9.5-week intensive program specializing in semiconductor planning, advanced simulation technologies, and hardware design verification methodologies (UVM).',
      },
      highlights: {
        he: [
          'כתיבת סביבות אימות ובדיקות מונחות (Constrained Random Testing) ב-Verilog / SystemVerilog.',
          'יישום עקרונות מתודולוגיית UVM (Universal Verification Methodology) לאימות לוגיקה דיגיטלית.',
          'סימולציות לוגיות עמוקות וניתוח אותות (Waveform Debugging) לאיתור שגיאות תזמון ונתונים.',
          'הבנה מעמיקה של מבנה מוליכים למחצה, ארכיטקטורת SOC וזרימת התכנון ב-Silicon.',
        ],
        en: [
          'Constructed robust testbench environments in Verilog and SystemVerilog.',
          'Applied UVM standards for reusable and scalable functional hardware verification.',
          'Deep waveform debugging and logic simulations validating WIFI-RX decimation constraints.',
          'Solid grasp of semiconductor manufacturing realities, SOC architectures, and timing models.',
        ],
      },
      image: '/src/assets/images/project_chip_colorful_1790869705521.jpg',
      githubUrl: 'https://github.com/Noa-kay/WIFI-RX-Decimation-Verification',
      githubRepoName: 'WIFI-RX-Decimation-Verification',
      featured: true,
      colorTheme: {
        gradient: 'from-cyan-500 via-teal-500 to-blue-600',
        badge: 'bg-cyan-100 text-cyan-800 border border-cyan-200',
        border: 'border-cyan-200 hover:border-cyan-400',
        accent: '#06B6D4',
        iconBg: 'bg-cyan-50 text-cyan-600',
      },
    },
    {
      id: 'cars-ecommerce',
      title: {
        he: 'Cars – פלטפורמת תצוגה ומסחר לרכבים',
        en: 'Cars – Vehicle E-commerce Platform',
      },
      subtitle: {
        he: 'אתר תצוגה ומכירה רספונסיבי עם אופטימיזציית ביצועים ו-Media Queries',
        en: 'Responsive vehicle showcase and sales site optimized for load times and media queries',
      },
      category: 'frontend',
      categoryLabel: {
        he: 'פיתוח ממשק ו-UI',
        en: 'Frontend & UI Engineering',
      },
      period: '2024',
      tools: ['HTML5', 'CSS3', 'Responsive Design', 'CSS Grid & Flexbox', 'Media Queries'],
      summary: {
        he: 'תכנון ופיתוח אתר תצוגה ומכירות רספונסיבי לרכבים. אופטימיזציה של זמני טעינה, שימוש מושכל ב-Media Queries להבטחת התאמה מושלמת לכל מכשיר וחוויית שיטוט נעימה.',
        en: 'Designed and developed a responsive vehicle showcase and sales site using HTML and CSS. Optimized loading times and utilized Media Queries to ensure full responsiveness across viewports.',
      },
      highlights: {
        he: [
          'מבנה סמנטי נקי ב-HTML5 לשיפור נגישות ו-SEO.',
          'פריסת אלמנטים אלגנטית ומודרנית בעזרת CSS Grid ו-Flexbox ללא תלות בספריות כבדות.',
          'אופטימיזציה מקסימלית של נכסים גרפיים לטעינה מהירה במיוחד.',
          'תאימות מלאה ומבוקרת לכל גדלי המסכים (מובייל, טאבלט, דסקטופ).',
        ],
        en: [
          'Clean semantic HTML5 structure maximizing accessibility and structural clarity.',
          'Lightweight CSS architecture with bespoke Flexbox and Grid layouts without framework bloat.',
          'Asset compression and viewport loading optimizations for instant interaction.',
          'Meticulous multi-device responsiveness tuned with custom media query breakpoints.',
        ],
      },
      githubUrl: 'https://github.com/Noa-kay/Cars-website',
      githubRepoName: 'Cars-website',
      colorTheme: {
        gradient: 'from-slate-600 via-indigo-600 to-blue-700',
        badge: 'bg-slate-100 text-slate-800 border border-slate-200',
        border: 'border-slate-200 hover:border-slate-400',
        accent: '#475569',
        iconBg: 'bg-slate-50 text-slate-600',
      },
    },
  ] as Project[],

  education: [
    {
      period: '05/2026 – 07/2026',
      institution: {
        he: 'פרקטיקום תכנון ואימות שבבים (Chip Design & Verification)',
        en: 'Chip Design & Verification Practicum',
      },
      title: {
        he: 'התמחות אינטנסיבית בתכנון ואימות מוליכים למחצה (250 שעות)',
        en: 'Semiconductor Planning & Hardware Design Verification (250h)',
      },
      description: {
        he: 'השלמת תוכנית מקצועית אינטנסיבית של 9.5 שבועות (250 שעות) המתמחה בתכנון מוליכים למחצה, סימולציות לוגיות מתקדמות ומתודולוגיות אימות חומרה מודרניות (UVM, SystemVerilog). פרויקט גמר: אימות רכיב WIFI RX Decimation.',
        en: 'Successfully completed a comprehensive 250-hour, 9.5-week intensive program specializing in semiconductor planning, advanced simulation technologies, and hardware design verification methodologies (UVM, SystemVerilog). Final project: WIFI RX Decimation Block Verification.',
      },
      tags: ['Verilog', 'SystemVerilog', 'UVM', 'Logic Simulation', 'Hardware Verification'],
    },
    {
      period: '09/2024 – 05/2026',
      institution: {
        he: 'לימודי מה"ט & תוכנית UltraCode',
        en: 'MAHAT Studies & UltraCode Program',
      },
      title: {
        he: 'התמחות בפיתוח Full-Stack, מסדי נתונים והנדסת תוכנה',
        en: 'Specialization in Full-Stack Development, Databases & Software Engineering',
      },
      description: {
        he: 'לימודים מתקדמים הכוללים ניתוח מערכות, עקרונות הנדסת תוכנה מונחית-עצמים, פיתוח מערכות Web עתירות נתונים בצד הלקוח והשרת (React, Angular, Node.js, Spring Boot, .NET Core) ואופטימיזציית ביצועים.',
        en: 'Advanced technological training focusing on complex web architectures, client and server-side code optimization, distributed systems analysis, and data-intensive application development across modern technology stacks.',
      },
      tags: ['React', 'Angular', 'Node.js', 'Spring Boot', '.NET Core', 'SQL', 'MongoDB'],
    },
    {
      period: '2024 – שוטף',
      institution: {
        he: 'למידה עצמית והעשרה מקצועית',
        en: 'Self-Learning & Continuous Enrichment',
      },
      title: {
        he: 'קורסים מקצועיים והעמקה טכנולוגית עצמאית',
        en: 'Continuous Independent Technological Growth',
      },
      description: {
        he: 'השלמת קורסים מקצועיים מקוונים דרך פלטפורמת "קמפוס IL" בתחומי טכנולוגיה, אלגוריתמיקה ופיתוח. למידה סקרנית ומתמדת של כלים וספריות חדשות, עבודה עם כלי AI (Copilot, Claude, Cursor) לשיפור מהירות ואיכות הפיתוח.',
        en: 'Completed professional online courses via the Campus IL platform in software development and computing fundamentals. Constant self-driven exploration of new tools, frameworks, and modern developer productivity tooling.',
      },
      tags: ['Campus IL', 'Data Structures', 'Algorithms', 'AI Tools', 'DevOps Basics'],
    },
    {
      period: '2020 – 2024',
      institution: {
        he: 'תיכון בית יעקב, פתח תקווה',
        en: 'Beit Yaakov High School, Petach Tikva',
      },
      title: {
        he: 'תעודת בגרות מלאה',
        en: 'Full Matriculation Certificate',
      },
      description: {
        he: 'סיום לימודי תיכון עם תעודת בגרות מלאה בהצטיינות, תוך דגש על חשיבה לוגית, יכולות אנליטיות מדעיות ומשמעת לימודית גבוהה.',
        en: 'Full matriculation certificate with strong foundations in analytical thinking, mathematics, and disciplined study habits.',
      },
      tags: ['Matriculation', 'Petach Tikva'],
    },
  ] as EducationItem[],

  skillGroups: [
    {
      category: {
        he: 'שפות פיתוח וסביבות עבודה',
        en: 'Languages & Environments',
      },
      items: [
        { name: 'JavaScript (ES6+)', proficiency: 'primary' },
        { name: 'TypeScript', proficiency: 'primary' },
        { name: 'HTML5 & CSS3', proficiency: 'primary' },
        { name: 'C#', proficiency: 'primary' },
        { name: 'Java', proficiency: 'primary' },
        { name: 'Python', proficiency: 'experienced' },
        { name: 'SQL', proficiency: 'primary' },
        { name: 'Verilog / SystemVerilog', proficiency: 'experienced' },
      ],
    },
    {
      category: {
        he: 'פריימוורקים וספריות צד-לקוח',
        en: 'Frontend Frameworks & UI',
      },
      items: [
        { name: 'React', proficiency: 'primary' },
        { name: 'Angular', proficiency: 'primary' },
        { name: 'Vite', proficiency: 'primary' },
        { name: 'Tailwind CSS', proficiency: 'primary' },
        { name: 'Material UI', proficiency: 'experienced' },
        { name: 'Responsive Web Design', proficiency: 'primary' },
      ],
    },
    {
      category: {
        he: 'פיתוח שרת ומסדי נתונים',
        en: 'Backend, APIs & Databases',
      },
      items: [
        { name: 'Node.js & Express', proficiency: 'primary' },
        { name: 'Spring Boot (Java)', proficiency: 'primary' },
        { name: '.NET Core / ASP.NET Core 7', proficiency: 'primary' },
        { name: 'RESTful API Architecture', proficiency: 'primary' },
        { name: 'MongoDB / MongoDB Atlas', proficiency: 'primary' },
        { name: 'Entity Framework Core', proficiency: 'primary' },
        { name: 'H2 Database', proficiency: 'experienced' },
        { name: 'JWT & RBAC Security', proficiency: 'primary' },
      ],
    },
    {
      category: {
        he: 'אימות שבבים, חומרה ואוטומציה',
        en: 'Chip Verification & Automation',
      },
      items: [
        { name: 'UVM Methodology', proficiency: 'experienced' },
        { name: 'Logic Simulation', proficiency: 'experienced' },
        { name: 'SOC Fundamentals', proficiency: 'experienced' },
        { name: 'Selenium WebDriver (POM)', proficiency: 'primary' },
        { name: 'WebDriverWait & JS Executor', proficiency: 'primary' },
        { name: 'Automated Regression Suites', proficiency: 'primary' },
      ],
    },
    {
      category: {
        he: 'כלים, מתודולוגיות ותשתיות',
        en: 'Tools, DevOps & Practices',
      },
      items: [
        { name: 'Git & GitHub', proficiency: 'primary' },
        { name: 'Docker (DevOps fundamentals)', proficiency: 'experienced' },
        { name: 'Postman & API Testing', proficiency: 'primary' },
        { name: 'Algorithms & Data Structures', proficiency: 'primary' },
        { name: 'Cursor, Claude & Copilot', proficiency: 'primary' },
        { name: 'Photoshop & Canva', proficiency: 'experienced' },
        { name: 'Linux / macOS / Windows', proficiency: 'experienced' },
      ],
    },
  ] as SkillGroup[],

  languages: [
    {
      name: {
        he: 'עברית',
        en: 'Hebrew',
      },
      level: {
        he: 'שפת אם',
        en: 'Native',
      },
    },
    {
      name: {
        he: 'אנגלית',
        en: 'English',
      },
      level: {
        he: 'רמה גבוהה מאוד (קריאה, כתיבה ושיחה יומיומית)',
        en: 'Very high proficiency, daily exposure and usage',
      },
    },
  ],
};
