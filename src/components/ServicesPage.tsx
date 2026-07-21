import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { services } from './ShopSections';

export function ServicesPage() {
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
            More than tyres
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-extrabold capitalize tracking-tight text-brand-black sm:text-5xl">

            Keep your car at its absolute best
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">

            From wheel alignment to full servicing, our technicians handle it
            all. Pick a service to see exactly what's included.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}>

                <Link
                  to={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/50 hover:shadow-lg">

                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500" />

                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-black text-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-amber">
                      <ServiceIcon size={20} strokeWidth={1.75} />
                    </div>

                    <h3 className="mt-5 text-sm font-bold tracking-tight text-brand-black capitalize leading-snug">
                      {service.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center text-xs font-bold text-gray-500 transition-colors group-hover:text-amber-700">
                      Learn more <ArrowRightIcon className="ml-1" size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>);

          })}
        </div>
      </section>
    </>);

}
