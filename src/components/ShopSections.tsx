import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AppSection } from './AppSection';
import {
  ArrowRightIcon,
  BatteryChargingIcon,
  CarFrontIcon,
  CheckIcon,
  FuelIcon,
  PlusIcon,
  ShieldCheckIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  WrenchIcon } from
'lucide-react';

export const services = [
{
  slug: 'wheel-alignment',
  title: 'Wheel alignment',
  icon: SlidersHorizontalIcon,
  price: 45,
  description: "Poor alignment causes uneven tyre wear and pulls your steering off-centre. Our precision laser alignment gets your wheels tracking true again.",
  items: ['Laser-guided precision alignment', 'Improves fuel efficiency', 'Extends tyre lifespan', 'Takes around 45 minutes']
},
{
  slug: 'brake-repair',
  title: 'Brake repair',
  icon: ShieldCheckIcon,
  price: 120,
  description: 'From worn pads to warped discs, our technicians inspect and repair your braking system so you can stop with confidence.',
  items: ['Full brake pad & disc inspection', 'Genuine and OEM-equivalent parts', 'Brake fluid check included', 'Same-day fitting available']
},
{
  slug: 'battery-replacement',
  title: 'Battery replacement',
  icon: BatteryChargingIcon,
  price: 90,
  description: "A failing battery rarely gives much warning. We test your battery's health and fit a reliable replacement on the spot.",
  items: ['Free battery health check', 'Wide range of battery brands', 'Old battery responsibly recycled', 'Mobile fitting available']
},
{
  slug: 'vehicle-servicing',
  title: 'Vehicle servicing',
  icon: WrenchIcon,
  price: 149,
  description: 'Routine maintenance keeps your car running smoothly and protects your warranty. Choose interim, full, or manufacturer-scheduled servicing.',
  items: ['Interim, full & major service options', 'Fully qualified technicians', 'Digital service report', 'Manufacturer warranty safe']
},
{
  slug: 'oil-filters',
  title: 'Oil & filters',
  icon: FuelIcon,
  price: 69,
  description: 'Clean oil and filters are essential for engine health. We use the correct grade oil for your vehicle, every time.',
  items: ['Manufacturer-approved oil grades', 'Oil, air & cabin filter options', 'Disposal of old oil included', 'Usually completed within the hour']
},
{
  slug: 'puncture-repair',
  title: 'Puncture repair',
  icon: CarFrontIcon,
  price: 25,
  description: "A repairable puncture doesn't always mean a new tyre. We assess the damage and repair safely wherever possible.",
  items: ['Repaired to British Standard BS AU 159', 'Free puncture inspection', 'Mobile callout available', 'New tyre fitted if unrepairable']
},
{
  slug: 'tpms',
  title: 'TPMS',
  icon: CheckIcon,
  price: 35,
  description: 'Tyre Pressure Monitoring System warning light on? We diagnose and reset or replace faulty sensors to keep you road-legal and safe.',
  items: ['Sensor diagnostics & reset', 'Replacement sensors in stock', 'Works with all major TPMS types', 'Quick turnaround']
},
{
  slug: 'air-conditioning',
  title: 'Air conditioning',
  icon: PlusIcon,
  price: 59,
  description: 'Lost your cool? We re-gas, leak-test and service your air con system to get cold air flowing again.',
  items: ['Full re-gas service', 'Leak detection included', 'Antibacterial treatment available', 'Most cars done in 30 minutes']
},
{
  slug: 'diagnostics',
  title: 'Diagnostics',
  icon: SearchIcon,
  price: 49,
  description: "Dashboard warning light on? Our diagnostic scan reads your vehicle's fault codes so we can pinpoint the issue fast.",
  items: ['Full ECU fault code scan', 'Covers engine, ABS & airbag systems', 'Clear, jargon-free report', 'No obligation quote afterwards']
},
{
  slug: 'suspension',
  title: 'Suspension',
  icon: WrenchIcon,
  price: 110,
  description: 'Knocks, clunks or a bumpy ride? We inspect shocks, struts and bushes to restore comfort, control and safety.',
  items: ['Full suspension health check', 'Shocks, struts & bushes covered', 'Improves handling & comfort', 'Parts and labour guaranteed']
}];
export const brandLogos = [
{ name: 'Michelin', logo: '/logo/michelin.jpg' },
{ name: 'Pirelli', logo: '/logo/pirelli.jpg' },
{ name: 'Bridgestone', logo: '/logo/bridgestone.jpg' },
{ name: 'Goodyear', logo: '/logo/goodyear.jpg.webp' },
{ name: 'BFGoodrich', logo: '/logo/bfgoodrich_1.jpg' },
{ name: 'Dunlop', logo: '/logo/dunlop.jpg' },
{ name: 'Continental', logo: '/logo/continental.jpg' },
{ name: 'Marshal', logo: '/logo/marshal.png.webp' },
{ name: 'Yokohama', logo: '/logo/yokohama.jpg' },
{ name: 'Hankook', logo: '/logo/hankook.jpg' }];

const offers = [
{
  title: '5% off selected tyres',
  note: 'When you buy 2 or 4 tyres',
  tint: 'bg-brand-black',
  icon: '01'
},
{
  title: '10% Avon discount',
  note: 'Limited online offer',
  tint: 'bg-brand-yellow',
  icon: '10'
},
{
  title: 'Free mobile fitting',
  note: 'At home or work, on us',
  tint: 'bg-brand-amber',
  icon: '✓'
},
{
  title: 'Tyre guarantee',
  note: 'Included with every tyre',
  tint: 'bg-gray-700',
  icon: '∞'
}];

const categories = [
{
  title: 'Budget tyres',
  from: '',
  image: '/Budgettyres.png',
  color: 'bg-brand-cream'
},
{
  title: 'Premium tyres',
  from: '',
  image: '/Premiumtyres.png',
  color: 'bg-brand-black text-white'
},
{
  title: 'EV tyres',
  from: '',
  image: '/EVtyres.png',
  color: 'bg-gray-100'
},
{
  title: 'SUV tyres',
  from: '',
  image: '/SUVtyres.png',
  color: 'bg-brand-lemon/30'
},
{
  title: 'Run flat tyres',
  from: '',
  image: '/runflat.png',
  color: 'bg-gray-100'
}];

const products = [
{
  brand: 'MICHELIN',
  name: 'Pilot Sport 5',
  price: '£142.99',
  rating: '4.9',
  label: 'Premium',
  accent: 'bg-brand-yellow text-brand-black'
},
{
  brand: 'CONTINENTAL',
  name: 'PremiumContact 7',
  price: '£119.99',
  rating: '4.8',
  label: 'Best seller',
  accent: 'bg-brand-black text-white'
},
{
  brand: 'GOODYEAR',
  name: 'EfficientGrip Performance',
  price: '£96.99',
  rating: '4.7',
  label: 'Great value',
  accent: 'bg-brand-amber text-brand-black'
}];

export function ShopSections() {
  const [saved, setSaved] = useState<string[]>([]);
  const [compared, setCompared] = useState<string[]>([]);
  const [basket, setBasket] = useState<string[]>([]);
  const toggle = (
  name: string,
  state: string[],
  setter: React.Dispatch<React.SetStateAction<string[]>>) =>

  setter(
    state.includes(name) ?
    state.filter((item) => item !== name) :
    [...state, name]
  );

  return (
    <main>
      

      <section
        id="brands"
        className="border-y border-brand-light-gold/20 bg-brand-cream py-10">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-5 text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl capitalize">
        Tyres from brands <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-amber-600 to-amber-500">you trust</span>
      </motion.h2>
          
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {[...brandLogos, ...brandLogos].map((brand, index) =>
            <div
              key={`${brand.name}-${index}`}
              className="grid h-16 w-36 shrink-0 place-items-center rounded-xl bg-white px-4 shadow-sm">

                <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-15 w-full object-contain" />

              </div>
            )}
          </div>
        </div>
      </section>
<AppSection />
      <section
  id="featured-tyres"
  className="relative overflow-hidden py-24 bg-gradient-to-br from-amber-100/50 via-yellow-50/40 to-white"
>
  {/* Embedded architectural warm glow */}
  <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-300/20 to-yellow-200/30 blur-3xl" />

  <div className="mx-auto max-w-7xl px-6 sm:px-8">
    
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end border-b border-amber-200/60 pb-8">
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white border border-neutral-800">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Find your fit
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl capitalize">
          Featured tyre <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-amber-600 to-amber-500">deals</span>
        </h2>
      </div>

      {/* High-contrast functional action button */}
      <button className="flex w-fit items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-neutral-800 hover:-translate-y-0.5">
        <SlidersHorizontalIcon size={16} className="text-yellow-400" />
        Browse all tyres
      </button>
    </motion.div>

    {/* Elegant Deal Grid */}
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {categories.map((category, index) => (
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          whileHover={{ y: -6 }}
          key={category.title}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white shadow-[0_8px_30px_rgba(245,158,11,0.02)] transition-all duration-300 hover:border-amber-400/50 hover:shadow-[0_20px_40px_rgba(245,158,11,0.08)]"
        >
          {/* Category photo */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={category.image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/5 to-transparent" />
            <span className="absolute left-4 top-4 rounded-md bg-neutral-950 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white border border-neutral-800">
              Shop now
            </span>
          </div>

          {/* Typography Content and Action elements */}
          <div className="flex flex-1 flex-col justify-between p-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900 capitalize">
                {category.title}
              </h3>
              {category.from &&
              <p className="mt-1 text-sm font-medium text-neutral-500">
                  {category.from}
                </p>
              }
            </div>

            <a
              href="#find-tyres"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-neutral-950 transition-colors duration-200 group-hover:text-amber-700"
            >
              <span>Explore</span>
              <ArrowRightIcon size={14} className="transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
          </div>
        </motion.article>
      ))}
    </div>

    {/* Status Bar Container */}
    {(compared.length > 0 || basket.length > 0) && (
      <div
        role="status"
        className="mt-8 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-sm font-bold text-neutral-900 backdrop-blur-sm"
      >
        <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
        <p>
          {compared.length > 0 && (
            <span>{compared.length} tyre{compared.length > 1 ? 's' : ''} selected to compare. </span>
          )}
          {basket.length > 0 && (
            <span className="text-amber-800">{basket.length} item{basket.length > 1 ? 's' : ''} in your basket.</span>
          )}
        </p>
      </div>
    )}
  </div>
</section>

      <section id="services" className="relative overflow-hidden py-24 bg-gradient-to-br from-amber-100/50 via-yellow-100 to-white">
  {/* Modern architectural background aura */}
  <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-300/20 to-yellow-200/30 blur-3xl" />

  <div className="mx-auto max-w-7xl px-6 sm:px-8">
    
    {/* Header Content Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center">
      {/* Premium dark high-contrast badge */}
      <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white border border-neutral-800">
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
        More than tyres
      </span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl capitalize">
        Keep your car at <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-amber-600 to-amber-500">its absolute best</span>
      </h2>
    </motion.div>

    {/* Modern Services Grid Block */}
    <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {services.map((service, index) => {
        const ServiceIcon = service.icon;
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            key={service.title}
          >
            <Link
              to={`/services/${service.slug}`}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-5 text-left backdrop-blur-md shadow-[0_8px_30px_rgba(245,158,11,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-white hover:shadow-[0_20px_40px_rgba(245,158,11,0.08)]"
            >
              {/* Permanent brand accent line pinned to the top of each card */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500" />

              <div>
                {/* Icon Block: Ultra-clean solid black block transforming to warm gold */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-950 text-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:shadow-amber-500/20">
                  <ServiceIcon size={20} strokeWidth={1.75} />
                </div>

                {/* Service Title */}
                <h3 className="mt-5 text-sm font-bold tracking-tight text-neutral-900 capitalize leading-snug">
                  {service.title}
                </h3>
                <span className="mt-3 inline-flex items-center text-xs font-bold text-gray-500 transition-colors group-hover:text-amber-700">
                    Learn more <ArrowRightIcon className="ml-1" size={14} />
                  </span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

    </main>);

}