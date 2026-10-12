export interface IndustrySolution {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  iconName: string;
  description: string;
  challenges: string[];
  solutions: {
    name: string;
    description: string;
  }[];
  featuredProducts: string[]; // slugs
  quantifiableImpact: {
    stat: string;
    label: string;
  }[];
}

export const INDUSTRIES_DATA: IndustrySolution[] = [
  {
    id: "ind-education",
    slug: "education-academics",
    title: "Education & Academics",
    tagline: "Digitizing Campus Operations From Admissions to Alumni",
    badge: "K-12 & Higher Ed",
    iconName: "GraduationCap",
    description:
      "Educational institutions face immense administrative friction across fee reconciliation, student attendance records, exam administration, and parent communication. RiseUp Solutions provides a unified academic operating system.",
    challenges: [
      "Manual cash or offline fee collections leading to accounting reconciliation headaches",
      "Parent anxiety regarding student bus commute transit and daily attendance verification",
      "Scattered paper gradebooks, manual timetable clashes, and delayed report cards",
    ],
    solutions: [
      {
        name: "Automated Fee Collection Engine",
        description: "Multi-tiered fee schedules, automated payment reminder SMS, and direct payment gateway settlements with zero manual receipt writing.",
      },
      {
        name: "IoT RFID Bus & Gate Telemetry",
        description: "Instant notifications sent to parents when their child boards the school bus and crosses the campus gate scanner.",
      },
      {
        name: "AI Voice Helpdesk for Admissions",
        description: "Autonomous voice AI agents handling thousands of parent inquiries during high-pressure admission seasons 24/7.",
      },
    ],
    featuredProducts: ["education-erp", "ai-voice-agent", "fleet-asset-tracking"],
    quantifiableImpact: [
      { stat: "98.5%", label: "On-Time Fee Collections" },
      { stat: "-80%", label: "Administrative Workload" },
      { stat: "100%", label: "Parent Transport Visibility" },
    ],
  },
  {
    id: "ind-logistics",
    slug: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    tagline: "Total Fleet Visibility & Warehouse Execution",
    badge: "Transport & 3PL",
    iconName: "Truck",
    description:
      "Modern supply chains demand precision telemetry, real-time routing adjustments, and rapid warehouse fulfillment to keep shipping costs under control.",
    challenges: [
      "Excessive fuel consumption due to unauthorized trips, prolonged vehicle idling, and poor route navigation",
      "Delayed proof of delivery handoffs resulting in extended cash collection cycles",
      "Thermal printer disconnects in warehouse dispatch lines halting packing stations",
    ],
    solutions: [
      {
        name: "Sub-Second Fleet Telematics",
        description: "Live GPS map view, geofence intrusion alerts, harsh driving reports, and digital fuel tank monitoring.",
      },
      {
        name: "Cloud Thermal Label Gateway",
        description: "Zero-latency remote cloud printing for instant shipping labels and packing slips directly at the warehouse dock.",
      },
      {
        name: "Driver Mobile App with e-POD",
        description: "Electronic proof of delivery with digital customer signature, photo capture, and instant ERP invoice generation.",
      },
    ],
    featuredProducts: ["fleet-asset-tracking", "cloud-printing-solutions", "business-management-platform"],
    quantifiableImpact: [
      { stat: "-24%", label: "Fleet Fuel Consumption" },
      { stat: "3.5x", label: "Faster Dock Packing Speeds" },
      { stat: "99.9%", label: "Route Adherence" },
    ],
  },
  {
    id: "ind-retail",
    slug: "retail-ecommerce",
    title: "Retail & E-Commerce",
    tagline: "Unified Multi-Channel Inventory & High-Speed POS",
    badge: "Omnichannel Commerce",
    iconName: "Store",
    description:
      "Retailers must unify inventory across physical storefronts, e-commerce storefronts, and central warehouses while keeping counter checkout lines moving rapidly.",
    challenges: [
      "Inaccurate stock levels leading to overselling online or stockouts on store shelves",
      "Slow, laggy legacy POS cash registers causing long queues and frustrated shoppers",
      "Fragmented customer purchase history preventing effective loyalty programs",
    ],
    solutions: [
      {
        name: "Real-Time Multi-Outlet Inventory",
        description: "Single source of truth inventory with automated transfer requests, barcode generation, and reorder point alerts.",
      },
      {
        name: "Cloud-Enabled Lightning POS",
        description: "Fast touch-screen checkout with split payments, offline capability, and instant cloud thermal receipt printing.",
      },
      {
        name: "AI Inbound Voice Support",
        description: "Handles customer calls regarding store hours, item availability, order tracking, and refund status automatically.",
      },
    ],
    featuredProducts: ["business-management-platform", "cloud-printing-solutions", "ai-voice-agent"],
    quantifiableImpact: [
      { stat: "-65%", label: "Stockout Incidents" },
      { stat: "< 4s", label: "Average Checkout Scan Time" },
      { stat: "+32%", label: "Customer Repeat Rate" },
    ],
  },
  {
    id: "ind-hospitality",
    slug: "hospitality-restaurants",
    title: "Hospitality & Restaurants",
    tagline: "Synchronized Kitchen Printing & Voice Reservations",
    badge: "Dining & Cloud Kitchens",
    iconName: "Utensils",
    description:
      "Fast-paced food and beverage establishments cannot afford dropped kitchen orders, missed phone reservations during dinner rush, or slow table billing.",
    challenges: [
      "Missed reservation phone calls during peak dining hours leading to lost covers",
      "Kitchen printers dropping orders sent from multiple delivery tablets",
      "Disjointed menu pricing between delivery platforms and dine-in point-of-sale",
    ],
    solutions: [
      {
        name: "RiseVoice Table Reservation AI",
        description: "Answers phone reservations 24/7, checks table capacity in real time, and sends SMS booking confirmations.",
      },
      {
        name: "IoT Cloud Kitchen Printer Station",
        description: "Automatically routes orders from aggregator tablets and waiters directly to the specific kitchen line printer.",
      },
      {
        name: "Integrated Restaurant POS",
        description: "Table management, split bill calculations, kitchen order ticket (KOT) tracking, and ingredient inventory depletion.",
      },
    ],
    featuredProducts: ["cloud-printing-solutions", "ai-voice-agent", "business-management-platform"],
    quantifiableImpact: [
      { stat: "0", label: "Lost Kitchen Tickets" },
      { stat: "+28%", label: "Phone Reservations Captured" },
      { stat: "100%", label: "Delivery Tablet Sync" },
    ],
  },
  {
    id: "ind-healthcare",
    slug: "healthcare-clinics",
    title: "Healthcare & Clinics",
    tagline: "Automated Patient Scheduling & Diagnostic Portals",
    badge: "Clinics & Diagnostic Labs",
    iconName: "Stethoscope",
    description:
      "Medical practices require compassionate, reliable communication for appointments and streamlined patient records management with stringent privacy standards.",
    challenges: [
      "High patient appointment no-show rates resulting in lost clinic revenue",
      "Front desk overwhelmed by calls for basic test results and appointment scheduling",
      "Cluttered lab report dispatching and manual paper medical records",
    ],
    solutions: [
      {
        name: "Voice AI Patient Intake & Reminders",
        description: "Automated natural voice reminders and confirmation calls that dramatically slash clinic no-show rates.",
      },
      {
        name: "Secure Diagnostic Portal",
        description: "Patients securely log in to access PDF diagnostic test results and doctor consultation summaries.",
      },
      {
        name: "Clinic Management ERP",
        description: "Electronic health records, doctor scheduling slots, prescription cloud printing, and billing insurance claims.",
      },
    ],
    featuredProducts: ["ai-voice-agent", "bespoke-web-applications", "cloud-printing-solutions"],
    quantifiableImpact: [
      { stat: "-54%", label: "Patient No-Show Rate" },
      { stat: "24/7", label: "Patient Scheduling Availability" },
      { stat: "100%", label: "HIPAA Compliant Data Flow" },
    ],
  },
  {
    id: "ind-enterprise",
    slug: "enterprise-custom",
    title: "Enterprises & Corporate",
    tagline: "Engineered Cloud Microservices & High-Scale Systems",
    badge: "Custom B2B Solutions",
    iconName: "Building2",
    description:
      "When market-standard SaaS cannot accommodate unique proprietary business logic, RiseUp Solutions builds scalable, custom enterprise web applications.",
    challenges: [
      "Siloed legacy databases incapable of modern mobile and web integration",
      "Expensive recurring SaaS licensing fees for generic, poorly fitted tools",
      "Rigid workflows that prevent agile business pivots and regional expansion",
    ],
    solutions: [
      {
        name: "Bespoke Enterprise Web Architecture",
        description: "High-performance microservices and intuitive dashboards designed specifically for your corporate workflow.",
      },
      {
        name: "Custom Integration Middleware",
        description: "Bridges legacy ERPs, payment processors, and proprietary hardware into unified API pipelines.",
      },
      {
        name: "Dedicated DevOps & 24/7 Monitoring",
        description: "Automated CI/CD pipelines, containerized deployments, and around-the-clock infrastructure reliability.",
      },
    ],
    featuredProducts: ["bespoke-web-applications", "business-management-platform", "ai-voice-agent"],
    quantifiableImpact: [
      { stat: "100%", label: "Proprietary IP Ownership" },
      { stat: "3.8x", label: "Operational Speed Boost" },
      { stat: "Zero", label: "Per-Seat Licensing Extortion" },
    ],
  },
];
