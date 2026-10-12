/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { LightboxProvider } from './components/common/LightboxProvider';
import { LanguageProvider } from './contexts/LanguageContext';
import { SEO } from './components/common/SEO';

// Direct static page imports to eliminate any loading fallback, buffering spinner, or suspense delay
import { HomePage } from './pages/HomePage';
import { VisionPage } from './pages/VisionPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { BenefitsPage } from './pages/BenefitsPage';
import { BeautyPage } from './pages/BeautyPage';
import { VerticalsPage } from './pages/VerticalsPage';
import { ProductsPage } from './pages/ProductsPage';
import { ResearchPage } from './pages/ResearchPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { InvestorsPage } from './pages/InvestorsPage';
import { PoliciesPage } from './pages/PoliciesPage';

function AnimatedRoutes() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO />
      <motion.div
        key={location.pathname}
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        className="w-full flex-grow flex flex-col"
      >
        <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/vision-mission" element={<VisionPage />} />
              <Route path="/ecosystem" element={<EcosystemPage />} />
              <Route path="/who-benefits" element={<BenefitsPage />} />
              <Route path="/beauty-ecosystem" element={<BeautyPage />} />
              <Route path="/verticals" element={<VerticalsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/market-research" element={<ResearchPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/investor-guide" element={<InsightsPage />} />
              <Route path="/investors" element={<InvestorsPage />} />

              {/* Legal & Policy Routes */}
              <Route path="/policies" element={<PoliciesPage />} />
              <Route path="/legal" element={<PoliciesPage />} />
              <Route path="/privacy-policy" element={<PoliciesPage initialPolicy="privacy-policy" />} />
              <Route path="/privacy" element={<PoliciesPage initialPolicy="privacy-policy" />} />
              <Route path="/terms-and-conditions" element={<PoliciesPage initialPolicy="terms-and-conditions" />} />
              <Route path="/terms" element={<PoliciesPage initialPolicy="terms-and-conditions" />} />
              <Route path="/cookie-policy" element={<PoliciesPage initialPolicy="cookie-policy" />} />
              <Route path="/cookies" element={<PoliciesPage initialPolicy="cookie-policy" />} />
              <Route path="/refund-cancellation-policy" element={<PoliciesPage initialPolicy="refund-cancellation-policy" />} />
              <Route path="/refund-policy" element={<PoliciesPage initialPolicy="refund-cancellation-policy" />} />
              <Route path="/refunds" element={<PoliciesPage initialPolicy="refund-cancellation-policy" />} />
              <Route path="/disclaimer" element={<PoliciesPage initialPolicy="disclaimer" />} />
              <Route path="/grievance-support" element={<PoliciesPage initialPolicy="grievance-support" />} />
              <Route path="/grievance" element={<PoliciesPage initialPolicy="grievance-support" />} />
              <Route path="/support" element={<PoliciesPage initialPolicy="grievance-support" />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </motion.div>
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
              <AnimatedRoutes />
            </Layout>
          </LightboxProvider>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
