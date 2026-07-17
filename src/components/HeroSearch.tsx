import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  CameraIcon,
  CheckCircle2Icon,
  MapPinIcon,
  SearchIcon,
  ShieldCheckIcon,
  StarIcon,
  WrenchIcon } from
'lucide-react';
type SearchType = 'registration' | 'size' | 'scan';
export function HeroSearch() {
  const [tab, setTab] = useState<SearchType>('registration');
  const [submitted, setSubmitted] = useState(false);
  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }
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
          initial={{
            opacity: 0,
            x: -22
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6
          }}>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-brand-amber" />{' '}
            Hertfordshire's tyre experts
          </div>
          <h1 className="max-w-xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl xl:text-7xl capitalize">
            Buy tyres.
            <br />
            Get fitted <span className="text-brand-yellow">easily.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-200">
            Premium tyres, straightforward booking, and fitting wherever you
            need it. Find your perfect fit in under a minute.
          </p>

          <div
            id="find-tyres"
            className="mt-9 overflow-hidden rounded-[24px] bg-white shadow-[0_24px_60px_rgba(72,53,0,0.14)] ring-1 ring-brand-light-gold/20">

            <div
              className="flex border-b border-gray-100 p-2"
              role="tablist"
              aria-label="Tyre search method">

              {(
              [
              {
                id: 'registration',
                label: 'Vehicle registration'
              },
              {
                id: 'size',
                label: 'Tyre size'
              },
              {
                id: 'scan',
                label: 'Scan image'
              }] as
              const).
              map((item) =>
              <button
                key={item.id}
                role="tab"
                aria-selected={tab === item.id}
                onClick={() => {
                  setTab(item.id);
                  setSubmitted(false);
                }}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl px-2 py-3 text-xs font-bold sm:text-sm ${tab === item.id ? 'bg-brand-cream text-brand-black' : 'text-gray-500 hover:text-brand-black'}`}>

                  {item.id === 'scan' && <CameraIcon size={15} />}
                  {item.label}
                </button>
              )}
            </div>
            <form onSubmit={submitSearch} className="p-5 sm:p-6">
              {tab === 'registration' &&
              <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr]">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-gray-600">
                      Vehicle registration
                    </span>
                    <input
                    required
                    placeholder="e.g. AB12 CDE"
                    className="h-14 w-full rounded-xl border-2 border-brand-yellow bg-brand-yellow px-4 font-mono text-xl font-extrabold uppercase tracking-widest text-brand-black placeholder:text-brand-black/60 focus:outline-none focus:ring-4 focus:ring-brand-yellow/25" />

                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-gray-600">
                      Your postcode
                    </span>
                    <input
                    required
                    placeholder="AL1 1AA"
                    className="h-14 w-full rounded-xl border border-gray-200 px-4 font-bold uppercase focus:border-brand-lemon focus:outline-none focus:ring-4 focus:ring-brand-yellow/20" />

                  </label>
                </div>
              }
              {tab === 'size' &&
              <>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                  {
                    label: 'Width',
                    example: '205',
                    options: ['165', '175', '185', '195', '205', '215', '225', '235', '245', '255']
                  },
                  {
                    label: 'Profile',
                    example: '55',
                    options: ['30', '35', '40', '45', '50', '55', '60', '65', '70']
                  },
                  {
                    label: 'Rim',
                    example: '16',
                    options: ['14', '15', '16', '17', '18', '19', '20', '21']
                  }].
                  map((field) =>
                <label key={field.label}>
                      <span className="mb-2 block text-xs font-bold text-gray-600">
                        {field.label}
                      </span>
                      <select
                    required
                    defaultValue=""
                    className="h-14 w-full rounded-xl border border-gray-200 bg-white px-3 text-center font-bold focus:border-brand-lemon focus:outline-none">
                        <option value="" disabled>E.g. {field.example}</option>
                        {field.options.map((option) =>
                    <option key={option} value={option}>
                            {option}
                          </option>
                    )}
                      </select>
                    </label>
                )}
                  <label>
                    <span className="mb-2 block text-xs font-bold text-gray-600">
                      Postcode
                    </span>
                    <input
                    required
                    placeholder="E.g. AL1 1AA"
                    className="h-14 w-full rounded-xl border border-gray-200 px-4 text-center font-bold uppercase focus:border-brand-lemon focus:outline-none" />

                  </label>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100">
                  <img
                    src="/tyreref.png"
                    alt="Where to find your tyre size: width, profile and rim numbers are printed on the tyre sidewall"
                    className="h-auto w-full object-cover" />
                  <p className="bg-brand-cream px-4 py-2.5 text-center text-xs font-bold text-brand-black">
                    Not sure of your size? It's printed on your tyre's sidewall.
                  </p>
                </div>
              </>
              }
              {tab === 'scan' &&
              <div className="rounded-2xl border-2 border-dashed border-brand-light-gold/50 bg-brand-cream p-6 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-yellow text-brand-black">
                    <CameraIcon size={26} />
                  </div>
                  <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-gray-600">
                    Use your camera or upload a photo to quickly find your
                    tyre size.
                  </p>
                  <label className="mx-auto mt-5 flex h-14 w-full max-w-xs cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-black px-6 text-sm font-extrabold text-white transition hover:bg-brand-amber">
                    <CameraIcon size={19} />
                    Scan or upload image
                    <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    onChange={() => setSubmitted(true)} />

                  </label>
                </div>
              }
              {tab !== 'scan' &&
              <button className="mt-5 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-brand-black text-base font-extrabold text-white transition hover:bg-brand-amber focus:outline-none focus:ring-4 focus:ring-brand-yellow/40">
                <SearchIcon size={19} /> Find my tyres{' '}
                <ArrowRightIcon size={18} />
              </button>
              }
              {submitted &&
              <p
                role="status"
                className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-black">

                  <CheckCircle2Icon size={17} />{' '}
                  {tab === 'scan' ?
                'Got it — analyzing your photo for a tyre match.' :
                'Great choice — your tyre matches are ready to browse.'}
                </p>
              }
            </form>
          </div>

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

      {/* Floating info badges, pinned to the hero's corners over the video. */}
      <motion.div
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: [0, -8, 0]
        }}
        transition={{
          opacity: {
            duration: 0.6,
            delay: 0.4
          },
          y: {
            repeat: Infinity,
            duration: 3.5,
            delay: 0.4
          }
        }}
        className="absolute right-5 top-6 hidden items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-xl lg:flex">

        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-cream">
          <WrenchIcon className="text-brand-black" size={20} />
        </span>
        <div>
          <p className="text-xs font-bold text-gray-500">Mobile fitting</p>
          <p className="font-extrabold text-brand-black">At your doorstep</p>
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: [0, 8, 0]
        }}
        transition={{
          opacity: {
            duration: 0.6,
            delay: 0.5
          },
          y: {
            repeat: Infinity,
            duration: 4.2,
            delay: 0.5
          }
        }}
        className="absolute bottom-6 right-5 hidden rounded-2xl bg-brand-yellow p-4 shadow-xl lg:block">

        <p className="text-xs font-bold uppercase tracking-wider text-brand-black">
          Available today
        </p>
        <p className="font-display text-2xl font-extrabold text-brand-black">
          Same day
        </p>
        <div className="mt-1 flex items-center gap-1 text-xs font-bold">
          <MapPinIcon size={13} /> Hertfordshire
        </div>
      </motion.div>
    </section>);

}
