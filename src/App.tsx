import { lazy, Suspense, Component, type ReactNode } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  Link,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/layout/Layout";
import { LightboxProvider } from "./components/common/LightboxProvider";
import { LanguageProvider } from "./contexts/LanguageContext";
import { SEO } from "./components/common/SEO";
import { HomePage } from "./pages/HomePage";
import { SalonsPage } from "./pages/SalonsPage";
import { CustomersPage } from "./pages/CustomersPage";
import { PricingPage } from "./pages/PricingPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductsPage } from "./pages/ProductsPage";
import { InvestorsPage } from "./pages/InvestorsPage";
import { InsightsPage } from "./pages/InsightsPage";
import { AboutPage } from "./pages/AboutPage";
import { VerticalsPage } from "./pages/VerticalsPage";
import { useCopy } from "./components/journey/Page";
const PoliciesPage = lazy(() =>
  import("./pages/PoliciesPage").then((m) => ({ default: m.PoliciesPage })),
);
const ResearchPage = lazy(() =>
  import("./pages/ResearchPage").then((m) => ({ default: m.ResearchPage })),
);
class PageBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <div className="journey-section" role="alert">
        <p>This page could not open. / यह page नहीं खुल सका।</p>
        <a className="text-link" href="/">
          Home / Home
        </a>
        <p>
          <a href="mailto:nexoraallapps@gmail.com">nexoraallapps@gmail.com</a>
        </p>
      </div>
    ) : (
      this.props.children
    );
  }
}
function LegacyBenefits() {
  const { hash } = useLocation();
  return (
    <Navigate
      replace
      to={
        hash === "#customer"
          ? "/for-customers"
          : hash.includes("investor")
            ? "/investors"
            : hash.includes("partner") || hash === "#b2b"
              ? "/contact?interest=partner"
              : "/for-salons"
      }
    />
  );
}
function NotFound() {
  const c = useCopy();
  return (
    <section className="journey-section">
      <h1>{c("Page not found", "Page नहीं मिला")}</h1>
      <p>
        {c("Choose a starting point from the menu.", "Menu से अपना रास्ता चुनें।")}
      </p>
      <Link className="journey-button" to="/">
        {c("Go home", "Home पर जाएँ")}
      </Link>
    </section>
  );
}
function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <SEO />
      <PageBoundary key={location.pathname}>
        <Suspense
          fallback={
            <p className="journey-section" role="status">
              Opening page… / Page खुल रहा है…
            </p>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/for-salons" element={<SalonsPage />} />
            <Route path="/for-customers" element={<CustomersPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route
              path="/contact"
              element={<ContactPage key={location.search} />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            <Route path="/investor-guide" element={<InsightsPage />} />
            <Route
              path="/insights"
              element={<Navigate replace to="/investor-guide" />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/verticals" element={<VerticalsPage />} />
            <Route path="/market-research" element={<ResearchPage />} />
            <Route
              path="/ecosystem"
              element={<Navigate replace to="/for-salons" />}
            />
            <Route
              path="/beauty-ecosystem"
              element={<Navigate replace to="/for-salons" />}
            />
            <Route path="/who-benefits" element={<LegacyBenefits />} />
            <Route
              path="/vision-mission"
              element={<Navigate replace to="/about" />}
            />
            <Route path="/policies" element={<PoliciesPage />} />
            <Route
              path="/legal"
              element={<Navigate replace to="/policies" />}
            />
            <Route
              path="/privacy-policy"
              element={<PoliciesPage initialPolicy="privacy-policy" />}
            />
            <Route
              path="/privacy"
              element={<Navigate replace to="/privacy-policy" />}
            />
            <Route
              path="/terms-and-conditions"
              element={<PoliciesPage initialPolicy="terms-and-conditions" />}
            />
            <Route
              path="/terms"
              element={<Navigate replace to="/terms-and-conditions" />}
            />
            <Route
              path="/cookie-policy"
              element={<PoliciesPage initialPolicy="cookie-policy" />}
            />
            <Route
              path="/cookies"
              element={<Navigate replace to="/cookie-policy" />}
            />
            <Route
              path="/refund-cancellation-policy"
              element={
                <PoliciesPage initialPolicy="refund-cancellation-policy" />
              }
            />
            <Route
              path="/refund-policy"
              element={<Navigate replace to="/refund-cancellation-policy" />}
            />
            <Route
              path="/refunds"
              element={<Navigate replace to="/refund-cancellation-policy" />}
            />
            <Route
              path="/disclaimer"
              element={<PoliciesPage initialPolicy="disclaimer" />}
            />
            <Route
              path="/grievance-support"
              element={<PoliciesPage initialPolicy="grievance-support" />}
            />
            <Route
              path="/grievance"
              element={<Navigate replace to="/grievance-support" />}
            />
            <Route
              path="/support"
              element={<Navigate replace to="/grievance-support" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageBoundary>
    </>
  );
}
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <LightboxProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </LightboxProvider>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
