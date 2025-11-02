
import type { Project, Service } from './types';

export const navLinks = [
  { href: '#home', label: 'الرئيسية', icon: 'fa-home' },
  { href: '#services', label: 'خدماتنا', icon: 'fa-cogs' },
  { href: '#projects', label: 'مشاريعنا', icon: 'fa-laptop-code' },
  { href: '#about', label: 'من نحن', icon: 'fa-users' },
  { href: '#contact', label: 'اتصل بنا', icon: 'fa-paper-plane' },
];

export const servicesData: Service[] = [
  {
    id: 'web-design',
    icon: 'fa-globe',
    title: 'تصميم موقع إلكتروني فاخر يعكسك',
    description: 'كل موقع عندنا هو لوحة فنية رقمية تُحاكي ذوقك وتخدم هدفك.',
    featuresTitle: '✨ ما الذي نقدمه؟',
    features: [
      'تصميم أنيق وعصري متكامل',
      'متجاوب 100٪ مع جميع الشاشات',
      'تحميل سريع وتجربة مستخدم سلسة',
      'دعم كامل للغتين (العربية والإنجليزية)',
      'صفحات منظمة وجذابة',
      'نظام إدارة محتوى بسيط',
      'حماية عالية وسيو (SEO) احترافي',
    ],
    portfolio: {
      title: '🧾 نماذج من مواقعنا المميزة:',
      items: [
        '🛒 تصميم تسوّقي فاخر',
        '🍽️ مطعم – لمسة أنيقة',
        '🧠 موقع – واجهات للبيع باحتراف',
        '📚 متجر – لبيع كتب PDF بذكاء',
        '👤 موقع شخصي – للتعريف الشخصي والخدمات',
      ],
    },
  },
  {
    id: 'ai-integration',
    icon: 'fa-brain',
    title: 'ذكاء اصطناعي عام داخل موقعك',
    description: 'هذا ليس مجرد شات! بل مساعد ذكي يجاوب الزوار لحظيًا ويساعدهم بدون انتظار أو تدخل منك.',
    featuresTitle: '💡 ماذا يفعل؟',
    features: [
      'يجاوب على استشارات طبية بسيطة',
      'يقترح تمارين رياضية أو وجبات صحية',
      'يرد على أسئلة عامة أو دينية',
      'يساعد في اختيار خدمة أو منتج',
      'يقدم حلولًا تقنية أو دعم مبدئي',
      'يتعلّم من الأسئلة ويتطور باستمرار',
    ],
    result: '🎯 النتيجة: زائر مرتاح، تجربة تفاعلية، وتحويلات أكثر لمبيعاتك أو خدماتك.',
  },
  {
    id: 'telegram-bot',
    icon: 'fa-telegram',
    title: 'بوت ذكاء اصطناعي خاص على تلجرام',
    description: 'مساعد رقمي مخصص لك وحدك، يعمل 24/7 لخدمتك.',
    featuresTitle: '🔧 ماذا يفعل؟',
    features: [
      'يرحّب بالعملاء تلقائيًا',
      'يشرح لهم خدماتك أو منتجاتك',
      'يحجز مواعيد أو طلبيات تلقائيًا',
      'يرسل لهم روابط، صور، عروض',
      'يجمع بياناتهم للتواصل لاحقًا',
    ],
    result: '🔥 تخيّل: عميل يدخل تلجرام → يطلب خدمة → يحجز أو يشتري → بدون تدخل منك!',
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'HSG-AI',
    description: 'منصة ذكاء اصطناعي متطورة للمحادثة والمساعدة في مختلف المجالات',
    category: 'ai',
    categoryDisplay: 'ذكاء اصطناعي',
    imageUrl: 'https://i.postimg.cc/9FTMjDsS/Screenshot-20250720-200402-com-android-chrome-Chrome-Tabbed-Activity-edit-1156353550306229.jpg',
    tech: ['AI', 'ChatGPT', 'API Integration'],
    liveUrl: 'https://hsg-ai.netlify.app',
  },
  {
    id: 2,
    title: 'مواقيت الصلاة في مصر',
    description: 'تطبيق دقيق لمواقيت الصلاة في جميع محافظات مصر',
    category: 'islamic',
    categoryDisplay: 'تطبيقات إسلامية',
    imageUrl: 'https://i.postimg.cc/vHXKThR6/Screenshot-20250720-200723-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['Prayer API', 'Geolocation', 'Real-time'],
    liveUrl: 'https://prayer-times-in-egypt-hsg.netlify.app/',
  },
  {
    id: 3,
    title: 'موقع الصحة النفسية',
    description: 'منصة متكاملة للدعم النفسي والإرشاد الصحي',
    category: 'web',
    categoryDisplay: 'الصحة والرفاهية',
    imageUrl: 'https://i.postimg.cc/qR5RpyJf/Screenshot-20250720-200928-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['React', 'Health API', 'Responsive'],
    liveUrl: 'https://mental-health-website-hsg.netlify.app/',
  },
  {
    id: 4,
    title: 'أذكار الصباح والمساء',
    description: 'تطبيق شامل لأذكار الصباح والمساء مع واجهة سهلة الاستخدام',
    category: 'islamic',
    categoryDisplay: 'تطبيقات إسلامية',
    imageUrl: 'https://i.postimg.cc/BvhD18Sp/Screenshot-20250720-201103-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['JavaScript', 'Local Storage', 'PWA'],
    liveUrl: 'https://azkar-sabah-and-almasa-hsg.netlify.app/',
  },
  {
    id: 5,
    title: 'مسبحة إلكترونية',
    description: 'مسبحة رقمية تفاعلية مع عداد وأصوات وتصميم إسلامي',
    category: 'islamic',
    categoryDisplay: 'تطبيقات إسلامية',
    imageUrl: 'https://i.postimg.cc/pLC5g9Fv/Screenshot-20250720-201248-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['JavaScript', 'Audio API', 'Interactive'],
    liveUrl: 'https://electronic-masbaha-hsg.netlify.app/',
  },
  {
    id: 6,
    title: 'Coding Max',
    description: 'منصة تعليمية متكاملة لتعلم البرمجة بطريقة تفاعلية',
    category: 'web',
    categoryDisplay: 'تعليمي',
    imageUrl: 'https://i.postimg.cc/Z555vwWk/Screenshot-20250720-201427-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['React', 'Node.js', 'Educational'],
    liveUrl: 'https://coding-max-hsg.netlify.app/',
  },
  {
    id: 7,
    title: 'HSG Code',
    description: 'منصة برمجية تعليمية متقدمة مع محرر أكواد تفاعلي',
    category: 'web',
    categoryDisplay: 'تعليمي',
    imageUrl: 'https://i.postimg.cc/RVXMmwXg/Screenshot-20250720-201554-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['Code Editor', 'Tutorials', 'Interactive'],
    liveUrl: 'https://hsg-code.netlify.app',
  },
  {
    id: 8,
    title: 'مترجم HSG',
    description: 'أداة ترجمة فورية متعددة اللغات مع ميزات صوتية',
    category: 'tools',
    categoryDisplay: 'أدوات',
    imageUrl: 'https://i.postimg.cc/JzSC7xJ5/Screenshot-20250720-201824-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['Translation API', 'Voice', 'Multi-language'],
    liveUrl: 'https://hsg-translator.netlify.app/',
  },
  {
    id: 9,
    title: 'HSG Weather',
    description: 'تطبيق طقس متكامل مع توقعات دقيقة وتحديثات مباشرة',
    category: 'tools',
    categoryDisplay: 'أدوات',
    imageUrl: 'https://i.postimg.cc/Y0Dyn2zz/Screenshot-20250720-202029-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['Weather API', 'Geolocation', 'Real-time'],
    liveUrl: 'https://hsg-weather.netlify.app/',
  },
  {
    id: 10,
    title: 'نظام إشارات التداول',
    description: 'منصة احترافية لتحليل وتتبع إشارات التداول',
    category: 'tools',
    categoryDisplay: 'أدوات مالية',
    imageUrl: 'https://i.postimg.cc/nz0drVgf/Screenshot-20250720-202214-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['Trading API', 'Real-time', 'Analysis'],
    liveUrl: 'https://advanced-trading-signals-ystem-hsg.netlify.app/',
  },
  {
    id: 11,
    title: 'HSG Currency',
    description: 'محول عملات فوري مع أسعار صرف حية ورسوم بيانية',
    category: 'tools',
    categoryDisplay: 'أدوات مالية',
    imageUrl: 'https://i.postimg.cc/Hxs2qDxZ/20250720-202510.png',
    tech: ['Currency API', 'Charts', 'Live Rates'],
    liveUrl: 'https://hsg-currency.netlify.app/',
  },
  {
    id: 12,
    title: 'HSG Remove Background',
    description: 'أداة ذكية لإزالة خلفيات الصور باستخدام الذكاء الاصطناعي',
    category: 'ai',
    categoryDisplay: 'معالجة صور',
    imageUrl: 'https://i.postimg.cc/FRRyPyWw/Screenshot-20250720-202644-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['AI', 'Image Processing', 'ML Models'],
    liveUrl: 'https://hsg-remove-background.netlify.app/',
  },
  {
    id: 13,
    title: 'دردشة مدرسة',
    description: 'منصة تعليمية تفاعلية للتواصل بين الطلاب والمعلمين',
    category: 'web',
    categoryDisplay: 'تعليمي',
    imageUrl: 'https://i.postimg.cc/ZKhcmdCv/Screenshot-20250720-202842-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['Chat System', 'Real-time', 'Education'],
    liveUrl: 'https://thanks-all-class.vercel.app/ai.html',
  },
  {
    id: 14,
    title: 'ألعاب إنجليزية متنوعة',
    description: 'مجموعة ألعاب تعليمية تفاعلية لتعلم اللغة الإنجليزية',
    category: 'web',
    categoryDisplay: 'تعليمي',
    imageUrl: 'https://i.postimg.cc/CLPz7yTM/Screenshot-20250720-203115-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['Games', 'Education', 'Interactive'],
    liveUrl: 'https://plural-master.vercel.app',
  },
  {
    id: 15,
    title: 'موقع شركة بدر الدين',
    description: 'موقع شركة احترافي مع تصميم عصري وواجهة مستخدم متميزة',
    category: 'web',
    categoryDisplay: 'مواقع شركات',
    imageUrl: 'https://i.postimg.cc/jqkbkR51/Screenshot-20250720-203250-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['Corporate', 'Responsive', 'Modern UI'],
    liveUrl: 'https://badr-alden.vercel.app',
  },
  {
    id: 16,
    title: 'إنشاء صورة بالذكاء الاصطناعي',
    description: 'منصة لإنشاء صور إبداعية باستخدام تقنيات الذكاء الاصطناعي',
    category: 'ai',
    categoryDisplay: 'ذكاء اصطناعي',
    imageUrl: 'https://i.postimg.cc/MX2xPYDD/Screenshot-20250720-203453-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['AI', 'Image Generation', 'Deep Learning'],
    liveUrl: 'https://hsg-ai-image.vercel.app',
  },
  {
    id: 17,
    title: 'إنشاء QR Code',
    description: 'أداة متقدمة لإنشاء رموز QR مع خيارات تخصيص متعددة',
    category: 'tools',
    categoryDisplay: 'أدوات',
    imageUrl: 'https://i.postimg.cc/ZRXCmpH9/Screenshot-20250720-203557-com-android-chrome-Chrome-Tabbed-Activity.jpg',
    tech: ['QR Generator', 'Customization', 'Download'],
    liveUrl: 'https://hsg-qr-code.vercel.app',
  },
];
