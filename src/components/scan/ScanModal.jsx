import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { TyreScanner } from './TyreScanner';

export function ScanModal({ open, onClose }) {
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
        aria-labelledby="tyre-scan-modal-title"
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
          className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8">

            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-brand-black">
                  New
                </span>
                <h2 id="tyre-scan-modal-title" className="mt-2 font-display text-xl font-extrabold text-brand-black">
                  Smart Tyre Scan
                </h2>
              </div>
              <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-brand-black">

                <XIcon size={18} />
              </button>
            </div>

            <div className="mt-5">
              <TyreScanner variant="full" />
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}
