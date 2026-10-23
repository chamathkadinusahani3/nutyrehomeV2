import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CameraIcon,
  ShieldCheckIcon,
  StarIcon,
  WrenchIcon } from
'lucide-react';
import { RegistrationSearchForm } from './tyres/RegistrationSearchForm';
import { TyreSizeSearchForm } from './tyres/TyreSizeSearchForm';
import { TyreScanner } from './scan/TyreScanner';

export function HeroSearch() {
  const [tab, setTab] = useState('registration');

  return (
    <section id="top" className="relative overflow-hidden bg-brand-black">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/hero.mp4"
        poster="/hero.png"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true" />
      <div className="absolute inset-0 bg-brand-black/60" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <motion.div
          className="lg:pr-6"
          initial={{ opacity: 0, x: -22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-brand-amber" />{' '}
            Hertfordshire's tyre experts
          </div>
          <h1 className="max-w-xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl xl:text-7xl capitalize">
            Find the right tyres
            <br />
            for your <span className="text-brand-yellow">vehicle.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-200">
            Search by registration or tyre size to find tyres that fit —
            premium brands, straightforward booking, and fitting wherever
            you need it.
          </p>

          <div
            id="find-tyres"
            className="mt-9 overflow-hidden rounded-[24px] bg-white shadow-[0_24px_60px_rgba(72,53,0,0.14)] ring-1 ring-brand-light-gold/20">

            <div
              className="flex gap-2 border-b border-gray-100 p-3"
              role="tablist"
              aria-label="Tyre search method">

              {[
              { id: 'registration', label: 'Search by registration' },
              { id: 'size', label: 'Search by tyre size' },
              { id: 'scan', label: 'Scan image' }].
              map((item) =>
              <button
                key={item.id}
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={tab === item.id}
                aria-controls={`panel-${item.id}`}
                onClick={() => setTab(item.id)}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl border-2 px-2 py-3 text-xs font-bold transition-all sm:text-sm ${tab === item.id ? 'border-brand-yellow bg-brand-yellow text-brand-black shadow-md scale-[1.02]' : 'border-gray-200 text-gray-500 hover:border-brand-light-gold hover:bg-gray-50 hover:text-brand-black'}`}>

                  {item.id === 'scan' && <CameraIcon size={15} />}
                  {item.label}
                  {item.id === 'scan' &&
                <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wide ${tab === 'scan' ? 'bg-brand-black text-brand-yellow' : 'bg-brand-yellow text-brand-black'}`}>
                      New
                    </span>
                }
                </button>
              )}
            </div>

            <div className="p-5 sm:p-6">
              {tab === 'registration' &&
              <div id="panel-registration" role="tabpanel" aria-labelledby="tab-registration">
                  <RegistrationSearchForm />
                </div>
              }

              {tab === 'size' &&
              <div id="panel-size" role="tabpanel" aria-labelledby="tab-size">
                  <TyreSizeSearchForm />
                </div>
              }

              {tab === 'scan' &&
              <div id="panel-scan" role="tabpanel" aria-labelledby="tab-scan">
                  <TyreScanner variant="full" />
                  <details className="mt-4 rounded-xl bg-gray-50 p-3 text-center text-xs text-gray-500">
                    <summary className="cursor-pointer font-bold text-gray-600">
                      See an example of a good scan photo
                    </summary>
                    <img
                    src="/scanimage.png"
                    alt="Example of a good tyre photo showing the size markings on the sidewall clearly, versus a bad photo where the markings aren't visible"
                    className="mx-auto mt-3 w-full max-w-xs rounded-xl border border-brand-light-gold/40" />

                  </details>
                </div>
              }
            </div>
          </div>

          <Link
            to="/services"
            className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-white/25 bg-white/5 text-base font-extrabold text-white backdrop-blur transition hover:border-brand-yellow hover:bg-white/10 hover:text-brand-yellow focus:outline-none focus:ring-4 focus:ring-brand-yellow/30">

            <WrenchIcon size={19} />
            Service your vehicle
            <ArrowRightIcon size={18} />
          </Link>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-gray-200">
            <span className="flex items-center gap-1.5">
              <StarIcon className="fill-brand-yellow text-brand-lemon" size={16} />{' '}
              4.8 on Trustpilot
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheckIcon className="text-brand-lemon" size={16} /> Lifetime
              guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <WrenchIcon className="text-brand-lemon" size={16} /> Same day
              fitting
            </span>
          </div>
        </motion.div>

        {/* Spacer: reserves the right column's width on large screens so the
            text column doesn't stretch full-width under the full-bleed image. */}
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>);

}
