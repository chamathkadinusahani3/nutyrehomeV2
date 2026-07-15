import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  SendIcon } from
'lucide-react';
export function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <section id="contact" className="bg-brand-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lemon">
              Let's talk tyres
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-brand-black capitalize">
              We're here when you need us.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-gray-600">
              Questions, booking help, or an urgent tyre problem? Our
              Hertfordshire team is ready to help.
            </p>
            <div className="mt-8 space-y-4">
              {[
              [PhoneIcon, '01707 242 626', 'Mon–Sat, 8am–6pm'],
              [
              MailIcon,
              'hello@nutyre.co.uk',
              "We'll reply within one working day"],

              [
              MapPinIcon,
              'Hertfordshire, UK',
              'Mobile fitting across the county']].

              map(([Icon, primary, secondary]) =>
              <div
                key={primary as string}
                className="flex items-center gap-4">
                
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-yellow text-brand-black">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="font-extrabold text-brand-black">
                      {primary as string}
                    </p>
                    <p className="text-sm text-gray-500">
                      {secondary as string}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(event) => {
              event.preventDefault();
              setNewsletterMessage("Thanks — we'll be in touch shortly.");
            }}
            className="rounded-[28px] bg-white p-6 shadow-lg sm:p-8">

            <h3 className="text-2xl font-extrabold text-brand-black capitalize">
              Request a callback
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Tell us how we can help and we will call you back.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-bold text-gray-700">
                Your name
                <input
                  required
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal focus:border-brand-lemon focus:outline-none focus:ring-4 focus:ring-brand-yellow/20"
                  placeholder="Alex Morgan" />
                
              </label>
              <label className="text-sm font-bold text-gray-700">
                Phone number
                <input
                  required
                  type="tel"
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal focus:border-brand-lemon focus:outline-none focus:ring-4 focus:ring-brand-yellow/20"
                  placeholder="07123 456 789" />
                
              </label>
            </div>
            <label className="mt-4 block text-sm font-bold text-gray-700">
              How can we help?
              <select className="mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 font-normal focus:border-brand-lemon focus:outline-none">
                <option>Tyre fitting enquiry</option>
                <option>Mobile fitting enquiry</option>
                <option>Service enquiry</option>
                <option>Other</option>
              </select>
            </label>
            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-black py-4 font-extrabold text-white transition hover:bg-brand-amber">
              Request a callback <SendIcon size={17} />
            </button>
            {newsletterMessage &&
            <p
              role="status"
              className="mt-4 text-sm font-bold text-brand-black">
              
                {newsletterMessage}
              </p>
            }
          </motion.form>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-yellow py-16">
        <div className="absolute right-[-30px] top-[-80px] h-72 w-72 rounded-full border-[42px] border-brand-black/10" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-4 sm:px-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-black">
              Ready when you are
            </p>
            <h2 className="mt-2 font-display text-4xl font-extrabold text-brand-black sm:text-5xl capitalize">
              Ready to buy your next tyres?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#find-tyres"
              className="rounded-xl bg-brand-black px-6 py-4 font-extrabold text-white transition hover:bg-white hover:text-brand-black">

              Find my tyres
            </a>
            <a
              href="tel:01707242626"
              className="rounded-xl border-2 border-brand-black px-6 py-4 font-extrabold text-brand-black">

              Call us today
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="bg-brand-black pb-9 pt-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <a href="#top" className="text-3xl font-extrabold tracking-tight">
                NU<span className="text-brand-yellow">TYRE</span>
                <small className="ml-1 text-[10px] tracking-[0.18em] text-gray-400">
                  UK
                </small>
              </a>
              <p className="mt-4 max-w-sm leading-7 text-gray-400">
                Premium tyres, simple booking and expert fitting throughout
                Hertfordshire.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  aria-label="Facebook"
                  href="#top"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-brand-amber hover:text-brand-black">
                  
                  <FacebookIcon size={18} />
                </a>
                <a
                  aria-label="Instagram"
                  href="#top"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-brand-amber hover:text-brand-black">
                  
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>
            {[
            ['Explore', 'Tyres', 'Mobile fitting', 'Services', 'Offers'],
            [
            'Support',
            'Contact us',
            'FAQs',
            'Track my order',
            'Tyre guides'],

            [
            'Company',
            'About Nutyre',
            'Careers',
            'Privacy policy',
            'Terms & conditions']].

            map(([title, ...items]) =>
            <div key={title}>
                <h3 className="font-extrabold text-brand-yellow capitalize">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {items.map((item) =>
                <li key={item}>
                      <a
                    href="#top"
                    className="text-sm text-gray-400 transition hover:text-white">
                    
                        {item}
                      </a>
                    </li>
                )}
                </ul>
              </div>
            )}
          </motion.div>
          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-gray-500 sm:flex-row">
            <p>
              © 2026 Nutyre UK. All rights reserved. Registered in England &
              Wales.
            </p>
            <p>Secure payments · VAT registered · ★ 4.8 Trustpilot</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/"
        aria-label="Chat with Nutyre on WhatsApp"
        className="fixed bottom-5 left-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand-black text-white shadow-lg transition hover:bg-brand-amber">
        
        <MessageCircleIcon size={24} />
      </a>
      {showTop &&
      <button
        onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        }
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand-black text-white shadow-lg transition hover:bg-brand-amber">
        
          <ArrowUpIcon size={21} />
        </button>
      }
    </>);

}