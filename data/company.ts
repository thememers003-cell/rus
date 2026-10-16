export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  alternativeHeadline: string;
  positioning: string;
  description: string;
  contact: {
    email: string;
    infoEmail: string;
    hrEmail: string;
    phone: string;
    displayPhone: string;
    hours: string;
    supportEmail: string;
  };
  advisor: {
    name: string;
    title: string;
    phone: string;
    displayPhone: string;
    email: string;
    whatsapp: string;
    label: string;
  };
  navigation: {
    label: string;
    href: string;
    hasDropdown?: boolean;
  }[];
  pillars: {
    title: string;
    description: string;
  }[];
  workflow: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const COMPANY_DATA: CompanyConfig = {
  name: "RISEUPSOLUTIONS",
  legalName: "RISEUPSOLUTIONS",
  tagline: "Technology That Moves You Forward.",
  alternativeHeadline: "One Partner. Every Business Possibility.",
  positioning:
    "A technology company that builds intelligent software to simplify business operations, automate workflows, and help organizations grow.",
  description:
    "From AI-powered voice agents to business management platforms, education ERP, fleet tracking, cloud printing, and bespoke web applications, RISEUPSOLUTIONS builds software that helps modern organizations operate smarter.",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "riseupsolutions@zohomail.in",
    infoEmail: process.env.NEXT_PUBLIC_INFO_EMAIL || "info@riseupsolutions.in",
    hrEmail: process.env.NEXT_PUBLIC_HR_EMAIL || "hr@riseupsolutions.in",
    phone: "+91 9989876985",
    displayPhone: "+91 99898 76985",
    hours: "Monday to Saturday, Business Hours IST",
    supportEmail: "info@riseupsolutions.in",
  },
  advisor: {
    name: "GANGALA MANISH KUMAR",
    title: "Lead Technical & Solutions Advisor",
    phone: "+91 9989876985",
    displayPhone: "+91 99898 76985",
    email: "gangalamanishkumar@gmail.com",
    whatsapp: "https://wa.me/919989876985",
    label: "Talk to our Advisor",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Industries", href: "/industries" },
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  pillars: [
    {
      title: "Practical Innovation",
      description:
        "We build solutions centered on real operational pain points, cutting through hype to deliver measurable efficiency.",
    },
    {
      title: "Connected Workflows",
      description:
        "Eliminate disjointed tools. Our platforms synchronize data across departments, reducing manual data entry and human error.",
    },
    {
      title: "Flexible Platforms",
      description:
        "Whether you run an independent school, a multi-outlet restaurant, or a retail chain, our software adapts to your hierarchy.",
    },
    {
      title: "Scalable Architecture",
      description:
        "Engineered with clean APIs, modular services, and cloud resiliency so your technology foundation expands seamlessly as you grow.",
    },
  ],
  workflow: [
    {
      step: "Discovery",
      title: "Discover",
      description:
        "We analyze your operational bottlenecks, existing tools, user roles, and business workflows to define exact technical specifications.",
    },
    {
      step: "Architecture",
      title: "Design",
      description:
        "We architect user-centric data models, role-based interfaces, and API integrations tailored specifically to how your team works.",
    },
    {
      step: "Engineering",
      title: "Build",
      description:
        "Our engineering team configures modules, integrates custom parameters, connects hardware endpoints, and tests real-world data flows.",
    },
    {
      step: "Deployment",
      title: "Deploy & Improve",
      description:
        "We guide structured onboarding, staff training, monitored rollout, and continuous performance reviews with ongoing technical support.",
    },
  ],
};
