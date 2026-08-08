import { useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CarFrontIcon,
  ChevronRightIcon,
  DropletIcon,
  FuelIcon,
  HomeIcon,
  InfoIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  Volume2Icon,
  XIcon } from
'lucide-react';
import { tyres } from '../data/tyres';
import type { Tyre } from '../data/tyres';
import { slugToTyreSize } from '../types/vehicle';
import { useSeo } from '../hooks/useSeo';
import { SearchProgress } from './tyres/SearchProgress';
import type { FittingType } from './tyres/FittingTypeToggle';
import { Footer } from './Footer';

type SortOption = 'recommended' | 'price-asc' | 'price-desc';

const brands = Array.from(new Set(tyres.map((tyre) => tyre.brand)));
const seasons: Tyre['season'][] = ['Summer', 'Winter', 'All Season'];
const tiers: Tyre['tier'][] = ['Budget', 'Mid-Range', 'Premium'];

const ratingColor: Record<string, string> = {
  A: 'bg-emerald-500',
  B: 'bg-lime-500',
  C: 'bg-yellow-500',
  D: 'bg-amber-500',
  E: 'bg-orange-500',
  F: 'bg-red-500',
  G: 'bg-red-700'
};

function EuLabel({ icon: Icon, label, value }: {icon: typeof FuelIcon;label: string;value: string;}) {
  return (
    <div className="flex items-center gap-1.5" title={`${label}: ${value}`}>
      <Icon size={13} className="text-gray-400" />
      <span className={`grid h-5 w-5 place-items-center rounded text-[10px] font-extrabold text-white ${ratingColor[value] ?? 'bg-gray-400'}`}>
        {value}
      </span>
    </div>);

}

export function TyreResultsPage() {
  const { size } = useParams();
  const [searchParams] = useSearchParams();
  const reg = searchParams.get('reg');
  const postcode = searchParams.get('postcode');
  const make = searchParams.get('make');
  const model = searchParams.get('model');
  const fitting: FittingType = searchParams.get('fitting') === 'mail-order' ? 'mail-order' : 'fitted';
  const isMailOrder = fitting === 'mail-order';

  const parsedSize = slugToTyreSize(size ?? '');
  const sizeLabel = parsedSize ? `${parsedSize.width}/${parsedSize.profile} R${parsedSize.rim}` : 'your size';
  const checkoutQuery = new URLSearchParams({ fitting });
  if (size) checkoutQuery.set('size', size);
  if (postcode) checkoutQuery.set('postcode', postcode);
  if (reg) checkoutQuery.set('reg', reg);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
  const [selectedTiers, setSelectedTiers] = useState<string[]>([]);
  const [runFlatOnly, setRunFlatOnly] = useState(false);
  const [evOnly, setEvOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [filtersOpen, setFiltersOpen] = useState(false);

  useSeo({
    title: `${sizeLabel} Tyres — Nutyre`,
    description: `Compare ${sizeLabel} tyres from Michelin, Continental, Bridgestone, Pirelli and more. Fully fitted prices, EU tyre labels, and fast fitting across Hertfordshire.`,
    path: `/tyres/${size ?? ''}`,
    type: 'website'
  });

  function toggle(list: string[], setList: (value: string[]) => void, value: string) {
    setList(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  }

  const results = useMemo(() => {
    const filtered = tyres.filter((tyre) => {
      if (selectedBrands.length > 0 && !selectedBrands.includes(tyre.brand)) return false;
      if (selectedSeasons.length > 0 && !selectedSeasons.includes(tyre.season)) return false;
      if (selectedTiers.length > 0 && !selectedTiers.includes(tyre.tier)) return false;
      if (runFlatOnly && !tyre.runFlat) return false;
      if (evOnly && !tyre.evSuitable) return false;
      return true;
    });
    const sorted = [...filtered];
    if (sortBy === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [selectedBrands, selectedSeasons, selectedTiers, runFlatOnly, evOnly, sortBy]);

  function clearFilters() {
    setSelectedBrands([]);
    setSelectedSeasons([]);
    setSelectedTiers([]);
    setRunFlatOnly(false);
    setEvOnly(false);
  }

  const activeFilterCount =
  selectedBrands.length + selectedSeasons.length + selectedTiers.length + (runFlatOnly ? 1 : 0) + (evOnly ? 1 : 0);

  if (!parsedSize) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
        <h1 className="font-display text-2xl font-extrabold text-brand-black">That doesn't look like a valid tyre size</h1>
        <p className="mt-2 text-gray-600">Please search again using a valid width, profile and rim.</p>
        <Link to="/#find-tyres" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-black px-6 py-3.5 font-bold text-white">
          Back to search
        </Link>
      </div>);

  }

  return (
    <>
      <SearchProgress current={2} />

      <div className="bg-brand-yellow py-2.5 text-center text-xs font-extrabold uppercase tracking-wide text-brand-black sm:text-sm">
        Save 15% off selected premium tyres — applied automatically at checkout
      </div>

      <nav aria-label="Breadcrumb" className="bg-neutral-950">
        <div className="mx-auto flex max-w-7xl items-center gap-1.5 px-4 py-3 text-xs font-semibold text-neutral-400 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-1 transition hover:text-brand-yellow">
            <HomeIcon size={13} /> Home
          </Link>
          <ChevronRightIcon size={13} />
          <span className="text-brand-yellow">{sizeLabel} Tyres</span>
        </div>
      </nav>

      <section className="bg-brand-cream py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
                {make ? `Tyres for your ${make}${model ? ` ${model}` : ''}` : `${sizeLabel} Tyres`}
              </h1>
              {make && <p className="mt-1 font-mono text-sm font-bold text-brand-black">{sizeLabel}</p>}
              <p className="mt-2 text-sm font-semibold text-gray-600">
                {results.length} tyre{results.length === 1 ? '' : 's'} found ·{' '}
                {isMailOrder ? 'mail order prices shown' : 'fully fitted prices shown'}
                {postcode ? ` · ${isMailOrder ? 'delivery to' : 'fitting near'} ${postcode.toUpperCase()}` : ''}
              </p>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand-cream px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-brand-black">
                {isMailOrder ? 'Mail order' : 'Fully fitted'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/#find-tyres"
                className="inline-flex items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-xs font-extrabold text-brand-black transition hover:border-brand-black">

                <RefreshCwIcon size={13} />
                Change search
              </Link>
              <Link
                to="/#find-tyres"
                className="inline-flex items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-xs font-extrabold text-brand-black transition hover:border-brand-black">

                Change tyre size
              </Link>
            </div>
          </div>

          {reg &&
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-yellow/50 bg-white px-5 py-4">

              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-black text-white">
                  <CarFrontIcon size={18} />
                </span>
                <p className="text-sm font-semibold text-gray-700">
                  {make ?
                <>Showing tyres for <span className="font-extrabold text-brand-black">{make} {model}</span> ({reg.toUpperCase()}), size <span className="font-extrabold text-brand-black">{sizeLabel}</span>.</> :

                <>Registration <span className="font-extrabold text-brand-black">{reg.toUpperCase()}</span> — showing size <span className="font-extrabold text-brand-black">{sizeLabel}</span>.</>
                }
                </p>
              </div>
              <Link to="/#find-tyres" className="text-xs font-extrabold text-brand-black underline underline-offset-2">
                Not your vehicle?
              </Link>
            </motion.div>
          }

          <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-gray-500">
            <InfoIcon size={14} className="mt-0.5 shrink-0" />
            Please check your current tyre size before ordering. Vehicle
            manufacturers may specify different tyre sizes depending on
            model, variant and wheel configuration.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <FilterPanel
              selectedBrands={selectedBrands}
              selectedSeasons={selectedSeasons}
              selectedTiers={selectedTiers}
              runFlatOnly={runFlatOnly}
              evOnly={evOnly}
              onToggleBrand={(value) => toggle(selectedBrands, setSelectedBrands, value)}
              onToggleSeason={(value) => toggle(selectedSeasons, setSelectedSeasons, value)}
              onToggleTier={(value) => toggle(selectedTiers, setSelectedTiers, value)}
              onToggleRunFlat={() => setRunFlatOnly((value) => !value)}
              onToggleEv={() => setEvOnly((value) => !value)}
              onClear={clearFilters}
              activeFilterCount={activeFilterCount} />

          </aside>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-brand-black lg:hidden">

                <SlidersHorizontalIcon size={16} />
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </button>

              <label className="ml-auto flex items-center gap-2 text-sm font-bold text-gray-600">
                Sort by
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortOption)}
                  className="h-11 rounded-xl border border-gray-200 bg-white px-3 font-bold text-brand-black focus:border-brand-lemon focus:outline-none">

                  <option value="recommended">Recommended</option>
                  <option value="price-asc">Price (Low-High)</option>
                  <option value="price-desc">Price (High-Low)</option>
                </select>
              </label>
            </div>

            {results.length === 0 ?
            <div className="mt-10 rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-16 text-center">
                <p className="font-bold text-brand-black">No tyres found for {sizeLabel}</p>
                <p className="mt-1 text-sm text-gray-500">Try clearing your filters, or search a different size.</p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <button onClick={clearFilters} className="text-sm font-bold text-brand-amber underline underline-offset-2">
                    Clear filters
                  </button>
                  <Link to="/#find-tyres" className="text-sm font-bold text-brand-amber underline underline-offset-2">
                    Change tyre size
                  </Link>
                </div>
              </div> :

            <div className="mt-6 space-y-4">
                {results.map((tyre, index) =>
              <TyreCard
                key={tyre.id}
                tyre={tyre}
                sizeLabel={sizeLabel}
                index={index}
                isMailOrder={isMailOrder}
                checkoutHref={`/tyres/checkout/${tyre.id}?${checkoutQuery.toString()}`} />

              )}
              </div>
            }
          </div>
        </div>
      </section>

      {filtersOpen &&
      <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setFiltersOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-xs overflow-y-auto bg-white p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-extrabold text-brand-black">Filters</h2>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <XIcon size={20} />
              </button>
            </div>
            <div className="mt-5">
              <FilterPanel
              selectedBrands={selectedBrands}
              selectedSeasons={selectedSeasons}
              selectedTiers={selectedTiers}
              runFlatOnly={runFlatOnly}
              evOnly={evOnly}
              onToggleBrand={(value) => toggle(selectedBrands, setSelectedBrands, value)}
              onToggleSeason={(value) => toggle(selectedSeasons, setSelectedSeasons, value)}
              onToggleTier={(value) => toggle(selectedTiers, setSelectedTiers, value)}
              onToggleRunFlat={() => setRunFlatOnly((value) => !value)}
              onToggleEv={() => setEvOnly((value) => !value)}
              onClear={clearFilters}
              activeFilterCount={activeFilterCount} />

            </div>
            <button
            onClick={() => setFiltersOpen(false)}
            className="mt-6 w-full rounded-xl bg-brand-black py-3.5 font-extrabold text-white">

              Show {results.length} tyres
            </button>
          </div>
        </div>
      }

      <Footer />
    </>);

}

function FilterPanel({
  selectedBrands,
  selectedSeasons,
  selectedTiers,
  runFlatOnly,
  evOnly,
  onToggleBrand,
  onToggleSeason,
  onToggleTier,
  onToggleRunFlat,
  onToggleEv,
  onClear,
  activeFilterCount




}: {
  selectedBrands: string[];
  selectedSeasons: string[];
  selectedTiers: string[];
  runFlatOnly: boolean;
  evOnly: boolean;
  onToggleBrand: (value: string) => void;
  onToggleSeason: (value: string) => void;
  onToggleTier: (value: string) => void;
  onToggleRunFlat: () => void;
  onToggleEv: () => void;
  onClear: () => void;
  activeFilterCount: number;
}) {
  return (
    <div className="space-y-6 rounded-2xl border border-gray-100 bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-1.5 font-extrabold text-brand-black">
          <SlidersHorizontalIcon size={16} />
          Filters
        </h2>
        {activeFilterCount > 0 &&
        <button onClick={onClear} className="text-xs font-bold text-brand-amber underline underline-offset-2">
            Clear all
          </button>
        }
      </div>

      <div>
        <p className="text-xs font-extrabold uppercase tracking-wide text-gray-500">Tyre type</p>
        <div className="mt-3 space-y-2">
          {tiers.map((tier) =>
          <label key={tier} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <input
              type="checkbox"
              checked={selectedTiers.includes(tier)}
              onChange={() => onToggleTier(tier)}
              className="h-4 w-4 rounded border-gray-300 text-brand-black focus:ring-brand-yellow" />

              {tier}
            </label>
          )}
        </div>
      </div>

      <div>
        <p className="text-xs font-extrabold uppercase tracking-wide text-gray-500">Season</p>
        <div className="mt-3 space-y-2">
          {seasons.map((season) =>
          <label key={season} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <input
              type="checkbox"
              checked={selectedSeasons.includes(season)}
              onChange={() => onToggleSeason(season)}
              className="h-4 w-4 rounded border-gray-300 text-brand-black focus:ring-brand-yellow" />

              {season}
            </label>
          )}
        </div>
      </div>

      <div>
        <p className="text-xs font-extrabold uppercase tracking-wide text-gray-500">Brand</p>
        <div className="mt-3 max-h-48 space-y-2 overflow-y-auto pr-1">
          {brands.map((brand) =>
          <label key={brand} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => onToggleBrand(brand)}
              className="h-4 w-4 rounded border-gray-300 text-brand-black focus:ring-brand-yellow" />

              {brand}
            </label>
          )}
        </div>
      </div>

      <div>
        <p className="text-xs font-extrabold uppercase tracking-wide text-gray-500">Features</p>
        <div className="mt-3 space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <input
              type="checkbox"
              checked={runFlatOnly}
              onChange={onToggleRunFlat}
              className="h-4 w-4 rounded border-gray-300 text-brand-black focus:ring-brand-yellow" />

            Run-flat only
          </label>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <input
              type="checkbox"
              checked={evOnly}
              onChange={onToggleEv}
              className="h-4 w-4 rounded border-gray-300 text-brand-black focus:ring-brand-yellow" />

            EV-suitable only
          </label>
        </div>
      </div>
    </div>);

}

function TyreCard({
  tyre,
  sizeLabel,
  index,
  isMailOrder,
  checkoutHref





}: {tyre: Tyre;sizeLabel: string;index: number;isMailOrder: boolean;checkoutHref: string;}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
      className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-brand-yellow/40 hover:shadow-md sm:flex-row sm:items-center">

      <img src={tyre.brandLogo} alt={tyre.brand} className="h-10 w-20 shrink-0 self-start object-contain sm:self-center" />

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-base font-extrabold text-brand-black">
            {tyre.brand} {tyre.name}
          </h3>
          <span className="rounded-full bg-brand-cream px-2.5 py-0.5 text-[11px] font-bold text-brand-black">
            {tyre.tier}
          </span>
        </div>
        <p className="mt-0.5 font-mono text-sm text-gray-500">
          {sizeLabel} · {tyre.season} · Speed rating {tyre.speedRating}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-4">
          <EuLabel icon={FuelIcon} label="Fuel efficiency" value={tyre.fuelEfficiency} />
          <EuLabel icon={DropletIcon} label="Wet grip" value={tyre.wetGrip} />
          <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500" title="Noise level">
            <Volume2Icon size={13} className="text-gray-400" />
            {tyre.noise}dB
          </span>
          {tyre.runFlat &&
          <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[11px] font-bold text-gray-600">
              Run-flat
            </span>
          }
          {tyre.reinforced &&
          <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[11px] font-bold text-gray-600">
              Reinforced
            </span>
          }
          {tyre.evSuitable &&
          <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-0.5 text-[11px] font-bold text-gray-600">
              <ShieldCheckIcon size={11} /> EV-suitable
            </span>
          }
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
        <p className="text-2xl font-extrabold text-brand-black">
          £{tyre.price}
          <span className="ml-1 block text-xs font-semibold text-gray-400 sm:inline sm:ml-1">per tyre</span>
        </p>
        <p className="text-xs font-semibold text-gray-500">
          {isMailOrder ? 'Delivered to your door' : `Fully fitted from £${tyre.price}`}
        </p>
        <Link
          to={checkoutHref}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-yellow px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-brand-black transition hover:bg-brand-amber">

          Select tyre
        </Link>
      </div>
    </motion.article>);

}
