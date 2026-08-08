import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, CheckCircle2Icon, XIcon } from 'lucide-react';

const promos = [
{
  title: 'More tyres, more savings! Claim 5% instantly',
  text: "Buy 2 or 4 tyres and get 5% OFF! Power, performance, and value you can trust from us. Don't miss out — limited time only.",
  badge: 'Buy 2 or 4, get 5% on tyres',
  image: '/promo1.jpg',
  details: {
    intro: "Upgrade your ride this winter with performance, safety, and comfort. Whether you're commuting or heading out on an icy road trip, tyres are always important.",
    outro: 'Fast delivery or mobile fitting available!'
  }
},
{
  title: 'Nutyre now offers full vehicle servicing!',
  text: 'Your trusted tyre experts are now your complete vehicle care partner. Call us to book full service today and drive with confidence.',
  badge: 'Now booking',
  image: '/promo2.png',
  details: {
    intro: "At Nutyre UK Ltd, we've expanded our services to give you even more value and convenience. In addition to our premium tyre solutions, we now offer comprehensive vehicle servicing — all under one roof!",
    items: [
    'Oil Change & Filter Replacement',
    'Brake Inspection & Replacement',
    'Engine Diagnostics',
    'Suspension & Steering Checks',
    'Battery Testing & Replacement',
    'Air Conditioning Service',
    'MOT Prep & Checks'],

    outro: "Whether it's routine maintenance or a full inspection, we keep your vehicle running smoothly!"
  }
},
{
  title: 'Grip the road for less — get 10% off Avon tyres',
  text: 'Enjoy 10% off Avon 195/60R15 tyres for a limited time only!',
  badge: 'Avon tyres',
  image: '/promo3.png',
  details: {
    intro: "Looking for a smooth, confident ride? Enjoy 10% off Avon 195/60R15 tyres for a limited time only! Whether you're commuting daily or hitting the road for a weekend getaway, Avon delivers reliable grip, enhanced comfort, and long-lasting performance.",
    items: [
    'Available exclusively for size 195/60R15',
    'Use code SAVE10 at checkout to claim your discount',
    'Hurry — while stocks last!'],

    outro: 'Drive safe. Spend smart. Choose Avon.'
  }
}];

// UI-only labels — not part of the promo data, so each card can carry a
// distinct call to action without changing the underlying data structure.
const ctaLabels = ['Claim offer', 'Book service', 'Claim offer'];

// Derives a small circular sticker ("5% OFF", "10% OFF", "NEW") from the
// existing title/badge copy, so no new field is needed on the promo data.
function getSticker(promo: (typeof promos)[number]) {
  const match = `${promo.badge} ${promo.title}`.match(/(\d+)%/);
  return match ? `${match[1]}% OFF` : 'NEW';
}

export function PromoCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex === null ? null : promos[openIndex];

  useEffect(() => {
    if (openIndex === null) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenIndex(null);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openIndex]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-cream/40 to-white py-24 sm:py-28">
      {/* Decorative background: blurred brand-colour glows, a faint tyre-tread
          dot grid, and a couple of thin geometric rings — all very low
          opacity so they read as texture, not content. */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-brand-amber/15 blur-3xl" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#111827 1.4px, transparent 1.4px)',
          backgroundSize: '26px 26px'
        }}
        aria-hidden="true" />

      <div className="pointer-events-none absolute right-[8%] top-10 hidden h-28 w-28 rotate-12 rounded-[2rem] border-[10px] border-brand-yellow/15 sm:block" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-16 left-[6%] hidden h-20 w-20 rounded-full border-[10px] border-brand-black/10 sm:block" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center">

          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            Limited-time offers
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold capitalize leading-tight tracking-tight text-brand-black sm:text-5xl">
            Deals built for <span className="text-brand-yellow">drivers</span> like you
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Real savings on tyres, fitting and servicing — available for a
            limited time, while stock lasts.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {promos.map((promo, index) =>
          <motion.article
            key={promo.title}
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-brand-cream/40 shadow-lg transition-[box-shadow,border-color] duration-300 hover:border-brand-yellow/60 hover:shadow-2xl">

              <div className="relative h-56 shrink-0 overflow-hidden sm:h-60">
                <img
                src={promo.image}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/15 to-transparent" />

                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-brand-yellow px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-black shadow-md">
                  {promo.badge}
                </span>

                <motion.span
                  whileHover={{ scale: 1.08, rotate: 6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-4 top-4 grid h-14 w-14 place-items-center rounded-full border-2 border-white bg-brand-black text-center text-[10px] font-extrabold uppercase leading-tight text-brand-yellow shadow-lg">

                  {getSticker(promo)}
                </motion.span>

                <h3 className="absolute inset-x-5 bottom-4 text-xl font-extrabold capitalize leading-snug text-white drop-shadow-md">
                  {promo.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-sm leading-6 text-gray-600">
                  {promo.text}
                </p>
                <button
                onClick={() => setOpenIndex(index)}
                aria-label={`${ctaLabels[index] ?? 'View promotion'}: ${promo.title}`}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-black py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition-all duration-300 hover:bg-brand-yellow hover:text-brand-black hover:shadow-[0_10px_28px_rgba(249,200,14,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow">

                  {ctaLabels[index] ?? 'View promotion'}
                  <ArrowRightIcon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          )}
        </div>
      </div>

      <AnimatePresence>
        {active &&
        <motion.div
          key="promo-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-brand-black/75 p-4 backdrop-blur-sm">

            <motion.div
            key="promo-modal-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="promo-modal-scroll max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl">

              <div className="relative h-52 shrink-0 overflow-hidden sm:h-64">
                <img
                src={active.image}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/10 to-transparent" />
                <button
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-brand-black shadow-lg backdrop-blur transition hover:bg-brand-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow">

                  <XIcon size={20} />
                </button>
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-brand-yellow px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-black shadow-md">
                  {active.badge}
                </span>
                <h3 className="absolute inset-x-6 bottom-5 text-2xl font-extrabold capitalize leading-snug text-white drop-shadow-md">
                  {active.title}
                </h3>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-lemon">
                  More info
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {active.details.intro}
                </p>
                {active.details.items &&
              <ul className="mt-5 space-y-1.5">
                    {active.details.items.map((item) =>
                <motion.li
                  key={item}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-cream/70">

                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-yellow/25">
                          <CheckCircle2Icon size={14} className="text-brand-black" />
                        </span>
                        {item}
                      </motion.li>
                )}
                  </ul>
              }
                {active.details.outro &&
              <div className="mt-5 rounded-xl bg-brand-cream/70 p-4 text-sm font-bold leading-relaxed text-brand-black">
                    {active.details.outro}
                  </div>
              }
                <a
                href="#find-tyres"
                onClick={() => setOpenIndex(null)}
                className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-brand-black py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition-all duration-300 hover:bg-brand-yellow hover:text-brand-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow">

                  Find my tyres
                  <ArrowRightIcon size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}
