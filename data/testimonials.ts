export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  avatarText: string;
  quote: string;
  metricsResult: string;
  rating: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: "Chief Operating Officer",
    company: "Apex Logistics Group",
    industry: "Fleet & Freight",
    avatarText: "MV",
    quote:
      "Deploying RiseTrack and the Cloud Print gateway transformed our dispatch center. Our fuel consumption dropped by 23% in the first quarter, and warehouse packing slip generation is practically instantaneous.",
    metricsResult: "23% fuel reduction across 140 vehicles",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Dr. Evelyn Reed",
    role: "Managing Director",
    company: "Oakwood Academic Network",
    industry: "Education",
    avatarText: "ER",
    quote:
      "RiseEdu unified our 4 campuses seamlessly. Parents love the real-time RFID bus notifications, and our accounting team eliminated months of manual fee collection reconciliation with automated payment settlements.",
    metricsResult: "100% automated fee reconciliation",
    rating: 5,
  },
  {
    id: "test-3",
    name: "David Chen",
    role: "VP of Customer Experience",
    company: "Nexora Commerce",
    industry: "Retail & E-Commerce",
    avatarText: "DC",
    quote:
      "RiseVoice AI handled over 45,000 inbound calls during our holiday peak with an astonishing 93% resolution rate. Callers genuinely didn't realize they were speaking with an AI. It paid for itself in two weeks.",
    metricsResult: "93% first-call resolution rate",
    rating: 5,
  },
  {
    id: "test-4",
    name: "Soraya Al-Mansoor",
    role: "Director of Digital Systems",
    company: "Gourmet Cloud Kitchens",
    industry: "Hospitality",
    avatarText: "SM",
    quote:
      "RiseCloud Print solved our single greatest operational nightmare: lost tickets during peak dining rush. Web orders now route directly to our hot and cold line thermal printers with zero latency and zero drops.",
    metricsResult: "Zero dropped kitchen orders across 18 brands",
    rating: 5,
  },
];
