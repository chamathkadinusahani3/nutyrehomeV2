import { useState } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ShoppingBagIcon } from 'lucide-react';
import { brandLogos } from './ShopSections';

const brandProducts = [
{ brand: 'Michelin', name: 'Pilot Sport 5', price: '£142.99', rating: '4.9' },
{ brand: 'Michelin', name: 'CrossClimate 2', price: '£118.50', rating: '4.8' },
{ brand: 'Pirelli', name: 'P Zero', price: '£151.00', rating: '4.8' },
{ brand: 'Pirelli', name: 'Cinturato P7', price: '£109.99', rating: '4.6' },
{ brand: 'Bridgestone', name: 'Turanza 6', price: '£104.99', rating: '4.7' },
{ brand: 'Bridgestone', name: 'Potenza Sport', price: '£139.99', rating: '4.7' },
{ brand: 'Goodyear', name: 'EfficientGrip Performance 2', price: '£96.99', rating: '4.7' },
{ brand: 'Goodyear', name: 'Eagle F1 Asymmetric 6', price: '£132.00', rating: '4.8' },
{ brand: 'BFGoodrich', name: 'g-Force Winter 2', price: '£98.00', rating: '4.5' },
{ brand: 'BFGoodrich', name: 'Advantage', price: '£84.99', rating: '4.4' },
{ brand: 'Dunlop', name: 'Sport BluResponse', price: '£92.50', rating: '4.5' },
{ brand: 'Dunlop', name: 'SP Winter Sport 5', price: '£101.00', rating: '4.6' },
{ brand: 'Continental', name: 'PremiumContact 7', price: '£119.99', rating: '4.8' },
{ brand: 'Continental', name: 'EcoContact 6', price: '£99.99', rating: '4.6' },
{ brand: 'Marshal', name: 'Matrac FX2', price: '£74.99', rating: '4.3' },
{ brand: 'Marshal', name: 'MH15', price: '£64.99', rating: '4.2' },
{ brand: 'Yokohama', name: 'BluEarth-GT', price: '£89.99', rating: '4.5' },
{ brand: 'Yokohama', name: 'Advan Sport V107', price: '£145.00', rating: '4.7' },
{ brand: 'Hankook', name: 'Ventus S1 evo3', price: '£109.00', rating: '4.6' },
{ brand: 'Hankook', name: 'Kinergy Eco2', price: '£71.99', rating: '4.4' }];

export function BrandsPage() {
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const filtered = activeBrand ?
  brandProducts.filter((product) => product.brand === activeBrand) :
  brandProducts;

  return (
    <>
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">

            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            Shop by brand
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-extrabold capitalize tracking-tight text-brand-black sm:text-5xl">

            All the brands you trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">

            Pick a brand to see every tyre we stock from them, or browse the
            full range below.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6">
          <button
            onClick={() => setActiveBrand(null)}
            aria-pressed={activeBrand === null}
            className={`flex h-20 items-center justify-center rounded-xl border-2 px-3 text-center text-sm font-extrabold transition ${
            activeBrand === null ?
            'border-brand-yellow bg-brand-yellow text-brand-black' :
            'border-gray-100 bg-white text-gray-500 hover:border-brand-yellow/50'}`
            }>

            All brands
          </button>
          {brandLogos.map((brand, index) =>
          <motion.button
            key={brand.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            onClick={() => setActiveBrand(brand.name)}
            aria-pressed={activeBrand === brand.name}
            aria-label={`Show tyres from ${brand.name}`}
            className={`flex h-20 items-center justify-center rounded-xl border-2 bg-white p-3 transition ${
            activeBrand === brand.name ?
            'border-brand-yellow shadow-md' :
            'border-gray-100 hover:border-brand-yellow/50'}`
            }>

              <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-10 w-full object-contain" />

            </motion.button>
          )}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm font-bold text-gray-500">
            Showing {filtered.length} tyre{filtered.length === 1 ? '' : 's'}
            {activeBrand && ` from ${activeBrand}`}
          </p>
          {activeBrand &&
          <button
            onClick={() => setActiveBrand(null)}
            className="text-sm font-bold text-brand-lemon transition hover:text-brand-black">

              Clear filter
            </button>
          }
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product, index) =>
          <motion.article
            key={`${product.brand}-${product.name}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex items-center justify-center rounded-xl bg-gray-50 py-6">
                <div className="grid h-20 w-20 place-items-center rounded-full border-[12px] border-neutral-800 bg-neutral-600 transition-transform duration-300 group-hover:scale-105">
                  <div className="h-7 w-7 rounded-full border-4 border-gray-300 bg-gray-100" />
                </div>
              </div>

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-lemon">
                {product.brand}
              </p>
              <h3 className="mt-1 text-lg font-extrabold capitalize leading-snug text-brand-black">
                {product.name}
              </h3>
              <div className="mt-2 flex items-center gap-1 text-sm font-bold text-brand-black">
                <StarIcon size={14} className="fill-brand-yellow text-brand-lemon" />
                {product.rating}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xl font-extrabold text-brand-black">
                  {product.price}
                </span>
                <a
                href="/#find-tyres"
                className="flex items-center gap-1.5 rounded-lg bg-brand-black px-3 py-2 text-xs font-bold text-white transition hover:bg-brand-amber">

                  <ShoppingBagIcon size={14} />
                  Add
                </a>
              </div>
            </motion.article>
          )}
        </div>

        {filtered.length === 0 &&
        <p className="mt-12 text-center text-sm font-semibold text-gray-500">
            No tyres found for that brand yet.
          </p>
        }
      </section>
    </>);

}
