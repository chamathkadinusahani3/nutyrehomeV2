import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircle2Icon } from 'lucide-react';
import { services } from './ShopSections';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-extrabold text-brand-black">
          Service not found
        </h1>
        <p className="mt-4 text-gray-600">
          We couldn't find that service. It may have been renamed or removed.
        </p>
        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-black px-6 py-3.5 font-bold text-white transition hover:bg-brand-amber">

          <ArrowLeftIcon size={16} />
          Back to all services
        </Link>
      </section>);

  }

  const ServiceIcon = service.icon;
  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-stone-950 py-24 text-white">
        <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />

        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-neutral-300 transition hover:text-brand-yellow">

            <ArrowLeftIcon size={16} />
            All services
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20">

            <ServiceIcon size={30} strokeWidth={1.75} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 font-display text-4xl font-extrabold capitalize tracking-tight sm:text-5xl">

            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-300">

            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>

            <Link
              to={`/book/${service.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-yellow px-7 py-4 font-extrabold uppercase tracking-wide text-brand-black transition hover:bg-brand-amber">

              Book this service
              <ArrowRightIcon size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lemon">
          What's included
        </h2>
        <ul className="mt-6 space-y-3">
          {service.items.map((item, index) =>
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3.5 text-sm font-semibold text-brand-black shadow-sm">

              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-yellow/25">
                <CheckCircle2Icon size={14} className="text-brand-black" />
              </span>
              {item}
            </motion.li>
          )}
        </ul>

        <Link
          to={`/book/${service.slug}`}
          className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-brand-black py-4 font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-amber sm:inline-flex sm:px-8">

          Book this service
          <ArrowRightIcon size={16} />
        </Link>
      </section>

      <section className="bg-brand-cream py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-lg font-extrabold text-brand-black">
            Other services
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {otherServices.map((item) => {
              const OtherIcon = item.icon;
              return (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group flex flex-col items-start rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/50 hover:shadow-lg">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-black text-white transition-all duration-300 group-hover:bg-brand-amber">
                    <OtherIcon size={18} strokeWidth={1.75} />
                  </div>
                  <p className="mt-3 text-sm font-bold text-brand-black capitalize leading-snug">
                    {item.title}
                  </p>
                </Link>);

            })}
          </div>
        </div>
      </section>
    </>);

}
