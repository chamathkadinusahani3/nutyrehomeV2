import { motion } from 'framer-motion';

export function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[url('/about.png')] bg-fixed bg-cover bg-center py-28 text-white">

      {/* Dark scrim so text stays readable over the fixed background photo. */}
      <div className="absolute inset-0 bg-neutral-950/80" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">

          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Who we are
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 font-display text-3xl font-bold capitalize tracking-tight sm:text-5xl">

          UK's Premier Tyre
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500">
            Mobile & Workshop Tyre Service
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base leading-relaxed text-neutral-300 sm:text-lg">

          Founded in 2023, Nutyre UK Ltd is dedicated to keeping drivers safe
          on every journey. Our professional mobile and workshop tyre
          fitting services across the UK provide fast, convenient, and
          reliable solutions for individual motorists, fleets, and
          businesses, ensuring peace of mind on the road.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-base leading-relaxed text-neutral-300 sm:text-lg">

          Built on a foundation of trust, quality, and safety, we are also
          a trusted tyre importer, distributor, and wholesaler, supplying
          premium tyres to garages, retailers, and automotive professionals
          nationwide.
        </motion.p>
      </div>
    </section>);

}
