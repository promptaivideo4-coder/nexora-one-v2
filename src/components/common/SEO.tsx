import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useCopy } from "../journey/Page";
const pages: Record<string, [string, string, string, string]> = {
  "/": [
    "Salon Tools & Customer Booking",
    "Salon Tools और Customer Booking",
    "Explore salon workflow demos, customer booking and clear next steps.",
    "Salon workflow demos, customer booking और शुरुआत का सही रास्ता देखें।",
  ],
  "/for-salons": [
    "For Salon Owners",
    "Salon Owners के लिए",
    "Explore appointments, customer records and follow-up in a guided demo.",
    "Guided demo में appointments, customer records और follow-up देखें।",
  ],
  "/for-customers": [
    "Customer Booking Demo",
    "Customer Booking Demo",
    "Understand the salon booking journey and check service availability.",
    "Salon booking journey समझें और service availability confirm करें।",
  ],
  "/pricing": [
    "Pricing & Commercial Terms",
    "Pricing और Commercial Terms",
    "Confirm setup, subscription and booking commission before joining.",
    "जुड़ने से पहले setup, subscription और booking commission confirm करें।",
  ],
  "/investors": [
    "Investor Brief",
    "Investor Brief",
    "Review product evidence, unverified metrics, planning assumptions and validation milestones.",
    "Product evidence, unverified metrics, planning assumptions और validation milestones देखें।",
  ],
  "/contact": [
    "Contact & Enquiries",
    "Contact और Enquiries",
    "Prepare an email enquiry about salon access, pricing or investment.",
    "Salon access, pricing या investment के लिए email enquiry तैयार करें।",
  ],
  "/about": [
    "About & Founder",
    "About और Founder",
    "Nexora One focuses on salon operations and customer booking.",
    "Nexora One salon operations और customer booking पर केंद्रित है।",
  ],
  "/products": [
    "Product Demos & Status",
    "Product Demos और Status",
    "Review separate product demonstrations and their stated status.",
    "अलग product demonstrations और उनका stated status देखें।",
  ],
  "/verticals": [
    "Focus & Roadmap",
    "Focus और Roadmap",
    "Beauty is the first focus; other industries are future options.",
    "Beauty पहला focus है; अन्य industries future options हैं।",
  ],
  "/investor-guide": [
    "Investor Resource",
    "Investor Resource",
    "Understand GMV, revenue and a shared illustrative financial model.",
    "GMV, revenue और shared illustrative financial model समझें।",
  ],
  "/market-research": [
    "Research Snapshot",
    "Research Snapshot",
    "Read the dated repository research snapshot on salon software and booking platforms.",
    "Salon software और booking platforms पर dated research snapshot पढ़ें।",
  ],
};
export function SEO() {
  const { pathname } = useLocation();
  const c = useCopy();
  const config = pages[pathname] || [
    "Policies & Support",
    "Policies और Support",
    "Nexora One policies and support information.",
    "Nexora One policies और support की जानकारी।",
  ];
  const title = `${c(config[0], config[1])} — Nexora One`;
  const description = c(config[2], config[3]);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link
        rel="canonical"
        href={`https://nexora.one${pathname === "/" ? "/" : pathname}`}
      />
    </Helmet>
  );
}
