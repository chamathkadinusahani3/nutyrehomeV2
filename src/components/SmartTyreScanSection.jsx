import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ScaleIcon, ScanLineIcon, ShieldCheckIcon, SparklesIcon } from 'lucide-react';
import { ScanOverlay } from './scan/ScanOverlay';
import { ScanModal } from './scan/ScanModal';

export function SmartTyreScanSection() {
  const [scanOpen, setScanOpen] = useState(false);

  return (
    <section id="smart-scan" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute right-[-80px] top-[-60px] h-72 w-72 rounded-full bg-brand-yellow/15 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1">

            <div className="relative overflow-hidden rounded-3xl border border-gray-100 shadow-[0_24px_60px_rgba(72,53,0,0.14)]">
              <img
                src="/scanimage.png"
                alt="Camera view scanning a tyre sidewall to read its size markings"
                className="h-72 w-full object-cover sm:h-96" />

              <ScanOverlay active label="Scanning tyre…" />
            </div>
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2 shadow-lg">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-brand-black">Point. Scan. Done.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2">

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-black">
                New feature
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white">
                <SparklesIcon size={12} className="text-brand-yellow" />
                Latest innovation
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-amber-300 bg-amber-50 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-amber-800">
                <ScaleIcon size={12} className="text-amber-600" />
                Patent pending
              </span>
            </div>

            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              Smart Tyre Scan
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
              Find the right tyres without knowing your tyre size. Simply open
              your camera and scan your car or tyre — our smart scanning
              experience helps identify your vehicle and tyre information.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm font-semibold text-brand-black">
              <li className="flex items-center gap-2.5">
                <ScanLineIcon size={17} className="text-brand-amber" />
                No registration or sidewall reading needed
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheckIcon size={17} className="text-brand-amber" />
                Works alongside registration and size search
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setScanOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-black px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-amber">

                <ScanLineIcon size={17} />
                Scan your tyre
              </button>
              <Link
                to="/smart-tyre-scan"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-brand-black transition hover:border-brand-yellow">

                Learn more
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <ScanModal open={scanOpen} onClose={() => setScanOpen(false)} />
    </section>);

}
