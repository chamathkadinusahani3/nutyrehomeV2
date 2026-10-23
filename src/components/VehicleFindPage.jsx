import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircleIcon, ArrowLeftIcon, ArrowRightIcon, CarFrontIcon, SearchIcon } from 'lucide-react';
import { lookupVehicleByRegistration } from '../services/vehicleLookupService';
import { formatTyreSize, tyreSizeToSlug } from '../types/vehicle';
import { TyreSizeSearchForm } from './tyres/TyreSizeSearchForm';
import { SearchProgress } from './tyres/SearchProgress';
import { useSeo } from '../hooks/useSeo';
import { Footer } from './Footer';

function LoadingState({ reg }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-yellow">
        <CarFrontIcon size={26} className="animate-pulse text-brand-black" />
      </div>
      <p className="mt-5 font-extrabold text-brand-black">
        Looking up {reg || 'your vehicle'}…
      </p>
      <div className="mx-auto mt-8 max-w-md space-y-3" aria-hidden="true">
        <div className="h-4 w-2/3 animate-pulse rounded-full bg-gray-200" />
        <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-200" />
        <div className="h-24 w-full animate-pulse rounded-2xl bg-gray-100" />
      </div>
    </div>);

}

function LookupFailure({ reg, postcode, fitting }) {
  const [showSizeSearch, setShowSizeSearch] = useState(false);

  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm sm:p-8">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-amber-100 text-amber-600">
          <AlertCircleIcon size={22} />
        </span>
        <h1 className="mt-4 font-display text-xl font-extrabold text-brand-black">
          We couldn't find tyre information for {reg || 'this registration'}
        </h1>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-600">
          Our vehicle lookup isn't able to match this registration right now.
          You can try again, or search by tyre size instead — it only takes
          a few seconds.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/#find-tyres"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-black px-6 py-3.5 font-extrabold text-white transition hover:bg-brand-amber">

            <ArrowLeftIcon size={16} />
            Try registration again
          </Link>
          <button
            type="button"
            onClick={() => setShowSizeSearch(true)}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-yellow bg-brand-yellow/10 px-6 py-3.5 font-extrabold text-brand-black transition hover:bg-brand-yellow">

            <SearchIcon size={16} />
            Search by tyre size
          </button>
        </div>
      </div>

      {showSizeSearch &&
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

          <h2 className="font-extrabold text-brand-black">Search by tyre size</h2>
          <p className="mt-1 text-sm text-gray-500">
            Your postcode has been kept from your last search.
          </p>
          <div className="mt-5">
            <TyreSizeSearchForm initialPostcode={postcode} initialFitting={fitting} />
          </div>
        </motion.div>
      }
    </div>);

}

function VehicleConfirmation({
  reg,
  postcode,
  fitting,
  result

}) {
  const navigate = useNavigate();
  const { vehicle } = result;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedSize = vehicle.tyreSizes[selectedIndex];

  function handleContinue() {
    if (!selectedSize) return;
    const params = new URLSearchParams({ fitting });
    if (postcode) params.set('postcode', postcode);
    if (reg) params.set('reg', reg);
    params.set('make', vehicle.make);
    params.set('model', vehicle.model);
    navigate(`/tyres/${tyreSizeToSlug(selectedSize)}?${params.toString()}`);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-lemon">
          Your vehicle
        </p>
        <h1 className="mt-2 font-display text-2xl font-extrabold text-brand-black">
          {vehicle.make} {vehicle.model}
        </h1>
        {vehicle.variant && <p className="text-sm font-semibold text-gray-500">{vehicle.variant}</p>}
        <p className="mt-3 text-sm text-gray-500">
          Registration: <span className="font-bold text-brand-black">{reg}</span>
          {vehicle.year && <> · {vehicle.year}</>}
        </p>

        <p className="mt-6 text-xs font-extrabold uppercase tracking-wide text-gray-500">
          {vehicle.tyreSizes.length > 1 ? 'Choose your tyre size' : 'Tyre size'}
        </p>
        <div className="mt-3 space-y-2">
          {vehicle.tyreSizes.map((size, index) =>
          <label
            key={`${size.position ?? 'size'}-${index}`}
            className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 px-4 py-3 transition ${
            selectedIndex === index ? 'border-brand-yellow bg-brand-yellow/10' : 'border-gray-200'}`
            }>

              <span className="flex items-center gap-3">
                <input
                type="radio"
                name="tyre-size"
                checked={selectedIndex === index}
                onChange={() => setSelectedIndex(index)}
                className="h-4 w-4 text-brand-black focus:ring-brand-yellow" />

                <span>
                  <span className="block text-xs font-bold uppercase text-gray-500">
                    {size.label ?? (size.position ? `${size.position} tyre` : 'Approved size')}
                  </span>
                  <span className="font-mono text-sm font-extrabold text-brand-black">
                    {formatTyreSize(size)}
                  </span>
                </span>
              </span>
            </label>
          )}
        </div>

        <p className="mt-5 rounded-xl bg-gray-50 p-3 text-xs leading-relaxed text-gray-500">
          Tyre sizes can vary by vehicle specification. Please check the size
          printed on your current tyre before ordering.
        </p>

        <button
          type="button"
          onClick={handleContinue}
          disabled={!selectedSize}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-yellow py-4 font-extrabold uppercase tracking-wide text-brand-black transition hover:bg-brand-amber disabled:cursor-not-allowed disabled:opacity-60">

          View tyres
          <ArrowRightIcon size={16} />
        </button>
      </div>
    </div>);

}

export function VehicleFindPage() {
  const [searchParams] = useSearchParams();
  const reg = searchParams.get('reg') ?? '';
  const postcode = searchParams.get('postcode') ?? '';
  const fitting = searchParams.get('fitting') === 'mail-order' ? 'mail-order' : 'fitted';
  const [result, setResult] = useState(null);

  useSeo({
    title: 'Find your vehicle — Nutyre',
    description: 'Look up your vehicle by registration to find the right tyre size.',
    path: '/tyres/find',
    type: 'website'
  });

  useEffect(() => {
    let cancelled = false;
    setResult(null);
    lookupVehicleByRegistration(reg).then((lookupResult) => {
      if (!cancelled) setResult(lookupResult);
    });
    return () => {
      cancelled = true;
    };
  }, [reg]);

  return (
    <>
      <SearchProgress current={1} />
      {result === null && <LoadingState reg={reg} />}
      {result?.status === 'success' &&
      <VehicleConfirmation reg={reg} postcode={postcode} fitting={fitting} result={result} />
      }
      {result && result.status !== 'success' &&
      <LookupFailure reg={reg} postcode={postcode} fitting={fitting} />
      }
      <Footer />
    </>);

}
