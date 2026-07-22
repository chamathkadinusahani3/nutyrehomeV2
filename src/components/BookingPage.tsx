import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarCheckIcon,
  CarFrontIcon,
  CheckCircle2Icon,
  CreditCardIcon,
  MapPinIcon,
  PlusCircleIcon,
  UserIcon } from
'lucide-react';
import { services } from './ShopSections';

const stepLabels = ['Vehicle', 'Extras', 'Schedule', 'Pricing', 'Your details', 'Payment'];

const vehicleTypes = ['Car', 'SUV / 4x4', 'Van'];

function buildTimeSlots(startHour: number, endHour: number) {
  const slots: string[] = [];
  for (let minutes = startHour * 60; minutes <= endHour * 60; minutes += 30) {
    const hour24 = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const period = hour24 >= 12 ? 'PM' : 'AM';
    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
    slots.push(`${hour12}:${String(minute).padStart(2, '0')} ${period}`);
  }
  return slots;
}

const timeSlots = buildTimeSlots(8.5, 18);
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 25 }, (_, i) => String(currentYear - i));
const MOBILE_SURCHARGE = 20;

type FormState = {
  vehicleType: string;
  brand: string;
  model: string;
  year: string;
  reg: string;
  location: 'garage' | 'mobile';
  address: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  payment: 'day' | 'online';
  additionalServices: string[];
};

const initialForm: FormState = {
  vehicleType: '',
  brand: '',
  model: '',
  year: '',
  reg: '',
  location: 'garage',
  address: '',
  date: '',
  time: '',
  name: '',
  email: '',
  phone: '',
  payment: 'day',
  additionalServices: []
};

export function BookingPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [reference] = useState(
    () => `NT-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
  );

  if (!service) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-3xl font-extrabold text-brand-black">
          Service not found
        </h1>
        <p className="mt-4 text-gray-600">
          We couldn't find that service to book. Please pick one from the
          list.
        </p>
        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-black px-6 py-3.5 font-bold text-white transition hover:bg-brand-amber">

          <ArrowLeftIcon size={16} />
          Back to all services
        </Link>
      </section>);

  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleExtra(extraSlug: string) {
    setForm((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(extraSlug) ?
      prev.additionalServices.filter((item) => item !== extraSlug) :
      [...prev.additionalServices, extraSlug]
    }));
  }

  function goToStep(next: number) {
    setStep(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleStepSubmit(event: React.FormEvent) {
    event.preventDefault();
    goToStep(Math.min(step + 1, stepLabels.length));
  }

  function handleConfirm() {
    setConfirmed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const otherServices = services.filter((item) => item.slug !== service.slug);
  const selectedExtras = otherServices.filter((item) => form.additionalServices.includes(item.slug));
  const extrasTotal = selectedExtras.reduce((sum, item) => sum + item.price, 0);
  const surcharge = form.location === 'mobile' ? MOBILE_SURCHARGE : 0;
  const total = service.price + extrasTotal + surcharge;

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
            <h1 className="mt-6 font-display text-3xl font-extrabold text-brand-black">
              Booking confirmed!
            </h1>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-lemon">
              Reference {reference}
            </p>
            <p className="mt-4 text-gray-600">
              Thanks {form.name.split(' ')[0] || 'there'} — we've reserved
              your slot. A confirmation has been sent to {form.email}.
            </p>

            <div className="mt-8 space-y-3 rounded-2xl border border-gray-100 bg-gray-50 p-5 text-left text-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-500">Service</span>
                <span className="font-extrabold text-brand-black">{service.title}</span>
              </div>
              {selectedExtras.length > 0 &&
              <div className="flex items-start justify-between">
                  <span className="font-bold text-gray-500">Extras</span>
                  <span className="text-right font-extrabold text-brand-black">
                    {selectedExtras.map((item) => item.title).join(', ')}
                  </span>
                </div>
              }
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-500">Vehicle</span>
                <span className="font-extrabold text-brand-black">
                  {form.year} {form.brand} {form.model} ({form.reg.toUpperCase()})
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-500">Location</span>
                <span className="font-extrabold text-brand-black capitalize">
                  {form.location === 'garage' ? 'In garage' : 'Mobile service'}
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
                <span className="text-lg font-extrabold text-brand-black">£{total}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to={`/services/${service.slug}`}
                className="rounded-xl border-2 border-gray-200 px-6 py-3.5 font-bold text-brand-black transition hover:border-brand-yellow">

                Back to service
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
    <section className="bg-brand-cream py-14 sm:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-600 transition hover:text-brand-black">

          <ArrowLeftIcon size={16} />
          {service.title}
        </Link>

        <h1 className="mt-4 font-display text-3xl font-extrabold capitalize text-brand-black sm:text-4xl">
          Book {service.title}
        </h1>

        {/* Stepper */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-1">
          {stepLabels.map((label, index) => {
            const number = index + 1;
            const isActive = number === step;
            const isDone = number < step;
            return (
              <div key={label} className="flex shrink-0 items-center gap-2">
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-extrabold ${
                  isDone ?
                  'bg-brand-black text-white' :
                  isActive ?
                  'bg-brand-yellow text-brand-black' :
                  'bg-white text-gray-400'}`
                  }>

                  {isDone ? <CheckCircle2Icon size={14} /> : number}
                </span>
                <span className={`text-xs font-bold ${isActive ? 'text-brand-black' : 'text-gray-400'}`}>
                  {label}
                </span>
                {number < stepLabels.length &&
                <span className="mx-1 h-px w-4 shrink-0 bg-gray-300" />
                }
              </div>);

          })}
        </div>

        <div className="mt-6 rounded-3xl bg-white p-6 shadow-lg sm:p-8">
          {step === 1 &&
          <form onSubmit={handleStepSubmit}>
              <div className="mb-6 flex items-center gap-2 text-brand-black">
                <CarFrontIcon size={20} className="text-brand-lemon" />
                <h2 className="font-extrabold">Vehicle details</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold text-gray-600">Vehicle type</span>
                  <select
                  required
                  value={form.vehicleType}
                  onChange={(event) => update('vehicleType', event.target.value)}
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-3 font-bold focus:border-brand-lemon focus:outline-none">

                    <option value="" disabled>Select vehicle type</option>
                    {vehicleTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold text-gray-600">Brand</span>
                  <input
                  required
                  value={form.brand}
                  onChange={(event) => update('brand', event.target.value)}
                  placeholder="e.g. Ford"
                  className="h-12 w-full rounded-xl border border-gray-200 px-3 font-bold focus:border-brand-lemon focus:outline-none" />

                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold text-gray-600">Model</span>
                  <input
                  required
                  value={form.model}
                  onChange={(event) => update('model', event.target.value)}
                  placeholder="e.g. Focus"
                  className="h-12 w-full rounded-xl border border-gray-200 px-3 font-bold focus:border-brand-lemon focus:outline-none" />

                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold text-gray-600">Year</span>
                  <select
                  required
                  value={form.year}
                  onChange={(event) => update('year', event.target.value)}
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-3 font-bold focus:border-brand-lemon focus:outline-none">

                    <option value="" disabled>Select year</option>
                    {years.map((year) => <option key={year} value={year}>{year}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold text-gray-600">Registration number</span>
                  <input
                  required
                  value={form.reg}
                  onChange={(event) => update('reg', event.target.value.toUpperCase())}
                  placeholder="e.g. AB12 CDE"
                  className="h-12 w-full rounded-xl border border-gray-200 px-3 font-mono font-bold uppercase tracking-widest focus:border-brand-lemon focus:outline-none" />

                </label>
              </div>
              <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-black py-3.5 font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-amber">

                Continue
                <ArrowRightIcon size={16} />
              </button>
            </form>
          }

          {step === 2 &&
          <div>
              <div className="mb-2 flex items-center gap-2 text-brand-black">
                <PlusCircleIcon size={20} className="text-brand-lemon" />
                <h2 className="font-extrabold">Any additional services?</h2>
              </div>
              <p className="mb-5 text-sm text-gray-500">
                While we're working on your {service.title.toLowerCase()}, would you like us to take care of anything else?
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {otherServices.map((extra) => {
                  const ExtraIcon = extra.icon;
                  const isSelected = form.additionalServices.includes(extra.slug);
                  return (
                    <button
                      key={extra.slug}
                      type="button"
                      onClick={() => toggleExtra(extra.slug)}
                      aria-pressed={isSelected}
                      className={`flex items-center gap-3 rounded-xl border-2 p-3 text-left transition ${
                      isSelected ?
                      'border-brand-yellow bg-brand-yellow/10' :
                      'border-gray-200 hover:border-brand-light-gold'}`
                      }>

                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-black text-white">
                        <ExtraIcon size={18} strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-extrabold capitalize text-brand-black">{extra.title}</span>
                        <span className="block text-xs font-bold text-gray-500">+£{extra.price}</span>
                      </span>
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${
                        isSelected ? 'border-brand-yellow bg-brand-yellow' : 'border-gray-300'}`
                        }>

                        {isSelected && <CheckCircle2Icon size={13} className="text-brand-black" />}
                      </span>
                    </button>);

                })}
              </div>

              <p className="mt-4 text-xs text-gray-500">
                {form.additionalServices.length > 0 ?
                `${form.additionalServices.length} extra service${form.additionalServices.length === 1 ? '' : 's'} added — no problem, skip this step if you'd rather not.` :
                "No extras selected — that's fine, you can always add these another time."}
              </p>

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
                <MapPinIcon size={20} className="text-brand-lemon" />
                <h2 className="font-extrabold">Where and when</h2>
              </div>

              <span className="mb-2 block text-xs font-bold text-gray-600">Where should we do it?</span>
              <div className="grid grid-cols-2 gap-3">
                <button
                type="button"
                onClick={() => update('location', 'garage')}
                className={`rounded-xl border-2 px-4 py-3 text-sm font-extrabold transition ${
                form.location === 'garage' ?
                'border-brand-yellow bg-brand-yellow text-brand-black' :
                'border-gray-200 text-gray-500 hover:border-brand-light-gold'}`
                }>

                  In garage
                </button>
                <button
                type="button"
                onClick={() => update('location', 'mobile')}
                className={`rounded-xl border-2 px-4 py-3 text-sm font-extrabold transition ${
                form.location === 'mobile' ?
                'border-brand-yellow bg-brand-yellow text-brand-black' :
                'border-gray-200 text-gray-500 hover:border-brand-light-gold'}`
                }>

                  Mobile service (+£{MOBILE_SURCHARGE})
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

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold text-gray-600">Date</span>
                  <input
                  required
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={form.date}
                  onChange={(event) => update('date', event.target.value)}
                  className="h-12 w-full rounded-xl border border-gray-200 px-3 font-bold focus:border-brand-lemon focus:outline-none" />

                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold text-gray-600">Time</span>
                  <select
                  required
                  value={form.time}
                  onChange={(event) => update('time', event.target.value)}
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-3 font-bold focus:border-brand-lemon focus:outline-none">

                    <option value="" disabled>Select a time</option>
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
          <div>
              <div className="mb-6 flex items-center gap-2 text-brand-black">
                <CalendarCheckIcon size={20} className="text-brand-lemon" />
                <h2 className="font-extrabold">Pricing summary</h2>
              </div>

              <div className="space-y-3 rounded-2xl border border-gray-100 bg-gray-50 p-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-600">{service.title}</span>
                  <span className="font-extrabold text-brand-black">£{service.price}</span>
                </div>
                {selectedExtras.map((extra) =>
                <div key={extra.slug} className="flex items-center justify-between">
                    <span className="font-bold text-gray-600 capitalize">{extra.title}</span>
                    <span className="font-extrabold text-brand-black">£{extra.price}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-600">
                    {form.location === 'garage' ? 'In-garage fitting' : 'Mobile call-out'}
                  </span>
                  <span className="font-extrabold text-brand-black">
                    {surcharge > 0 ? `£${surcharge}` : 'Included'}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                  <span className="font-bold text-gray-600">Total due</span>
                  <span className="text-lg font-extrabold text-brand-black">£{total}</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Final price may vary slightly if further work is identified
                during inspection — we'll always confirm with you first.
              </p>

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

          {step === 5 &&
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

          {step === 6 &&
          <div>
              <div className="mb-6 flex items-center gap-2 text-brand-black">
                <CreditCardIcon size={20} className="text-brand-lemon" />
                <h2 className="font-extrabold">Payment</h2>
              </div>

              <span className="mb-2 block text-xs font-bold text-gray-600">How would you like to pay?</span>
              <div className="grid grid-cols-2 gap-3">
                <button
                type="button"
                onClick={() => update('payment', 'day')}
                className={`rounded-xl border-2 px-4 py-3 text-sm font-extrabold transition ${
                form.payment === 'day' ?
                'border-brand-yellow bg-brand-yellow text-brand-black' :
                'border-gray-200 text-gray-500 hover:border-brand-light-gold'}`
                }>

                  Pay on the day
                </button>
                <button
                type="button"
                onClick={() => update('payment', 'online')}
                className={`rounded-xl border-2 px-4 py-3 text-sm font-extrabold transition ${
                form.payment === 'online' ?
                'border-brand-yellow bg-brand-yellow text-brand-black' :
                'border-gray-200 text-gray-500 hover:border-brand-light-gold'}`
                }>

                  Pay online now
                </button>
              </div>
              {form.payment === 'online' &&
            <p className="mt-3 text-xs text-gray-500">
                  You'll be taken to our secure payment partner once you
                  confirm this booking.
                </p>
            }

              {/* Booking details review */}
              <div className="mt-6 space-y-2 rounded-2xl border border-gray-100 bg-gray-50 p-5 text-sm">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">Booking details</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Service</span>
                  <span className="font-bold text-brand-black">{service.title}</span>
                </div>
                {selectedExtras.length > 0 &&
                <div className="flex items-start justify-between">
                    <span className="text-gray-500">Extras</span>
                    <span className="text-right font-bold text-brand-black">
                      {selectedExtras.map((item) => item.title).join(', ')}
                    </span>
                  </div>
                }
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Vehicle</span>
                  <span className="font-bold text-brand-black">
                    {form.year} {form.brand} {form.model} ({form.reg})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Location</span>
                  <span className="font-bold text-brand-black">
                    {form.location === 'garage' ? 'In garage' : `Mobile · ${form.address}`}
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
                  <span className="text-base font-extrabold text-brand-black">£{total}</span>
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

                  Confirm booking
                  <CheckCircle2Icon size={16} />
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>);

}
