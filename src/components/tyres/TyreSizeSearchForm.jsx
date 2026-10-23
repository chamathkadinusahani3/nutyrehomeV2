import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from 'lucide-react';
import { getProfileOptions, getRimOptions, getWidthOptions } from '../../data/tyreSizeOptions';
import { tyreSizeToSlug } from '../../types/vehicle';
import { TyreSizeHelpModal } from './TyreSizeHelpModal';
import { FittingTypeToggle } from './FittingTypeToggle';

const widthOptions = getWidthOptions();

export function TyreSizeSearchForm({
  initialPostcode = '',
  initialFitting = 'fitted'
}) {
  const navigate = useNavigate();
  const [width, setWidth] = useState('');
  const [profile, setProfile] = useState('');
  const [rim, setRim] = useState('');
  const [postcode, setPostcode] = useState(initialPostcode);
  const [fitting, setFitting] = useState(initialFitting);
  const [helpOpen, setHelpOpen] = useState(false);

  const profileOptions = getProfileOptions(width ? Number(width) : null);
  const rimOptions = getRimOptions(width ? Number(width) : null, profile ? Number(profile) : null);

  function handleSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams({ fitting });
    if (postcode.trim()) params.set('postcode', postcode.trim());
    navigate(`/tyres/${tyreSizeToSlug({ width, profile, rim })}?${params.toString()}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <label>
            <span className="mb-2 block text-xs font-bold text-gray-600">Width</span>
            <select
              required
              name="width"
              value={width}
              onChange={(event) => {
                setWidth(event.target.value);
                setProfile('');
                setRim('');
              }}
              className="h-14 w-full rounded-xl border border-gray-200 bg-white px-3 text-center font-bold text-gray-400 focus:border-brand-lemon focus:outline-none valid:text-brand-black">

              <option value="" disabled>e.g. 205</option>
              {widthOptions.map((option) =>
              <option key={option} value={option}>{option}</option>
              )}
            </select>
          </label>
          <label>
            <span className="mb-2 block text-xs font-bold text-gray-600">Profile</span>
            <select
              required
              name="profile"
              value={profile}
              disabled={!width}
              onChange={(event) => {
                setProfile(event.target.value);
                setRim('');
              }}
              className="h-14 w-full rounded-xl border border-gray-200 bg-white px-3 text-center font-bold text-gray-400 focus:border-brand-lemon focus:outline-none valid:text-brand-black disabled:cursor-not-allowed disabled:opacity-50">

              <option value="" disabled>e.g. 55</option>
              {profileOptions.map((option) =>
              <option key={option} value={option}>{option}</option>
              )}
            </select>
          </label>
          <label>
            <span className="mb-2 block text-xs font-bold text-gray-600">Rim</span>
            <select
              required
              name="rim"
              value={rim}
              disabled={!profile}
              onChange={(event) => setRim(event.target.value)}
              className="h-14 w-full rounded-xl border border-gray-200 bg-white px-3 text-center font-bold text-gray-400 focus:border-brand-lemon focus:outline-none valid:text-brand-black disabled:cursor-not-allowed disabled:opacity-50">

              <option value="" disabled>e.g. 16</option>
              {rimOptions.map((option) =>
              <option key={option} value={option}>{option}</option>
              )}
            </select>
          </label>
          <label>
            <span className="mb-2 block text-xs font-bold text-gray-600">Postcode</span>
            <input
              required
              name="postcode"
              value={postcode}
              onChange={(event) => setPostcode(event.target.value)}
              placeholder="e.g. AL1 1AA"
              className="h-14 w-full rounded-xl border border-gray-200 px-4 text-center font-bold uppercase focus:border-brand-lemon focus:outline-none" />

          </label>
        </div>

        <div className="mt-4">
          <FittingTypeToggle value={fitting} onChange={setFitting} />
        </div>

        <button
          type="button"
          onClick={() => setHelpOpen(true)}
          className="mt-3 text-xs font-bold text-brand-black underline underline-offset-2 decoration-brand-yellow decoration-2">

          Not sure about your tyre size? How to find your tyre size
        </button>

        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100">
          <img
            src="/tyreref.png"
            alt="Where to find your tyre size: width, profile and rim numbers are printed on the tyre sidewall"
            className="h-auto w-full object-cover" />

          <p className="bg-brand-cream px-4 py-2.5 text-center text-xs font-bold text-brand-black">
            Not sure of your size? It's printed on your tyre's sidewall.
          </p>
        </div>

        <button
          type="submit"
          className="mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-brand-black text-base font-extrabold text-white transition hover:bg-brand-amber focus:outline-none focus:ring-4 focus:ring-brand-yellow/40">

          <SearchIcon size={19} />
          Search tyres
        </button>
      </form>

      <TyreSizeHelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </>);

}
