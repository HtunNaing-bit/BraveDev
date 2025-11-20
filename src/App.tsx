import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { TeamPage } from "./pages/TeamPage";
import { AboutPage } from "./pages/AboutPage";
import { WhyBraveDevPage } from "./pages/WhyBraveDevPage";
import { InsightPage } from "./pages/InsightPage";
import { ContactPage } from "./pages/ContactPage";
import { AIAutomationArticle } from "./pages/articles/AIAutomationArticle";
import { EcommerceArticle } from "./pages/articles/EcommerceArticle";
import { POSSystemsArticle } from "./pages/articles/POSSystemsArticle";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import { LanguageProvider } from "./contexts/LanguageContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";

export default function App() {
  const [currentPage, setCurrentPage] = useState(window.location.hash.slice(1) || '/');
  
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash.slice(1) || '/');
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title based on current page
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      '/': 'BraveDev - Premium Software Development Services',
      '/services': 'What We Do - BraveDev',
      '/portfolio': 'Portfolio - BraveDev',
      '/team': 'Our Team - BraveDev',
      '/about': 'Who We Are - BraveDev',
      '/why': 'Why Choose Us - BraveDev',
      '/insight': 'Insights - BraveDev',
      '/contact': 'Contact Us - BraveDev',
      '/article/ai-automation': 'AI & Automation - BraveDev',
      '/article/ecommerce-platforms': 'E-commerce Platforms - BraveDev',
      '/article/pos-systems': 'POS Systems - BraveDev',
      '/privacy-policy': 'Privacy Policy - BraveDev',
      '/terms-of-service': 'Terms of Service - BraveDev',
      '/cookie-policy': 'Cookie Policy - BraveDev',
    };

    document.title = pageTitles[currentPage] || 'BraveDev - Premium Software Development Services';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case '/services':
        return <ServicesPage />;
      case '/portfolio':
        return <PortfolioPage />;
      case '/team':
        return <TeamPage />;
      case '/about':
        return <AboutPage />;
      case '/why':
        return <WhyBraveDevPage />;
      case '/insight':
        return <InsightPage />;
      case '/contact':
        return <ContactPage />;
      case '/article/ai-automation':
        return <AIAutomationArticle />;
      case '/article/ecommerce-platforms':
        return <EcommerceArticle />;
      case '/article/pos-systems':
        return <POSSystemsArticle />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms-of-service':
        return <TermsOfServicePage />;
      case '/cookie-policy':
        return <CookiePolicyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <LanguageProvider>
      <DarkModeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 antialiased transition-colors duration-300">
          <Navigation />
          {renderPage()}
          <Footer />
        </div>
      </DarkModeProvider>
    </LanguageProvider>
  );
}