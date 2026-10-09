import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ShieldCheck,
  FileText,
  Cookie,
  RefreshCw,
  AlertTriangle,
  HelpCircle,
  Mail,
  Clock,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Lock,
  Globe,
  Building2,
  Scale,
  Headphones,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { FOOTER_SECTIONS } from '../data/navigation';

export type PolicyType =
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'cookie-policy'
  | 'refund-cancellation-policy'
  | 'disclaimer'
  | 'grievance-support';

interface PoliciesPageProps {
  initialPolicy?: PolicyType;
}

export const LEGAL_CONFIG = {
  legalCompanyName: 'Nexora One Digital Ecosystem',
  brandName: 'Nexora One',
  registeredAddress: 'India (Digital First Operations)',
  officialEmail: FOOTER_SECTIONS.contactEmail,
  grievanceEmail: FOOTER_SECTIONS.contactEmail,
  grievanceOfficer: 'Grievance & Compliance Officer',
  effectiveDate: 'October 2026',
  lastUpdated: 'October 2026',
};

const POLICIES_META: {
  id: PolicyType;
  title: string;
  shortTitle: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}[] = [
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    shortTitle: 'Privacy',
    badge: 'Data Protection & Security',
    icon: ShieldCheck,
    description: 'How Nexora One collects, utilizes, safeguards, and protects your personal and business data.',
  },
  {
    id: 'terms-and-conditions',
    title: 'Terms & Conditions',
    shortTitle: 'Terms',
    badge: 'Platform Rules & Governance',
    icon: FileText,
    description: 'Rules, responsibilities, acceptable use standards, and terms of service for Nexora platforms.',
  },
  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    shortTitle: 'Cookies',
    badge: 'Tracking & Preferences',
    icon: Cookie,
    description: 'Information on cookies, session tracking, performance telemetry, and how to manage preferences.',
  },
  {
    id: 'refund-cancellation-policy',
    title: 'Refund & Cancellation Policy',
    shortTitle: 'Refunds & Cancellations',
    badge: 'Transaction Clarity',
    icon: RefreshCw,
    description: 'Booking cancellation rules, fee structures, salon autonomy, and fair dispute settlement procedures.',
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer & Disclosures',
    shortTitle: 'Disclaimer',
    badge: 'Legal & Investor Notices',
    icon: AlertTriangle,
    description: 'Important legal notices, non-guarantee of investment returns, and illustrative modeling disclaimers.',
  },
  {
    id: 'grievance-support',
    title: 'Grievance Redressal & Support',
    shortTitle: 'Grievance & Support',
    badge: 'Escalation & Helpdesk',
    icon: Headphones,
    description: 'Direct contact channels, Grievance Officer details, and defined response timeline commitments.',
  },
];

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ initialPolicy }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  // Determine active tab from prop, pathname, or state
  const getPolicyFromPath = (): PolicyType => {
    if (initialPolicy) return initialPolicy;
    const path = location.pathname.replace(/^\//, '');
    const found = POLICIES_META.find((p) => p.id === path);
    if (found) return found.id;
    if (path === 'terms') return 'terms-and-conditions';
    if (path === 'privacy') return 'privacy-policy';
    if (path === 'cookies') return 'cookie-policy';
    if (path === 'refunds' || path === 'refund-policy') return 'refund-cancellation-policy';
    if (path === 'grievance' || path === 'support') return 'grievance-support';
    return 'privacy-policy';
  };

  const [activePolicy, setActivePolicy] = useState<PolicyType>(getPolicyFromPath());

  useEffect(() => {
    const policy = getPolicyFromPath();
    setActivePolicy(policy);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, initialPolicy]);

  const handleTabChange = (policyId: PolicyType) => {
    setActivePolicy(policyId);
    navigate(`/${policyId}`);
  };

  const currentMeta = POLICIES_META.find((p) => p.id === activePolicy) || POLICIES_META[0];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#DAAF37] text-xs font-heading font-medium uppercase tracking-widest mb-4">
          <Scale className="w-3.5 h-3.5" />
          <span>Governance & Legal Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
          Nexora Platform <span className="bg-gradient-to-r from-[#F4D03F] via-[#DAAF37] to-[#AA7C11] bg-clip-text text-transparent">Policies</span>
        </h1>
        <p className="mt-4 text-white/70 font-sans text-base sm:text-lg leading-relaxed">
          Comprehensive legal guidelines, compliance commitments, data protection protocols, and governance frameworks for {LEGAL_CONFIG.brandName} ecosystem participants.
        </p>
        <div className="mt-4 text-xs font-sans text-white/40 flex items-center justify-center gap-3">
          <span>Effective Date: {LEGAL_CONFIG.effectiveDate}</span>
          <span>•</span>
          <span>Last Updated: {LEGAL_CONFIG.lastUpdated}</span>
        </div>
      </motion.div>

      {/* Policy Selector Tabs (Desktop & Mobile) */}
      <div className="mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 p-1.5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
          {POLICIES_META.map((policy) => {
            const Icon = policy.icon;
            const isActive = activePolicy === policy.id;
            return (
              <button
                key={policy.id}
                onClick={() => handleTabChange(policy.id)}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 px-3 py-3 rounded-xl text-xs font-medium font-sans transition-all duration-200 text-center sm:text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-[#DAAF37]/20 to-[#AA7C11]/20 border border-[#DAAF37]/60 text-[#F4D03F] shadow-[0_0_15px_rgba(218,175,55,0.2)]'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#DAAF37]' : 'text-white/40'}`} />
                <span className="truncate">{policy.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Info Card (lg: 4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <GlassCard glow="gold" className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#DAAF37]">
                <currentMeta.icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-heading uppercase tracking-wider text-[#DAAF37] block font-semibold">
                  {currentMeta.badge}
                </span>
                <h2 className="text-lg font-heading font-bold text-white">
                  {currentMeta.title}
                </h2>
              </div>
            </div>
            <p className="text-xs text-white/70 font-sans leading-relaxed mb-6">
              {currentMeta.description}
            </p>

            <div className="border-t border-white/10 pt-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Entity</span>
                <span className="text-white font-medium text-right">{LEGAL_CONFIG.legalCompanyName}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Jurisdiction</span>
                <span className="text-white font-medium">India (IT Act & DPDP)</span>
              </div>
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Version</span>
                <span className="text-white font-medium">v2.5 (2026 Audit)</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <h4 className="text-xs font-heading font-semibold uppercase tracking-wider text-[#DAAF37] mb-2">
                Need Clarification?
              </h4>
              <p className="text-xs text-white/60 mb-3">
                For legal inquiries or clarifications on our governance terms:
              </p>
              <a
                href={`mailto:${LEGAL_CONFIG.officialEmail}?subject=Legal%20Inquiry%20-%20${encodeURIComponent(currentMeta.title)}`}
                className="inline-flex items-center gap-2 text-xs text-[#DAAF37] hover:text-[#F4D03F] transition-colors font-medium break-all"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{LEGAL_CONFIG.officialEmail}</span>
              </a>
            </div>
          </GlassCard>

          {/* Quick Links Card */}
          <GlassCard glow="none" className="p-6">
            <h3 className="text-xs font-heading font-semibold uppercase tracking-widest text-[#DAAF37] mb-4">
              All Legal Policies
            </h3>
            <div className="space-y-2 font-sans text-xs">
              {POLICIES_META.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleTabChange(p.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-colors ${
                    activePolicy === p.id
                      ? 'bg-[#DAAF37]/10 text-[#F4D03F] font-semibold border border-[#DAAF37]/30'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <span className="truncate">{p.title}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${activePolicy === p.id ? 'text-[#DAAF37]' : 'text-white/30'}`} />
                </button>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Content Body (lg: 8 cols) */}
        <div className="lg:col-span-8">
          <GlassCard glow="subtle" className="p-6 sm:p-10 font-sans">
            {activePolicy === 'privacy-policy' && <PrivacyPolicyContent />}
            {activePolicy === 'terms-and-conditions' && <TermsContent />}
            {activePolicy === 'cookie-policy' && <CookiePolicyContent />}
            {activePolicy === 'refund-cancellation-policy' && <RefundPolicyContent />}
            {activePolicy === 'disclaimer' && <DisclaimerContent />}
            {activePolicy === 'grievance-support' && <GrievanceSupportContent />}
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   1. PRIVACY POLICY CONTENT
   ========================================================================= */
const PrivacyPolicyContent: React.FC = () => (
  <div className="space-y-8 text-white/80 leading-relaxed text-sm">
    <div className="border-b border-white/10 pb-6">
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight mb-2">
        Privacy Policy
      </h2>
      <p className="text-xs text-[#DAAF37] uppercase tracking-wider font-heading">
        {LEGAL_CONFIG.legalCompanyName} • Data Protection & Trust Framework
      </p>
    </div>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        1. Overview & Commitment
      </h3>
      <p>
        {LEGAL_CONFIG.brandName} (referred to as “Nexora”, “Platform”, “we”, “our”, or “us”) is dedicated to maintaining the highest standards of data privacy, confidentiality, and security. This Privacy Policy details how we collect, store, process, transfer, and protect your personal, business, and transactional information when you interact with the Nexora website, Nexora Salon App, SalonOS, White-Label Salon platforms, and Growth Partner portals.
      </p>
      <p>
        By using or accessing any part of the Nexora ecosystem, you consent to the collection and handling of information in accordance with this Privacy Policy and applicable data protection regulations including the Information Technology Act, 2000 and the Digital Personal Data Protection Act (DPDP).
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        2. Information We Collect
      </h3>
      <p>We may collect information across several categories based on your interactions with the platform:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 className="text-xs font-heading font-bold text-[#DAAF37] uppercase mb-1">A. User & Identity Data</h4>
          <p className="text-xs text-white/70">
            Full name, email address, verified phone number, profile image, preferred location, appointment preferences, and communication history.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 className="text-xs font-heading font-bold text-[#DAAF37] uppercase mb-1">B. Salon Business Data</h4>
          <p className="text-xs text-white/70">
            Salon commercial name, business registration, GSTIN, staff details, service menu catalogs, pricing schedules, calendar slots, and operational hours.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 className="text-xs font-heading font-bold text-[#DAAF37] uppercase mb-1">C. Transaction & Payment Metadata</h4>
          <p className="text-xs text-white/70">
            Booking order ID, service amounts, payment confirmation tokens from RBI-authorized payment aggregators (e.g. Razorpay), payout status, and invoice records. Nexora does not store raw credit card numbers or banking passwords.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 className="text-xs font-heading font-bold text-[#DAAF37] uppercase mb-1">D. Technical & Device Logs</h4>
          <p className="text-xs text-white/70">
            IP addresses, device identifiers, operating system version, browser signatures, crash logs, and localized usage analytics to ensure platform uptime. For details regarding tracking technologies, please consult our{' '}
            <Link to="/cookie-policy" className="text-[#DAAF37] hover:underline font-medium">Cookie Policy</Link>.
          </p>
        </div>
      </div>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        3. How We Use Your Information
      </h3>
      <p>We process collected data exclusively for lawful and legitimate operational purposes, including:</p>
      <ul className="list-disc list-inside space-y-1.5 text-xs text-white/70 pl-2">
        <li>Facilitating appointment bookings, confirmations, rescheduling, and automated SMS/WhatsApp reminders.</li>
        <li>Powering SalonOS salon operational dashboards, staff scheduling, inventory, and point-of-sale management.</li>
        <li>Processing secure customer payments and salon payout settlements via licensed payment gateways.</li>
        <li>Providing customer support, resolving booking inquiries, and managing dispute mediation.</li>
        <li>Protecting platform integrity, combating fraud, preventing unauthorized logins, and ensuring regulatory compliance.</li>
        <li>Improving platform features, UI performance, and ecosystem workflow automation based on aggregated telemetry.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        4. Data Protection & Security Protocols
      </h3>
      <p>
        Nexora implements multi-layered enterprise security controls to protect your data against unauthorized access, loss, alteration, or disclosure:
      </p>
      <ul className="list-disc list-inside space-y-1.5 text-xs text-white/70 pl-2">
        <li><strong>Encryption in Transit:</strong> 256-bit TLS/SSL encryption for all data exchanged between client applications and Nexora cloud infrastructure.</li>
        <li><strong>Encryption at Rest:</strong> Encrypted databases and secure cloud object storage following ISO 27001 standards.</li>
        <li><strong>Access Governance:</strong> Strict Role-Based Access Control (RBAC), multi-factor authentication, and audited access logs for all engineering staff.</li>
        <li><strong>Secure Payment Handling:</strong> Direct API tokenization through PCI-DSS Level 1 certified payment partners (Razorpay).</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        5. Data Sharing & Third-Party Processors
      </h3>
      <p>
        Nexora does not sell, rent, or trade your personal data to third-party advertisers. We share information only with vetted partners necessary for platform operations:
      </p>
      <ul className="list-disc list-inside space-y-1.5 text-xs text-white/70 pl-2">
        <li><strong>Salons & Service Providers:</strong> Relevant booking details (customer name, booked service, slot time, contact info) are shared strictly with the booked salon to fulfill the requested appointment.</li>
        <li><strong>Payment Aggregators:</strong> RBI-authorized gateways (e.g. Razorpay) to process transaction settlements.</li>
        <li><strong>Cloud Infrastructure:</strong> Cloud hosting, database clusters, and Content Delivery Networks (CDNs) under strict data processing agreements.</li>
        <li><strong>Legal & Statutory Authorities:</strong> When strictly mandated by valid court orders, law enforcement requests, or statutory compliance obligations.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        6. User Rights & Data Control
      </h3>
      <p>Under applicable data privacy regulations, you hold rights over your personal information:</p>
      <ul className="list-disc list-inside space-y-1.5 text-xs text-white/70 pl-2">
        <li><strong>Right to Access:</strong> Request a summary of the personal data held about you by Nexora.</li>
        <li><strong>Right to Rectification:</strong> Request correction of inaccurate, outdated, or incomplete personal details.</li>
        <li><strong>Right to Erasure / Deletion:</strong> Request deletion of your account and personal data, subject to statutory retention requirements for financial and tax records.</li>
        <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications at any time via in-app preferences or email links.</li>
      </ul>
    </section>

    {/* Cross-link Reference Box */}
    <div className="p-4 rounded-xl bg-white/[0.03] border border-[#DAAF37]/30 space-y-2 text-xs text-white/70">
      <p className="font-heading font-semibold text-[#DAAF37] uppercase tracking-wider">Related Governance Documents</p>
      <div className="flex flex-wrap gap-4 pt-1">
        <Link to="/cookie-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>View Cookie Policy</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/terms-and-conditions" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>View Terms & Conditions</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/grievance-support" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Submit Privacy Complaint (Grievance Desk)</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </div>

    <section className="space-y-3 border-t border-white/10 pt-6">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        7. Contact & Privacy Inquiries
      </h3>
      <p className="text-xs text-white/70">
        To exercise your data privacy rights or submit privacy-related questions, please contact our Data Protection Team at{' '}
        <a href={`mailto:${LEGAL_CONFIG.officialEmail}?subject=Data%20Privacy%20Inquiry`} className="text-[#DAAF37] hover:underline font-mono">
          {LEGAL_CONFIG.officialEmail}
        </a>. For official complaints or escalation, please visit our{' '}
        <Link to="/grievance-support" className="text-[#DAAF37] hover:underline font-medium">Grievance / Support</Link> page.
      </p>
    </section>
  </div>
);

/* =========================================================================
   2. TERMS & CONDITIONS CONTENT
   ========================================================================= */
const TermsContent: React.FC = () => (
  <div className="space-y-8 text-white/80 leading-relaxed text-sm">
    <div className="border-b border-white/10 pb-6">
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight mb-2">
        Terms & Conditions
      </h2>
      <p className="text-xs text-[#DAAF37] uppercase tracking-wider font-heading">
        {LEGAL_CONFIG.legalCompanyName} • Platform Usage Agreement & Governance
      </p>
      <div className="mt-2 text-xs text-white/40 flex items-center gap-3">
        <span>Effective Date: {LEGAL_CONFIG.effectiveDate}</span>
        <span>•</span>
        <span>Last Updated: {LEGAL_CONFIG.lastUpdated}</span>
      </div>
    </div>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        1. About Nexora & Legal Entity
      </h3>
      <p>
        These Terms and Conditions (“Terms”) govern your access to and use of the {LEGAL_CONFIG.brandName} platform, website, mobile applications, software tools (including SalonOS), white-label digital assets, APIs, and associated digital services (collectively, the “Platform”), operated by {LEGAL_CONFIG.legalCompanyName}.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        2. Definitions
      </h3>
      <p>For the purpose of these Terms, the following terms shall have the meanings ascribed below:</p>
      <ul className="list-disc list-inside space-y-1.5 text-xs text-white/70 pl-2">
        <li><strong>“Nexora” / “Platform” / “We” / “Our” / “Us”:</strong> Refers to {LEGAL_CONFIG.legalCompanyName} and its digital properties, applications, and infrastructure.</li>
        <li><strong>“User” / “Customer”:</strong> Any individual browsing, registering, or booking salon services via the platform.</li>
        <li><strong>“Salon Partner” / “Partner”:</strong> Independent salon merchants, stylists, and beauty businesses listed on the platform or utilizing SalonOS tools.</li>
        <li><strong>“Booking”:</strong> An appointment reservation made by a Customer for services offered by a Salon Partner.</li>
        <li><strong>“Service”:</strong> Grooming, beauty, or wellness treatments delivered by Salon Partners.</li>
        <li><strong>“Payment”:</strong> Financial transactions processed via RBI-authorized payment aggregators for bookings or SaaS subscriptions.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        3. Acceptance of Terms & Legal Capacity
      </h3>
      <p>
        By accessing, browsing, registering an account, or booking through the Platform, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and our <Link to="/privacy-policy" className="text-[#DAAF37] hover:underline font-medium">Privacy Policy</Link>. You represent that you possess legal capacity to enter into binding contracts under applicable law.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        4. Nature of Nexora Services (Role Separation)
      </h3>
      <p>
        Nexora operates as a technology infrastructure, discovery, and booking management platform. The actual salon grooming services are provided directly by independent Salon Partners.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 className="text-xs font-heading font-bold text-[#DAAF37] uppercase mb-1">Nexora Responsibilities</h4>
          <p className="text-xs text-white/70">Providing software infrastructure, appointment scheduling engines, SalonOS merchant dashboards, and payment facilitation.</p>
        </div>
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 className="text-xs font-heading font-bold text-[#DAAF37] uppercase mb-1">Salon Partner Responsibilities</h4>
          <p className="text-xs text-white/70">Service fulfillment, hygiene compliance, pricing accuracy, staff professional standards, and direct client care.</p>
        </div>
      </div>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        5. Account Registration & User Responsibilities
      </h3>
      <p>Users must provide accurate, current, and verifiable information during account registration. You are solely responsible for maintaining the confidentiality of your login credentials and OTPs. Any fraudulent activity, unauthorized account access, or identity misuse must be reported immediately. For data privacy practices, refer to our <Link to="/privacy-policy" className="text-[#DAAF37] hover:underline font-medium">Privacy Policy</Link>.</p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        6. Salon Listings & Information Accuracy
      </h3>
      <p>
        Salon Partners are solely responsible for ensuring the accuracy of their business listings, pricing menus, operational hours, service descriptions, and licensing details. Salon Partners are also subject to the applicable separate Salon Partner Agreement.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        7. Booking Terms
      </h3>
      <p>
        A booking request represents an appointment reservation. A booking acknowledgement is not automatically a confirmed booking until confirmed by the salon or system notification. Detailed cancellation and refund rules are governed strictly by our <Link to="/refund-cancellation-policy" className="text-[#DAAF37] hover:underline font-medium">Refund & Cancellation Policy</Link>.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        8. Payment Flow & Payment Gateway
      </h3>
      <p>
        Financial transactions on the platform are handled via RBI-authorized payment aggregators (e.g., Razorpay). Nexora records booking confirmations and settlements but does not store full credit card numbers, UPI PINs, or bank banking passwords on its servers. Third-party payment provider terms govern processing security.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        9. Illustrative ₹30,000 Booking Example & Settlement
      </h3>
      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
        <p className="font-semibold text-[#DAAF37]">Illustrative Example Only (Not a Fixed Rule for Every Booking):</p>
        <p className="text-white/70">
          For a modeled booking value of <strong>₹30,000</strong>:
        </p>
        <ul className="list-disc list-inside space-y-1 text-white/70 pl-2">
          <li>Online Advance Payment: <strong>₹7,500</strong></li>
          <li>Nexora Commission Component (model assumed ~10% baseline): <strong>₹3,000</strong></li>
          <li>Salon Partner Settlement Amount: <strong>₹4,500</strong> (from advance) + <strong>₹22,500</strong> (remaining balance collected at salon) = <strong>₹27,000</strong> total to salon.</li>
        </ul>
        <p className="text-white/50 text-[11px] pt-1">
          Actual settlement flows, commission percentages, taxes, and payment gateway deductions vary according to specific salon agreements, promotional discounts, and cancellation status.
        </p>
      </div>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        10. Prices, Taxes & Additional Charges
      </h3>
      <p>
        Salon service prices are determined by respective Salon Partners and may be updated periodically. Applicable taxes (such as GST) and service charges are displayed during checkout. Customers should review the final payable amount prior to completing payment.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        11. Cancellation & Refund Summary
      </h3>
      <p>
        Cancellation and refund eligibility is governed entirely by our <Link to="/refund-cancellation-policy" className="text-[#DAAF37] hover:underline font-medium">Refund & Cancellation Policy</Link>. Please refer to that document for precise timelines, fees, and dispute procedures.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        12. Salon Partner Responsibilities & Suspension
      </h3>
      <p>
        Salon Partners must maintain valid trade licences, hygiene standards, and price accuracy. Nexora reserves the right to suspend or remove any salon listing immediately in cases of fraud, repeated customer failures, misleading information, safety violations, or legal non-compliance.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        13. User Conduct & Prohibited Activities
      </h3>
      <p>Users are strictly prohibited from:</p>
      <ul className="list-disc list-inside space-y-1.5 text-xs text-white/70 pl-2">
        <li>Submitting fake or fraudulent bookings or unauthorized payment methods.</li>
        <li>Harassing salon staff, platform personnel, or other customers.</li>
        <li>Introducing malware, conducting automated scraping, or interfering with platform security.</li>
        <li>Manipulating review systems or attempting payment bypasses.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        14. Reviews & User Content
      </h3>
      <p>
        Users may submit reviews and ratings provided they hold lawful rights to such content and it is not abusive or defamatory. Users grant Nexora a non-exclusive license to host, moderate, and display such reviews for platform operation and quality improvement.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        15. Intellectual Property
      </h3>
      <p>
        All rights in the Nexora One brand, logos, software, source code, UI designs, graphics, and databases are the exclusive property of Nexora One. Third-party and salon-owned assets remain the property of their respective owners.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        16. Third-Party Services
      </h3>
      <p>
        The platform integrates with verified third-party providers for payment processing (Razorpay), mapping, messaging, hosting, and analytics. These services remain governed by their respective third-party terms and privacy policies.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        17. Platform Availability & Technical Limitations
      </h3>
      <p>
        While we strive for high uptime, the platform may experience scheduled maintenance, internet outages, payment gateway interruptions, or force majeure events. We do not guarantee uninterrupted, error-free platform availability.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        18. Business & Investor Information (Section 17.3 Figures)
      </h3>
      <p className="text-xs text-white/70">
        Financial information, valuation metrics, and projections (such as ₹3.72 Cr revenue, ₹1,38,90,254 profit, ₹11,575 monthly equivalent, and ~43 months recovery) are illustrative modeled projections, not guaranteed returns. For comprehensive notices, please review our official <Link to="/disclaimer" className="text-[#DAAF37] hover:underline font-medium">Disclaimer</Link>.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        19. Investment Process & Investor Enquiry
      </h3>
      <p className="text-xs text-white/70">
        Any actual investment or equity transaction is subject to applicable law, due diligence, formal legal documentation, corporate approvals, and statutory filings. The public website functions as an informational "Investor Enquiry" flow rather than an instant checkout.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        20. Limitation of Liability
      </h3>
      <p className="text-xs text-white/70">
        To the maximum extent permitted by law, Nexora shall not be liable for indirect or consequential damages. <em>Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited</em>, including mandatory consumer protections.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        21. Indemnity
      </h3>
      <p className="text-xs text-white/70">
        You agree to indemnify and hold harmless Nexora One, its directors, and employees from any claims, damages, or expenses arising from your breach of these Terms, unlawful platform use, or false information submission.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        22. Suspension & Termination
      </h3>
      <p className="text-xs text-white/70">
        We may suspend or terminate accounts for breach of terms, fraud, security risks, or legal requirements. Termination does not extinguish obligations arising prior to termination.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        23. Complaints & Grievance Contact
      </h3>
      <p className="text-xs text-white/70">
        For complaints, support, and escalation procedures, please visit our <Link to="/grievance-support" className="text-[#DAAF37] hover:underline font-medium">Grievance / Support</Link> page.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        24. Governing Law & Dispute Resolution
      </h3>
      <p className="text-xs text-white/70">
        These Terms are governed by the laws of India. Disputes shall first be attempted to be resolved in good faith. Unresolved disputes shall be subject to the exclusive jurisdiction of competent courts in India.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        25. Changes to Terms
      </h3>
      <p className="text-xs text-white/70">
        We may update these Terms periodically. Revised versions will reflect an updated "Last Updated" date. Continued platform use constitutes acceptance of revised terms.
      </p>
    </section>

    {/* Cross-link Reference Box */}
    <div className="p-4 rounded-xl bg-white/[0.03] border border-[#DAAF37]/30 space-y-2 text-xs text-white/70">
      <p className="font-heading font-semibold text-[#DAAF37] uppercase tracking-wider">Related Governance Documents</p>
      <div className="flex flex-wrap gap-4 pt-1">
        <Link to="/privacy-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Privacy Policy</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/cookie-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Cookie Policy</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/refund-cancellation-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Refund & Cancellation Policy</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/disclaimer" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Disclaimer</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/grievance-support" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Grievance / Support</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </div>

    <section className="space-y-3 border-t border-white/10 pt-6">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        26. Contact
      </h3>
      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/70">
          <div><strong className="text-white">Legal Entity:</strong> {LEGAL_CONFIG.legalCompanyName}</div>
          <div><strong className="text-white">Brand:</strong> {LEGAL_CONFIG.brandName}</div>
          <div><strong className="text-white">Registered Address:</strong> {LEGAL_CONFIG.registeredAddress}</div>
          <div><strong className="text-white">Official Email:</strong> <a href={`mailto:${LEGAL_CONFIG.officialEmail}`} className="text-[#DAAF37] hover:underline">{LEGAL_CONFIG.officialEmail}</a></div>
        </div>
      </div>
    </section>
  </div>
);

/* =========================================================================
   3. COOKIE POLICY CONTENT
   ========================================================================= */
const CookiePolicyContent: React.FC = () => {
  const [preferences, setPreferences] = useState({
    essential: true,
    functional: true,
    analytics: false,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8 text-white/80 leading-relaxed text-sm">
      <div className="border-b border-white/10 pb-6">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight mb-2">
          Cookie Policy
        </h2>
        <p className="text-xs text-[#DAAF37] uppercase tracking-wider font-heading">
          {LEGAL_CONFIG.legalCompanyName} • Transparency in Tracking & Cookies
        </p>
        <div className="mt-2 text-xs text-white/40 flex items-center gap-3">
          <span>Effective Date: {LEGAL_CONFIG.effectiveDate}</span>
          <span>•</span>
          <span>Last Updated: {LEGAL_CONFIG.lastUpdated}</span>
        </div>
        <p className="mt-3 text-xs text-white/70 italic">
          "How Nexora uses cookies and similar technologies to operate, secure and improve the Platform."
        </p>
      </div>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          1. What Are Cookies?
        </h3>
        <p>
          Cookies are small text files or data packets stored by a website or browser on your device (computer, smartphone, or tablet) to remember information and support website functionality. In addition to traditional browser cookies, Nexora may utilize similar technologies where applicable, such as local storage and session storage.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          2. How Nexora Uses Cookies
        </h3>
        <p>Nexora categorizes cookies and storage technologies based on their operational purpose:</p>
        <ul className="list-disc list-inside space-y-1.5 text-xs text-white/70 pl-2">
          <li><strong>Essential / Strictly Necessary:</strong> Active and required for platform security and basic navigation.</li>
          <li><strong>Functional / Preference:</strong> Remembers your display preferences and user settings.</li>
          <li><strong>Security:</strong> Protects authentication sessions and combats unauthorized access.</li>
          <li><strong>Analytics / Performance:</strong> Used for aggregated site telemetry (where active).</li>
          <li><strong>Marketing / Advertising:</strong> Not currently active or utilized in this implementation.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          3. Essential Cookies & Authentication
        </h3>
        <p>
          Essential cookies and session tokens are strictly required to authenticate logged-in users, secure customer and salon management sessions (SalonOS), prevent fraudulent activity, and maintain basic platform functionality. These cannot be disabled through the preference center.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          4. Functional & Preference Technologies
        </h3>
        <p>
          Where applicable, functional storage remembers choices you make, such as language selection, preferred viewing mode, or saved booking location filters, providing a seamless browsing experience.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          5. Analytics & Performance Technologies
        </h3>
        <p className="text-xs text-white/70">
          Analytics technologies are not currently identified as active in this implementation. If third-party telemetry tools are integrated in future updates, this policy will be revised accordingly.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          6. Marketing & Advertising Technologies
        </h3>
        <p className="text-xs text-white/70">
          No active marketing or advertising cookie technology (such as Meta Pixel or Google Ads trackers) has been identified in the current implementation. We do not track users across unrelated external websites for advertising purposes.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          7. Local Storage & Similar Technologies
        </h3>
        <p className="text-xs text-white/70">
          The web application utilizes browser storage mechanisms including <code className="text-[#DAAF37]">localStorage</code> and <code className="text-[#DAAF37]">sessionStorage</code> to store user session tokens, UI preferences, and temporary multi-step booking form states. These are distinct from traditional HTTP cookies but serve similar operational functions.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          8. Third-Party Services
        </h3>
        <p className="text-xs text-white/70">
          We integrate with verified third-party payment infrastructure (e.g., Razorpay) which may place secure tokens or cookies during checkout. These are governed by the respective third-party privacy and cookie policies.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          9. Cookie Consent
        </h3>
        <p className="text-xs text-white/70">
          Essential cookies are active by default as necessary for platform operation. Optional preference and analytics storage require your consent. You may update your preferences at any time using our Cookie Preference Center below.
        </p>
      </section>

      {/* SECTION 10 — COOKIE PREFERENCE CENTER */}
      <section className="space-y-4 p-5 rounded-2xl bg-black/60 border border-[#DAAF37]/30">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              10. Cookie Preference Center
            </h3>
            <p className="text-xs text-white/60">Customize your tracking and storage preferences.</p>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#DAAF37]/10 text-[#DAAF37] text-[10px] font-semibold border border-[#DAAF37]/30">
            Interactive
          </span>
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10">
            <div>
              <span className="font-semibold text-white block">Essential Cookies</span>
              <span className="text-white/50 text-[11px]">Required for login, security, and core platform operation.</span>
            </div>
            <span className="px-3 py-1 rounded bg-[#DAAF37]/20 text-[#DAAF37] font-bold text-[11px]">
              ON / Required
            </span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10">
            <div>
              <span className="font-semibold text-white block">Preferences & Functional Storage</span>
              <span className="text-white/50 text-[11px]">Remembers your UI settings and custom selections.</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#DAAF37]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10">
            <div>
              <span className="font-semibold text-white block">Analytics & Performance</span>
              <span className="text-white/50 text-[11px]">Anonymized site telemetry and usage statistics.</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#DAAF37]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10">
            <div>
              <span className="font-semibold text-white block">Marketing / Advertising</span>
              <span className="text-white/50 text-[11px]">Cross-site tracking and ad personalization.</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#DAAF37]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#F4D03F] via-[#DAAF37] to-[#AA7C11] text-black font-semibold hover:opacity-90 transition-opacity"
            >
              Save Preferences
            </button>
            {saved && (
              <span className="text-emerald-400 font-medium animate-pulse">
                ✓ Preferences saved successfully!
              </span>
            )}
          </div>
        </form>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          11. Browser Controls
        </h3>
        <p className="text-xs text-white/70">
          You can manage or delete cookies through your browser settings. Most browsers permit blocking or deleting stored cookies. Note that disabling essential technologies may affect login state, booking flows, or platform functionality.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          12. Cookie Retention
        </h3>
        <p className="text-xs text-white/70">
          Retention and expiration periods depend on the specific technology, session duration, and configuration actually used by the Platform. Session tokens expire upon browser closure, while preference settings persist until cleared.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          13. Security
        </h3>
        <p className="text-xs text-white/70">
          Cookies and local storage tokens are employed to support authentication, session security, and fraud prevention measures.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          14. Privacy Connection
        </h3>
        <p className="text-xs text-white/70">
          For information about how Nexora processes personal data associated with cookies and similar technologies, please see our{' '}
          <Link to="/privacy-policy" className="text-[#DAAF37] hover:underline font-medium">Privacy Policy</Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          15. Policy Changes
        </h3>
        <p className="text-xs text-white/70">
          Nexora may update this Cookie Policy when tracking technologies, platform functionality, or legal requirements change. Revisions will be reflected by the "Last Updated" date.
        </p>
      </section>

      {/* Cross-link Reference Box */}
      <div className="p-4 rounded-xl bg-white/[0.03] border border-[#DAAF37]/30 space-y-2 text-xs text-white/70">
        <p className="font-heading font-semibold text-[#DAAF37] uppercase tracking-wider">Related Governance Documents</p>
        <div className="flex flex-wrap gap-4 pt-1">
          <Link to="/terms-and-conditions" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
            <span>Terms & Conditions</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
          <Link to="/privacy-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
            <span>Privacy Policy</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
          <Link to="/refund-cancellation-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
            <span>Refund & Cancellation Policy</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
          <Link to="/disclaimer" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
            <span>Disclaimer</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
          <Link to="/grievance-support" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
            <span>Grievance / Support</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      <section className="space-y-3 border-t border-white/10 pt-6">
        <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
          16. Contact
        </h3>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/70">
            <div><strong className="text-white">Legal Entity:</strong> {LEGAL_CONFIG.legalCompanyName}</div>
            <div><strong className="text-white">Brand:</strong> {LEGAL_CONFIG.brandName}</div>
            <div><strong className="text-white">Registered Address:</strong> {LEGAL_CONFIG.registeredAddress}</div>
            <div><strong className="text-white">Official Email:</strong> <a href={`mailto:${LEGAL_CONFIG.officialEmail}`} className="text-[#DAAF37] hover:underline">{LEGAL_CONFIG.officialEmail}</a></div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================================
   4. REFUND & CANCELLATION POLICY CONTENT
   ========================================================================= */
const RefundPolicyContent: React.FC = () => (
  <div className="space-y-8 text-white/80 leading-relaxed text-sm">
    <div className="border-b border-white/10 pb-6">
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight mb-2">
        Refund & Cancellation Policy
      </h2>
      <p className="text-xs text-[#DAAF37] uppercase tracking-wider font-heading">
        {LEGAL_CONFIG.legalCompanyName} • Fair Transaction, Cancellation & Settlement Governance
      </p>
    </div>

    {/* Exact Business Logic Clarification Card */}
    <div className="p-4 rounded-2xl bg-gradient-to-r from-[#DAAF37]/15 via-black/40 to-[#AA7C11]/15 border border-[#DAAF37]/40">
      <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#F4D03F] uppercase tracking-wider mb-2">
        <CheckCircle2 className="w-4 h-4 text-[#DAAF37]" />
        <span>Core Platform Refund & Model Principle</span>
      </div>
      <p className="text-xs text-white/90 leading-relaxed font-sans">
        “Only actual cancelled or refunded bookings are considered. No fixed refund percentage is included in the base financial model. Actual refunds are processed fairly based on real cancellations and affect revenue and profit accordingly. Governed under our general platform{' '}
        <Link to="/terms-and-conditions" className="text-[#DAAF37] hover:underline font-medium">Terms & Conditions</Link>.”
      </p>
    </div>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        1. Customer Cancellation & Booking Rejection
      </h3>
      <p className="text-xs text-white/70">
        Nexora facilitates transparent appointment booking workflows between customers and independent salon merchants. Cancellation rules are structured as follows:
      </p>
      <ul className="list-disc list-inside space-y-1.5 text-xs text-white/70 pl-2">
        <li><strong>Timely Customer Cancellations:</strong> If a customer cancels a prepaid booking prior to the salon’s designated cutoff window (typically 2 to 4 hours before the scheduled slot time), a 100% full refund of prepaid service amounts is initiated immediately.</li>
        <li><strong>Booking Rejections by Salon:</strong> If a salon merchant rejects a booking request due to capacity constraints or scheduling conflicts before confirmation, zero charges are captured, or any pre-authorized hold is released instantly.</li>
        <li><strong>Salon-Initiated Cancellations:</strong> If a confirmed booking is cancelled by the salon due to emergency or staff unavailability, 100% of prepaid funds are refunded to the customer along with priority rebooking assistance.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        2. Late Cancellations & No-Shows
      </h3>
      <p className="text-xs text-white/70">
        To protect stylist time and salon merchant operational readiness:
      </p>
      <ul className="list-disc list-inside space-y-1.5 text-xs text-white/70 pl-2">
        <li><strong>Late Cancellations:</strong> Cancellations made after the salon’s cutoff window but prior to appointment time may incur a nominal slot retention fee as set by the participating merchant.</li>
        <li><strong>No-Shows:</strong> Customers who fail to arrive within 15 minutes of the scheduled appointment slot without prior notice are classified as no-shows. Prepaid fees for no-shows are generally non-refundable unless verified as an exceptional circumstance by support mediation.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        3. Service Not Delivered / Quality Dissatisfaction
      </h3>
      <p className="text-xs text-white/70">
        If a scheduled service is not delivered due to salon closure, equipment failure, or severe service deficiency:
      </p>
      <ul className="list-disc list-inside space-y-1.5 text-xs text-white/70 pl-2">
        <li>Customers must report service non-delivery or major discrepancies to Nexora support within 24 hours of the scheduled time.</li>
        <li>Following investigation and verification with the salon merchant, eligible refunds or platform credit vouchers will be issued.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        4. Duplicate Payments & Failed Payment Failures
      </h3>
      <p className="text-xs text-white/70">
        Payment gateway discrepancies are governed by automated settlement checks:
      </p>
      <ul className="list-disc list-inside space-y-1.5 text-xs text-white/70 pl-2">
        <li><strong>Duplicate Payments:</strong> If a customer is charged twice for the same booking due to network timeout or gateway retry, the duplicate transaction amount is automatically detected and fully refunded within 3–5 business days.</li>
        <li><strong>Failed Payments & Auto-Reversals:</strong> If an amount is debited from a bank account during a failed checkout attempt where no booking is generated, payment gateways (e.g., Razorpay) typically auto-reverse the funds within 24–48 hours.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        5. Refund Eligibility & Calculation
      </h3>
      <p className="text-xs text-white/70">
        Refunds are calculated strictly on the net paid amount for the specific service item, excluding non-refundable third-party gateway convenience fees where applicable by payment terms.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        6. Refund Processing Timeline & Status
      </h3>
      <p className="text-xs text-white/70">
        When an eligible refund is approved and initiated through Nexora’s payment infrastructure:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
          <div className="text-xs font-heading font-bold text-[#DAAF37] mb-1">UPI & NetBanking</div>
          <div className="text-sm font-semibold text-white">24 – 48 Hours</div>
          <div className="text-[10px] text-white/50 mt-1">Direct to Bank Account</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
          <div className="text-xs font-heading font-bold text-[#DAAF37] mb-1">Credit / Debit Cards</div>
          <div className="text-sm font-semibold text-white">3 – 5 Business Days</div>
          <div className="text-[10px] text-white/50 mt-1">Dependent on Issuing Bank</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
          <div className="text-xs font-heading font-bold text-[#DAAF37] mb-1">Platform Credits</div>
          <div className="text-sm font-semibold text-white">Instant</div>
          <div className="text-[10px] text-white/50 mt-1">Available for Next Booking</div>
        </div>
      </div>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        7. Dispute Mediation & Escalation
      </h3>
      <p className="text-xs text-white/70">
        If a refund request or booking dispute is contested by a merchant, Nexora acts as an impartial mediator. Users can track refund status or escalate unresolved disputes by visiting our{' '}
        <Link to="/grievance-support" className="text-[#DAAF37] hover:underline font-medium">Grievance / Support</Link> desk or emailing <a href={`mailto:${LEGAL_CONFIG.officialEmail}`} className="text-[#DAAF37] hover:underline font-mono">{LEGAL_CONFIG.officialEmail}</a>.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        8. Salon Subscription & SaaS Module Fees
      </h3>
      <p className="text-xs text-white/70">
        For salon merchants utilizing premium SalonOS modules or white-label infrastructure:
      </p>
      <ul className="list-disc list-inside space-y-1.5 text-xs text-white/70 pl-2">
        <li>Base SalonOS onboarding and standard directory listings are free of recurring subscription charges.</li>
        <li>Paid add-ons (such as custom domain purchases or SMS marketing packs) are non-refundable once provisioned.</li>
      </ul>
    </section>

    {/* Cross-link Reference Box */}
    <div className="p-4 rounded-xl bg-white/[0.03] border border-[#DAAF37]/30 space-y-2 text-xs text-white/70">
      <p className="font-heading font-semibold text-[#DAAF37] uppercase tracking-wider">Related Governance Documents</p>
      <div className="flex flex-wrap gap-4 pt-1">
        <Link to="/terms-and-conditions" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Terms & Conditions</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/privacy-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Privacy Policy</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/cookie-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Cookie Policy</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/disclaimer" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Disclaimer</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/grievance-support" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>File a Refund Grievance</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  </div>
);

/* =========================================================================
   5. DISCLAIMER CONTENT
   ========================================================================= */
const DisclaimerContent: React.FC = () => (
  <div className="space-y-8 text-white/80 leading-relaxed text-sm">
    <div className="border-b border-white/10 pb-6">
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight mb-2">
        Disclaimer & Disclosures
      </h2>
      <p className="text-xs text-[#DAAF37] uppercase tracking-wider font-heading">
        {LEGAL_CONFIG.legalCompanyName} • Legal, Platform & Investor Disclosures
      </p>
    </div>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        1. General Website & Informational Disclaimer
      </h3>
      <p className="text-xs text-white/70">
        The information contained on this website and associated presentations is published for general informational, educational, and ecosystem communication purposes only. While {LEGAL_CONFIG.legalCompanyName} strives to maintain accurate and updated information, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or availability of the website or content. Platform usage is governed by our{' '}
        <Link to="/terms-and-conditions" className="text-[#DAAF37] hover:underline font-medium">Terms & Conditions</Link>.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        2. Salon & Independent Service Provider Information
      </h3>
      <p className="text-xs text-white/70">
        {LEGAL_CONFIG.legalCompanyName} operates as a technology platform connecting users with independent salon partners and grooming professionals. Salons, barbershops, and stylists listed on the platform operate independently. Nexora does not directly own, operate, or control the physical service locations, nor does it guarantee the specific quality, hygiene standards, or execution of individual beauty treatments performed by salon staff.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        3. Pricing, Availability & Menu Disclaimers
      </h3>
      <p className="text-xs text-white/70">
        Service pricing, promotional discounts, operating hours, and appointment slots are determined and updated by individual salon partners. While we make reasonable efforts to display correct rates, errors may occur. In the event of a pricing discrepancy or salon schedule change, merchants or Nexora reserve the right to cancel or reschedule appointments with appropriate user notification and applicable refunds as per our <Link to="/refund-cancellation-policy" className="text-[#DAAF37] hover:underline">Refund Policy</Link>.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        4. Third-Party Services & Payment Gateways
      </h3>
      <p className="text-xs text-white/70">
        Our platform integrates with third-party payment gateways, cloud hosting providers, and communication APIs (such as SMS and WhatsApp messaging). Nexora assumes no liability for technical outages, transaction failures, or security breaches originating from external third-party infrastructure.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        5. Platform & Technology Limitations
      </h3>
      <p className="text-xs text-white/70">
        The Nexora web application, mobile interface, and SalonOS modules are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis without warranties of uninterrupted uptime or error-free operation. We disclaim all liability for temporary service suspensions resulting from scheduled maintenance, server upgrades, or unforeseen telecommunications disruptions.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        6. User-Generated Content & Reviews
      </h3>
      <p className="text-xs text-white/70">
        Reviews, star ratings, comments, and photos posted by users reflect the personal opinions of individual customers and do not represent the official views or endorsements of Nexora. While we moderate content for abusive or unlawful material, we do not verify the absolute veracity of every consumer review.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        7. Business Information, Financial Projections & Actual vs. Projected Data
      </h3>
      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-white/80">
        <p className="font-semibold text-[#DAAF37]">
          Illustrative Nature of Financial Projections:
        </p>
        <p>
          All financial figures, revenue models, unit economics, profit calculations, profit margins, and recovery timelines presented across investor pitches and ecosystem materials are strictly <strong>illustrative projections</strong> based on modeled baseline operational assumptions (e.g., active salon networks generating projected monthly booking volumes).
        </p>
        <p>
          Actual operational and financial results may differ substantially from projected figures due to market dynamics, competition, economic shifts, and execution variables.
        </p>
        <p>
          These models assume relevant profits are legally distributable and fully distributed by the corporate entity after meeting all statutory tax, GST, reserve, and compliance requirements.
        </p>
      </div>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        8. Investment Information & Statutory Risk Disclosures
      </h3>
      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-2">
        <p className="font-bold flex items-center gap-1.5 text-amber-300">
          <AlertTriangle className="w-4 h-4" />
          Mandatory Statutory Risk & Non-Guarantee Notice:
        </p>
        <p>
          Participation in early-stage equity or private business opportunities carries significant risk, including market volatility, competitive pressures, execution delays, and potential loss of invested capital.
        </p>
        <ul className="list-disc list-inside space-y-1 pl-1 font-medium text-amber-100">
          <li>No guaranteed return on investment.</li>
          <li>No guaranteed profit or operational surplus.</li>
          <li>No guaranteed dividend distribution.</li>
          <li>No guaranteed capital repayment or debt obligation.</li>
          <li>No guaranteed buyback or liquidity exit.</li>
        </ul>
      </div>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        9. No Investment, Legal or Tax Advice
      </h3>
      <p className="text-xs text-white/70">
        Nothing on this platform or in any investor deck constitutes tax, legal, regulatory, or certified financial investment advice. Prospective investors, salon partners, and stakeholders are strongly advised to conduct independent due diligence and consult certified financial advisors, chartered accountants, and legal counsel prior to executing binding agreements.
      </p>
    </section>

    {/* Cross-link Reference Box */}
    <div className="p-4 rounded-xl bg-white/[0.03] border border-[#DAAF37]/30 space-y-2 text-xs text-white/70">
      <p className="font-heading font-semibold text-[#DAAF37] uppercase tracking-wider">Related Governance Documents</p>
      <div className="flex flex-wrap gap-4 pt-1">
        <Link to="/terms-and-conditions" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Terms & Conditions</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/privacy-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Privacy Policy</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/cookie-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Cookie Policy</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/refund-cancellation-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Refund & Cancellation Policy</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/grievance-support" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Grievance / Support</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  </div>
);

/* =========================================================================
   6. GRIEVANCE REDRESSAL & SUPPORT CONTENT
   ========================================================================= */
const GrievanceSupportContent: React.FC = () => (
  <div className="space-y-8 text-white/80 leading-relaxed text-sm">
    <div className="border-b border-white/10 pb-6">
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight mb-2">
        Grievance Redressal & Support Center
      </h2>
      <p className="text-xs text-[#DAAF37] uppercase tracking-wider font-heading">
        {LEGAL_CONFIG.legalCompanyName} • Official Customer, Salon & Stakeholder Redressal Mechanism
      </p>
    </div>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        1. Overview & Commitment to Fair Resolution
      </h3>
      <p>
        Nexora One is committed to providing a transparent, prompt, and equitable grievance redressal mechanism for all users, salon partners, service providers, and institutional stakeholders. Whether you require assistance with an active booking, payment reconciliation, salon partnership, account management, or data privacy rights, our dedicated support and compliance desks are structured to resolve issues efficiently.
      </p>
      <p>
        For data privacy matters, please review our{' '}
        <Link to="/privacy-policy" className="text-[#DAAF37] hover:underline font-medium">Privacy Policy</Link>; for booking refunds and cancellations, please see our{' '}
        <Link to="/refund-cancellation-policy" className="text-[#DAAF37] hover:underline font-medium">Refund & Cancellation Policy</Link>.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        2. Designated Support & Helpdesk Channels
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-[#DAAF37] font-heading font-bold text-xs uppercase">
            <Mail className="w-4 h-4" />
            <span>General Customer & Salon Support</span>
          </div>
          <p className="text-xs text-white/70">
            For booking assistance, app navigation, SalonOS inquiries, and salon onboarding:
          </p>
          <a
            href={`mailto:${LEGAL_CONFIG.officialEmail}?subject=Support%20Request`}
            className="text-xs text-[#DAAF37] hover:underline font-mono block break-all"
          >
            {LEGAL_CONFIG.officialEmail}
          </a>
          <span className="text-[10px] text-white/40 block">Response Time: Within 24 hours</span>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-[#DAAF37] font-heading font-bold text-xs uppercase">
            <Building2 className="w-4 h-4" />
            <span>Investor & Corporate Relations</span>
          </div>
          <p className="text-xs text-white/70">
            For institutional discussions, strategic partnerships, and investor queries:
          </p>
          <a
            href={`mailto:${LEGAL_CONFIG.officialEmail}?subject=Corporate%20/%20Investor%20Inquiry`}
            className="text-xs text-[#DAAF37] hover:underline font-mono block break-all"
          >
            {LEGAL_CONFIG.officialEmail}
          </a>
          <span className="text-[10px] text-white/40 block">Response Time: Within 24–48 hours</span>
        </div>
      </div>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        3. Comprehensive Ticketing Categories & Issue Reporting
      </h3>
      <p className="text-xs text-white/70">
        When raising a support ticket, please include your registered phone number, booking reference ID (if applicable), and detailed description to expedite resolution across these categories:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/10 space-y-1.5">
          <div className="font-semibold text-white">Booking & Service Issues</div>
          <p className="text-white/60">Report delayed salon arrivals, unrendered services, stylist disputes, or scheduling conflicts.</p>
        </div>
        <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/10 space-y-1.5">
          <div className="font-semibold text-white">Payment & Refund Issues</div>
          <p className="text-white/60">Report double debits, failed gateway transactions, pending refunds, or invoice discrepancies.</p>
        </div>
        <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/10 space-y-1.5">
          <div className="font-semibold text-white">Account & Security Issues</div>
          <p className="text-white/60">Report unauthorized login attempts, credential resets, or profile verification challenges.</p>
        </div>
        <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/10 space-y-1.5">
          <div className="font-semibold text-white">Privacy & Data Rights Requests</div>
          <p className="text-white/60">Request personal data access, correction, deletion, or consent withdrawal under applicable privacy laws.</p>
        </div>
      </div>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        4. Designated Grievance Officer & Regulatory Compliance
      </h3>
      <p className="text-xs text-white/70">
        In compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules and Digital Data Protection regulations, the details of our Grievance Redressal Officer are as follows:
      </p>

      <div className="p-5 rounded-xl bg-white/[0.04] border border-[#DAAF37]/30 space-y-3 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <span className="text-white/50 block text-[11px]">Designation:</span>
            <span className="text-white font-medium">{LEGAL_CONFIG.grievanceOfficer}</span>
          </div>
          <div>
            <span className="text-white/50 block text-[11px]">Entity:</span>
            <span className="text-white font-medium">{LEGAL_CONFIG.legalCompanyName}</span>
          </div>
          <div>
            <span className="text-white/50 block text-[11px]">Grievance Desk Email:</span>
            <a
              href={`mailto:${LEGAL_CONFIG.grievanceEmail}?subject=Official%20Grievance%20Escalation`}
              className="text-[#DAAF37] hover:underline font-mono break-all"
            >
              {LEGAL_CONFIG.grievanceEmail}
            </a>
          </div>
          <div>
            <span className="text-white/50 block text-[11px]">Operating Hours:</span>
            <span className="text-white font-medium">Monday – Friday, 10:00 AM – 6:00 PM IST</span>
          </div>
        </div>
      </div>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-heading font-semibold text-white flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#DAAF37] rounded-full" />
        5. Grievance Escalation Matrix & SLA Timeline
      </h3>
      <div className="space-y-2 mt-2">
        <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/10 flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#DAAF37]/20 text-[#DAAF37] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
            1
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Acknowledgment (Within 24 Hours)</div>
            <p className="text-xs text-white/60">
              Upon submitting a grievance via email or support ticket, an automated acknowledgment ticket ID is generated and shared with the complainant.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/10 flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#DAAF37]/20 text-[#DAAF37] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
            2
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Investigation & Audit (Within 3–7 Business Days)</div>
            <p className="text-xs text-white/60">
              The Grievance Officer reviews operational logs, payment gateway receipts, salon partner communication, and technical records.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/10 flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#DAAF37]/20 text-[#DAAF37] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
            3
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Final Resolution (Within 15 Business Days)</div>
            <p className="text-xs text-white/60">
              A formal resolution report is issued and any mandated remediation, refund disbursement, or account correction is executed.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Cross-link Reference Box */}
    <div className="p-4 rounded-xl bg-white/[0.03] border border-[#DAAF37]/30 space-y-2 text-xs text-white/70">
      <p className="font-heading font-semibold text-[#DAAF37] uppercase tracking-wider">Related Governance Documents</p>
      <div className="flex flex-wrap gap-4 pt-1">
        <Link to="/privacy-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Privacy Policy</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/refund-cancellation-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Refund & Cancellation Policy</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/terms-and-conditions" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Terms & Conditions</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/cookie-policy" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Cookie Policy</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to="/disclaimer" className="text-[#DAAF37] hover:underline inline-flex items-center gap-1">
          <span>Disclaimer</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  </div>
);

