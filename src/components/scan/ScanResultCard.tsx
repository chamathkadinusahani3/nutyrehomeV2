import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircle2Icon, RotateCcwIcon } from 'lucide-react';
import { formatTyreSize } from '../../types/vehicle';
import type { TyreScanResult } from '../../types/tyreScan';

type ScanResultCardProps = {
  result: TyreScanResult;
  onFindTyres: () => void;
  onRescan: () => void;
};

export function ScanResultCard({ result, onFindTyres, onRescan }: ScanResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      role="status"
      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">

      <div className="flex flex-wrap items-center gap-2">
        <CheckCircle2Icon size={19} className="text-emerald-500" />
        <span className="font-extrabold text-brand-black">Scan complete</span>
        <span className="ml-auto rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
          Demo result
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400">Vehicle</p>
          <p className="mt-0.5 font-display text-lg font-extrabold text-brand-black">
            {result.vehicle.make} {result.vehicle.model}
          </p>
          {result.vehicle.generation &&
          <p className="text-sm text-gray-500">{result.vehicle.generation}</p>
          }
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400">Tyre size</p>
          <p className="mt-0.5 font-mono text-lg font-extrabold text-brand-black">
            {formatTyreSize(result.tyre)}
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400">Brand</p>
          <p className="mt-0.5 font-semibold text-brand-black">
            {result.tyre.brand ?? '—'} {result.tyre.model ?? ''}
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400">Confidence</p>
          <p className="mt-0.5 font-semibold text-brand-black">{result.confidencePercent}%</p>
        </div>
      </div>

      <p className="mt-5 rounded-xl bg-brand-cream p-3 text-xs leading-relaxed text-gray-600">
        This is a sample result from our scan demo — Smart Tyre Scan's camera
        recognition is still in development. Always confirm the size printed
        on your tyre sidewall before ordering.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onFindTyres}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-brand-black px-5 text-sm font-extrabold text-white transition hover:bg-brand-amber sm:flex-none">

          Find matching tyres
          <ArrowRightIcon size={16} />
        </button>
        <button
          type="button"
          onClick={onRescan}
          className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-gray-200 px-5 text-sm font-bold text-gray-600 transition hover:border-brand-yellow hover:text-brand-black">

          <RotateCcwIcon size={15} />
          Scan again
        </button>
      </div>
    </motion.div>);

}
