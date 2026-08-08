import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Building2Icon,
  CheckCircle2Icon,
  ChevronDownIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  SendIcon } from
'lucide-react';
import { CoverageMap } from './CoverageMap';
import { Footer } from './Footer';
import { useSeo } from '../hooks/useSeo';

const contactCards = [
{
  icon: PhoneIcon,
  title: 'Call us',
  lines: ['07311 694 631', '01707 912 085'],
  href: 'tel:07311694631'
},
{
  icon: MailIcon,
  title: 'Email us',
  lines: ['info@nutyre.co.uk', "We'll reply within one working day"],
  href: 'mailto:info@nutyre.co.uk'
},
{
  icon: Building2Icon,
  title: 'Visit us',
  lines: ['132 Great North Road', 'Hatfield AL9 5JN']
},
{
  icon: ClockIcon,
  title: 'Opening hours',
  lines: ['Mon–Sat: 8.30am – 6.00pm', 'Sunday: 10.00am – 5.00pm']
}];


const subjects = [
'Tyre fitting enquiry',
'Mobile fitting enquiry',
'Service enquiry',
'Order or booking support',
'Something else'];


const faqs = [
{
  question: 'How quickly will you respond?',
  answer: "We reply to emails and callback requests within one working day, and usually much sooner during opening hours. For anything urgent, calling us directly is fastest."
},
{
  question: 'Can I get mobile fitting booked over the phone?',
  answer: 'Yes — call us with your registration or tyre size and postcode and we can check availability and book your mobile fitting slot directly.'
},
{
  question: 'Where are you based?',
  answer: 'Our fitting centre and warehouse is at 132 Great North Road, Hatfield AL9 5JN, with mobile fitting vans covering Hatfield, Welwyn Garden City, St Albans, Stevenage, Hertford, Potters Bar and the surrounding areas.'
},
{
  question: 'I have a complaint or an urgent issue — who do I contact?',
  answer: "Please call us directly on 07311 694 631 so we can help straight away. If you'd rather write to us, email info@nutyre.co.uk and mark it urgent in the subject line."
}];


export function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: subjects[0], message: '' });

  useSeo({
    title: 'Contact Nutyre — Get in Touch',
    description: "Contact Nutyre for tyre fitting, mobile fitting, and vehicle service enquiries in Hertfordshire. Call, email, or request a callback — we're here to help.",
    path: '/contact',
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Nutyre',
      url: `${window.location.origin}/contact`
    }
  });

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-stone-950 py-20 text-white">
        <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow backdrop-blur">

            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            Get in touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">

            We're here when you need us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-300">

            Questions, booking help, or an urgent tyre problem? Our
            Hertfordshire team is ready to help — call, email, or send us a
            message below.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, index) => {
            const Card = card.href ? 'a' : 'div';
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}>

                <Card
                  {...(card.href ? { href: card.href } : {})}
                  className="flex h-full flex-col items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/50 hover:shadow-lg">

                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-black text-white">
                    <card.icon size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-brand-black">{card.title}</p>
                    {card.lines.map((line) =>
                    <p key={line} className="mt-0.5 text-sm text-gray-500">
                        {line}
                      </p>
                    )}
                  </div>
                </Card>
              </motion.div>);

          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-[28px] bg-white p-6 shadow-lg sm:p-8">

            <h2 className="font-display text-2xl font-extrabold text-brand-black">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Fill in the form and our team will get back to you within one
              working day.
            </p>

            <div className="relative mt-6">
              <AnimatePresence mode="wait">
                {submitted ?
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-brand-cream px-6 py-12 text-center">

                    <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-yellow">
                      <CheckCircle2Icon size={28} className="text-brand-black" />
                    </span>
                    <p className="font-extrabold text-brand-black">Message sent!</p>
                    <p className="max-w-sm text-sm text-gray-600">
                      Thanks {form.name.split(' ')[0] || 'there'} — we've got
                      your message and will reply within one working day.
                    </p>
                  </motion.div> :

                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid gap-4">

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-bold text-gray-700">
                        Your name
                        <input
                        required
                        value={form.name}
                        onChange={(event) => update('name', event.target.value)}
                        placeholder="Alex Morgan"
                        className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal focus:border-brand-lemon focus:outline-none focus:ring-4 focus:ring-brand-yellow/20" />

                      </label>
                      <label className="block text-sm font-bold text-gray-700">
                        Phone number
                        <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(event) => update('phone', event.target.value)}
                        placeholder="07123 456 789"
                        className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal focus:border-brand-lemon focus:outline-none focus:ring-4 focus:ring-brand-yellow/20" />

                      </label>
                    </div>
                    <label className="block text-sm font-bold text-gray-700">
                      Email address
                      <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) => update('email', event.target.value)}
                      placeholder="you@example.com"
                      className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal focus:border-brand-lemon focus:outline-none focus:ring-4 focus:ring-brand-yellow/20" />

                    </label>
                    <label className="block text-sm font-bold text-gray-700">
                      How can we help?
                      <select
                      value={form.subject}
                      onChange={(event) => update('subject', event.target.value)}
                      className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 font-normal focus:border-brand-lemon focus:outline-none">

                        {subjects.map((subject) =>
                      <option key={subject} value={subject}>{subject}</option>
                      )}
                      </select>
                    </label>
                    <label className="block text-sm font-bold text-gray-700">
                      Your message
                      <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(event) => update('message', event.target.value)}
                      placeholder="Tell us a bit about what you need..."
                      className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 font-normal focus:border-brand-lemon focus:outline-none focus:ring-4 focus:ring-brand-yellow/20" />

                    </label>
                    <button className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-black py-4 font-extrabold text-white transition hover:bg-brand-amber">
                      Send message <SendIcon size={17} />
                    </button>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4">

            <div className="overflow-hidden rounded-[28px] border border-gray-100 shadow-lg">
              <div className="h-64 sm:h-80">
                <CoverageMap />
              </div>
              <div className="flex items-start gap-3 bg-white p-5">
                <MapPinIcon size={18} className="mt-0.5 shrink-0 text-brand-amber" />
                <p className="text-sm text-gray-600">
                  132 Great North Road, Hatfield AL9 5JN — plus mobile fitting
                  across Hatfield, Welwyn Garden City, St Albans, Stevenage,
                  Hertford and Potters Bar.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/"
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-yellow/50 hover:shadow-lg">

              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-black text-white">
                <MessageCircleIcon size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-extrabold text-brand-black">Chat on WhatsApp</p>
                <p className="mt-0.5 text-sm text-gray-500">
                  Quick questions? Message us directly.
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            Need to know
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            Common questions
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

      <Footer />
    </>);

}
