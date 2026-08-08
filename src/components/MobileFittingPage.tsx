import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarCheckIcon,
  CarFrontIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  Clock3Icon,
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  TrashIcon,
  TruckIcon,
  WrenchIcon } from
'lucide-react';
import { CoverageMap } from './CoverageMap';
import { Footer } from './Footer';
import { useSeo } from '../hooks/useSeo';

const trustPoints = [
{ icon: Clock3Icon, label: 'Same day slots available' },
{ icon: ShieldCheckIcon, label: 'Fully insured technicians' },
{ icon: CheckCircle2Icon, label: 'Lifetime tyre guarantee' },
{ icon: CreditCardIcon, label: 'Pay on the day or online' }];


const steps = [
{ number: '1', title: 'Search your tyres', text: 'Enter your registration or tyre size to see your matches.', icon: CarFrontIcon },
{ number: '2', title: 'Choose mobile fitting', text: 'Pick "mobile service" and tell us where to come to.', icon: TruckIcon },
{ number: '3', title: 'Pick a time', text: 'Choose a slot that works around your day.', icon: CalendarCheckIcon },
{ number: '4', title: 'We come to you', text: 'Our fully equipped van fits your tyres on the spot.', icon: CheckCircle2Icon }];


const included = [
{ icon: TruckIcon, title: 'No garage visit needed', text: "We bring the workshop to you — home, work, or roadside." },
{ icon: WrenchIcon, title: 'Fully equipped fitting van', text: 'Everything needed for fitting, balancing and valves on board.' },
{ icon: ShieldCheckIcon, title: 'Insured, trained technicians', text: 'Every fitter is fully insured and trained to Nutyre standard.' },
{ icon: Clock3Icon, title: 'Same-day availability', text: 'Subject to stock and area — search your postcode to check.' },
{ icon: TrashIcon, title: 'Old tyre disposal included', text: 'We take your old tyres away and recycle them responsibly.' },
{ icon: CreditCardIcon, title: 'Simple, upfront pricing', text: 'Your call-out fee is shown before you confirm — no surprises.' }];


const coverageTowns = ['Hatfield', 'Welwyn Garden City', 'St Albans', 'Stevenage', 'Hertford', 'Potters Bar'];

const faqs = [
{
  question: 'Can I get tyres fitted at home?',
  answer: 'Yes. Our mobile technicians can fit your new tyres at home, at work, or anywhere safe and convenient across Hertfordshire.'
},
{
  question: 'Do I need to be there while you fit my tyres?',
  answer: "Someone over 18 needs to be present to give us access to the vehicle and make payment, but you're welcome to carry on with your day nearby while we work."
},
{
  question: 'What areas do you cover?',
  answer: 'We currently cover Hatfield, Welwyn Garden City, St Albans, Stevenage, Hertford, Potters Bar and the surrounding areas. Search your postcode to check availability near you.'
},
{
  question: 'What does my fitted price include?',
  answer: 'Every fitted price includes your tyre, professional fitting, electronic balancing, a new valve and environmentally responsible disposal of your old tyre.'
},
{
  question: 'Can I book a same-day mobile fitting?',
  answer: "Same-day slots are available in selected local areas, subject to stock and technician availability. Search with your postcode to see today's appointments."
},
{
  question: 'Do you offer a tyre guarantee?',
  answer: 'Every eligible tyre includes our Lifetime Tyre Guarantee, designed to give you complete confidence mile after mile.'
}];


export function MobileFittingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useSeo({
    title: 'Mobile Tyre Fitting in Hertfordshire — Nutyre',
    description: 'Convenient mobile tyre fitting in Hertfordshire. Our fully equipped van comes to your home, work or roadside — same-day slots, fully insured technicians, and a lifetime tyre guarantee.',
    path: '/mobile-tyre-fitting-service',
    image: '/faq.png',
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Mobile tyre fitting',
      provider: { '@type': 'Organization', name: 'Nutyre' },
      areaServed: coverageTowns,
      description: 'Mobile tyre fitting service bringing professional tyre fitting to your home, work or roadside across Hertfordshire.'
    }
  });

  return (
    <>
      <section className="relative overflow-hidden bg-neutral-950 py-24 text-white">
        <div className="absolute inset-0">
          <img
            src="/mobilehero.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-60" />

          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/75 to-neutral-950/20" />
        </div>
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-neutral-300 transition hover:text-brand-yellow">

            <ArrowLeftIcon size={16} />
            Home
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 flex w-fit items-center gap-1.5 rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-black">

            Mobile fitting
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">

            Convenient Mobile Tyre Fitting in Hertfordshire
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-300">

            Skip the garage queue. Our fully equipped fitting van comes to
            your home, workplace or roadside — with the same expert fitting,
            balancing and lifetime guarantee you'd get in branch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3">

            <a
              href="/#find-tyres"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-yellow px-7 py-4 font-extrabold uppercase tracking-wide text-brand-black transition hover:bg-brand-amber">

              Find my tyres
              <ArrowRightIcon size={16} />
            </a>
            <a
              href="tel:07311694631"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/25 px-7 py-4 font-extrabold uppercase tracking-wide text-white transition hover:border-brand-yellow hover:text-brand-yellow">

              <PhoneIcon size={16} />
              07311 694 631
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">

            {trustPoints.map((point) =>
            <div
              key={point.label}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-bold text-neutral-200 backdrop-blur">

                <point.icon size={16} className="shrink-0 text-brand-yellow" />
                {point.label}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            A simpler way to book
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            How mobile fitting works
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

      {/* On the job */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-lg">

            <img
              src="/mobile.png"
              alt="Nutyre mobile fitting van and technician fitting tyres on driveways across Hertfordshire"
              className="h-full w-full object-cover" />

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              Real jobs, real vans
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              On your driveway, not in a queue
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-gray-600">
              Every Nutyre van is fully kitted out with everything needed to
              fit, balance and torque your wheels to spec — right where your
              car is parked. No towing, no waiting room, no wasted afternoon.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
              'Fully stocked fitting van with jacks, balancers and torque tools',
              'Technicians arrive in your booked time slot',
              'Old tyres removed and recycled on the spot'].
              map((item) =>
              <li key={item} className="flex items-start gap-2.5 font-semibold text-brand-black">
                  <CheckCircle2Icon size={18} className="mt-0.5 shrink-0 text-brand-amber" />
                  {item}
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              What's included
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              Everything you need, nothing you don't
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item, index) =>
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-black text-white">
                  <item.icon size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-brand-black">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.text}</p>
                </div>
              </motion.div>
            )}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-yellow/40 bg-white p-5 text-sm text-gray-600 sm:items-center">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-yellow/20 text-brand-black">
              <CreditCardIcon size={17} />
            </span>
            Mobile fitting adds a small call-out fee (from £20) on top of your
            tyre price — always shown upfront in your booking summary before
            you confirm.
          </div>
        </div>
      </section>

      {/* Coverage area */}
      <section id="coverage" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-950 shadow-[0_24px_50px_rgba(0,0,0,0.15)] lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-white p-8 sm:p-12 md:p-16">

            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              Local by nature
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Covering Hertfordshire and beyond
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-500">
              From Hatfield to St Albans, our dedicated mobile fitting fleet
              brings professional, ultra-convenient tyre care straight to
              your home or workplace.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {coverageTowns.map((place) =>
              <div
                key={place}
                className="flex items-center gap-2 rounded-xl border border-neutral-200/60 bg-neutral-50/50 px-4 py-3 text-sm font-medium text-neutral-800">

                  <MapPinIcon className="text-brand-amber" size={16} />
                  <span className="truncate">{place}</span>
                </div>
              )}
            </div>

            <a
              href="/#find-tyres"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-amber">

              Check your postcode
              <ArrowRightIcon size={15} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative min-h-[340px] bg-neutral-900 lg:border-l lg:border-neutral-900">

            <CoverageMap />
            <div className="pointer-events-none absolute bottom-6 left-1/2 z-[1000] -translate-x-1/2 whitespace-nowrap rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2.5 shadow-2xl">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                Nutyre Mobile Fitting Zone
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            Need to know
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">

                  <span className="font-bold text-brand-black">{faq.question}</span>
                  <ChevronDownIcon
                    size={18}
                    className={`shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-amber' : ''}`} />

                </button>
                {isOpen &&
                <p className="px-5 pb-5 leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                }
              </motion.div>);

          })}
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
            Ready to book your mobile fitting?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-neutral-300">
            Search your tyres, choose mobile fitting at checkout, and we'll
            come to you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/#find-tyres"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-yellow px-7 py-4 font-extrabold uppercase tracking-wide text-brand-black transition hover:bg-brand-amber">

              Find my tyres
              <ArrowRightIcon size={16} />
            </a>
            <a
              href="tel:07311694631"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-7 py-4 font-extrabold uppercase tracking-wide text-white transition hover:border-brand-yellow hover:text-brand-yellow">

              <PhoneIcon size={16} />
              Call us today
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>);

}
