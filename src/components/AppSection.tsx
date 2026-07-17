import { motion } from 'framer-motion';
import { CheckCircle2Icon } from 'lucide-react';

const features = [
  'Search tyres instantly',
  'Book fitting appointments',
  'Manage multiple vehicles',
  'Track appointments in real-time',
  'Access exclusive app-only offers'
];

export function AppSection() {
  return (
    <section
      id="app"
      className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-stone-950 py-24 text-white">

      {/* Immersive radial amber glow layer embedded in the background */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Mobile Screen Mockup Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone shell with ultra-precise dark bezel and active amber ring light */}
            <div className="relative z-10 h-[650px] w-[310px] overflow-hidden rounded-[48px] border-[10px] border-neutral-950 bg-neutral-950 shadow-[0_25px_60px_-15px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/30">
              {/* Speaker & camera notch simulation */}
              <div className="absolute top-0 left-1/2 z-20 h-6 w-20 -translate-x-1/2 rounded-b-2xl bg-neutral-950" />

              <img
                src="/screen.jpeg"
                alt="Nutyre app screenshot"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Backglow specifically framing the phone mockup */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/20 blur-[100px]" />
          </motion.div>

          {/* Text & Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Nutyre App Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 h-16 w-16 overflow-hidden rounded-2xl shadow-lg shadow-amber-500/20 ring-1 ring-amber-400/30"
            >
              <img
                src="/applogo.png"
                alt="Nutyre app icon"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Title with brand gradient tail */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6 font-display text-4xl font-extrabold tracking-tight text-white lg:text-5xl"
            >
              Everything You Need at<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500"> Your Fingertips</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-lg text-lg leading-relaxed text-neutral-300"
            >
              Download the Nutyre app to manage your vehicles, book fittings
              on the go, and get exclusive access to special promotions.
            </motion.p>

            {/* Features List with warm color checkmarks */}
            <ul className="mb-12 space-y-4">
              {features.map((feature, idx) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + idx * 0.08 }}
                  className="flex items-center gap-3 font-semibold text-neutral-200"
                >
                  <CheckCircle2Icon className="h-5 w-5 text-amber-400" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* App Store Download Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://apps.apple.com/lk/app/nutyreuk/id6758754476"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-neutral-950 transition-all duration-200 hover:bg-neutral-100 hover:shadow-lg"
              >
                <img src="/appstore.jpg" alt="" aria-hidden="true" className="h-6 w-6 rounded-md" />
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.nutyre.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/80 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-amber-500/50 hover:bg-neutral-800"
              >
                <img src="/googleplay.png" alt="" aria-hidden="true" className="h-6 w-6" />
                Get it on Google Play
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}