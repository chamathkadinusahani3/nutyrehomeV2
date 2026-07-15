import { Header } from './components/Header';
import { HeroSearch } from './components/HeroSearch';
import { ShopSections } from './components/ShopSections';
import { TrustSections } from './components/TrustSections';
export function App() {
  return (
    <div className="min-h-screen w-full bg-white text-[#111827]">
     <Header />
      <HeroSearch />
      <TrustSections />
      <ShopSections />
    </div>);

}