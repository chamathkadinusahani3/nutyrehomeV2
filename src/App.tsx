import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';

import { HeroSearch } from './components/HeroSearch';
import { ShopSections } from './components/ShopSections';
import { TrustSections } from './components/TrustSections';
import { BrandsPage } from './components/BrandsPage';
import { ServicesPage } from './components/ServicesPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { BookingPage } from './components/BookingPage';

function HomePage() {
  return (
    <>
      <HeroSearch />
      <TrustSections />
      <ShopSections />
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
        </Routes>
     
      </div>
    </BrowserRouter>);

}
