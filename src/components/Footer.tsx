import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpIcon,
  Building2Icon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  SendIcon } from
'lucide-react';

function TiktokIcon({ size = 18 }: {size?: number;}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82c-1.05-.9-1.69-2.14-1.79-3.51h-3.02v13.6c0 1.44-1.17 2.61-2.61 2.61a2.61 2.61 0 0 1 0-5.22c.27 0 .53.04.78.11V10.4a5.68 5.68 0 0 0-.78-.05A5.66 5.66 0 0 0 3.5 16.01a5.66 5.66 0 0 0 5.68 5.66 5.66 5.66 0 0 0 5.68-5.66V9.02a8.28 8.28 0 0 0 4.83 1.55V7.57c-1.05 0-2.02-.34-2.8-.97l-.29-.23z" />
    </svg>);

}

function GoogleReviewsBadge() {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2">
      <svg width={18} height={18} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.47a5.54 5.54 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.81z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.92l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.11A12 12 0 0 0 12 24z" />
        <path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54v-3.1H1.28a12 12 0 0 0 0 10.75z" />
        <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.28 6.63l3.99 3.1C6.22 6.88 8.87 4.77 12 4.77z" />
      </svg>
      <div className="leading-tight">
        <p className="text-[11px] font-bold text-neutral-800">Google Reviews</p>
        <p className="text-[10px] font-bold text-amber-500">★★★★★</p>
      </div>
    </div>);

}

function TrustpilotBadge() {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2">
      <svg width={16} height={16} viewBox="0 0 24 24" fill="#00b67a" aria-hidden="true">
        <path d="M12 1.5l2.94 6.68 7.31.66-5.55 4.9 1.67 7.16L12 17.06l-6.37 3.84 1.67-7.16-5.55-4.9 7.31-.66z" />
      </svg>
      <div className="leading-tight">
        <p className="text-[11px] font-extrabold text-neutral-800">Trustpilot</p>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, index) =>
          <span key={index} className="grid h-2.5 w-2.5 place-items-center bg-[#00b67a] text-[7px] text-white">★</span>
          )}
        </div>
      </div>
    </div>);

}

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
              [PhoneIcon, '01707 242 626', 'Mon–Sat, 8.30am–7pm'],
              [
              MailIcon,
              'info@nutyre.co.uk',
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
              href="/#find-tyres"
              className="rounded-xl bg-brand-black px-6 py-4 font-extrabold text-white transition hover:bg-white hover:text-brand-black">

              Find my tyres
            </a>
            <a
              href="tel:07311 694 631"
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
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <a href="#top" className="inline-flex items-center">
                <img src="/logo.png" alt="Nutyre" className="h-20 w-auto object-contain" />
              </a>
              <h3 className="mt-8 font-extrabold text-brand-yellow">Download App</h3>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.nutyre.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold transition hover:bg-white/10">

                  <img src="/googleplay.png" alt="" aria-hidden="true" className="h-5 w-5" />
                  <span>
                    <span className="block text-[10px] font-normal text-gray-400">Get it on</span>
                    Google Play
                  </span>
                </a>
                <a
                  href="https://apps.apple.com/lk/app/nutyreuk/id6758754476"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold transition hover:bg-white/10">

                  <img src="/appstore.jpg" alt="" aria-hidden="true" className="h-5 w-5 rounded-md" />
                  <span>
                    <span className="block text-[10px] font-normal text-gray-400">Download on the</span>
                    App Store
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-brand-yellow">Operations Office</h3>
              <ul className="mt-4 space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <Building2Icon size={17} className="mt-0.5 shrink-0 text-gray-400" />
                  132, Great North Road, Hatfield AL9 5JN
                </li>
                <li className="flex items-start gap-3">
                  <PhoneIcon size={17} className="mt-0.5 shrink-0 text-gray-400" />
                  <a href="tel:07311694631" className="transition hover:text-white">
                    07311 694 631
                  </a>
                  <span className="text-gray-500">/</span>
                  <a href="tel:01707912085" className="transition hover:text-white">
                    01707 912 085
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon size={17} className="mt-0.5 shrink-0 text-gray-400" />
                  <a href="mailto:info@nutyre.co.uk" className="transition hover:text-white">
                    info@nutyre.co.uk
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <ClockIcon size={17} className="mt-0.5 shrink-0 text-gray-400" />
                  <div className="space-y-0.5">
                    <p>Monday – Saturday: 8.30am – 7.00pm</p>
                  
                    <p>Sunday: 9.00am – 5.00pm</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-extrabold text-brand-yellow">Useful Links</h3>
              <ul className="mt-4 space-y-3">
                {['Find a Fitter', 'Become a Fitter', 'Supplier Registration', 'Contact Us', 'About Us'].map(
                  (item) =>
                  <li key={item}>
                      <a href="#top" className="text-sm text-gray-400 transition hover:text-white">
                        {item}
                      </a>
                    </li>

                )}
              </ul>
            </div>

            <div>
              <h3 className="font-extrabold text-brand-yellow">Payment Methods</h3>
              <div className="mt-4 flex items-center gap-2">
                <img src="/paypal.png" alt="PayPal" className="h-6 w-auto rounded bg-white p-1" />
                <img src="/visa.png" alt="Visa" className="h-6 w-auto rounded bg-white p-1" />
                <img src="/master.png" alt="Mastercard" className="h-6 w-auto rounded bg-white p-1" />
                <img src="/american.png" alt="American Express" className="h-6 w-auto rounded bg-white p-1" />
              </div>
              <p className="mt-3 text-xs text-gray-400">
                Powered by <span className="font-bold text-white">LLOYDS BANK</span> - CARDNET
              </p>

              <h3 className="mt-6 font-extrabold text-brand-yellow">Social Media</h3>
              <div className="mt-4 flex gap-3">
                <a
                  aria-label="LinkedIn"
                  href="#top"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand-amber hover:text-brand-black">

                  <LinkedinIcon size={16} />
                </a>
                <a
                  aria-label="Facebook"
                  href="#top"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand-amber hover:text-brand-black">

                  <FacebookIcon size={16} />
                </a>
                <a
                  aria-label="Instagram"
                  href="#top"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand-amber hover:text-brand-black">

                  <InstagramIcon size={16} />
                </a>
                <a
                  aria-label="TikTok"
                  href="#top"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand-amber hover:text-brand-black">

                  <TiktokIcon size={16} />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <GoogleReviewsBadge />
                <TrustpilotBadge />
              </div>
            </div>
          </motion.div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-gray-500 sm:flex-row sm:items-center">
            <p>
              © 2026 NUTYRE UK LTD. All rights reserved. Company registration
              number 14795388. VAT number 454 1024 29.
            </p>
            <div className="flex gap-4">
              <a href="#top" className="underline underline-offset-2 transition hover:text-white">
                Terms & Conditions
              </a>
              <a href="#top" className="underline underline-offset-2 transition hover:text-white">
                Privacy Policy
              </a>
            </div>
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