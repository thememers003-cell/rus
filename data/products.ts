export interface ProductFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface ProductMetric {
  value: string;
  label: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  category: "AI & Automation" | "Core Operations" | "IoT & Telematics" | "Infrastructure" | "Custom Engineering";
  summary: string;
  description: string;
  accentColor: string;
  metrics: ProductMetric[];
  keyFeatures: ProductFeature[];
  technicalSpecs: {
    latency?: string;
    deployment: string;
    integrations: string[];
    compliance: string[];
    protocol?: string;
  };
  useCases: {
    title: string;
    target: string;
    outcome: string;
  }[];
  architectureHighlights: string[];
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "prod-voice-ai",
    slug: "ai-voice-agent",
    name: "RiseVoice AI",
    tagline: "Ultra-Low Latency Conversational Voice Intelligence",
    badge: "Next-Gen AI",
    category: "AI & Automation",
    summary:
      "Enterprise autonomous voice agents that conduct human-grade phone conversations, qualify leads, schedule appointments, and resolve customer queries 24/7.",
    description:
      "RiseVoice AI replaces rigid IVR menus with ultra-responsive conversational voice agents trained on your business knowledge base. Supporting sub-250ms latency, multilingual conversational fluency, and direct telephony CRM integration, it scales customer engagement while slashing operational overhead.",
    accentColor: "from-blue-600 to-cyan-500",
    metrics: [
      { value: "<200ms", label: "Speech-to-Speech Latency" },
      { value: "94.8%", label: "First-Call Resolution" },
      { value: "4.8x", label: "Capacity Multiplication" },
      { value: "35+", label: "Supported Languages" },
    ],
    keyFeatures: [
      {
        title: "Sub-200ms Neural Turn-Taking",
        description: "Zero awkward pauses with instantaneous streaming ASR and neural speech synthesis calibrated for natural human rhythm.",
        iconName: "Mic",
      },
      {
        title: "Intelligent CRM Bi-Directional Sync",
        description: "Transcribes calls in real time, extracts intent, triggers webhooks, and updates customer records across Salesforce, HubSpot, and custom ERPs.",
        iconName: "RefreshCw",
      },
      {
        title: "Autonomous Appointment Booking",
        description: "Connects directly into calendars, checks real-time slot availability, handles rescheduling, and sends SMS confirmation instantly.",
        iconName: "Calendar",
      },
      {
        title: "Dynamic Guardrails & Compliance",
        description: "Built-in hallucinations prevention, compliance filters, PII redaction, and seamless warm transfer to human operators when requested.",
        iconName: "ShieldCheck",
      },
    ],
    technicalSpecs: {
      latency: "140ms - 220ms median latency",
      deployment: "Cloud API / Private Dedicated VPC / Hybrid On-Premise SIP Gateway",
      integrations: ["Twilio SIP Trunking", "Vonage", "Telnyx", "Salesforce", "Zendesk", "Webhook REST API"],
      compliance: ["SOC2 Type II Ready", "HIPAA Compatible", "GDPR Compliant", "PCI-DSS Redaction"],
      protocol: "WebRTC / SIP Trunking / WebSocket Audio Streams",
    },
    useCases: [
      {
        title: "Inbound Customer Support & Helpdesk",
        target: "SaaS, Telecom & E-Commerce",
        outcome: "82% reduction in caller hold times and 70% decrease in Tier-1 agent ticket loads.",
      },
      {
        title: "Healthcare Clinic Patient Scheduling",
        target: "Hospitals, Dental Clinics & Labs",
        outcome: "24/7 automated booking, pre-visit screening questions, and zero missed after-hours calls.",
      },
      {
        title: "Automated Lead Qualification",
        target: "Real Estate, Financial Services & Auto Dealerships",
        outcome: "Instant outbound callback within 15 seconds of web form submissions, boosting conversions by 310%.",
      },
    ],
    architectureHighlights: [
      "Custom Fine-Tuned Whisper-V3 Voice Streaming Engine",
      "Retrieval-Augmented Generation (RAG) tied to enterprise vector knowledge stores",
      "Edge-deployed neural acoustic synthesis for human intonation and breath control",
      "Resilient fallback pipeline with automatic warm transfer to human supervisor",
    ],
  },
  {
    id: "prod-business-erp",
    slug: "business-management-platform",
    name: "RiseERP Omnichannel",
    tagline: "All-in-One Operations, Inventory, POS & Financial Control",
    badge: "Core Enterprise",
    category: "Core Operations",
    summary:
      "A unified modular enterprise management suite bridging point-of-sale, warehouse inventory, multi-branch finances, and workforce administration into one cockpit.",
    description:
      "Designed for agile retail chains, wholesale distributors, and multi-location businesses. RiseERP eliminates fragmented spreadsheets by syncing point-of-sale terminals, inventory stock levels, automated supplier purchase orders, and consolidated accounting into a unified real-time dashboard.",
    accentColor: "from-indigo-600 to-blue-500",
    metrics: [
      { value: "99.99%", label: "System Uptime" },
      { value: "-68%", label: "Inventory Stockout Rate" },
      { value: "3.2x", label: "Faster Month-End Close" },
      { value: "Multi-Org", label: "Multi-Currency & Branches" },
    ],
    keyFeatures: [
      {
        title: "Multi-Location Live Inventory",
        description: "Centralized SKU tracking across warehouses, retail storefronts, and online fulfillment nodes with automated low-stock reorder triggers.",
        iconName: "Boxes",
      },
      {
        title: "Ultra-Fast Point of Sale (POS)",
        description: "Touchscreen-optimized POS interface supporting offline resilience, barcode scanning, split payments, and receipt cloud printing.",
        iconName: "CreditCard",
      },
      {
        title: "Automated Invoicing & Ledger",
        description: "Instant tax calculation, GST/VAT compliant e-invoicing, receivables tracking, and automated payment reminder dispatch.",
        iconName: "Receipt",
      },
      {
        title: "Role-Based Access & Audit Trail",
        description: "Granular permission sets for cashiers, store managers, and executives with unalterable tamper-evident activity auditing.",
        iconName: "Lock",
      },
    ],
    technicalSpecs: {
      deployment: "Multi-Tenant Cloud, Isolated Single-Tenant Enterprise, or Hybrid",
      integrations: ["Shopify", "WooCommerce", "Stripe", "Square", "QuickBooks", "Xero", "Custom REST API"],
      compliance: ["ISO 27001", "GAAP / IFRS Accounting Standards", "Data Residency Controls"],
      protocol: "GraphQL & REST Endpoints, Event-Driven Webhooks",
    },
    useCases: [
      {
        title: "Multi-Branch Retail Chains",
        target: "Apparel, Electronics & Consumer Goods",
        outcome: "Centralized replenishment, unified customer loyalty rewards, and inter-branch stock transfers.",
      },
      {
        title: "Wholesale & B2B Distribution",
        target: "Industrial Supply, Food & Beverage Wholesalers",
        outcome: "Tiered wholesale pricing tables, credit limits, and automated bulk shipping documentation.",
      },
      {
        title: "Service & Maintenance Operations",
        target: "Equipment Services, Field Technicians",
        outcome: "Integrated job ticketing, spare parts tracking, and on-site customer signature invoicing.",
      },
    ],
    architectureHighlights: [
      "Event-driven architecture with zero-data-loss queueing for offline POS sync",
      "High-concurrency PostgreSQL engine with real-time replication",
      "Configurable workflow automations without writing bespoke scripts",
      "Multi-currency conversion engine with daily exchange rate auto-updates",
    ],
  },
  {
    id: "prod-education-erp",
    slug: "education-erp",
    name: "RiseEdu Suite",
    tagline: "Holistic Academic ERP for Modern Schools & Universities",
    badge: "EdTech Flagship",
    category: "Core Operations",
    summary:
      "A complete digital campus operating system orchestrating student admissions, fee collections, biometric attendance, examination grading, and parent portals.",
    description:
      "RiseEdu Suite brings administrators, faculty, students, and parents into one cohesive digital ecosystem. From online admission pipelines and timetable scheduling to automated fee reconciliation and real-time student safety notifications, education management has never been more intuitive.",
    accentColor: "from-blue-700 to-indigo-600",
    metrics: [
      { value: "100%", label: "Digital Fee Reconciliation" },
      { value: "-85%", label: "Administrative Paperwork" },
      { value: "40K+", label: "Active Student Profiles" },
      { value: "Instant", label: "Parent SMS / App Alerts" },
    ],
    keyFeatures: [
      {
        title: "Admissions & Enrollment Portal",
        description: "Digital document verification, customized registration forms, automated entrance exam scheduling, and seat allocation.",
        iconName: "GraduationCap",
      },
      {
        title: "Fee Management & Online Gateway",
        description: "Configurable fee structures (scholarships, sibling discounts, bus fees) with automated reminder SMS and payment gateway integration.",
        iconName: "Wallet",
      },
      {
        title: "Biometric & RFID Attendance Sync",
        description: "Connects with classroom biometric scanners and bus RFID readers to notify parents the moment their child enters campus or boards the bus.",
        iconName: "CheckCircle2",
      },
      {
        title: "Gradebook & Report Card Generator",
        description: "Custom grading scales (GPA, percentages, letter grades), automated rank calculations, and one-click PDF report card publishing.",
        iconName: "FileSpreadsheet",
      },
    ],
    technicalSpecs: {
      deployment: "AWS EdTech Cloud Architecture with 99.95% SLA",
      integrations: ["Biometric Hardware SDK", "WhatsApp Business API", "Razorpay / Stripe", "Google Classroom / Moodle"],
      compliance: ["FERPA Compliant", "COPPA Aligned", "Encrypted Student Data at Rest (AES-256)"],
      protocol: "HTTPS / REST API / MQTT for IoT Hardware Attendance",
    },
    useCases: [
      {
        title: "K-12 Private & Public Schools",
        target: "Independent and Group Institutions",
        outcome: "Eliminated annual queue lines for fee collection and cut attendance marking time to 30 seconds per classroom.",
      },
      {
        title: "Colleges & Professional Institutes",
        target: "Higher Education, Vocational Training",
        outcome: "Credit-based semester registration, elective course bidding, and automated transcript generations.",
      },
      {
        title: "Multi-Campus Educational Groups",
        target: "Franchise Schools & Education Trust Boards",
        outcome: "Consolidated group-level financial visibility and centralized teacher recruitment database.",
      },
    ],
    architectureHighlights: [
      "Role-segregated portals for Super-Admins, Principals, Teachers, Parents, and Students",
      "Parent mobile application with push notifications for assignments, fees, and bus transit",
      "Dynamic timetable generator with teacher conflict prevention algorithm",
      "Automated WhatsApp notification dispatch pipeline for urgent circulars",
    ],
  },
  {
    id: "prod-fleet-tracking",
    slug: "fleet-asset-tracking",
    name: "RiseTrack Telematics",
    tagline: "Intelligent GPS Fleet Telemetry & Asset Visibility",
    badge: "IoT Telematics",
    category: "IoT & Telematics",
    summary:
      "Enterprise IoT fleet tracking platform offering live GPS coordinates, predictive route optimization, driver safety analytics, and sensor-based asset monitoring.",
    description:
      "Whether managing delivery vans, construction machinery, school transport, or long-haul trucks, RiseTrack gives dispatchers total control over vehicle operations. Real-time geofencing, fuel theft sensors, speed breach alerts, and preventative maintenance reminders safeguard assets while lowering fuel expenditure.",
    accentColor: "from-sky-600 to-blue-700",
    metrics: [
      { value: "3s", label: "Telemetry Refresh Interval" },
      { value: "-22%", label: "Average Fuel Consumption" },
      { value: "99.8%", label: "Route Adherence" },
      { value: "10M+", label: "GPS Coordinates Processed Daily" },
    ],
    keyFeatures: [
      {
        title: "Real-Time GPS Map Telemetry",
        description: "Interactive map visualization showing vehicle speed, ignition status, heading, traffic conditions, and historical playback.",
        iconName: "Navigation",
      },
      {
        title: "Predictive Geofencing & Alerts",
        description: "Instant notifications when vehicles deviate from approved delivery corridors or arrive at designated drop-off docks.",
        iconName: "MapPin",
      },
      {
        title: "Driver Safety & Behavior Scoring",
        description: "Tracks harsh braking, rapid acceleration, excessive idling, and night-time operation to promote driver safety and lower insurance premiums.",
        iconName: "Gauge",
      },
      {
        title: "IoT Sensor Telemetry (Fuel & Cold Chain)",
        description: "Connects with digital fuel tank floaters and BLE temperature sensors for pharmaceutical and perishable cargo compliance.",
        iconName: "Activity",
      },
    ],
    technicalSpecs: {
      latency: "Sub-5 second telemetry ingestion via MQTT brokers",
      deployment: "High-Throughput TimescaleDB / ClickHouse Time-Series Cloud Cluster",
      integrations: ["Teltonika", "Concox", "Coban", "OBD-II CANbus Decoders", "Google Maps Platform", "Mapbox"],
      compliance: ["AIS 140 Ready", "ELD Compliant", "End-to-End TLS 1.3 Encryption"],
      protocol: "MQTT / TCP / UDP Raw Hardware Gateway",
    },
    useCases: [
      {
        title: "E-Commerce Last-Mile Dispatch",
        target: "Couriers, Food Delivery, Urban Logistics",
        outcome: "Real-time tracking links shared with recipients and dynamic delivery route re-routing.",
      },
      {
        title: "School Transport Safety Fleet",
        target: "School Districts, Bus Operators",
        outcome: "Real-time bus arrival notifications for parents and speed governor compliance alerts.",
      },
      {
        title: "Heavy Equipment & Cold Chain Transport",
        target: "Construction, Mining & Perishable Food Logistics",
        outcome: "Prevented cargo spoilage with live temperature breach alarms and halted fuel siphon theft.",
      },
    ],
    architectureHighlights: [
      "Ultra-scalable MQTT ingestion broker capable of streaming 50,000 concurrent devices",
      "Time-series database engine optimized for millisecond historical trajectory replay",
      "Automated preventative maintenance scheduler linked to odometer mileage triggers",
      "Native driver mobile companion app for digital delivery sign-off (e-POD)",
    ],
  },
  {
    id: "prod-cloud-printing",
    slug: "cloud-printing-solutions",
    name: "RiseCloud Print",
    tagline: "Zero-Latency IoT Cloud Thermal & Receipt Dispatch",
    badge: "Hardware & IoT",
    category: "Infrastructure",
    summary:
      "A seamless cloud print gateway that allows web apps and mobile terminals to print kitchen tickets, shipping labels, and invoices directly to remote hardware.",
    description:
      "Traditional web applications struggle with hardware printer communication across corporate firewalls. RiseCloud Print provides an ultra-lightweight hardware agent and cloud relay API that routes print jobs to thermal POS printers, barcode label machines, and laser printers globally with zero driver headaches.",
    accentColor: "from-blue-600 to-indigo-700",
    metrics: [
      { value: "<350ms", label: "Dispatch-to-Print Time" },
      { value: "0", label: "Static IP Requirements" },
      { value: "100%", label: "ESC/POS & ZPL Compatibility" },
      { value: "99.99%", label: "Print Queue Delivery Guarantee" },
    ],
    keyFeatures: [
      {
        title: "Firewall-Bypassing WebSocket Gateway",
        description: "Local print relays maintain secure outbound sockets to the RiseUp Cloud. No port forwarding, no static IP, no network vulnerability.",
        iconName: "Printer",
      },
      {
        title: "Universal Protocol Engine (ESC/POS & ZPL)",
        description: "Native formatting for EPSON thermal printers, Star Micronics, Zebra industrial barcode printers, and standard PDF rasterizers.",
        iconName: "Cpu",
      },
      {
        title: "Smart Retry Queue & Hardware Heartbeats",
        description: "Monitors paper-out, printer-offline, and paper-jam states with automatic retry buffer and multi-printer fallback failover.",
        iconName: "Server",
      },
      {
        title: "Kitchen & Fulfillment Routing",
        description: "Automatically splits restaurant orders: sends drink orders to bar printers and appetizer tickets to hot kitchen stations simultaneously.",
        iconName: "Split",
      },
    ],
    technicalSpecs: {
      latency: "Sub-400ms end-to-end print dispatch",
      deployment: "Lightweight Edge Relay Agent (Windows, Linux, Raspberry Pi, Android)",
      integrations: ["Shopify POS", "Square", "Custom Webhooks", "REST Print API", "Epson TM Series", "Zebra ZD Series"],
      compliance: ["TLS 1.3 Mutual Authentication", "Zero Print Payload Storage Option"],
      protocol: "Secure WebSocket / Raw TCP Socket / USB Relay",
    },
    useCases: [
      {
        title: "Cloud Kitchens & Restaurant POS",
        target: "Multi-brand ghost kitchens and dine-in restaurants",
        outcome: "Direct order dispatch from online delivery aggregators straight to the chef's thermal printer without manual tablet intervention.",
      },
      {
        title: "Warehouse Shipping Label Automation",
        target: "Fulfillment centers, 3PL providers",
        outcome: "Packing stations trigger automatic 4x6 Zebra barcode label printouts right upon barcode scan.",
      },
      {
        title: "Retail Counter Receipts",
        target: "High-volume checkout counters",
        outcome: "Silent, instant thermal receipt printing directly from cloud-based web checkout screens.",
      },
    ],
    architectureHighlights: [
      "Lightweight 12MB cross-platform binary agent running as a background OS service",
      "Raw byte stream formatting that avoids slow PDF rendering engines",
      "Dynamic hardware failover: if Printer 1 runs out of paper, Job automatically reroutes to Printer 2",
      "Developer-friendly REST API: POST /v1/print with raw ESC/POS commands or formatted JSON",
    ],
  },
  {
    id: "prod-bespoke-apps",
    slug: "bespoke-web-applications",
    name: "RiseBespoke Engineering",
    tagline: "Tailor-Engineered Enterprise Web, Mobile & Cloud Systems",
    badge: "Custom Engineering",
    category: "Custom Engineering",
    summary:
      "Full-lifecycle custom software development crafting high-load web applications, native mobile apps, API ecosystems, and modern cloud microservices.",
    description:
      "When off-the-shelf software falls short of your distinct business model, RiseUp Solutions builds bespoke software engineered around your exact workflow. We leverage modern tech stacks (Next.js, TypeScript, Node.js, Go, Python, React Native, AWS) to construct robust, high-performance platforms that scale cleanly.",
    accentColor: "from-blue-600 to-sky-500",
    metrics: [
      { value: "100%", label: "IP Ownership Handover" },
      { value: "0", label: "Technical Debt Compromises" },
      { value: "6-10 Wks", label: "Average Production MVP" },
      { value: "24/7", label: "DevOps & Managed Support" },
    ],
    keyFeatures: [
      {
        title: "Modern Full-Stack Architecture",
        description: "Built on battle-tested frameworks with component-driven UI, type-safe API layers, and optimized database indexing.",
        iconName: "Code2",
      },
      {
        title: "Custom Customer & Partner Portals",
        description: "Secure, role-based self-service portals where your clients can submit requests, view billing, manage orders, and track project status.",
        iconName: "Globe",
      },
      {
        title: "Microservices & API Orchestration",
        description: "Clean REST and GraphQL APIs that bridge your legacy ERP systems, payment providers, third-party SaaS, and mobile apps.",
        iconName: "Layers",
      },
      {
        title: "CI/CD & Cloud Infrastructure as Code",
        description: "Automated test suites, containerized Docker deployments, Terraform cloud provisioning, and auto-scaling Kubernetes clusters.",
        iconName: "CloudCog",
      },
    ],
    technicalSpecs: {
      deployment: "AWS, Google Cloud, Microsoft Azure, or On-Premise Kubernetes",
      integrations: ["Custom API Integrations", "Legacy AS400 / SAP / Oracle Connectors", "Payment Gateways", "Single Sign-On (SAML/OAuth)"],
      compliance: ["OWASP Top 10 Hardened", "Penetration Tested", "Comprehensive API Documentation (OpenAPI/Swagger)"],
      protocol: "HTTPS, WebSockets, gRPC, REST, GraphQL",
    },
    useCases: [
      {
        title: "Proprietary FinTech Lending Portal",
        target: "Non-Banking Financial Companies",
        outcome: "Automated underwriting workflow, credit bureau integration, and loan disbursement within 4 minutes.",
      },
      {
        title: "Global Supply Chain Partner Exchange",
        target: "Import/Export Conglomerates",
        outcome: "Replaced 1,500 daily email exchanges with a synchronized supplier tracking and bill of lading portal.",
      },
      {
        title: "High-Frequency B2B Marketplace",
        target: "Wholesale Commodity Trading",
        outcome: "Real-time matching engine capable of executing 10,000 concurrent trade bids with live pricing tickers.",
      },
    ],
    architectureHighlights: [
      "Rigorous domain-driven design (DDD) separating core business rules from infrastructure",
      "Full automated test coverage including unit, integration, and end-to-end Cypress tests",
      "Comprehensive telemetry with Prometheus, Grafana, and structured centralized logging",
      "Zero vendor lock-in with clean source code repositories and complete deployment documentation",
    ],
  },
];
