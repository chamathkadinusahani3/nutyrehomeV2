import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarCheckIcon,
  CarFrontIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  Clock3Icon,
  MapPinIcon,
  MessageCircleIcon,
  PackageCheckIcon,
  ShieldCheckIcon,
  StarIcon,
  TruckIcon } from
'lucide-react';
import { CoverageMap } from './CoverageMap';
import { WhyChooseUs } from './WhyChooseUs';
import { AboutUs } from './AboutUs';
import { PromoCards } from './PromoCards';
const fittingOptions = [
{
  title: 'Home delivery',
  text: 'Delivered safely to your door.',
  icon: PackageCheckIcon,
  color: 'bg-brand-lemon/25',
  action: 'Choose delivery'
},
{
  title: 'Mobile tyre fitting',
  text: 'We fit at home, work or roadside.',
  icon: TruckIcon,
  color: 'bg-brand-cream',
  action: 'Book mobile fitting'
},
{
  title: 'Garage fitting',
  text: '100+ trusted local fitting partners.',
  icon: CarFrontIcon,
  color: 'bg-gray-100',
  action: 'Find a garage'
},
{
  title: 'Same day fitting',
  text: 'Need tyres today? We can help.',
  icon: Clock3Icon,
  color: 'bg-brand-amber/20',
  action: 'Check availability'
}];

const faq = [
[
'Can I get tyres fitted at home?',
'Yes. Our mobile technicians can fit your new tyres at home, at work, or anywhere safe and convenient across Hertfordshire.'],

[
'What does my fitted price include?',
'Every fitted price includes your tyre, professional fitting, electronic balancing, a new valve and environmentally responsible disposal of your old tyre.'],

[
'Can I book a same-day tyre fitting?',
"Same-day slots are available in selected local areas, subject to stock and technician availability. Search with your postcode to see today's appointments."],

[
'Do you offer a tyre guarantee?',
'Every eligible tyre includes our Lifetime Tyre Guarantee, designed to give you complete confidence mile after mile.']];


export function TrustSections() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  return (
    <>
    
       
      <PromoCards />
      <AboutUs />

      

     <section id="coverage" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
  {/* The main container turns into a deep neutral-950/black luxury split frame */}
  <div className="grid overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-950 shadow-[0_24px_50px_rgba(0,0,0,0.15)] lg:grid-cols-2">
    
    {/* Content Panel: Retains a bright, hyper-clean light mode interior contrasting against the black container rim */}
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative p-8 sm:p-12 md:p-16 overflow-hidden bg-white">
      {/* Premium subtle architectural tech-grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f59e0b08_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b08_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_0%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute -left-12 -top-12 -z-10 h-48 w-48 rounded-full bg-amber-100/40 blur-3xl" />

      {/* Overline Tag: Swapped for a striking high-contrast black badge */}
      <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white border border-neutral-800">
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
        Local by nature
      </span>
      
      {/* Heading: Deep premium typography */}
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl capitalize">
        Covering Hertfordshire <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-amber-600 to-amber-500">and beyond.</span>
      </h2>
      
      {/* Subtext */}
      <p className="mt-4 text-base leading-relaxed text-neutral-500 max-w-lg">
        From Hatfield to St Albans, our dedicated mobile fitting fleet brings professional, ultra-convenient tyre care straight to your home or workspace.
      </p>
      
      {/* Location Badge Grid: Now with dark micro-borders that sharpen the layout */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {[
          'Hatfield',
          'Welwyn Garden City',
          'St Albans',
          'Stevenage',
          'Hertford',
          'Potters Bar'
        ].map((place) => (
          <div
            key={place}
            className="group flex items-center gap-2 rounded-xl border border-neutral-200/60 bg-neutral-50/50 px-4 py-3 text-sm font-medium text-neutral-800 transition-all duration-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white hover:shadow-md"
          >
            <MapPinIcon className="text-amber-500 transition-colors duration-300 group-hover:text-yellow-400" size={16} strokeWidth={2} />
            <span className="truncate">{place}</span>
          </div>
        ))}
      </div>
      
      {/* Premium Dynamic CTA Button */}
      <div className="mt-10">
        <a
          href="#find-tyres"
          className="inline-flex items-center justify-center rounded-xl bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-500/20 group"
        >
          <span>Check your postcode</span>
          <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </motion.div>

    {/* Map Showcase Frame: Nestled safely inside the high-end dark housing */}
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative min-h-[400px] bg-neutral-900 lg:border-l lg:border-neutral-900">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80 pointer-events-none" />
      <CoverageMap />
      
      {/* Sleek Floating Map Badge */}
      <div className="absolute bottom-6 left-1/2 z-[1000] -translate-x-1/2 whitespace-nowrap rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2.5 shadow-2xl backdrop-blur-md">
        <p className="text-[10px] font-bold tracking-widest text-white uppercase flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-400 animate-ping" />
          Nutyre Mobile Fitting Zone
        </p>
      </div>
    </motion.div>

  </div>
</section>

      <section id="mobile-fitting" className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-amber-50/20 to-white py-24 text-neutral-900">
  {/* Architectural soft background aura */}
  <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-amber-200/10 to-yellow-100/20 blur-3xl" />
  
  <div className="mx-auto max-w-7xl px-6 sm:px-8">
    
    {/* Header Context Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl">
      {/* High-contrast dark badge */}
      <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white border border-neutral-800">
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
        Fitting made flexible
      </span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl capitalize">
        Your tyres. Your place. <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-amber-600 to-amber-500">Your time.</span>
      </h2>
      <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-500 max-w-2xl">
        Choose the service structure that fits seamlessly around your calendar. We guarantee completely upfront, transparent pricing with absolutely zero hidden surprises.
      </p>
    </motion.div>

    {/* Options Bento-Grid Layer with Static Gradients */}
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {fittingOptions.map((option, index) => {
        const Icon = option.icon;
        return (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            key={option.title}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-200/50 bg-gradient-to-br from-yellow-50 via-amber-100/40 to-white p-6 shadow-[0_8px_30px_rgb(245,158,11,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/80 hover:shadow-[0_20px_40px_rgba(245,158,11,0.1)]"
          >
            {/* Soft ambient orange glow inside the card, always active */}
            <div className="absolute -right-10 -bottom-10 -z-10 h-32 w-32 rounded-full bg-amber-200/30 blur-2xl transition-transform duration-500 group-hover:scale-125" />
            
            {/* Permanent Top Accent Border */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500" />

            <div>
              {/* Icon Container: Inverted dark color to provide a focal pop on top of the yellow base */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-950 text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:shadow-amber-500/20">
                <Icon size={20} strokeWidth={1.75} />
              </div>

              {/* Card Header Text */}
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-900 capitalize">
                {option.title}
              </h3>

              {/* Card Descriptive Text Body */}
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed font-normal">
                {option.text}
              </p>
            </div>

            {/* Micro-interactive Text Link */}
            <div className="mt-8">
              <a
                href="#find-tyres"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 transition-all duration-200 group-hover:text-amber-700"
              >
                <span>{option.action}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.article>
        );
      })}
    </div>
  </div>
</section>

     

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50/20 to-neutral-50 py-24 text-neutral-900">
  {/* Decorative architectural background element */}
  <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-200/10 to-yellow-100/20 blur-3xl" />

  <div className="mx-auto max-w-7xl px-6 sm:px-8">
    
    {/* Header Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white border border-neutral-800">
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
        A simpler way to book
      </span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl capitalize">
        How <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-amber-600 to-amber-500">Nutyre works</span>
      </h2>
    </motion.div>

    {/* Process Steps Grid */}
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        ['1', 'Search tyres', 'Enter your registration or tyre size.', CarFrontIcon],
        ['2', 'Choose fitting', 'Mobile, garage or delivery — you decide.', TruckIcon],
        ['3', 'Pick a time', 'Choose a slot that works for you.', CalendarCheckIcon],
        ['4', 'Drive happy', 'We handle the rest, expertly.', CheckCircle2Icon]
      ].map(([number, title, text, Icon], index) => {
        const StepIcon = Icon;
        return (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            key={number as string}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-200/50 bg-gradient-to-br from-yellow-50 via-amber-100/40 to-white p-6 shadow-[0_8px_30px_rgb(245,158,11,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/80 hover:shadow-[0_20px_40px_rgba(245,158,11,0.1)]"
          >
            {/* Permanent subtle ambient glow inside card corner */}
            <div className="absolute -right-8 -bottom-8 -z-10 h-28 w-28 rounded-full bg-amber-200/20 blur-2xl transition-transform duration-500 group-hover:scale-125" />
            
            {/* Brand Amber Top Border Stripe */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500" />

            <div>
              {/* Top Row: Outlined Step Number and Dark Icon Block */}
              <div className="flex items-center justify-between">
                {/* Modern transparent step number outline */}
                <span className="text-5xl font-extrabold tracking-tight text-amber-500/30 select-none">
                  0{number as string}
                </span>
                
                {/* Icon Container: High-contrast rich dark block */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-950 text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:shadow-amber-500/20">
                  <StepIcon size={20} strokeWidth={1.75} />
                </div>
              </div>

              {/* Step Title */}
              <h3 className="mt-8 text-lg font-semibold tracking-tight text-neutral-900 capitalize">
                {title as string}
              </h3>

              {/* Step Description */}
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed font-normal">
                {text as string}
              </p>
            </div>

            {/* Micro step-indicator connector line effect on desktop */}
            <div className="mt-6 h-[2px] w-8 rounded-full bg-amber-300/40 transition-all duration-300 group-hover:w-16 group-hover:bg-amber-500" />
          </motion.article>
        );
      })}
    </div>
  </div>
</section>


       <WhyChooseUs />
      

     

      

      <section id="faq" className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50/10 to-neutral-50 py-24 text-neutral-900">
  {/* Soft architectural background aura */}
  <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-200/10 to-yellow-100/15 blur-3xl" />

  {/* Van image: full-bleed across the entire right half of the section
      itself, not the padded max-w-7xl container. */}
  <motion.div
    initial={{ opacity: 0, x: 24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative flex h-[260px] w-full items-center justify-center overflow-hidden bg-brand-white sm:h-[360px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
  <img
    src="/faq.png"
    alt="Nutyre mobile tyre service van"
    className="h-full w-full object-cover object-center scale-100 transition-transform duration-500 hover:scale-115"
  />
</motion.div>

  <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
    <div>
    {/* Header Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      {/* High-contrast dark badge */}
      <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white border border-neutral-800">
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
        Need to know
      </span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl capitalize">
        Frequently asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-amber-600 to-amber-500">questions</span>
      </h2>
    </motion.div>

    {/* FAQ List */}
    <div className="mt-12 space-y-4">
      {faq.map(([question, answer], index) => {
        const isOpen = activeFaq === index;
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            key={question}
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen
                ? 'border-amber-400/60 bg-gradient-to-br from-yellow-50 via-amber-100/30 to-white shadow-[0_12px_30px_rgba(245,158,11,0.08)]'
                : 'border-amber-200/40 bg-white hover:border-amber-300/80 hover:shadow-[0_8px_20px_rgba(245,158,11,0.04)]'
            }`}
          >
            {/* Top Accent Line (Always on, transitions width) */}
            <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 transition-all duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`} />

            <button
              onClick={() => setActiveFaq(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-6 text-left text-base font-bold text-neutral-950 transition-colors"
            >
              <span className="tracking-tight">{question}</span>
              
              {/* Dynamic Icon Container */}
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                isOpen 
                  ? 'bg-neutral-950 text-white shadow-md' 
                  : 'bg-amber-100/50 text-amber-600 group-hover:bg-neutral-950 group-hover:text-white'
              }`}>
                <ChevronDownIcon
                  size={16}
                  strokeWidth={2.5}
                  className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </span>
            </button>

            {/* Answer body with micro-animation padding and layout structure */}
            <div 
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[500px] border-t border-amber-200/40 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
              }`}
            >
              <div className="p-6 text-sm leading-relaxed text-neutral-600 font-normal">
                {answer}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
    </div>
    <div className="hidden lg:block" aria-hidden="true" />
  </div>
</section>

    </>);

}