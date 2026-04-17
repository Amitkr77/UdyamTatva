import type {
  NavLink,
  HeroStat,
  FeatureCard,
  Testimonial,
  HowItWorksStep,
  GalleryImage,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "GPS", href: "#gps" },
  { label: "Marketplace", href: "#marketplace" },
];

export const HERO_STATS: HeroStat[] = [
  { value: "2,400+", label: "Founders Onboarded" },
  { value: "₹18M+", label: "Capital Raised" },
  { value: "94%", label: "Survival Rate" },
];

export const CORE_FEATURES: FeatureCard[] = [
  {
    id: "startup-gps",
    title: "Startup GPS",
    description:
      "Real-time market navigation. Avoid the dead-ends that kill 90% of early-stage companies.",
    badge: "Proprietary Tech",
    icon: "explore",
    size: "large",
    variant: "dark",
    cta: { label: "Initialize Scan", href: "#gps" },
    stats: [
      { value: "Live", label: "Market Data" },
      { value: "AI", label: "Predictions" },
      { value: "0ms", label: "Delay" },
    ],
    hasVideo: true,
    videoSrc:
      "https://videos.pexels.com/video-files/7947463/7947463-hd_1920_1080_25fps.mp4",
  },
  {
    id: "execution-pods",
    title: "Execution Pods",
    description:
      "Modular workflows designed to automate the boring stuff. Focus only on high-leverage tasks.",
    icon: "groups",
    size: "medium",
    variant: "blue",
    imageSrc:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=80",
    imageAlt: "Team member",
  },
  {
    id: "smart-marketplace",
    title: "Smart Marketplace",
    description:
      "Access pre-vetted talent, discounted SaaS credits, and viral-ready creative assets in one click.",
    icon: "storefront",
    size: "medium",
    variant: "light",
    cta: { label: "Explore Catalog", href: "#marketplace" },
    imageSrc:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Marketplace",
  },
  {
    id: "curated-incubation",
    title: "Curated Incubation",
    description:
      "Hand-picked mentorship from exit-proven founders and hyper-growth resources tailored for your specific scaling phase.",
    badge: "Cohort 7 — Open",
    icon: "school",
    size: "large",
    variant: "gold",
    cta: { label: "Apply for Cohort", href: "#incubation" },
    imageSrc:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Incubation cohort",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "alex",
    quote:
      "Udyam Tatva didn't just give us a roadmap; they gave us a cheat code for the entire ecosystem.",
    name: "Alex Rivera",
    role: "Founder",
    company: "FluxAI",
    avatarSrc:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=80",
    variant: "white",
    rotation: "cw",
  },
  {
    id: "sarah",
    quote:
      "The GPS feature literally saved us ₹50k in botched marketing spend. Unbelievable tool.",
    name: "Sarah Chen",
    role: "CEO",
    company: "NomadStacks",
    avatarSrc:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=80",
    variant: "blue",
    rotation: "ccw",
  },
  {
    id: "jordan",
    quote:
      "Finally, a SaaS that speaks Gen Z. Raw, powerful, and ridiculously effective.",
    name: "Jordan Blake",
    role: "Founder",
    company: "ZeroG",
    avatarSrc:
      "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=80",
    variant: "white",
    rotation: "cw",
  },
  {
    id: "priya",
    quote:
      "We went from 0 to seed in 90 days. The Blueprint is genuinely that powerful.",
    name: "Priya Menon",
    role: "CTO",
    company: "BuildStack",
    avatarSrc:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80",
    variant: "gold",
    rotation: "ccw",
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Input Your Stage",
    description:
      "Tell us where you are — idea, MVP, scaling, or exit-ready.",
    variant: "blue",
  },
  {
    step: 2,
    title: "Get Your Blueprint",
    description:
      "AI + expert data generates your personalized execution map in 48 hours.",
    variant: "gold",
  },
  {
    step: 3,
    title: "Execute & Scale",
    description:
      "Follow the GPS, activate your pods, and watch the metrics move.",
    variant: "dark",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Startup team collaborating",
  },
  {
    src: "https://images.pexels.com/photos/7688160/pexels-photo-7688160.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Founder working on product",
  },
  {
    src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Team strategy session",
  },
  {
    src: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Brainstorming session",
  },
  {
    src: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Product launch meeting",
  },
  {
    src: "https://images.pexels.com/photos/1181571/pexels-photo-1181571.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Investor pitch preparation",
  },
];

export const TICKER_TEXT =
  "BUILD NOW • BUILD DIFFERENT • THINK BIGGER • MOVE FASTER • ";
