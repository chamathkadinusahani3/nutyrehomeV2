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
'Home',
'Tyres',
'Mobile Fitting',
'Services',
'Offers',
'Brands',
'About',
'Blog',
'Contact'];

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
          <span className="whitespace-nowrap">★★★★★ Rated Excellent 4.8/5</span>
          <span className="hidden h-1 w-1 rounded-full bg-brand-black lg:block" />
          <span className="hidden whitespace-nowrap lg:block">
            Free mobile fitting · Same day fitting available
          </span>
          <a
            className="ml-auto whitespace-nowrap underline underline-offset-4"
            href="tel:01707242626">
            
            Call 01707 242 626
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-xl">
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6"
          aria-label="Main navigation">
          
          <a
            href="#top"
            className="flex items-center gap-2"
            aria-label="Nutyre home">
            
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-black text-lg font-black italic text-brand-yellow">
              N
            </span>
            <span className="text-2xl font-extrabold tracking-tight text-brand-black">
              NU<span className="text-brand-lemon">TYRE</span>
              <small className="ml-1 text-[9px] tracking-[0.18em] text-gray-500">
                UK
              </small>
            </span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map((link) =>
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
              className="text-sm font-semibold text-gray-700 transition hover:text-brand-amber">
              
                {link}
              </a>
            )}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              aria-label="Search site"
              className="rounded-full p-2 text-gray-700 transition hover:bg-brand-cream">
              
              <SearchIcon size={20} />
            </button>
            <button
              aria-label="Account"
              className="rounded-full p-2 text-gray-700 transition hover:bg-brand-cream">
              
              <UserRoundIcon size={20} />
            </button>
            <button
              aria-label="Wishlist"
              className="rounded-full p-2 text-gray-700 transition hover:bg-brand-cream">
              
              <HeartIcon size={20} />
            </button>
            <button
              aria-label="Basket"
              className="relative rounded-full p-2 text-gray-700 transition hover:bg-brand-cream">
              
              <ShoppingBagIcon size={20} />
              <span className="absolute right-0 top-0 grid h-4 w-4 place-items-center rounded-full bg-brand-yellow text-[9px] font-black">
                0
              </span>
            </button>
            <a
              href="#find-tyres"
              className="rounded-xl bg-brand-black px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-amber">

              Book now
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="rounded-xl p-2 text-brand-black lg:hidden">
            
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </nav>
        {menuOpen &&
        <div className="border-t border-gray-100 bg-white px-5 py-5 lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              {links.map((link) =>
            <a
              onClick={() => setMenuOpen(false)}
              key={link}
              href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
              className="text-sm font-bold text-gray-700">
              
                  {link}
                </a>
            )}
            </div>
            <a
            onClick={() => setMenuOpen(false)}
            href="#find-tyres"
            className="mt-5 block rounded-xl bg-brand-black px-4 py-3 text-center font-bold text-white">

              Book tyres
            </a>
          </div>
        }
      </header>
    </>);

}