import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';
import { SmoothScroll } from './components/motion/SmoothScroll';
import { Cursor } from './components/motion/Cursor';

// Pages
import { HomePage } from './pages/HomePage';
import { SitesProfissionaisPage } from './pages/SitesProfissionaisPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SegmentDetailPage } from './pages/SegmentDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AppsPage } from './pages/AppsPage';
import { AppDetailPage } from './pages/AppDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { RecommendationsPage } from './pages/RecommendationsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll />
      <Cursor />
      <div className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#0F3B40] font-sans antialiased selection:bg-[#0F3B40]/30 selection:text-[#F4EFE8]">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Core Services */}
            <Route path="/sites-profissionais/" element={<SitesProfissionaisPage />} />
            <Route path="/landing-pages/" element={<Navigate to="/sites-profissionais/" replace />} />
            <Route path="/sistemas-web/" element={<ServiceDetailPage customSlug="sistemas-web" />} />

            {/* Segment Pages (SEO Clusters) */}
            <Route path="/sites-para-clinicas/" element={<SegmentDetailPage customSlug="sites-para-clinicas" />} />
            <Route path="/sites-para-dentistas/" element={<SegmentDetailPage customSlug="sites-para-dentistas" />} />
            <Route path="/sites-para-esteticistas/" element={<SegmentDetailPage customSlug="sites-para-esteticistas" />} />
            <Route path="/sites-para-advogados/" element={<SegmentDetailPage customSlug="sites-para-advogados" />} />
            <Route path="/sites-para-arquitetos-e-corretores/" element={<SegmentDetailPage customSlug="sites-para-arquitetos-e-corretores" />} />
            <Route path="/sites-para-nail-designers/" element={<SegmentDetailPage customSlug="sites-para-nail-designers" />} />
            <Route path="/sites-para-prestadores-de-servicos/" element={<SegmentDetailPage customSlug="sites-para-prestadores-de-servicos" />} />

            {/* Portfolio & Case Studies */}
            <Route path="/portfolio/" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug/" element={<ProjectDetailPage />} />

            {/* Proprietary Apps & AI Systems */}
            <Route path="/apps/" element={<AppsPage />} />
            <Route path="/apps/:slug/" element={<AppDetailPage />} />

            {/* Blog & Content Hub */}
            <Route path="/blog/" element={<BlogPage />} />
            <Route path="/blog/:slug/" element={<BlogPostPage />} />

            {/* Recommendations & Affiliate Store */}
            <Route path="/recomendados/" element={<RecommendationsPage />} />
            <Route path="/recomendados/:category/" element={<RecommendationsPage />} />

            {/* Institutional Pages */}
            <Route path="/sobre/" element={<AboutPage />} />
            <Route path="/contato/" element={<ContactPage />} />
            <Route path="/politica-de-privacidade/" element={<PrivacyPolicyPage />} />
            <Route path="/termos-de-uso/" element={<TermsOfUsePage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
