import { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarCheckIcon,
  CheckCircle2Icon,
  CreditCardIcon,
  MapPinIcon,
  MinusIcon,
  PlusIcon,
  UserIcon } from
'lucide-react';
import { tyres } from '../data/tyres';
import { slugToTyreSize } from '../types/vehicle';
import { SearchProgress } from './tyres/SearchProgress';
import { useSeo } from '../hooks/useSeo';

const timeSlots = buildTimeSlots(8.5, 18);
const MOBILE_SURCHARGE = 20;

function buildTimeSlots(startHour, endHour) {
  const slots = [];
  for (let minutes = startHour * 60; minutes <= endHour * 60; minutes += 30) {
    const hour24 = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const period = hour24 >= 12 ? 'PM' : 'AM';
    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
    slots.push(`${hour12}:${String(minute).padStart(2, '0')} ${period}`);
  }
  return slots;
}

export function TyreCheckoutPage() {
  const { tyreId } = useParams();
  const [searchParams] = useSearchParams();
  const size = searchParams.get('size') ?? '';
  const postcode = searchParams.get('postcode') ?? '';
  const reg = searchParams.get('reg') ?? '';
  const fitting = searchParams.get('fitting') === 'mail-order' ? 'mail-order' : 'fitted';
  const isMailOrder = fitting === 'mail-order';
  const stepLabels = isMailOrder ?
  ['Quantity', 'Delivery', 'Schedule', 'Your details', 'Review'] :
  ['Quantity', 'Fitting', 'Schedule', 'Your details', 'Review'];

  const backToResultsQuery = new URLSearchParams({ fitting });
  if (postcode) backToResultsQuery.set('postcode', postcode);
  if (reg) backToResultsQuery.set('reg', reg);

  const tyre = tyres.find((item) => item.id === tyreId);
  const parsedSize = slugToTyreSize(size);
  const sizeLabel = parsedSize ? `${parsedSize.width}/${parsedSize.profile} R${parsedSize.rim}` : null;

  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [reference] = useState(() => `NT-${Math.random().toString(36).slice(2, 8).toUpperCase()}`);
  const [form, setForm] = useState({
    quantity: 2,
    location: 'garage',
    address: postcode,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    payment: 'day'
  });

  useSeo({
    title: tyre ? `Checkout — ${tyre.brand} ${tyre.name} — Nutyre` : 'Checkout — Nutyre',
    description: 'Complete your tyre order and choose your fitting date and time.',
    path: `/tyres/checkout/${tyreId ?? ''}`,
    type: 'website'
  });

  if (!tyre || !sizeLabel) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-extrabold text-brand-black">Tyre not found</h1>
        <p className="mt-4 text-gray-600">
          We couldn't find that tyre. Please search again and pick a tyre from the results.
        </p>
        <Link
          to="/#find-tyres"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-black px-6 py-3.5 font-bold text-white transition hover:bg-brand-amber">

          <ArrowLeftIcon size={16} />
          Back to search
        </Link>
      </section>);

  }

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function goToStep(next) {
    setStep(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleStepSubmit(event) {
    event.preventDefault();
    goToStep(Math.min(step + 1, stepLabels.length));
  }

  function handleConfirm() {
    setConfirmed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const surcharge = !isMailOrder && form.location === 'mobile' ? MOBILE_SURCHARGE : 0;
  const tyresTotal = tyre.price * form.quantity;
  const total = tyresTotal + surcharge;

  if (confirmed) {
    return (
      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-white p-8 text-center shadow-xl sm:p-10">

            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-yellow">
              <CheckCircle2Icon size={32} className="text-brand-black" />
            </div>
            <h1 className="mt-6 font-display text-3xl font-extrabold text-brand-black">Order confirmed!</h1>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-lemon">
              Reference {reference}
            </p>
            <p className="mt-4 text-gray-600">
              Thanks {form.name.split(' ')[0] || 'there'} — we've
              {isMailOrder ? ' scheduled your delivery' : ' reserved your fitting slot'}.
              A confirmation has been sent to {form.email}.
            </p>

            <div className="mt-8 space-y-3 rounded-2xl border border-gray-100 bg-gray-50 p-5 text-left text-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-500">Tyre</span>
                <span className="font-extrabold text-brand-black">{tyre.brand} {tyre.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-500">Size</span>
                <span className="font-mono font-extrabold text-brand-black">{sizeLabel}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-500">Quantity</span>
                <span className="font-extrabold text-brand-black">{form.quantity} tyre{form.quantity === 1 ? '' : 's'}</span>
              </div>
              {reg &&
              <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-500">Vehicle</span>
                  <span className="font-extrabold text-brand-black">{reg.toUpperCase()}</span>
                </div>
              }
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-500">{isMailOrder ? 'Delivery' : 'Fitting'}</span>
                <span className="font-extrabold text-brand-black capitalize">
                  {isMailOrder ? 'Mail order' : form.location === 'garage' ? 'In garage' : 'Mobile fitting'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-500">Date & time</span>
                <span className="font-extrabold text-brand-black">{form.date} · {form.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-500">Payment</span>
                <span className="font-extrabold text-brand-black">
                  {form.payment === 'day' ? 'Pay on the day' : 'Paid online now'}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                <span className="font-bold text-gray-500">Total</span>
                <span className="text-lg font-extrabold text-brand-black">£{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/#find-tyres"
                className="rounded-xl border-2 border-gray-200 px-6 py-3.5 font-bold text-brand-black transition hover:border-brand-yellow">

                Search more tyres
              </Link>
              <Link
                to="/"
                className="rounded-xl bg-brand-black px-6 py-3.5 font-bold text-white transition hover:bg-brand-amber">

                Return home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>);

  }

  return (
    <section className="bg-brand-cream py-10 sm:py-12">
      <SearchProgress current={step <= 3 ? 3 : 4} />

      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <Link
          to={`/tyres/${size}?${backToResultsQuery.toString()}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-600 transition hover:text-brand-black">

          <ArrowLeftIcon size={16} />
          Back to results
        </Link>

        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
          <img src={tyre.brandLogo} alt={tyre.brand} className="h-9 w-16 shrink-0 object-contain" />
          <div>
            <p className="font-extrabold text-brand-black">{tyre.brand} {tyre.name}</p>
            <p className="font-mono text-xs text-gray-500">{sizeLabel} · £{tyre.price} per tyre</p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-1">
          {stepLabels.map((label, index) => {
            const number = index + 1;
            const isActive = number === step;
            const isDone = number < step;
            return (
              <div key={label} className="flex shrink-0 items-center gap-2">
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-extrabold ${
                  isDone ? 'bg-brand-black text-white' : isActive ? 'bg-brand-yellow text-brand-black' : 'bg-white text-gray-400'}`
                  }>

                  {isDone ? <CheckCircle2Icon size={14} /> : number}
                </span>
                <span className={`text-xs font-bold ${isActive ? 'text-brand-black' : 'text-gray-400'}`}>{label}</span>
                {number < stepLabels.length && <span className="mx-1 h-px w-4 shrink-0 bg-gray-300" />}
              </div>);

          })}
        </div>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow-lg sm:p-8">
          {step === 1 &&
          <div>
              <div className="mb-6 flex items-center gap-2 text-brand-black">
                <PlusIcon size={20} className="text-brand-lemon" />
                <h2 className="font-extrabold">How many tyres?</h2>
              </div>

              <div className="flex items-center justify-center gap-6 rounded-2xl border border-gray-100 bg-gray-50 py-8">
                <button
                type="button"
                onClick={() => update('quantity', Math.max(1, form.quantity - 1))}
                aria-label="Decrease quantity"
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-gray-200 text-brand-black transition hover:border-brand-yellow disabled:opacity-40"
                disabled={form.quantity <= 1}>

                  <MinusIcon size={18} />
                </button>
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-brand-black">{form.quantity}</p>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    tyre{form.quantity === 1 ? '' : 's'}
                  </p>
                </div>
                <button
                type="button"
                onClick={() => update('quantity', Math.min(4, form.quantity + 1))}
                aria-label="Increase quantity"
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-gray-200 text-brand-black transition hover:border-brand-yellow disabled:opacity-40"
                disabled={form.quantity >= 4}>

                  <PlusIcon size={18} />
                </button>
              </div>
              <div className="mt-3 flex justify-center gap-2">
                {[2, 4].map((preset) =>
              <button
                key={preset}
                type="button"
                onClick={() => update('quantity', preset)}
                className={`rounded-full px-4 py-1.5 text-xs font-extrabold transition ${
                form.quantity === preset ? 'bg-brand-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
                }>

                    {preset} tyres
                  </button>
              )}
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                £{tyre.price} × {form.quantity} = <span className="font-extrabold text-brand-black">£{tyresTotal}</span>
              </p>

              <button
              type="button"
              onClick={() => goToStep(2)}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-black py-3.5 font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-amber">

                Continue
                <ArrowRightIcon size={16} />
              </button>
            </div>
          }

          {step === 2 &&
          <div>
              <div className="mb-6 flex items-center gap-2 text-brand-black">
                <MapPinIcon size={20} className="text-brand-lemon" />
                <h2 className="font-extrabold">
                  {isMailOrder ? 'Where should we deliver your tyres?' : 'Where should we fit your tyres?'}
                </h2>
              </div>

              {isMailOrder ?
            <label className="block">
                  <span className="mb-2 block text-xs font-bold text-gray-600">Delivery address</span>
                  <input
                required
                value={form.address}
                onChange={(event) => update('address', event.target.value)}
                placeholder="Address or postcode"
                className="h-12 w-full rounded-xl border border-gray-200 px-3 font-bold focus:border-brand-lemon focus:outline-none" />

                  <p className="mt-2 text-xs text-gray-500">
                    We'll deliver your tyres here — fitting isn't included with mail order.
                  </p>
                </label> :

            <>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                type="button"
                onClick={() => update('location', 'garage')}
                className={`rounded-xl border-2 px-4 py-3 text-sm font-extrabold transition ${
                form.location === 'garage' ? 'border-brand-yellow bg-brand-yellow text-brand-black' : 'border-gray-200 text-gray-500 hover:border-brand-light-gold'}`
                }>

                      Garage fitting
                    </button>
                    <button
                type="button"
                onClick={() => update('location', 'mobile')}
                className={`rounded-xl border-2 px-4 py-3 text-sm font-extrabold transition ${
                form.location === 'mobile' ? 'border-brand-yellow bg-brand-yellow text-brand-black' : 'border-gray-200 text-gray-500 hover:border-brand-light-gold'}`
                }>

                      Mobile fitting (+£{MOBILE_SURCHARGE})
                    </button>
                  </div>

                  {form.location === 'mobile' &&
              <label className="mt-4 block">
                      <span className="mb-2 block text-xs font-bold text-gray-600">Where we should come to</span>
                      <input
                  required
                  value={form.address}
                  onChange={(event) => update('address', event.target.value)}
                  placeholder="Address or postcode"
                  className="h-12 w-full rounded-xl border border-gray-200 px-3 font-bold focus:border-brand-lemon focus:outline-none" />

                    </label>
              }
                </>
            }

              <div className="mt-8 flex gap-3">
                <button
                type="button"
                onClick={() => goToStep(step - 1)}
                className="rounded-xl border-2 border-gray-200 px-6 py-3.5 font-bold text-brand-black transition hover:border-brand-yellow">

                  Back
                </button>
                <button
                type="button"
                onClick={() => goToStep(step + 1)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-black py-3.5 font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-amber">

                  Continue
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            </div>
          }

          {step === 3 &&
          <form onSubmit={handleStepSubmit}>
              <div className="mb-6 flex items-center gap-2 text-brand-black">
                <CalendarCheckIcon size={20} className="text-brand-lemon" />
                <h2 className="font-extrabold">
                  {isMailOrder ? 'Select a delivery date' : 'Select date & time'}
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold text-gray-600">
                    {isMailOrder ? 'Preferred delivery date' : 'Date'}
                  </span>
                  <input
                  required
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={form.date}
                  onChange={(event) => update('date', event.target.value)}
                  className="h-12 w-full rounded-xl border border-gray-200 px-3 font-bold focus:border-brand-lemon focus:outline-none" />

                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold text-gray-600">
                    {isMailOrder ? 'Delivery window' : 'Time'}
                  </span>
                  <select
                  required
                  value={form.time}
                  onChange={(event) => update('time', event.target.value)}
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-3 font-bold focus:border-brand-lemon focus:outline-none">

                    <option value="" disabled>{isMailOrder ? 'Select a window' : 'Select a time'}</option>
                    {timeSlots.map((time) => <option key={time} value={time}>{time}</option>)}
                  </select>
                </label>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                type="button"
                onClick={() => goToStep(step - 1)}
                className="rounded-xl border-2 border-gray-200 px-6 py-3.5 font-bold text-brand-black transition hover:border-brand-yellow">

                  Back
                </button>
                <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-black py-3.5 font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-amber">

                  Continue
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            </form>
          }

          {step === 4 &&
          <form onSubmit={handleStepSubmit}>
              <div className="mb-6 flex items-center gap-2 text-brand-black">
                <UserIcon size={20} className="text-brand-lemon" />
                <h2 className="font-extrabold">Your details</h2>
              </div>
              <div className="grid gap-4">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold text-gray-600">Full name</span>
                  <input
                  required
                  value={form.name}
                  onChange={(event) => update('name', event.target.value)}
                  placeholder="Alex Morgan"
                  className="h-12 w-full rounded-xl border border-gray-200 px-3 font-bold focus:border-brand-lemon focus:outline-none" />

                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-gray-600">Email</span>
                    <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) => update('email', event.target.value)}
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-gray-200 px-3 font-bold focus:border-brand-lemon focus:outline-none" />

                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-gray-600">Phone number</span>
                    <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(event) => update('phone', event.target.value)}
                    placeholder="07123 456 789"
                    className="h-12 w-full rounded-xl border border-gray-200 px-3 font-bold focus:border-brand-lemon focus:outline-none" />

                  </label>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                type="button"
                onClick={() => goToStep(step - 1)}
                className="rounded-xl border-2 border-gray-200 px-6 py-3.5 font-bold text-brand-black transition hover:border-brand-yellow">

                  Back
                </button>
                <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-black py-3.5 font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-amber">

                  Continue
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            </form>
          }

          {step === 5 &&
          <div>
              <div className="mb-6 flex items-center gap-2 text-brand-black">
                <CreditCardIcon size={20} className="text-brand-lemon" />
                <h2 className="font-extrabold">Review & payment</h2>
              </div>

              <span className="mb-2 block text-xs font-bold text-gray-600">How would you like to pay?</span>
              <div className="grid grid-cols-2 gap-3">
                <button
                type="button"
                onClick={() => update('payment', 'day')}
                className={`rounded-xl border-2 px-4 py-3 text-sm font-extrabold transition ${
                form.payment === 'day' ? 'border-brand-yellow bg-brand-yellow text-brand-black' : 'border-gray-200 text-gray-500 hover:border-brand-light-gold'}`
                }>

                  Pay on the day
                </button>
                <button
                type="button"
                onClick={() => update('payment', 'online')}
                className={`rounded-xl border-2 px-4 py-3 text-sm font-extrabold transition ${
                form.payment === 'online' ? 'border-brand-yellow bg-brand-yellow text-brand-black' : 'border-gray-200 text-gray-500 hover:border-brand-light-gold'}`
                }>

                  Pay online now
                </button>
              </div>

              <div className="mt-6 space-y-2 rounded-2xl border border-gray-100 bg-gray-50 p-5 text-sm">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Order summary</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Tyre</span>
                  <span className="font-bold text-brand-black">{tyre.brand} {tyre.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Size</span>
                  <span className="font-mono font-bold text-brand-black">{sizeLabel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Quantity</span>
                  <span className="font-bold text-brand-black">{form.quantity} × £{tyre.price} = £{tyresTotal}</span>
                </div>
                {reg &&
              <div className="flex items-center justify-between">
                    <span className="text-gray-500">Vehicle</span>
                    <span className="font-bold text-brand-black">{reg.toUpperCase()}</span>
                  </div>
              }
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">{isMailOrder ? 'Delivery' : 'Fitting'}</span>
                  <span className="font-bold text-brand-black">
                    {isMailOrder ?
                  `Mail order · ${form.address}` :
                  form.location === 'garage' ? 'In garage' : `Mobile · ${form.address}`}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Date & time</span>
                  <span className="font-bold text-brand-black">{form.date} · {form.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Contact</span>
                  <span className="font-bold text-brand-black">{form.name} · {form.phone}</span>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                  <span className="font-bold text-gray-500">Total</span>
                  <span className="text-base font-extrabold text-brand-black">£{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                type="button"
                onClick={() => goToStep(step - 1)}
                className="rounded-xl border-2 border-gray-200 px-6 py-3.5 font-bold text-brand-black transition hover:border-brand-yellow">

                  Back
                </button>
                <button
                type="button"
                onClick={handleConfirm}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-yellow py-3.5 font-extrabold uppercase tracking-wide text-brand-black transition hover:bg-brand-amber">

                  Confirm order
                  <CheckCircle2Icon size={16} />
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>);

}
