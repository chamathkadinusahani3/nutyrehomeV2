import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  BellIcon,
  CameraIcon,
  CarFrontIcon,
  CheckCircle2Icon,
  ClipboardCheckIcon,
  GaugeIcon,
  HistoryIcon,
  MapPinIcon,
  RefreshCwIcon,
  ScanLineIcon,
  SearchIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  SparklesIcon,
  TruckIcon,
  UsersIcon,
  WrenchIcon } from
'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Footer } from './Footer';
import { ScanModal } from './scan/ScanModal';
import { TyreScanner } from './scan/TyreScanner';

const steps = [
{ number: '1', title: 'Open your camera', text: 'Tap "Scan your tyre" and allow camera access.', icon: CameraIcon },
{ number: '2', title: 'Point at your tyre', text: 'Position the tyre sidewall inside the scan frame.', icon: ScanLineIcon },
{ number: '3', title: 'Let us scan', text: 'Keep your camera steady while the scanning system analyzes the image.', icon: SparklesIcon },
{ number: '4', title: 'Find your tyres', text: 'Review the detected information and browse matching tyres.', icon: SearchIcon }];


const mobileCapabilities = [
'Scan your car or tyre',
'Save your vehicle profile',
'Track tyre condition and usage',
'Track tyre mileage and age',
'Store full tyre history',
'Get tyre replacement reminders',
'Find matching replacement tyres',
'Book tyre fitting in a tap'];


const useCases = [
{
  icon: SearchIcon,
  title: 'Customer tyre search',
  text: "Doesn't know their tyre size? Scan the tyre and get help identifying it in seconds."
},
{
  icon: WrenchIcon,
  title: 'Tyre fitting',
  text: 'Technicians can scan a tyre before fitting to help verify the specification.'
},
{
  icon: ClipboardCheckIcon,
  title: 'Tyre staging',
  text: 'Scan and verify tyres before staging them against a specific vehicle.'
},
{
  icon: TruckIcon,
  title: 'Fleet management',
  text: 'Fleet operators can scan and maintain vehicle and tyre records at scale.'
},
{
  icon: RefreshCwIcon,
  title: 'Tyre replacement',
  text: 'Scan an existing tyre and quickly find suitable replacement options.'
},
{
  icon: MapPinIcon,
  title: 'Mobile tyre service',
  text: 'A technician can scan tyres on-site before recommending a replacement.'
}];


function DemoSection() {
  const [demoStarted, setDemoStarted] = useState(false);

  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
          See it in action
        </span>
        <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
          Try the scan demo
        </h2>
        <p className="mt-3 text-gray-600">
          This is a live product demo using sample data — no image recognition
          runs against your camera yet, but the flow works exactly as it will
          once our recognition service is connected.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        {demoStarted ?
        <TyreScanner variant="full" showLearnMore={false} /> :

        <div className="text-center">
            <button
            type="button"
            onClick={() => setDemoStarted(true)}
            className="mx-auto flex h-14 items-center justify-center gap-2 rounded-xl bg-brand-black px-7 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-amber">

              <ScanLineIcon size={18} />
              Start scan demo
            </button>
          </div>
        }
      </div>
    </section>);

}

export function SmartTyreScanPage() {
  const [scanOpen, setScanOpen] = useState(false);

  useSeo({
    title: 'Smart Tyre Scan | NUTYRE UK',
    description: 'Discover NUTYRE Smart Tyre Scan — an innovative way to identify your vehicle and tyre information using your camera.',
    path: '/smart-tyre-scan',
    image: '/scanimage.png',
    type: 'website'
  });

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-stone-950 py-24 text-white">
        <div className="pointer-events-none absolute right-[-60px] top-[-80px] h-72 w-72 rounded-full bg-brand-yellow/10 blur-[130px]" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-neutral-300 transition hover:text-brand-yellow">

            <ArrowLeftIcon size={16} />
            Home
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-black">
              New
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-neutral-200">
              <SparklesIcon size={12} className="text-brand-yellow" />
              Latest innovation
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-neutral-400">
              Patent pending
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">

            Smart Tyre Scan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 max-w-xl text-xl font-semibold text-brand-yellow">

            Your camera. Your car. The right tyre.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-300">

            Finding the right tyre doesn't have to mean searching for numbers
            on a sidewall. NUTYRE's Smart Tyre Scan is designed to make tyre
            identification simpler — just point your camera and let us help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3">

            <button
              type="button"
              onClick={() => setScanOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-yellow px-7 py-4 font-extrabold uppercase tracking-wide text-brand-black transition hover:bg-brand-amber">

              <ScanLineIcon size={17} />
              Try smart scan
            </button>
            <Link
              to="/#find-tyres"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/25 px-7 py-4 font-extrabold uppercase tracking-wide text-white transition hover:border-brand-yellow hover:text-brand-yellow">

              Search tyres manually
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            How it works
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            How Smart Tyre Scan works
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) =>
          <motion.article
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/50 hover:shadow-lg">

              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-extrabold tracking-tight text-brand-yellow/30 select-none">
                    0{step.number}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-black text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-amber">
                    <step.icon size={20} strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-brand-black">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {step.text}
                </p>
              </div>
            </motion.article>
          )}
        </div>
      </section>

      {/* Interactive demo */}
      <div className="bg-brand-cream">
        <DemoSection />
      </div>

      {/* Mobile app concept */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-stone-950 py-24 text-white">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-200">
              <SmartphoneIcon size={13} className="text-brand-yellow" />
              Concept — coming to the NUTYRE app
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Take Smart Tyre Scan with you
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-300">
              With the NUTYRE mobile app, tyre identification can become part
              of your everyday driving experience — scan, track and manage
              every tyre on your vehicle from your pocket.
            </p>
          </div>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
            {/* Vehicle profile mock */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">My vehicle</p>
              <h3 className="mt-1 font-display text-xl font-extrabold text-white">BMW 3 Series</h3>
              <p className="text-sm text-neutral-400">Registration: AB12 XYZ</p>

              <p className="mt-6 text-[11px] font-bold uppercase tracking-widest text-neutral-400">Current tyres</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {['Front left', 'Front right', 'Rear left', 'Rear right'].map((position) =>
                <div key={position} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-neutral-400">{position}</p>
                    <p className="mt-0.5 font-mono text-sm font-extrabold text-white">205/55 R16</p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-brand-yellow px-4 py-2.5 text-xs font-extrabold text-brand-black">
                  <ScanLineIcon size={14} />
                  Scan tyres
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-4 py-2.5 text-xs font-extrabold text-white">
                  <GaugeIcon size={14} />
                  Track tyre usage
                </span>
              </div>
            </motion.div>

            {/* Tyre health mock */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">Tyre health</p>
              <div className="mt-3 space-y-2.5">
                {[
                { position: 'Front left', status: 'Good', color: 'bg-emerald-500' },
                { position: 'Front right', status: 'Good', color: 'bg-emerald-500' },
                { position: 'Rear left', status: 'Monitor', color: 'bg-amber-500' },
                { position: 'Rear right', status: 'Good', color: 'bg-emerald-500' }].
                map((tyre) =>
                <div key={tyre.position} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm font-semibold text-neutral-200">{tyre.position}</span>
                    <span className="flex items-center gap-1.5 text-xs font-extrabold text-white">
                      <span className={`h-2 w-2 rounded-full ${tyre.color}`} />
                      {tyre.status}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <BellIcon size={16} className="shrink-0 text-brand-yellow" />
                <p className="text-xs font-semibold text-neutral-300">
                  Next inspection reminder: 1,200 miles
                </p>
              </div>
              <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <HistoryIcon size={16} className="shrink-0 text-brand-yellow" />
                <p className="text-xs font-semibold text-neutral-300">
                  Full fitting &amp; rotation history stored per tyre
                </p>
              </div>
            </motion.div>
          </div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">

            {mobileCapabilities.map((capability) =>
            <li key={capability} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-semibold text-neutral-200">
                <CheckCircle2Icon size={15} className="mt-0.5 shrink-0 text-brand-yellow" />
                {capability}
              </li>
            )}
          </motion.ul>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-neutral-500">
            These mobile app features are a future concept and are not yet
            available — they illustrate where Smart Tyre Scan is heading.
          </p>
        </div>
      </section>

      {/* Use case spotlight: staging workflow */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              Use case
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              Managing tyres before fitting
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              A technician receives several tyres that need to be staged for
              different vehicles. Instead of manually checking every vehicle
              and tyre size, they use Smart Tyre Scan to confirm a match
              before the tyre ever reaches the bay.
            </p>
            <ol className="mt-6 space-y-2.5 text-sm text-gray-600">
              {[
              'Open the NUTYRE app and select the vehicle',
              'Scan the vehicle to confirm the required tyre spec',
              'Scan the tyre being staged',
              'The app compares the tyre against the requirement',
              'Tyre is marked as staged and ready to fit'].
              map((item, index) =>
              <li key={item} className="flex items-start gap-2.5">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-yellow/20 font-mono text-xs font-extrabold text-brand-black">
                    {index + 1}
                  </span>
                  {item}
                </li>
              )}
            </ol>
            <p className="mt-5 text-xs leading-relaxed text-gray-400">
              This staging workflow is a conceptual future capability of the
              NUTYRE app — it isn't live in the scan demo above.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex items-center gap-2 text-brand-black">
              <CarFrontIcon size={18} />
              <span className="text-xs font-extrabold uppercase tracking-wide text-gray-500">Vehicle</span>
            </div>
            <p className="mt-1 font-display text-lg font-extrabold text-brand-black">BMW 3 Series</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400">Required</p>
                <p className="mt-1 font-mono text-base font-extrabold text-brand-black">205/55 R16 91V</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400">Scanned tyre</p>
                <p className="mt-1 font-mono text-base font-extrabold text-brand-black">205/55 R16 91V</p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3.5">
              <CheckCircle2Icon size={19} className="text-emerald-600" />
              <div>
                <p className="text-sm font-extrabold text-emerald-700">Match</p>
                <p className="text-xs text-emerald-600">Tyre is suitable for staging.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* More use cases */}
      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <UsersIcon size={12} className="text-brand-yellow" />
              Who it's for
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              Where Smart Tyre Scan could help
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) =>
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-black text-white">
                  <useCase.icon size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-brand-black">{useCase.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{useCase.text}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-brand-black py-20 text-white">
        <div className="pointer-events-none absolute right-[-60px] top-[-80px] h-72 w-72 rounded-full bg-brand-yellow/10 blur-[100px]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">

          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to try Smart Tyre Scan?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-neutral-300">
            Scan your tyre for a quick demo, or search by registration or size
            if you'd rather find your tyres the traditional way.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setScanOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-yellow px-7 py-4 font-extrabold uppercase tracking-wide text-brand-black transition hover:bg-brand-amber">

              <ScanLineIcon size={17} />
              Try smart scan
            </button>
            <Link
              to="/#find-tyres"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-7 py-4 font-extrabold uppercase tracking-wide text-white transition hover:border-brand-yellow hover:text-brand-yellow">

              <ShieldCheckIcon size={16} />
              Search tyres manually
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
      <ScanModal open={scanOpen} onClose={() => setScanOpen(false)} />
    </>);

}
