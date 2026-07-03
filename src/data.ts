import { Project, Service, Testimonial, FAQItem, TimelineEvent, WhyCard } from './types';

export const services: Service[] = [
  {
    id: 'smm',
    title: 'Social Media Management',
    iconName: 'Instagram',
    description: 'Transforming your social grid into an editorial-grade brand storefront.',
    longDescription: 'We go beyond basic posting. We manage, grow, and aestheticize your social footprint to make sure your brand commands attention. From high-fashion visual planning to performance tracking, we drive community and conversation.',
    features: ['Content Pillars & Aesthetic Strategy', 'Grid curation & visual planning', 'Platform-optimized writing & hashtags', 'Community building & interaction strategy', 'Performance metrics & engagement logs']
  },
  {
    id: 'brand',
    title: 'Brand Identity',
    iconName: 'Palette',
    description: 'Cohesive, luxurious design systems that communicate instant authority.',
    longDescription: 'We craft complete visual architectures for ambitious brands. From bespoke logos and wordmarks to editorial typography, luxury physical stationery, and strict digital style guides that keep your presence unified across all screens.',
    features: ['Custom Logo Suites & Wordmarks', 'Typography pairing & type hierarchies', 'High-end color palettes', 'Packaging & stationery design', 'Comprehensive Brand Guidelines']
  },
  {
    id: 'web',
    title: 'Website Development',
    iconName: 'Globe',
    description: 'Bespoke, blazing-fast, and award-winning digital experiences.',
    longDescription: 'Websites that feel like interactive art galleries. We build ultra-high-end responsive portfolios, interactive e-commerce layouts, and agency landing pages with buttery-smooth interactions, 60fps animations, and perfect responsive fluidity.',
    features: ['Custom React & Next.js architectures', 'Framer Motion & GSAP micro-interactions', 'Desktop-precision & Mobile-first engineering', 'Zero CLS & lightning-fast performance', 'SEO and semantic markup setup']
  },
  {
    id: 'automation',
    title: 'Systems & Automation',
    iconName: 'Cpu',
    description: 'Scaling operations through bespoke CRM and custom business flows.',
    longDescription: 'Reclaim hundreds of hours. We integrate intelligent backend automations, lead-routing triggers, custom client onboarding portals, and automated notification loops that allow your business to scale quietly in the background.',
    features: ['Zapier & Make workflow mapping', 'CRM & Client Onboarding portals', 'Automated document generation', 'Lead tracking & automatic notifications', 'Tailored analytics dashboards']
  },
  {
    id: 'content',
    title: 'Content Creation',
    iconName: 'Video',
    description: 'High-end photography, cinematic reels, and premium copy.',
    longDescription: 'Every frame speaks. We direct and produce luxury photographic campaigns, cinematic vertical Reels/TikToks, and editorial copy designed specifically to elevate perceived value and convert passive viewers into loyal advocates.',
    features: ['Cinematic short-form video production', 'Luxury product & editorial photography', 'Bespoke storytelling & copy direction', 'Moodboarding & creative art direction', 'Multi-channel assets optimization']
  }
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Vanguard Editorial',
    category: 'Brand Identity',
    image: '/src/assets/images/akemy_brand_portfolio_1782919448834.jpg',
    description: 'A complete luxury visual identity system for an high-fashion publisher, featuring tactile physical textures and a gold-foil visual layout.',
    longDescription: 'Vanguard Editorial requested a complete re-imagining of their print and digital publishing brand. We developed an ultra-premium visual system built on a custom editorial serif, a high-contrast charcoal and warm cream palette, and physical packaging systems that represent pure elegance.',
    client: 'Vanguard Media Group',
    servicesUsed: ['Brand Strategy', 'Logo Suite', 'Stationery Design', 'Creative Direction'],
    technology: ['Adobe Illustrator', 'Figma', 'Premium Foil Printing'],
    results: '+140% Increase in subscriber retention and premium club signups within 3 months.',
    year: '2025'
  },
  {
    id: 'p2',
    title: 'Aether Luxury Residences',
    category: 'Website Development',
    image: '/src/assets/images/akemy_web_portfolio_1782919463271.jpg',
    description: 'An interactive, high-end real estate portal designed with mouse parallax, smooth fluid-scrolling, and elegant luxury unit filtering.',
    longDescription: 'For Aether Residences, standard real estate listings simply would not suffice. We built a full-screen, highly immersive spatial catalog that allows prospective buyers to explore premium penthouses with real-time solar tracking, custom floor-plan interactive viewers, and dynamic 3D transitions.',
    client: 'Aether Developments',
    servicesUsed: ['Interactive Web Design', 'Frontend Development', 'Copywriting', 'SEO Architecture'],
    technology: ['React 19', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    results: '100% of luxury penthouses reserved within 6 weeks of digital launch.',
    year: '2026'
  },
  {
    id: 'p3',
    title: 'Continuum Systems',
    category: 'Automation',
    image: '/src/assets/images/akemy_automation_portfolio_1782919477636.jpg',
    description: 'A custom, intelligent enterprise workflow automation engine, connecting CRM pipelines and generating automated proposals in real-time.',
    longDescription: 'Continuum Systems operates globally, but was bogged down by archaic manual customer onboarding systems. We mapped and fully automated their entire pipeline, connecting lead forms with CRM routing, drafting custom brand proposals instantly, and configuring dynamic follow-up triggers.',
    client: 'Continuum Tech AG',
    servicesUsed: ['Systems Consulting', 'Workflow Mapping', 'CRM Integrations', 'Custom Dashboards'],
    technology: ['Make.com', 'Zapier', 'Notion API', 'Tailwind CSS'],
    results: 'Saved over 340 employee hours monthly; shortened sales cycle by 72%.',
    year: '2025'
  },
  {
    id: 'p4',
    title: 'Zephyr Maison',
    category: 'Social Media Management',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80',
    description: 'Curating an editorial Instagram layout and content pipeline that positioned an emerging home-decor atelier alongside legacy designers.',
    longDescription: 'Zephyr Maison had exquisite physical products but lacked a digital grid that reflected their craft. We designed and managed a full-funnel content plan, arranging elegant editorial flatlays, crafting rich storytelling copy, and targeting premium design enthusiasts.',
    client: 'Zephyr Maison Inc.',
    servicesUsed: ['Grid Curation', 'Social Strategy', 'Copywriting', 'Analytics Reporting'],
    technology: ['Figma', 'Lightroom Mobile', 'Platform Scheduling Systems'],
    results: 'Grew organic follower count by 28,000 in 6 months; 35% of direct sales driven through Instagram bio link.',
    year: '2026'
  },
  {
    id: 'p5',
    title: 'Solas Atelier Campaign',
    category: 'Content Creation',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description: 'Cinematic visual direction, short-form Reels, and digital editorial photography showcasing the raw tactile details of organic textiles.',
    longDescription: 'Solas Atelier wanted to launch their organic textile capsule with an emotional, high-production visual aesthetic. We storyboarded, directed, and captured a full campaign, generating a library of highly atmospheric short videos and cinematic photography that emphasizes fine textures and organic form.',
    client: 'Solas Atelier',
    servicesUsed: ['Creative Direction', 'Videography', 'Creative Post-Production', 'Atmospheric Copy'],
    technology: ['Sony FX3 Cine', 'DaVinci Resolve', 'Adobe Lightroom'],
    results: 'Over 2.4 million organic video views; capsule collection completely sold out within 48 hours.',
    year: '2025'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2025',
    title: 'AKEMY Founded',
    description: 'Launched with a singular focus: to strip away generic digital templating and build bespoke premium creative architectures for ambitious brands.'
  },
  {
    year: '2025',
    title: 'Pioneering Automation',
    description: 'Bridged creative brand design with high-end digital operations. Helping luxury labels and elite services automate client acquisition quietly and beautifully.'
  },
  {
    year: '2026',
    title: 'A Premium Digital Partner',
    description: 'Recognized for creating highly immersive, 60fps web experiences and pristine social narratives that move businesses beyond websites and beyond social.'
  }
];

export const whyCards: WhyCard[] = [
  {
    id: 'creative',
    title: 'Creative Thinking',
    description: 'We do not follow template guidelines. We design bespoke, artistic solutions tailored precisely to your brand positioning.',
    iconName: 'Sparkles'
  },
  {
    id: 'fast',
    title: 'Fast Delivery',
    description: 'We couple custom high-fidelity craftsmanship with strict milestones and efficient agile release pipelines.',
    iconName: 'Zap'
  },
  {
    id: 'premium',
    title: 'Premium Design',
    description: 'Fine typography, balanced negative space, custom lighting, and smooth responsive states are in our DNA.',
    iconName: 'Crown'
  },
  {
    id: 'growth',
    title: 'Business Growth',
    description: 'Aesthetic is useless without conversions. Every asset is built to drive client trust, engagement, and actual revenue.',
    iconName: 'TrendingUp'
  },
  {
    id: 'automation',
    title: 'Smart Automation',
    description: 'We embed intelligent workflows in the backend, meaning your visual success is reinforced by operational strength.',
    iconName: 'Cpu'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq1',
    question: 'What types of businesses do you partner with?',
    answer: 'We collaborate with high-end service providers, luxury boutiques, creative entrepreneurs, ambitious real estate firms, and innovative startups who appreciate premium design and understand that their digital presence is their main trust vector.'
  },
  {
    id: 'faq2',
    question: 'How long does a premium website project take?',
    answer: 'A bespoke brand and custom interactive website project typically spans 4 to 8 weeks. This covers thorough discover, user flow strategy, unique typography and motion prototyping, pixel-perfect development, and robust SEO validation.'
  },
  {
    id: 'faq3',
    question: 'Can you work with our existing branding or systems?',
    answer: 'Absolutely. We can ingest your existing corporate assets and scale them into the digital realm, or build custom automated integrations directly on top of your current CRM, booking engines, or communication platforms.'
  },
  {
    id: 'faq4',
    question: 'Do you offer ongoing management and optimization?',
    answer: 'Yes, we provide premium retainer services for Social Media Management, cinematic Content Creation, and routine website updates to keep your brand looking flawless and running at peak performance.'
  },
  {
    id: 'faq5',
    question: 'What is your process for booking a discovery call?',
    answer: 'Simply complete our interactive contact questionnaire. Outline your goals, estimated budget, and required services. Within 24 hours, our team will reach out with a curated proposal and calendar booking link.'
  }
];
