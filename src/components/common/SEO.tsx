import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '../../config/seo';

export const SEO: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const path = location.pathname;
  const config = seoConfig[path] || seoConfig['/'];
  
  const title = t(config.titleKey);
  const description = t(config.descKey);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
