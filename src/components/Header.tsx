import React, { useState } from 'react';
import {
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserRoundIcon,
  XIcon } from
'lucide-react';
const links = [
{ label: 'Home', to: '/' },
{ label: 'Tyres', to: '/#featured-tyres' },
{ label: 'Mobile Fitting', to: '/#mobile-fitting' },
{ label: 'Services', to: '/#services' },
{ label: 'Offers', to: '/#offers' },
{ label: 'Brands', to: '/brands' },
{ label: 'About', to: '/#about' },
{ label: 'Blog', to: '/#blog' },
{ label: 'Contact', to: '/#contact' }];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="relative z-50 overflow-hidden bg-gradient-to-r from-brand-yellow via-brand-light-gold to-brand-amber text-brand-black">
        <div className="mx-auto flex h-11 max-w-7xl items-center gap-5 overflow-hidden px-4 text-xs font-bold uppercase tracking-[0.12em] sm:px-6">
          <span className="whitespace-nowrap">Buy with assurance</span>
          <span className="hidden h-1 w-1 rounded-full bg-brand-black sm:block" />
          <span className="whitespace-nowrap">Lifetime tyre guarantee</span>
          <span className="hidden h-1 w-1 rounded-full bg-brand-black md:block" />
          <span className="whitespace-nowrap">★★★★★ Rated Excellent 4.9/5</span>
          <span className="hidden h-1 w-1 rounded-full bg-brand-black lg:block" />
          <span className="hidden whitespace-nowrap lg:block">
            
            mobile fitting · Same day fitting available
          </span>
          <a
            className="ml-auto whitespace-nowrap underline underline-offset-4"
            href="tel:01707242626">
            
            Call 01707 242 626
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-b border-gray-100 bg-white px-4 py-1.5 sm:justify-end sm:px-6">
        <span className="text-xs font-semibold text-gray-500">We accept:</span>
        <img src="/paypal.png" alt="PayPal" className="h-4 w-auto object-contain" />
        <img src="/visa.png" alt="Visa" className="h-4 w-auto object-contain" />
        <img src="/master.png" alt="Mastercard" className="h-5 w-auto object-contain" />
        <img src="/american.png" alt="American Express" className="h-4 w-auto object-contain" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-black shadow-sm backdrop-blur-xl">
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6"
          aria-label="Main navigation">

          <a
            href="/"
            className="flex items-center"
            aria-label="Nutyre home">

            <img src="/lolo.png" alt="Nutyre" className="h-11 w-auto object-contain" />
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map((link) =>
            <a
              key={link.label}
              href={link.to}
              className="text-sm font-semibold text-white transition hover:text-brand-amber">

                {link.label}
              </a>
            )}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              aria-label="Search site"
              className="rounded-full p-2 text-white transition hover:bg-white/10">

              <SearchIcon size={20} />
            </button>
            <button
              aria-label="Account"
              className="rounded-full p-2 text-white transition hover:bg-white/10">

              <UserRoundIcon size={20} />
            </button>
            <button
              aria-label="Wishlist"
              className="rounded-full p-2 text-white transition hover:bg-white/10">

              <HeartIcon size={20} />
            </button>
            <button
              aria-label="Basket"
              className="relative rounded-full p-2 text-white transition hover:bg-white/10">

              <ShoppingBagIcon size={20} />
              <span className="absolute right-0 top-0 grid h-4 w-4 place-items-center rounded-full bg-brand-yellow text-[9px] font-black text-brand-black">
                0
              </span>
            </button>
            <a
              href="/#find-tyres"
              className="rounded-xl bg-brand-yellow px-4 py-3 text-sm font-bold text-brand-black transition hover:bg-brand-amber">

              Book now
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="rounded-xl p-2 text-white lg:hidden">

            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </nav>
        {menuOpen &&
        <div className="border-t border-white/10 bg-brand-black px-5 py-5 lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              {links.map((link) =>
            <a
              onClick={() => setMenuOpen(false)}
              key={link.label}
              href={link.to}
              className="text-sm font-bold text-white">

                  {link.label}
                </a>
            )}
            </div>
            <a
            onClick={() => setMenuOpen(false)}
            href="/#find-tyres"
            className="mt-5 block rounded-xl bg-brand-yellow px-4 py-3 text-center font-bold text-brand-black">

              Book tyres
            </a>
          </div>
        }
      </header>
    </>);

}