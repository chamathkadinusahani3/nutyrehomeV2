import { motion } from 'framer-motion';
import { ShieldCheckIcon, LayersIcon, ZapIcon, UsersIcon, TruckIcon, LockIcon } from 'lucide-react';

const features = [
{
  title: 'Transparent Pricing',
  desc: 'No hidden fees. The price you see is the price you pay.',
  icon: ShieldCheckIcon
},
{
  title: 'Huge Tyre Selection',
  desc: 'Thousands of premium, mid-range, and budget tyres.',
  icon: LayersIcon
},
{
  title: 'Same-Day Fitting',
  desc: 'Get back on the road today with our express service.',
  icon: ZapIcon
},
{
  title: 'Trusted UK Fitters',
  desc: 'Fully vetted, highly trained professional technicians.',
  icon: UsersIcon
},
{
  title: 'Home Delivery',
  desc: 'Prefer to fit them yourself? We deliver nationwide.',
  icon: TruckIcon
},
{
  title: 'Secure Booking',
  desc: 'Bank-level encryption for all your payments and data.',
  icon: LockIcon
}];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9fa] py-24">
      {/* Image: full-bleed across the entire left half of the section
          itself, not the padded max-w-7xl container, so there's no
          rounded "card" edge. */}
      <motion.div
        initial={{
          opacity: 0,
          x: -22
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.6
        }}
        className="relative h-[360px] w-full sm:h-[460px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-1/2">

        <img
          src="/img2.png"
          alt="Premium performance tyre and alloy wheel"
          className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/10 to-transparent" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Spacer: reserves the left column's width on large screens so
              the text column doesn't stretch full-width under the
              full-bleed image. */}
          <div className="hidden lg:block" aria-hidden="true" />

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}>

              <span className="mb-3 inline-block rounded-full bg-brand-yellow/15 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-brand-black">
                Why Nutyre
              </span>
              <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight text-brand-black md:text-5xl capitalize">
                Why Choose Nutyre
              </h2>
              <p className="mb-12 max-w-lg text-lg text-gray-600">
                Everything you need for a fast, fair, and hassle-free tyre
                experience — from search to fitting.
              </p>
            </motion.div>
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature, idx) =>
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08
                }}
                whileHover={{
                  y: -4
                }}
                className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-brand-yellow/40 hover:shadow-[0_16px_36px_rgba(18,18,18,0.12)]">

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-black transition-colors duration-300 group-hover:bg-brand-yellow">
                    <feature.icon className="h-6 w-6 text-brand-yellow transition-colors duration-300 group-hover:text-brand-black" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-brand-black capitalize">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {feature.desc}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}
