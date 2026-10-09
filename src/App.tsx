/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { LightboxProvider } from './components/common/LightboxProvider';
import { LanguageProvider } from './contexts/LanguageContext';
import { SEO } from './components/common/SEO';

// Code-split pages for faster initial load and optimized bundle distribution
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const VisionPage = lazy(() => import('./pages/VisionPage').then((m) => ({ default: m.VisionPage })));
const EcosystemPage = lazy(() => import('./pages/EcosystemPage').then((m) => ({ default: m.EcosystemPage })));
const BenefitsPage = lazy(() => import('./pages/BenefitsPage').then((m) => ({ default: m.BenefitsPage })));
const BeautyPage = lazy(() => import('./pages/BeautyPage').then((m) => ({ default: m.BeautyPage })));
const VerticalsPage = lazy(() => import('./pages/VerticalsPage').then((m) => ({ default: m.VerticalsPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then((m) => ({ default: m.ProductsPage })));
const ResearchPage = lazy(() => import('./pages/ResearchPage').then((m) => ({ default: m.ResearchPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const InsightsPage = lazy(() => import('./pages/InsightsPage').then((m) => ({ default: m.InsightsPage })));
const InvestorsPage = lazy(() => import('./pages/InvestorsPage').then((m) => ({ default: m.InvestorsPage })));
const PoliciesPage = lazy(() => import('./pages/PoliciesPage').then((m) => ({ default: m.PoliciesPage })));

const RouteLoadingFallback = () => (
  <div className="w-full min-h-[50vh] flex items-center justify-center py-24" aria-label="Loading page content">
    <div className="relative flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-[#DAAF37] animate-spin" />
      <div className="absolute w-2 h-2 rounded-full bg-[#F4D03F] shadow-[0_0_10px_rgba(244,208,63,0.8)]" />
    </div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SEO />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="w-full flex-grow flex flex-col"
        >
          <Suspense fallback={<RouteLoadingFallback />}>
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
          </Suspense>
        </motion.div>
      </AnimatePresence>
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
