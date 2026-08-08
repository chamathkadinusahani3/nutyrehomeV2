import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarFrontIcon, Loader2Icon, SearchIcon } from 'lucide-react';
import { isValidUkRegistration, normalizeRegistration } from '../../types/vehicle';
import { FittingTypeToggle } from './FittingTypeToggle';
import type { FittingType } from './FittingTypeToggle';

export function RegistrationSearchForm() {
  const navigate = useNavigate();
  const [reg, setReg] = useState('');
  const [postcode, setPostcode] = useState('');
  const [fitting, setFitting] = useState<FittingType>('fitted');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!isValidUkRegistration(reg)) {
      setError("That doesn't look like a valid UK registration — please check and try again.");
      return;
    }

    setError(null);
    setLoading(true);
    const normalizedReg = normalizeRegistration(reg);
    const params = new URLSearchParams({ reg: normalizedReg, fitting });
    if (postcode.trim()) params.set('postcode', postcode.trim());

    window.setTimeout(() => {
      navigate(`/tyres/find?${params.toString()}`);
    }, 150);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr]">
        <label className="block">
          <span className="mb-2 block text-xs font-bold text-gray-600">
            Vehicle registration
          </span>
          <div
            className={`flex h-14 w-full overflow-hidden rounded-xl border-2 focus-within:ring-4 ${
            error ? 'border-red-400 focus-within:ring-red-100' : 'border-brand-yellow focus-within:ring-brand-yellow/25'}`
            }>

            <span className="flex shrink-0 items-center gap-1.5 bg-brand-yellow px-3">
              <CarFrontIcon size={18} className="text-brand-black" />
              <img src="/gb.png" alt="" aria-hidden="true" className="h-4 w-4 rounded-full object-cover" />
              <span className="text-sm font-extrabold text-brand-black">GB</span>
            </span>
            <input
              required
              name="reg"
              value={reg}
              onChange={(event) => {
                setReg(event.target.value.toUpperCase());
                if (error) setError(null);
              }}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'reg-error' : undefined}
              placeholder="ENTER REG"
              className="h-full w-full min-w-0 bg-white px-4 font-mono text-xl font-extrabold uppercase tracking-widest text-brand-black placeholder:text-gray-400 focus:outline-none" />

          </div>
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold text-gray-600">
            Your postcode
          </span>
          <input
            required
            name="postcode"
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
            placeholder="e.g. AL1 1AA"
            className="h-14 w-full rounded-xl border border-gray-200 px-4 font-bold uppercase focus:border-brand-lemon focus:outline-none focus:ring-4 focus:ring-brand-yellow/20" />

        </label>
      </div>

      {error &&
      <p id="reg-error" role="alert" className="mt-2 text-sm font-semibold text-red-600">
          {error}
        </p>
      }

      <div className="mt-4">
        <FittingTypeToggle value={fitting} onChange={setFitting} />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-5 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-brand-black text-base font-extrabold text-white transition hover:bg-brand-amber focus:outline-none focus:ring-4 focus:ring-brand-yellow/40 disabled:cursor-not-allowed disabled:opacity-70">

        {loading ?
        <>
            <Loader2Icon size={19} className="animate-spin" />
            Searching…
          </> :

        <>
            <SearchIcon size={19} />
            Search tyres
          </>
        }
      </button>
    </form>);

}
