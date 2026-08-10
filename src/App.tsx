import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';

import { HeroSearch } from './components/HeroSearch';
import { ShopSections } from './components/ShopSections';
import { TrustSections } from './components/TrustSections';
import { SmartTyreScanPage } from './components/SmartTyreScanPage';
import { BrandsPage } from './components/BrandsPage';
import { ServicesPage } from './components/ServicesPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { BookingPage } from './components/BookingPage';
import { BlogPage } from './components/BlogPage';
import { BlogArticlePage } from './components/BlogArticlePage';
import { MobileFittingPage } from './components/MobileFittingPage';
import { ContactPage } from './components/ContactPage';
import { TyreResultsPage } from './components/TyreResultsPage';
import { VehicleFindPage } from './components/VehicleFindPage';
import { TyreCheckoutPage } from './components/TyreCheckoutPage';

function HomePage() {
  return (
    <>
      <HeroSearch />
      <TrustSections />
      <ShopSections  />
    </>);

}

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-white text-[#111827]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/book/:slug" element={<BookingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/mobile-tyre-fitting-service" element={<MobileFittingPage />} />
          <Route path="/smart-tyre-scan" element={<SmartTyreScanPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tyres/find" element={<VehicleFindPage />} />
          <Route path="/tyres/checkout/:tyreId" element={<TyreCheckoutPage />} />
          <Route path="/tyres/:size" element={<TyreResultsPage />} />
        </Routes>
     
      </div>
    </BrowserRouter>);

}
