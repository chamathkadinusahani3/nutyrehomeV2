import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';

const markers = [
{ code: '205', meaning: 'Width', detail: 'The tyre width in millimetres.' },
{ code: '55', meaning: 'Profile', detail: 'Sidewall height as a % of the width.' },
{ code: 'R', meaning: 'Construction', detail: 'Radial construction (almost all modern tyres).' },
{ code: '16', meaning: 'Rim diameter', detail: 'The wheel size in inches.' },
{ code: '91', meaning: 'Load index', detail: 'Maximum weight the tyre can carry.' },
{ code: 'V', meaning: 'Speed rating', detail: 'Maximum safe speed for the tyre.' }];

export function TyreSizeHelpModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    function handleKey(event) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="tyre-size-help-title"
        className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>

          <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true" />

          <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8">

            <div className="flex items-start justify-between">
              <h2 id="tyre-size-help-title" className="font-display text-xl font-extrabold text-brand-black">
                How to find your tyre size
              </h2>
              <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-brand-black">

                <XIcon size={18} />
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Your tyre size is printed on the sidewall of your tyre — the
              side facing outwards. It looks something like this:
            </p>

            <div className="mt-5 rounded-2xl bg-brand-cream p-5 text-center">
              <p className="font-mono text-2xl font-extrabold tracking-wider text-brand-black sm:text-3xl">
                205/55 R16 91V
              </p>
            </div>

            <ul className="mt-5 space-y-3">
              {markers.map((marker) =>
            <li key={marker.meaning} className="flex items-center gap-3">
                  <span className="grid h-9 w-14 shrink-0 place-items-center rounded-lg bg-brand-black font-mono text-sm font-extrabold text-brand-yellow">
                    {marker.code}
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-brand-black">{marker.meaning}</p>
                    <p className="text-xs text-gray-500">{marker.detail}</p>
                  </div>
                </li>
            )}
            </ul>

            <p className="mt-6 text-xs leading-relaxed text-gray-500">
              We'd always recommend double-checking the size printed on your
              current tyre before ordering, as some vehicles support more
              than one approved size.
            </p>

            <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full rounded-xl bg-brand-black py-3.5 font-extrabold text-white transition hover:bg-brand-amber">

              Got it
            </button>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}
