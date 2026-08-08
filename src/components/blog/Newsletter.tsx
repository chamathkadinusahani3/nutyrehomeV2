import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2Icon, MailIcon, SendIcon } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[28px] bg-brand-yellow px-6 py-14 text-center sm:px-14">

        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border-[32px] border-brand-black/10" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full border-[24px] border-brand-black/10" />

        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-black text-brand-yellow">
          <MailIcon size={24} />
        </span>
        <h2 className="mx-auto mt-6 max-w-xl font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
          Stay Ahead with Expert Tyre Advice
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-brand-black/80">
          Subscribe for tyre care tips, exclusive offers, seasonal reminders,
          and the latest Nutyre news — straight to your inbox.
        </p>

        <div className="relative mx-auto mt-8 max-w-md">
          <AnimatePresence mode="wait">
            {subscribed ?
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-black px-6 py-4 font-bold text-white">

                <CheckCircle2Icon size={20} className="text-brand-yellow" />
                You're subscribed — welcome aboard!
              </motion.div> :

            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 rounded-2xl bg-white p-2.5 shadow-lg sm:flex-row">

                <label className="flex-1">
                  <span className="sr-only">Email address</span>
                  <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border-none bg-transparent px-4 text-sm font-semibold text-brand-black placeholder:text-gray-400 focus:outline-none" />

                </label>
                <button
                type="submit"
                className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-black px-6 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-neutral-800">

                  Subscribe
                  <SendIcon size={15} />
                </button>
              </motion.form>
            }
          </AnimatePresence>
        </div>
      </motion.div>
    </section>);

}
