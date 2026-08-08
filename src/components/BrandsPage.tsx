import { motion } from 'framer-motion';
import { brandLogos } from './ShopSections';

export function BrandsPage() {
  return (
    <>
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">

            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            Shop by brand
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-extrabold capitalize tracking-tight text-brand-black sm:text-5xl">

            All the brands you trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">

            We stock premium, mid-range and budget tyres from every major
            manufacturer.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {brandLogos.map((brand, index) =>
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex h-24 items-center justify-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/50 hover:shadow-lg">

              <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-12 w-full object-contain" />

            </motion.div>
          )}
        </div>
      </section>
    </>);

}
