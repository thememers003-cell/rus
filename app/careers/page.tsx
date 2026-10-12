"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  Sparkles, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Users, 
  Rocket, 
  ShieldCheck, 
  Clock, 
  Copy, 
  ExternalLink,
  Laptop,
  Check,
  ChevronRight,
  GraduationCap,
  Award,
  TrendingUp,
  FileText
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import TiltCard from "@/components/TiltCard";

interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  isInternship?: boolean;
  stipend?: string;
  duration?: string;
  summary: string;
  skills: string[];
  highlights: string[];
}

const OPEN_ROLES: JobRole[] = [
  // --- INTERNSHIPS (HIGHLIGHTED) ---
  {
    id: "intern-bd",
    title: "Business Development Internship",
    department: "Internships",
    location: "Hybrid / Remote",
    type: "Internship",
    duration: "3 - 6 Months",
    stipend: "Performance Stipend + Incentives",
    isInternship: true,
    experience: "Freshers / College Students / MBA Pursuing",
    summary: "Work directly alongside our executive leadership team on B2B enterprise outreach, market research for AI & ERP verticals, client discovery demos, and strategic partnership proposals.",
    skills: ["B2B Outreach", "Market Research", "Lead Generation", "Client Communication", "CRM Pipeline", "Pitch Presentations"],
    highlights: ["Direct mentorship with founder & sales leaders", "High conversion track to Pre-Placement Offer (PPO)", "Performance incentive bonuses & completion certificate"]
  },
  {
    id: "intern-developer",
    title: "Software Developer Internship (Full-Stack / AI / Web)",
    department: "Internships",
    location: "Hybrid / Remote",
    type: "Internship",
    duration: "3 - 6 Months",
    stipend: "Competitive Engineering Stipend",
    isInternship: true,
    experience: "Freshers / Final Year / 0 - 1 Yr",
    summary: "Write and ship production code across our Next.js, React, TypeScript, and Node.js codebases. Build reactive UI modules, API routes, database schemas, and streaming Voice AI integrations.",
    skills: ["React / Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Git / GitHub", "REST APIs", "PostgreSQL"],
    highlights: ["Ship real code to thousands of enterprise users", "1-on-1 code reviews with senior engineering leads", "High-probability Full-Time SDE conversion (PPO)"]
  },
  {
    id: "intern-data-analyst",
    title: "Data Analyst Internship (IoT & Business Intelligence)",
    department: "Internships",
    location: "Hybrid / Remote",
    type: "Internship",
    duration: "3 - 6 Months",
    stipend: "Competitive Analytics Stipend",
    isInternship: true,
    experience: "Freshers / College Students / 0 - 1 Yr",
    summary: "Process and extract insights from high-volume IoT telemetry streams, fleet GPS tracking packets, and enterprise ERP records. Build interactive KPI dashboards, automated reporting queries, and anomaly alerts.",
    skills: ["SQL", "Python (Pandas / NumPy)", "Data Visualization", "BI Dashboards", "Excel / Google Sheets", "Predictive Analytics"],
    highlights: ["Hands-on experience with real-time enterprise telemetry", "Design automated executive KPI dashboards", "Pre-Placement Offer (PPO) consideration based on impact"]
  },

  // --- FULL TIME ROLES ---
  {
    id: "ai-engineer",
    title: "Conversational AI & Speech Engineer",
    department: "Artificial Intelligence",
    location: "Hybrid / Remote",
    type: "Full-Time",
    experience: "2 - 5 Years",
    summary: "Lead the development of streaming speech recognition, real-time voice agent pipelines, and LLM orchestration powering RiseVoice AI.",
    skills: ["Python", "Whisper AI", "WebSockets / WebRTC", "FastAPI", "Prompt Architecture"],
    highlights: ["Sub-200ms voice pipeline optimization", "Zero-jitter telematics audio", "Direct client impact"]
  },
  {
    id: "fullstack-lead",
    title: "Senior Full-Stack Engineer (Next.js / TypeScript)",
    department: "Web & Enterprise Applications",
    location: "Hybrid / Remote",
    type: "Full-Time",
    experience: "3 - 6 Years",
    summary: "Architect high-speed responsive web dashboards, real-time telemetry visualizers, and unified ERP modules using modern React & Node.js.",
    skills: ["Next.js 14", "TypeScript", "Tailwind CSS", "Node.js / Express", "PostgreSQL"],
    highlights: ["Scalable enterprise data tables", "Complex state management", "Clean modular code standards"]
  },
  {
    id: "iot-telematics",
    title: "Embedded Systems & IoT Telematics Engineer",
    department: "Hardware & Telemetry",
    location: "Hyderabad / On-Site",
    type: "Full-Time",
    experience: "2 - 5 Years",
    summary: "Design and maintain high-concurrency MQTT telemetry brokers, GPS gateway firmware relays, and IoT print spoolers.",
    skills: ["MQTT / TCP / UDP", "Go / C++", "TimescaleDB", "Hardware Protocols", "Linux Systems"],
    highlights: ["100k+ concurrent connected devices", "Sub-second GPS packet processing", "Resilient offline caching"]
  },
  {
    id: "erp-architect",
    title: "Enterprise ERP Implementation Specialist",
    department: "Enterprise Solutions",
    location: "Hybrid",
    type: "Full-Time",
    experience: "2 - 4 Years",
    summary: "Bridge customer operations with RiseERP and RiseEdu configurations. Lead client discovery, workflow migration, and user adoption.",
    skills: ["ERP Systems", "Business Process Mapping", "SQL / Data Migration", "Client Onboarding"],
    highlights: ["Direct interaction with school & retail executives", "Custom business rules configuration", "High-impact deployments"]
  },
  {
    id: "b2b-growth",
    title: "Enterprise Solutions Account Executive",
    department: "Growth & Business Development",
    location: "Hybrid",
    type: "Full-Time",
    experience: "1 - 4 Years",
    summary: "Drive enterprise client acquisition across education, logistics, hospitality, and retail sectors. Demonstrate ROI and close high-value partnerships.",
    skills: ["B2B SaaS Sales", "Enterprise Demos", "Pipeline Management", "Client Relationship"],
    highlights: ["Uncapped incentive model", "Pre-qualified enterprise pipeline", "Direct leadership mentorship"]
  },
  {
    id: "general-talent",
    title: "Open Application & Emerging Talent",
    department: "All Disciplines",
    location: "Flexible",
    type: "Full-Time / Internship",
    experience: "Any Level",
    summary: "Passionate about building game-changing enterprise tech? We are always on the lookout for hungry problem-solvers, fresh graduates, and seasoned veterans.",
    skills: ["Problem Solving", "Growth Mindset", "Clean Coding / Communication", "Execution Focus"],
    highlights: ["Individualized role crafting", "Mentorship from senior leads", "Fast-track career advancement"]
  }
];

const CULTURE_BENEFITS = [
  {
    icon: <Rocket className="w-5 h-5 text-[#FF5722]" />,
    title: "High Autonomy & Velocity",
    desc: "We favor builders over bureaucrats. Make architectural decisions, deploy rapidly, and see your work power enterprise clients immediately."
  },
  {
    icon: <Cpu className="w-5 h-5 text-[#FF7A50]" />,
    title: "Modern Tech Stack",
    desc: "No legacy COBOL or 15-year-old codebases. We build with modern TypeScript, Next.js, Go microservices, and neural speech engines."
  },
  {
    icon: <Laptop className="w-5 h-5 text-[#FF8A65]" />,
    title: "Flexible Work Culture",
    desc: "Results matter more than seat hours. We provide flexible hybrid and remote options along with generous hardware allowances."
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#FFA07A]" />,
    title: "Competitive Compensation & PPOs",
    desc: "Performance-driven bonuses, industry-leading salary standards, and structured Pre-Placement Offers for high-performing interns."
  }
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  
  // Interactive Quick Application State
  const [appName, setAppName] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const [appPhone, setAppPhone] = useState("");
  const [appRole, setAppRole] = useState(OPEN_ROLES[0].title);
  const [appNote, setAppNote] = useState("");
  const [appStatus, setAppStatus] = useState<"idle" | "submitted">("idle");

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const departments = [
    "All", 
    "🎓 Internships", 
    "Artificial Intelligence", 
    "Web & Enterprise Applications", 
    "Hardware & Telemetry", 
    "Enterprise Solutions", 
    "Growth & Business Development"
  ];

  const filteredRoles = selectedDept === "All" 
    ? OPEN_ROLES 
    : selectedDept === "🎓 Internships"
      ? OPEN_ROLES.filter((r) => r.isInternship)
      : OPEN_ROLES.filter((r) => r.department === selectedDept);

  const handleQuickApply = (e: React.FormEvent) => {
    e.preventDefault();
    setAppStatus("submitted");
  };

  const generateMailto = (roleTitle: string) => {
    const subject = encodeURIComponent(`Application: ${roleTitle} - [Your Name]`);
    const body = encodeURIComponent(
      `Dear RiseUp Solutions Hiring Team,\n\nI am excited to apply for the ${roleTitle} position at RiseUp Solutions.\n\nCandidate Information:\n- Full Name:\n- Contact Number:\n- Current College / Organization:\n- Core Skills & Projects:\n- LinkedIn / GitHub / Portfolio:\n\nPlease find my resume attached.\n\nBest regards,\n[Your Name]`
    );
    return `mailto:riseupsolutions@zohomail.in?cc=hr@riseupsolutions.in&subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-28 pb-24 space-y-24">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1B20] border border-white/10 text-xs font-semibold text-[#FF8A65] shadow-lg">
          <Briefcase className="w-3.5 h-3.5 text-[#FF5722]" />
          <span>Join RiseUp Solutions • Full-Time & Internship Openings</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
          We Seek Relentless <br />
          <span className="gradient-text-vibrant">Builders & Innovators</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          At RiseUp Solutions, we build high-impact Voice AI, ERP platforms, and real-time IoT telematics. Whether you're an experienced engineer or looking for a fast-paced internship, launch your journey with us.
        </p>

        {/* Highlighted Official Submission Note Card */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#121316] p-6 sm:p-8 border border-[#FF5722]/30 shadow-2xl space-y-4 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65] flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
                Direct Talent Desk
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Send Your Resume Directly
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="mailto:riseupsolutions@zohomail.in?cc=hr@riseupsolutions.in&subject=Resume%20Submission%20-%20RiseUp%20Solutions"
                className="px-5 py-2.5 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white text-xs font-bold shadow-md shadow-[#FF5722]/30 transition-all flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Mail Client</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {/* Primary Email */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] text-gray-400 block font-medium">Primary Talent Mail</span>
                <span className="text-white font-mono font-semibold truncate block">
                  riseupsolutions@zohomail.in
                </span>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard("riseupsolutions@zohomail.in")}
                className="p-2 rounded-xl bg-white/5 hover:bg-[#FF5722]/20 text-gray-300 hover:text-white transition-all flex-shrink-0"
                title="Copy Email"
                aria-label="Copy primary email"
              >
                {copiedEmail === "riseupsolutions@zohomail.in" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* HR Email */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] text-gray-400 block font-medium">HR & Recruitment Desk</span>
                <span className="text-white font-mono font-semibold truncate block">
                  hr@riseupsolutions.in
                </span>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard("hr@riseupsolutions.in")}
                className="p-2 rounded-xl bg-white/5 hover:bg-[#FF5722]/20 text-gray-300 hover:text-white transition-all flex-shrink-0"
                title="Copy Email"
                aria-label="Copy HR email"
              >
                {copiedEmail === "hr@riseupsolutions.in" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-gray-400 pt-1 gap-2">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>Direct Inquiries: <a href="tel:+919700429966" className="text-white font-medium hover:underline">+91 9700429966</a></span>
            </span>
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Active Screening • 48-Hour Application Review</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED INTERNSHIP ACCELERATOR SPOTLIGHT */}
      <section id="internships" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TiltCard
          maxTilt={4}
          scale={1.01}
          className="rounded-3xl p-8 sm:p-12 border border-[#FF5722]/30 bg-gradient-to-r from-[#17181D] via-[#121316] to-[#1C1412] relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF5722]/15 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 text-xs font-bold text-[#FF8A65]">
              <GraduationCap className="w-4 h-4 text-[#FF5722]" />
              <span>RiseUp Internship Accelerator 2026</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Fast-Track Internships in <br />
              <span className="gradient-text-vibrant">Business Development, Engineering & Data</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              We are actively looking for hungry students and recent graduates. You will not be making coffee — you will ship production features, run real client outreach, and analyze enterprise telemetry with direct mentorship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-base font-extrabold text-[#FF8A65]">Business Development</div>
                <p className="text-xs text-gray-400">Enterprise sales outreach, product demonstrations, client onboarding.</p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-base font-extrabold text-[#FF8A65]">Software Developers</div>
                <p className="text-xs text-gray-400">Next.js, TypeScript, REST APIs, and streaming Voice AI modules.</p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-base font-extrabold text-[#FF8A65]">Data Analysts</div>
                <p className="text-xs text-gray-400">SQL, Python, high-frequency IoT fleet telemetry & KPI dashboards.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setSelectedDept("🎓 Internships")}
                className="px-6 py-3 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white text-xs font-extrabold shadow-lg shadow-[#FF5722]/30 transition-all flex items-center gap-2"
              >
                <span>View All 3 Internship Roles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-400" /> Pre-Placement Offer (PPO) conversion based on performance
              </span>
            </div>
          </div>
        </TiltCard>
      </section>

      {/* 3. WHY WORK AT RISEUP SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65]">
            Life At RiseUp Solutions
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Built for Engineers & Impact-Driven Leaders
          </h2>
          <p className="text-sm text-gray-400">
            We operate with the speed of a high-growth startup and the architectural rigor of an enterprise lab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CULTURE_BENEFITS.map((b, idx) => (
            <TiltCard
              key={idx}
              maxTilt={7}
              scale={1.02}
              className="rounded-3xl bg-[#121316] p-6 border border-white/10 hover:border-[#FF5722]/40 transition-all group shadow-xl"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                {b.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-1">{b.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 4. OPEN POSITIONS SECTION */}
      <section id="openings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65]">
              Active Openings
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Explore Open Roles
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Select your domain and send your resume directly to our recruitment desk.
            </p>
          </div>

          {/* Department Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedDept === dept
                    ? "bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/30"
                    : "bg-[#141519] text-gray-400 hover:text-white hover:bg-[#1A1B20] border border-white/5"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredRoles.map((role) => (
            <TiltCard
              key={role.id}
              maxTilt={5}
              scale={1.01}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all space-y-5 shadow-xl ${
                role.isInternship
                  ? "bg-[#141519] border border-[#FF5722]/40 hover:border-[#FF5722] ring-1 ring-[#FF5722]/20"
                  : "bg-[#121316] border border-white/10 hover:border-[#FF5722]/40"
              }`}
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      role.isInternship
                        ? "bg-[#FF5722]/20 text-[#FF8A65] border border-[#FF5722]/30"
                        : "bg-white/5 text-gray-300 border border-white/10"
                    }`}>
                      {role.department}
                    </span>
                    {role.isInternship && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                        PPO Opportunity
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <span>{role.location}</span>
                    <span>•</span>
                    <span>{role.experience}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#FF8A65] transition-colors">
                  {role.title}
                </h3>

                {role.duration && (
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-300 pt-0.5">
                    <span className="text-[#FF8A65]">Duration: {role.duration}</span>
                    <span>•</span>
                    <span className="text-emerald-400">{role.stipend}</span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {role.summary}
                </p>

                {/* Tech Skills Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {role.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-xl bg-black/40 border border-white/5 text-[11px] text-gray-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="pt-2 border-t border-white/5 space-y-1">
                  {role.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-gray-400">
                      <Check className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/5">
                <span className="text-xs text-gray-400">
                  Direct Inquiries: <strong className="text-white">hr@riseupsolutions.in</strong>
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={generateMailto(role.title)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white text-xs font-bold shadow-md shadow-[#FF5722]/30 transition-all inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <span>Apply via Email</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setAppRole(role.title);
                      const el = document.getElementById("apply-composer");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-3.5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold border border-white/10"
                    title="Quick Form"
                  >
                    Form
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 5. QUICK RESUME SUBMISSION COMPOSER */}
      <section id="apply-composer" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-10 border border-white/10 bg-[#121316] shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8A65]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>Direct Candidate Registration</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Instant Application Form
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
              Select your desired internship or full-time position below to generate your direct application email.
            </p>
          </div>

          {appStatus === "submitted" ? (
            <div className="p-8 rounded-3xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Application Prepared!</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{appName}</strong>! Please click below to send your application email directly with your resume attached to <span className="text-[#FF8A65] font-mono font-medium">riseupsolutions@zohomail.in</span> and <span className="text-[#FF8A65] font-mono font-medium">hr@riseupsolutions.in</span>.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={`mailto:riseupsolutions@zohomail.in?cc=hr@riseupsolutions.in&subject=${encodeURIComponent(`Application: ${appName} - ${appRole}`)}&body=${encodeURIComponent(`Candidate Name: ${appName}\nPhone: ${appPhone}\nEmail: ${appEmail}\nTarget Position: ${appRole}\n\nCandidate Summary:\n${appNote}\n\n(Resume Attached)`)}`}
                  className="px-6 py-3 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white text-sm font-bold shadow-md shadow-[#FF5722]/30 transition-all inline-flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </a>
                <button
                  type="button"
                  onClick={() => setAppStatus("idle")}
                  className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium transition-all"
                >
                  Reset Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleQuickApply} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">
                    Your Full Name <span className="text-[#FF5722]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5722] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">
                    Your Email Address <span className="text-[#FF5722]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={appEmail}
                    onChange={(e) => setAppEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5722] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">
                    Contact Phone Number <span className="text-[#FF5722]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9700429966"
                    value={appPhone}
                    onChange={(e) => setAppPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5722] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">
                    Position of Interest
                  </label>
                  <select
                    value={appRole}
                    onChange={(e) => setAppRole(e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-[#FF5722] transition-colors"
                  >
                    <optgroup label="🎓 Internships (Active Hiring)">
                      {OPEN_ROLES.filter((r) => r.isInternship).map((r) => (
                        <option key={r.id} value={r.title} className="bg-[#121316] text-white">
                          🎓 {r.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Full-Time Engineering & Operations">
                      {OPEN_ROLES.filter((r) => !r.isInternship).map((r) => (
                        <option key={r.id} value={r.title} className="bg-[#121316] text-white">
                          {r.title}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">
                  Brief Bio, LinkedIn / GitHub Profile, or Key Projects
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a short note about your coursework, links to your GitHub or projects, or why you want to intern/work at RiseUp Solutions..."
                  value={appNote}
                  onChange={(e) => setAppNote(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5722] transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-400">
                  All submissions are sent to <span className="text-white font-medium">riseupsolutions@zohomail.in</span> & <span className="text-white font-medium">hr@riseupsolutions.in</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white font-extrabold text-sm shadow-lg shadow-[#FF5722]/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Candidate Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 6. 4-STAGE INTERVIEW PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65]">
            Transparent Hiring
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Our 4-Stage Interview Process
          </h2>
          <p className="text-sm text-gray-400">
            We respect your time. Clear feedback and rapid communication at every milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Resume Screening",
              time: "48 Hours",
              desc: "Our engineering and HR leads thoroughly review your profile and practical work samples."
            },
            {
              step: "02",
              title: "Introductory Call",
              time: "20-30 Mins",
              desc: "A brief conversation about your aspirations, culture fit, and career goals."
            },
            {
              step: "03",
              title: "Technical Discussion",
              time: "45-60 Mins",
              desc: "Deep dive into real-world architecture, problem-solving methodologies, and system design."
            },
            {
              step: "04",
              title: "Offer & Onboarding",
              time: "3-5 Days",
              desc: "Competitive offer rollout, flexible onboarding plan, and welcoming you to the RiseUp team."
            }
          ].map((item, i) => (
            <TiltCard
              key={i}
              maxTilt={6}
              scale={1.02}
              className="rounded-3xl bg-[#121316] p-6 border border-white/10 space-y-3 relative overflow-hidden shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-[#FF5722] font-display">
                  {item.step}
                </span>
                <span className="text-[11px] font-bold text-gray-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                  {item.time}
                </span>
              </div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM CONTACT REMINDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 border border-white/10 bg-[#121316] text-center space-y-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FF5722]/10 blur-[130px] pointer-events-none rounded-full" />
          
          <h2 className="text-2xl sm:text-4xl font-black text-white relative z-10">
            Have Questions About Working or Interning With Us?
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto relative z-10">
            Reach out directly to our HR desk at <a href="mailto:hr@riseupsolutions.in" className="text-[#FF8A65] underline">hr@riseupsolutions.in</a> or call us at <a href="tel:+919700429966" className="text-[#FF8A65] underline">+91 9700429966</a>.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4 relative z-10">
            <a
              href="mailto:riseupsolutions@zohomail.in?cc=hr@riseupsolutions.in&subject=Career%20Inquiry%20-%20RiseUp%20Solutions"
              className="px-8 py-3.5 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white text-sm font-bold shadow-lg shadow-[#FF5722]/30 transition-all inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email: riseupsolutions@zohomail.in</span>
            </a>
            <a
              href="tel:+919700429966"
              className="px-6 py-3.5 rounded-full bg-[#18191E] hover:bg-[#202127] text-white text-sm font-semibold border border-white/10 transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: +91 9700429966</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
