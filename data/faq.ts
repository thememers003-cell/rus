export interface FAQItem {
  id: string;
  category: "General" | "AI & Integration" | "Security & SLA" | "Deployment";
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Can we adopt individual modules or must we implement the entire RiseUp suite?",
    answer:
      "All RiseUp Solutions products are built with modular, API-first architecture. You can adopt a single specialized module (such as RiseVoice AI or RiseCloud Print) and integrate it with your existing legacy software, or deploy our unified end-to-end platform.",
  },
  {
    id: "faq-2",
    category: "AI & Integration",
    question: "How fast is RiseVoice AI compared to standard voice bots?",
    answer:
      "RiseVoice AI operates with an average speech-to-speech response latency between 140ms and 220ms, which matches natural human conversation rhythm. It avoids robotic delays and awkward pauses through continuous neural streaming ASR and acoustic synthesis.",
  },
  {
    id: "faq-3",
    category: "Deployment",
    question: "Does RiseCloud Print require a static IP or router port forwarding?",
    answer:
      "No! RiseCloud Print eliminates port forwarding and static IP requirements entirely. Our lightweight local relay connects securely outbound over WebSockets with TLS 1.3 encryption, ensuring your internal network stays safe behind firewalls.",
  },
  {
    id: "faq-4",
    category: "Deployment",
    question: "How long does a typical implementation and rollout take?",
    answer:
      "Pre-configured modules such as RiseCloud Print and RiseVoice AI can be configured and live in as little as 3 to 7 business days. Complex multi-campus ERP or fleet tracking rollouts typically take 2 to 4 weeks, including staff onboarding and data migration.",
  },
  {
    id: "faq-5",
    category: "Security & SLA",
    question: "What security standards and data protection protocols do you uphold?",
    answer:
      "We implement bank-grade security across all platforms, including AES-256 encryption at rest, TLS 1.3 in transit, role-based access control, SOC2-ready protocols, FERPA/COPPA compliance for educational software, and dedicated private VPC hosting options.",
  },
  {
    id: "faq-6",
    category: "AI & Integration",
    question: "Can RiseUp software integrate with our existing ERP or CRM?",
    answer:
      "Yes. We support turnkey bi-directional integrations with Salesforce, HubSpot, QuickBooks, Shopify, Zoho, and provide comprehensive REST and GraphQL APIs with webhook event streaming.",
  },
  {
    id: "faq-7",
    category: "General",
    question: "What is the pricing structure for Cloud Printing, Voice AI, and ERP platforms?",
    answer:
      "We provide modular, transparent min-max pricing tailored to actual operational usage: RiseVoice AI ranges from ₹6 to ₹15 per minute; RiseERP Omnichannel ranges from ₹999 to ₹4,999 per month; RiseEdu Suite ranges from ₹50 to ₹150 per student; RiseTrack Telematics ranges from ₹299 to ₹499 per vehicle; RiseCloud Print ranges from ₹100 up to ₹10,000 per setup; and RiseBespoke Engineering ranges from ₹49,000 to ₹2,50,000 per milestone. Talk to our advisor GANGALA MANISH KUMAR (+91 9989876985 / gangalamanishkumar@gmail.com) for tailored quotes.",
  },
  {
    id: "faq-8",
    category: "General",
    question: "How can I speak directly with your technical advisor?",
    answer:
      "You can connect directly with our Lead Solutions Advisor, GANGALA MANISH KUMAR, at +91 9989876985 or by email at gangalamanishkumar@gmail.com. We offer free feasibility assessments, pilot sandbox demonstrations, and customized deployment blueprints.",
  },
];
