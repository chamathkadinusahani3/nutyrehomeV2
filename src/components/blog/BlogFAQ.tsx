import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { blogFaqs } from '../../data/blogPosts';

export function BlogFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">

          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-gray-600">

          Quick answers to the questions we hear most often.
        </motion.p>
      </div>

      <div className="mt-10 space-y-3">
        {blogFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
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
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">

                <span className="font-bold text-brand-black">{faq.question}</span>
                <ChevronDownIcon
                  size={18}
                  className={`shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-amber' : ''}`} />

              </button>
              <AnimatePresence initial={false}>
                {isOpen &&
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden">

                    <p className="px-5 pb-5 leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                }
              </AnimatePresence>
            </motion.div>);

        })}
      </div>
    </section>);

}
